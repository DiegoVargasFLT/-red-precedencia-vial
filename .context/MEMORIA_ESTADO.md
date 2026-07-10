# Estado del proyecto — Panel de precedencias viales

_Última actualización: 2026-07-10_

## Qué es
App estática (`index.html`, React vía dc-runtime, sin build) que dibuja un
diagrama de precedencias entre actividades de un proyecto vial, agrupadas
por área (carriles horizontales) y por fase/columna (Preconstrucción →
Construcción → Entrega a Beneficiarios → Liquidación). Persistencia en
Supabase + localStorage (ver `README.md`).

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

Piezas clave en `renderVals()` (estado ACTUAL, tras el fix de estabilidad
del commit `4fc9eca` — ver "Qué NO hacer" para las versiones descartadas):
- `gsAll`, `isGroupOpen(name)` (estado `state.groupOpen`; ausente/true =
  abierto por defecto, solo `false` explícito pliega).
- `normName`, `selfAreaOf(g)`, `kidsOfGroup(g)`: helpers de fusión
  grupo↔área y de listar hijos (subgrupos + áreas propias).
- `mmMaxDepth` calculado ANTES de fijar `LEFT` (inicio de la primera
  columna de fase) — `LEFT` se ensancha si el mini-mapa abierto lo
  necesita, para que nunca quede una tarjeta debajo de un nodo del mapa.
- `placeMM(spec, x, yTop)`: posiciona cada nodo con el MISMO algoritmo
  secuencial que `placeSub` usa para las ramas de actividades (alto propio
  vs. alto de hijos, centrado, acumulado en orden, empezando en `yTop`).
  NO depende de `laneY` ni de ningún cálculo de otra rama — por eso un
  nodo nunca "salta" cuando se pliega/despliega algo no relacionado.
- `mmNodes`/`mmPaths` se renderizan en el `<div style="position:sticky">`
  del margen izquierdo; `canvasH` se reasigna a `mmH` (`let`, no `const`)
  para que el lienzo scrollable sea al menos tan alto como el mini-mapa.
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
- ❌ Posicionar los nodos del mini-mapa anclados a `laneY`/`areaCenterY`
  (posición real del carril) con un `mmFallbackY` de respaldo para los que
  no tienen carril propio. Un grupo cerrado sin área propia (p. ej.
  "Construcción" al plegarse) caía en una posición que dependía del alto
  TOTAL de los carriles reales — que cambia con cualquier otro
  plegado/despliegue no relacionado, causando saltos. Reemplazado por el
  algoritmo secuencial tipo `placeSub` (ver arriba).
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

## Pendientes / posibles siguientes pasos
- Ninguno abierto. El mini-mapa de nodos fue la versión que el usuario
  confirmó visualmente como correcta (commit `b703f55`).
