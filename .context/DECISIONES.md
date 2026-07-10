# Decisiones arquitectónicas

## 2026-07-10 — Columnas de fase dinámicas (`colX`) para el layout de ramas
**Contexto:** el layout "rama a la derecha" (subactividades desplegadas a la
derecha de su principal en vez de apiladas debajo) usaba una grilla de
columnas de fase con ancho FIJO (`LEFT + level*(NW+CG)`). Una rama que
necesitaba más de una columna de ancho terminaba solapada visualmente con
nodos reales de la fase siguiente (bug confirmado en el proyecto "Cierre de
Proyectos": `LEG-01` de Liquidación se dibujaba encima de la rama de
`IDU-02`).

**Decisión:** en vez de revertir el layout de ramas o rediseñarlo desde
cero, se mantuvo el enfoque (branch a la derecha) y se hizo el grid de
columnas dinámico: `colX[L]` se calcula acumulando, por cada nivel, el
ancho normal de columna (`NW+CG`) MÁS el espacio extra que necesite la rama
más profunda de la columna anterior (`extraDepth[L-1] * (NW+BRANCH_GAPX)`).
Todos los puntos que antes calculaban `x` a partir de `levels[n.id]`
directamente (posición de nodos de nivel superior, ancho/posición de las
bandas de fase, ancho total del canvas) pasan a usar `colX[]`.

**Por qué no revertir:** el layout de ramas ya estaba casi terminado
(commit sin terminar de la sesión anterior) y es el comportamiento que se
quería (ver historial de commits: chips de áreas, grupos con color, etc. —
tendencia a diagramas más legibles jerárquicamente). El bug era puntual y
localizado a la fórmula de columnas, no al concepto del layout.

**Cómo aplicar en el futuro:** cualquier cambio que toque el ancho de una
tarjeta (`NW`), el espaciado de rama (`BRANCH_GAPX`) o que agregue otro tipo
de expansión lateral, debe revisar `colX[]` en `renderVals()` — es la única
fuente de verdad para "dónde empieza la columna de fase L".

## 2026-07-10 — Eliminar la "tarjeta-título" compacta al expandir
**Contexto:** una principal con hijas, al expandirse, se compactaba a una
barra de 30px (`isExpTitle` → `GH`) para "dejar espacio" a la rama. El
usuario pidió explícitamente que NO se compacte — que mantenga su tamaño de
tarjeta normal (imagen de referencia: las 4 tarjetas hermanas de un branch,
todas del mismo tamaño de tarjeta completa).

**Decisión:** en vez de ajustar el tamaño de la barra compacta, se eliminó
el concepto de "tarjeta-título" para el LAYOUT/RENDER (altura, split
cardNodes/titleNodes, JSX de `groupTitles`, CSS `.group-title`). Se
conservó `isExpTitle` únicamente como predicado interno para el dedup de
líneas de dependencia a nivel de grupo (`collectEdges`/`isFan`) — ese uso
es semánticamente distinto (¿debo dibujar UNA línea a nivel de grupo o
fanear a cada hija?) y no tiene relación con el tamaño visual del nodo.

**Por qué no crear un tercer estilo intermedio:** cualquier variante que
mantuviera un tamaño reducido (aunque mayor a 30px) reintroduciría la
misma queja del usuario en otra escala. La tarjeta expandida ahora es
indistinguible de una colapsada salvo por la marca ▸/▾ — eso es
intencional.

## 2026-07-10 — Barra "ÁREAS" como árbol colapsable (grupo → subgrupo → área)
**Contexto:** la barra superior "ÁREAS" era una fila plana de chips (uno
por área), sin reflejar la jerarquía de `grupos()` (macro-áreas) que el
proyecto "Cierre de Proyectos" ya tenía cargada en sus datos (Construcción
con subgrupo IDU, más Jurídico/Financiero/Predial). El usuario pidió que el
primer nivel de botones fuera Construcción/Jurídico/Financiero/Predial, y
que cada uno despliegue sus áreas al estilo de una imagen de referencia con
llaves anidadas.

