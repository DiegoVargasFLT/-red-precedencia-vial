# Estado del proyecto — Panel de precedencias viales

_Última actualización: 2026-07-10_

## Tanda UI/UX 2026-07-10 — 9/12 tareas (commits 9d17b48, 70b608b, e046bd7)
Layout del diagrama: clic en nodo de área lo PLIEGA (`areaCollapsed`,
`toggleAreaCollapse`); tarjetas más angostas `NW` 216→190 con ALTURA DINÁMICA por
texto (`titleLines`/`baseH` en `hOf`, nunca corta); centrado vertical `LP_T/LP_B`
16/16; `NH` 78→62; espaciado `CG` 110→60, `SG` 14→7; `MM_W` cap 206. Form: "Grupos
involucrados" lee `this.grupos()` con fallback a áreas (`groupsInvolvedOf`,
`toggleGrupoInvolucrado`, chip por grupo); deps/sucesoras marcadas primero
(`byCheckedThenArea`). Auditoría: RLS se deja ABIERTA (decisión usuario); Supabase
óptimo (doc de schema.sql corregido). PENDIENTE (diseño): #8 UX, #9 sidebar, #12
dashboard más dinámico. Detalle completo en la memoria RAÍZ `F_FLujo/.context/`.
**⚠️ Hay DOS `.context` (esta git-trackeada + la raíz canónica de CLAUDE.md) — están
divergentes; conviene consolidar en una sola.**

## Qué es
App estática (`index.html`, React vía dc-runtime, sin build) que dibuja un
diagrama de precedencias entre actividades de un proyecto vial, agrupadas
por área (carriles horizontales) y por fase/columna (Preconstrucción →
Construcción → Entrega a Beneficiarios → Liquidación). Persistencia en
Supabase + localStorage (ver `README.md`).

## Panel de área/grupo — los nodos del mini-mapa se comportan como tarjetas (commit `61dec11`)
El usuario pidió que "los botones de grupos y áreas sean iguales a los de
las tareas". Ahora clic en un nodo del mini-mapa abre un PANEL LATERAL
(modo `mode:'ag'`, estado `mmSel:{kind,name}`, plantilla `sidebarAG`, VMs en
`ag`), igual que seleccionar una actividad:
- ÁREA: nombre, grupo al que pertenece, lista de sus actividades (clicables),
  botón "+ AGREGAR ACTIVIDAD AQUÍ" (`addNodeInArea` → crea nodo con esa área
  y abre su form), Renombrar, Eliminar.
- GRUPO: nombre, lista de sus áreas (clicables → entran al área), lista de
  todas sus actividades, Renombrar, Color, Eliminar.
- El pliegue ▸/▾ sigue siendo el botón APARTE dentro del nodo (`onToggle`);
  el clic en el CUERPO del nodo es `selectAG` (no renombra/oculta directo).
- Nodo seleccionado = `outline` (como una card). `onCanvasClick` limpia
  `mmSel`.
Robustez: `renameArea`/`deleteArea` ahora también actualizan/limpian las
referencias del área en `grupos` — antes quedaban áreas fantasma (causa raíz
de que los grupos se "desordenaran" al editar). Esto era el problema de
fondo que el usuario reportó.

**Nota sobre "asignar tarea a un área":** una actividad pertenece a un área
por su campo `n.area` (string). Reasignar el área de una actividad SÍ la mueve
a ese carril. Las SUBACTIVIDADES (`n.parent`) se dibujan como rama de su padre
sin importar su `area` — eso confundió al usuario (creía que reasignar el área
de una subactividad no funcionaba; en realidad funciona a nivel de dato pero
visualmente cuelga del padre).

## Carriles de área vacíos se compactan (commit `a0f0bd2`)
El "espacio vacío de arriba" que reportó el usuario eran carriles de área sin
actividades de nivel superior ocupando ~142px. Fix:
- `areaHasTop(a)`: ¿el área tiene nodos con `parent==null`? (los que ocupan
  carril; las subactividades cuelgan de su padre en otro carril).
- El carril del área homónima de un grupo (p. ej. "IDU") solo se crea si el
  grupo está COLAPSADO o esa área tiene actividades propias (si expandido +
  vacío, el nodo del grupo se centra en sus hijos y no necesita carril).
- Cualquier área sin actividades de nivel superior usa `EMPTY_LANE_H=46px`
  (compacto, lo justo para su nodo del mini-mapa) en vez del alto completo.
- `laneCenterY`/`laneBottomY` leen `laneCYmap`/`laneHmap` (alto real por
  carril, compacto o completo).

