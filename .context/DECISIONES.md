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
