# Estado del proyecto — Panel de precedencias viales

_Última actualización: 2026-07-10_

## Qué es
App estática (`index.html`, React vía dc-runtime, sin build) que dibuja un
diagrama de precedencias entre actividades de un proyecto vial, agrupadas
por área (carriles horizontales) y por fase/columna (Preconstrucción →
Construcción → Entrega a Beneficiarios → Liquidación). Persistencia en
Supabase + localStorage (ver `README.md`).

## Trabajo en curso más reciente
**Layout "rama a la derecha"** (`renderVals()` en `index.html`, clase
`Component`): al expandir una actividad principal con subactividades, estas
ya no se apilan debajo — se despliegan hacia la DERECHA de la principal,
centradas verticalmente contra el bloque de sus hijas. Una subactividad
expandida abre a su vez su propia rama (recursivo, N niveles).

- `branchH(id)` / `placeSub(id, x, yTop)`: calculan alto y posición absoluta
  de cada nodo y su subárbol expandido.
- `pos[id]` guarda `{x, y, w, h}` de cada nodo visible (tarjetas y títulos
  de grupo por igual).

**Bug encontrado y corregido en esta sesión** (commit `3ae7cdf`): las
columnas de fase tenían un ancho fijo (`LEFT + level*(NW+CG)`), así que una
rama expandida que necesitaba más de una columna de ancho quedaba dibujada
ENCIMA de los nodos de la fase siguiente (se verificó visualmente: la
tarjeta `LEG-01` de Liquidación se solapaba con la rama de `IDU-02`).

Fix: `colX[]` — array de posiciones x de columna calculado dinámicamente,
que empuja cada columna hacia la derecha según la profundidad máxima de
rama (`extraDepth`) que necesiten los nodos de la columna anterior. Se usa
en tres sitios: `canvasW`, `fasesBands` (x/w) y el punto de partida de
`placeSub` para nodos de nivel superior.

También se limpió código muerto (`indentOf`, `MIN_W`, del indentado
anterior por sangría) y se corrigió el conector punteado de jerarquía
(`guidePaths`) para que salga del borde DERECHO del título en abanico hacia
sus hijas, en vez del borde izquierdo (diseño viejo pensado para hijas
apiladas debajo).

## Cómo probar localmente
No hay servidor de dev propio: servir la carpeta con cualquier estático
(`python -m http.server 8000` o `npx serve .`), nunca abrir con `file://`.
Proyecto de prueba útil para ver ramas multinivel: **"Cierre de Proyectos"**
(selector de proyecto en la barra lateral) — tiene nodos con varias
subactividades anidadas (p. ej. `IDU-02` → `IDU-02-CT` → 19 hijas).

## Pendientes / posibles siguientes pasos
- No hay pendientes explícitos abiertos tras el fix de esta sesión.
- Si se retoma el layout de ramas, revisar también el comportamiento con
  "EXPANDIR TODO" en proyectos muy grandes (ya se probó sin errores de
  consola, pero no se validó exhaustivamente el aspecto visual a esa
  escala).