## Datos: estructura EyD agregada (2026-07-10)
A pedido del usuario (imagen de referencia), se agregaron 15 actividades al
área EyD (fase Entrega a Beneficiarios) directo en Supabase: entidades EAAB,
SDM, ESP (subs VANTI/ETB/ENRC/UAESP), Ambiental (subs SDA/CAR/ICANH/JBB) →
convergen (dependencia) en "Recibido. IDU" → "No objeciones integrales
productos EyD" → "Incorporación al DTINI". IDs EYD-01..EYD-15.

## Datos: estructura Predial agregada (2026-07-10)
Bajo la actividad existente "Infraestructura" (IDU-03, área Predial) se
agregaron 18 subactividades (IDs PRD-01..PRD-18): Infraestructura → "IDU" →
[Aportado FLT (7 items: Acta Restitución Contratista, Comunicación
Solicitando Reparto, Minutas, Paz y Salvo Predial, Firma Escritura Notaría,
Pago Notariado y Registro, FMI), Adquirido IDU (2), Predios DADEP (2), No
Adquiridos (2)]. Todas heredan área Predial / fase Beneficiarios.

## Regla: subactividad hereda el área de su padre + líneas área→actividad (commit `8b2536d`)
- **Datos:** el usuario pidió que toda subactividad tenga el área de la
  actividad que la contiene. Se corrigieron en Supabase 12 nodos con área
  incorrecta ("IDU"): 11 subs de Componente Técnico (IDU-02-CT-*) → área
  "Componente Técnico", y IDU-02-CL-D → "Juridico". Regla aplicada:
  `subactividad.area = area del padre inmediato` (top-down). Si vuelve a
  pasar, propagar así. (Tras el fix, área "IDU" quedó con 0 nodos — es solo
  el nombre del grupo/subgrupo, no un área con actividades propias.)
- **UI (`areaActEls` en `renderVals`):** líneas conectoras curvas desde el
  nodo de cada área (mini-mapa) hacia cada actividad de nivel superior de esa
  área (p. ej. EyD → EAAB/SDM/ESP/Ambiental). Se calculan tras `placeSub`
  usando `mmPos['a:'+area]` y `pos[id]`, y se agregan a `edgesSvg`.

## Sesión UI 2026-07-10 (commit `d80e34c`)
Tres ajustes de interfaz:
- El mini-mapa de grupos/áreas dejó de ser `position:sticky` → ahora se
  desplaza con el lienzo (antes quedaba fijo y se sobreponía a las tarjetas
  al hacer scroll horizontal).
- `MM_W` (ancho de nodo del mini-mapa) se calcula según la etiqueta más
  larga para que el texto quepa completo, acotado a [112, 230].
- Clic en el ícono del ave (arriba-izq de la barra lateral) oculta la barra
  lateral; queda un ícono flotante del ave (`floatBirdDisplay`) para
  reabrirla. Estado `sidebarHidden`, método `toggleSidebar`.

## Layout "rama a la derecha" (actividades)
Al expandir una actividad principal con subactividades, estas no se apilan
debajo — se despliegan hacia la DERECHA de la principal, centradas
verticalmente contra el bloque de sus hijas (recursivo, N niveles). La
principal expandida CONSERVA su tamaño de tarjeta normal (no se compacta a
un título delgado — esto se pidió explícitamente; ver "qué NO hacer" abajo).

- `branchH(id)` / `placeSub(id, x, yTop)`: alto y posición absoluta de cada
  nodo y su subárbol expandido.
- `pos[id]` guarda `{x, y, w, h}` de cada nodo visible.
- `colX[]`: posiciones x de columna de FASE calculadas dinámicamente (no
  fijas), empujadas hacia la derecha según la profundidad máxima de rama
  (`extraDepth`) de la columna anterior — evita que una rama ancha quede
  dibujada encima de nodos de la fase siguiente.

## Mini-mapa de grupos de área (Construcción/IDU/Jurídico/…)
El proyecto "Cierre de Proyectos" tiene `state.grupos` (macro-áreas, con
subgrupos anidados) cargado en sus datos: Construcción (áreas EAAB, SDM +
subgrupo IDU con áreas IDU/EyD/Entidades de servicios/Ambiental/Social);
más Jurídico, Financiero, Predial como grupos de nivel superior sueltos.

**Cómo se muestra (versión final, aceptada):** un mini-mapa de NODOS
conectados por curvas bézier, en el margen izquierdo del diagrama — mismo
lenguaje visual que las ramas de actividades (no botones/pestañas/chips).
Clic en un nodo-grupo pliega/despliega sus hijos. Si el nombre de un grupo
coincide con una de sus áreas (p. ej. grupo "IDU" ↔ área "IDU", "Predial" ↔
"Predial"), esa área se fusiona en el propio nodo del grupo en vez de
dibujarse como hija aparte — así Jurídico/Predial quedan como un solo nodo.