**Decisión:** se generó una lista PLANA de chips (no un árbol de datos
anidado) donde cada chip lleva `level` (0/1/2) y `show` ('inline-block' /
'none'), calculado en JS a partir de un nuevo estado UI-only
`state.groupOpen` (qué botones de grupo/subgrupo están desplegados). El
template solo necesitó un `display:{{c.show}}` y un `margin-left:{{c.indent}}px`
sobre el `<sc-for>` de chips que ya existía — no se usó `<sc-for>` anidado.

**Por qué plano y no anidado:** el motor de plantillas de este proyecto
(`dc-runtime`, tags `sc-for`/`sc-if`) no tiene otro ejemplo de `sc-for`
anidado en toda la base de código; replicar ese patrón por primera vez acá
hubiera sido más riesgoso que reusar el truco de `display:none` que YA se
usa en otros lados (`subsDisplay`, `l.groupShow`, `chipsDisplay`).

**Independencia de `hidden`:** plegar/desplegar un grupo en la barra es
puramente de navegación (qué botones se ven) y NUNCA toca `state.hidden`
(qué área se ve en el diagrama). Son dos controles distintos aunque ambos
viven en el mismo botón para las hojas (área): el botón hoja SÍ hace ambas
cosas a la vez porque para una hoja "mostrarla en la barra" y "mostrarla en
el diagrama" son la misma acción — pero un grupo/subgrupo NUNCA tiene
`onToggle` de `hidden`, solo de `groupOpen`.

## 2026-07-10 — SUPERADO: la barra de chips y las filas de grupo no eran lo pedido
Después del punto anterior, se agregó también una fila de "encabezado de
grupo" dentro de los carriles del diagrama (mismo estilo botón, ▸/▾,
ocupando una fila más antes de sus áreas). El usuario probó ambas cosas
(barra de chips anidada + filas de grupo) y contestó "no me estoy haciendo
entender" — adjuntó una imagen de referencia (nodos azules conectados por
curvas, igual que las ramas de actividades) y pidió explícitamente que NO
fueran "pestañas": quería la jerarquía de grupos como NODOS con líneas,
desplegándose desde el propio nodo, no como botones.

**Decisión:** se construyó un mini-mapa de nodos+curvas (ver sección
siguiente) y se REVIRTIÓ la barra de chips a su forma plana original (un
toggle simple por área, sin jerarquía) — la jerarquía vive solo en el
mini-mapa para no tener dos controles redundantes con estilos distintos
para el mismo concepto. Las filas de grupo dentro de los carriles se
eliminaron por completo (`groupHeaders`, `HEADER_H`), igual que las llaves
de color viejas (`groupBands`, del commit `d65c237`), ya innecesarias una
vez que el mini-mapa muestra la agrupación explícitamente.

**Lección:** cuando una imagen de referencia acompaña un pedido de UI,
verificar la interpretación ANTES de invertir esfuerzo en una versión
completa — dos iteraciones seguidas fueron descartadas por adivinar mal la
forma visual (botones vs. nodos) aun teniendo los datos/la lógica
correctos. Ver [[feedback-ux-precision]] en la memoria auto-persistida.

## 2026-07-10 — Mini-mapa de nodos conectados para la jerarquía de grupos
**Contexto:** ver el punto anterior. La imagen de referencia mostraba
Construcción → IDU → (EyD, Componente Técnico, ESP, Ambiental, Social) +
EAAB + SDM, y por separado Jurídico/Financiero/Predial, todos como cajas
azules conectadas por curvas — el mismo lenguaje visual que ya existe en
`renderVals()` para las ramas de actividades (`placeSub`, curvas bézier).

