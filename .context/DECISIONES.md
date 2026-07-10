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