Piezas clave en `renderVals()` (estado ACTUAL, tras el fix de conexión del
commit `a9208bc` — ver "Qué NO hacer" para las versiones descartadas):
- `gsAll`, `isGroupOpen(name)` (estado `state.groupOpen`; ausente/true =
  abierto por defecto, solo `false` explícito pliega).
- `normName`, `selfAreaOf(g)`, `kidsOfGroup(g)`: helpers de fusión
  grupo↔área y de listar hijos (subgrupos + áreas propias).
- `mmMaxDepth` calculado ANTES de fijar `LEFT` (inicio de la primera
  columna de fase) — `LEFT` se ensancha si el mini-mapa abierto lo
  necesita, para que nunca quede una tarjeta debajo de un nodo del mapa.
- `placeMM(spec, x)` + `laneCenterY(a)`: cada nodo HOJA (área) se ancla al
  CENTRO VERTICAL de su carril real (`laneY[a] + LP_T + laneMax[a]/2`), así
  el nodo del área queda a la misma altura que sus actividades a la derecha
  y el esquema queda "conectado". Los nodos-GRUPO se centran contra sus
  hijos (min/max de sus cy). CLAVE para que sea estable a la vez: los
  carriles (`lanes`) se apilan EN EL MISMO ORDEN en que `placeMM` recorre
  el árbol (porque `collectVisibleAreas` hace el mismo DFS de `mmRoots`),
  así que las alturas de carril crecen de forma monótona en ese recorrido
  y la Y de cada nodo depende solo de su propio carril / sus hijos — no del
  alto total del lienzo. Una hoja SIN carril (grupo vacío como "Financiero"
  0 áreas, o grupo colapsado sin área homónima) fluye en orden con un
  cursor `mmFlowY`. IMPORTANTE (commit `b17ffce`): `mmFlowY` salta hasta el
  FONDO del carril anclado (`laneBottomY = laneY + LP_T + laneMax + LP_B`),
  NO solo su centro — si no, una hoja sin carril caía DENTRO del carril
  anterior (bug: "Financiero se metía en Jurídico"). Vale igual al colapsar
  un grupo sin área propia.
- `mmNodes`/`mmPaths` se renderizan en el `<div style="position:sticky">`
  del margen izquierdo; `canvasH` se reasigna a `mmH` (`let`, no `const`)
  para que el lienzo scrollable sea al menos tan alto como el mini-mapa.
- Líneas divisorias de carril (`lanes` template): arrancan en `left:{{l.x}}`
  = `LEFT` (inicio de las columnas de fase), con `right:0` — así los
  divisores horizontales SOLO se ven sobre Beneficiarios/Liquidación, no
  cruzando el esquema de grupos/áreas de la izquierda (pedido del usuario,
  commit `b17ffce`).
- Clic en el CUERPO del nodo edita: `renameGrupo` (grupo) o toggle de
  `hidden` (área). El pliegue/despliegue es un botón (▸/▾) APARTE dentro
  del nodo — igual que el badge de subactividades de las tarjetas
  normales, no el mismo click para las dos cosas.
- Crear un grupo: botón "+ GRUPO" junto a "+ ÁREA" en la barra superior
  (`addGrupo()`). No hay panel de gestión aparte para grupos.
- La barra "ÁREAS" de arriba es una fila plana simple de chips (un toggle
  de visibilidad por área) — la jerarquía vive SOLO en el mini-mapa.

**Qué NO hacer (ya se probó y el usuario lo rechazó explícitamente):**
- ❌ Botones/chips anidados y colapsables en la barra ÁREAS arriba del
  diagrama ("pestañas"). Se intentó, el usuario dijo "no me estoy haciendo
  entender" y pidió nodos conectados en su lugar.
- ❌ Filas de "encabezado de grupo" dentro de los carriles del diagrama
  (una fila más que empuja las demás hacia abajo). También rechazado por
  ser "pestañas".
- ❌ Compactar una actividad principal a un título delgado (30px) al
  expandirla. El usuario quiere que mantenga su tamaño completo de tarjeta.