**Decisión:** reusar ese mismo lenguaje visual para los GRUPOS de área, en
vez de inventar un componente nuevo. Un nodo de grupo se posiciona a la
IZQUIERDA de sus hijos (al revés que las ramas de actividad, que van a la
derecha) porque el mini-mapa vive en el margen izquierdo del diagrama,
antes de que empiecen las columnas de fase. Las hojas (áreas reales) se
anclan a la altura de su carril (`laneY[a]`) para que la etiqueta quede
alineada con el contenido real de esa fila; los nodos-grupo se centran
contra sus hijos (mismo promedio min/max que ya usaba `placeSub`).

**Fusión grupo↔área por coincidencia de nombre:** el grupo "IDU" tiene
entre sus propias áreas una llamada también "IDU" (el carril real); "Predial"
grupo, análogamente, con área "Predial". La imagen de referencia NO muestra
un nodo duplicado para estos casos (una sola caja "IDU", una sola "Predial").
Se implementó `selfAreaOf(g)` (normaliza acentos/mayúsculas y busca un área
del grupo con el mismo nombre) para fusionar ese caso: el nodo del grupo
ejerce a la vez de toggle de expandir (si tiene más hijos) y de "área
representativa". Si un grupo no tiene auto-coincidencia y sus únicos hijos
serían solo esa relación, queda como nodo hoja simple (sin rama) — esto
reproduce exactamente que Jurídico/Predial aparezcan como una sola caja en
la imagen, sin inventar reglas especiales por nombre de grupo.

**`LEFT` dinámico:** antes `LEFT` (dónde arranca la primera columna de
fase) era una constante fija (190). Ahora se calcula la profundidad máxima
del mini-mapa ABIERTO (`mmMaxDepth`, contando solo ramas con
`isGroupOpen`) ANTES de fijar `LEFT`, para reservarle suficiente ancho y
que nunca quede una tarjeta de actividad dibujada debajo de un nodo del
mapa. Esto obligó a mover `gsAll`/`isGroupOpen`/`orderedAreas`/los helpers
del mini-mapa (`normName`, `selfAreaOf`, `kidsOfGroup`) al principio de
`renderVals()`, antes de que se declaren `NW/NH/CG/SG/LP_T/LP_B/LEFT`.

**Cómo aplicar en el futuro:** cualquier cambio a `MM_W`/`MM_GAPX` (ancho/
espaciado de nodo del mini-mapa) debe revisar `mmMaxDepth`/`LEFT` en
conjunto — igual que `colX[]` para las ramas de actividad, es la fuente de
verdad de "cuánto espacio necesita lo que se dibuja a la izquierda antes
de la primera columna real".

## 2026-07-10 — Incidente: pérdida de datos reales durante pruebas de UI
Durante las pruebas manuales de las iteraciones anteriores (expandir/
colapsar nodos repetidamente en el navegador contra el servidor local), se
perdieron 6 nodos reales del proyecto "Cierre de Proyectos" en el Supabase
EN VIVO (`IDU-02-CJ`, `IDU-02-CL`, `IDU-02-CF` y sus `-D`). Causa más
probable: un clic de prueba cayó sobre el botón "ELIMINAR" de una tarjeta
seleccionada, que dispara `window.confirm()` — un diálogo nativo bloqueante
que las instrucciones de automatización de navegador ya advertían evitar.

Se detectó comparando el conteo de nodos en vivo contra
`.context/backups/cierre-de-proyectos_20260709_171459.json` (backup local
de la sesión anterior). Se restauraron SOLO esos 6 nodos vía la API REST de
Supabase (no un restore completo del tablero), porque el usuario confirmó
haber hecho otros cambios reales al proyecto desde ese backup — un restore
completo los habría revertido también.

**Cómo aplicar en el futuro:** este repo NO tiene un Supabase de prueba
separado — `config.js` apunta al proyecto real. Antes de hacer clics
automatizados extensos sobre datos de un proyecto real (no un proyecto de
prueba dedicado), preferir interactuar con controles de UI (toggles,
botones de expandir/colapsar) y evitar seleccionar/interactuar con
tarjetas de actividades reales cuando no sea estrictamente necesario para
la prueba.