- ❌ Anclar hojas a `laneCenterY` con un `mmFallbackY` que arrancaba
  DESPUÉS de todos los carriles (`yCur + 20`). Un grupo cerrado sin área
  propia caía en una posición que dependía del alto TOTAL de los carriles,
  que cambia con cualquier plegado no relacionado → saltos. El fix ACTUAL
  también ancla a `laneCenterY` PERO el cursor de respaldo (`mmFlowY`) es
  monótono (avanza junto con las hojas ancladas, en orden de carril), no un
  offset del alto total — por eso ahora sí es estable. La diferencia sutil
  es todo: anclar a carril está BIEN, el problema era SOLO el fallback.
- ❌ Posicionamiento puramente secuencial (empaquetado arriba, empezando en
  y=34, ignorando `laneY`). Era estable pero dejaba el esquema de la
  izquierda "SUELTO": las hojas no quedaban a la altura de sus actividades,
  así que el árbol de grupos no se veía conectado con el diagrama. El
  usuario lo reportó ("el esquema de la izquierda parece estar suelto").
- ❌ Panel "GRUPOS DE ÁREA" dentro de GESTIONAR (con botones renombrar/
  color/estructura/eliminar por fila). El usuario lo encontró "muy
  enrredado" y pidió editar tocando el nodo directamente en su lugar.

## Cómo probar localmente
No hay servidor de dev propio: servir la carpeta con cualquier estático
(`python -m http.server 8000` o `npx serve .`), nunca abrir con `file://`.
Proyecto de prueba con grupos/mini-mapa: **"Cierre de Proyectos"**. Proyecto
sin grupos (para probar el caso "áreas sueltas"): **"Proyecto vial —
actividades"**.

## ⚠️ Este proyecto escribe a un Supabase REAL en vivo
`config.js` tiene credenciales reales (no un sandbox) — la app hace
`setNodes()` → guarda en localStorage Y sube el tablero completo a
Supabase en CADA cambio, sin paso de "guardar" separado. Cualquier clic
automatizado que toque un nodo real (seleccionar → botón ELIMINAR →
`window.confirm()`) puede borrar datos de verdad. El 2026-07-10 esto pasó:
pruebas automatizadas de esta sesión borraron 6 nodos reales del proyecto
"Cierre de Proyectos" (`IDU-02-CJ/CL/CF` y sus `-D`); se detectó comparando
contra `.context/backups/cierre-de-proyectos_20260709_171459.json` y se
restauraron solo esos 6 nodos vía la API REST de Supabase (no un restore
completo, porque el usuario ya había hecho otros cambios reales desde el
backup). **Al probar en el navegador: preferir clics en controles de
UI/toggle (expandir, plegar, chips) y evitar seleccionar tarjetas de
actividades reales cuando sea posible**, o al menos estar alerta a
cualquier diálogo `confirm()` nativo que pueda aparecer.

**Nota:** el usuario usa este proyecto activamente en paralelo — la
estructura exacta de `grupos()`/`areas` de "Cierre de Proyectos" (nombres,
qué está en qué subgrupo) CAMBIA entre sesiones por su propia edición, no
solo por el código. No asumir que "IDU" siempre es subgrupo de
"Construcción" con esas 5 áreas exactas — verificar el estado real
(`fetch` a Supabase o la UI) antes de diagnosticar algo como bug de código.

## Estructura de referencia del proyecto "Cierre de Proyectos" (2026-07-10)
El usuario dio la jerarquía objetivo con un diagrama de referencia; se
reconfiguró `grupos`/`areas` en Supabase para que coincida exactamente
(escrito directo vía API REST tras confirmar con el usuario — no por la UI
de prompts, habría tomado ~15 diálogos):
- **Construcción** → áreas directas EAAB, SDM + subgrupo **IDU** → áreas
  IDU(self), EyD, Componente Técnico, ESP, Ambiental, Social.
- **Predial** (nivel superior, ya no un nodo suelto) → áreas Predial(self),
  Infraestructura, "REDES (Reserva Vial)", "Canal, Quebradas, Humedal",
  EBAR, "Operación 2" — estas 5 son áreas NUEVAS, creadas vacías (0
  actividades), con prefijos INF/RED/CQH/EBA/OP2 respectivamente.
- **Jurídico**, **Financiero**: sin cambios, siguen sueltos.

Si esto vuelve a verse "desordenado" en una sesión futura, lo primero es
comparar `grupos`/`areas` en vivo contra ESTA lista (no asumir que el
código de `renderVals()` está mal) — ver la nota de arriba.

## Pendientes / posibles siguientes pasos
- Ninguno abierto. El mini-mapa de nodos fue la versión que el usuario
  confirmó visualmente como correcta (commit `b703f55`), y la estructura de
  grupos/áreas de "Cierre de Proyectos" ya coincide con su diagrama de
  referencia.
