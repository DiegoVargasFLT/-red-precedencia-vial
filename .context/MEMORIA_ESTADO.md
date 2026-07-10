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

## Sesión 2026-07-10 (continuación): tarjetas sin compactar + barra ÁREAS en árbol
Dos pedidos del usuario, resueltos en el commit `bf53a3f`:

1. **Una principal expandida ya NO se compacta** a un título delgado de
   30px (`GH`). Se eliminó por completo el concepto de "tarjeta-título": el
   `isExpTitle(n)` ahora se usa SOLO para deduplicar líneas de dependencia a
   nivel de grupo en `collectEdges` (el `isFan` pass), no para cambiar
   tamaño ni estilo. `hOf(n)` ya no depende de `isExpTitle`; siempre
   devuelve el alto normal de tarjeta (`NH` + chips). `nodeVMs` se
   construye ahora desde `vSorted` completo (ya no hay split
   `cardNodes`/`titleNodes`); se eliminó el array/objeto `groupTitles` y su
   bloque `<sc-for>` en el template, y la clase CSS `.group-title` (código
   muerto). El toggle ▸/▾ de una principal sigue siendo el mismo badge
   `subsMark`/`onToggleSubs` que ya tenían todas las tarjetas.

2. **Barra "ÁREAS" rediseñada como árbol colapsable** (antes: fila plana de
   chips, uno por área). Ahora es una lista PLANA pero con jerarquía visual:
   grupo (nivel 0) → subgrupo (nivel 1) → área hoja (nivel 2), usando
   `display:none/inline-block` para ocultar hijos de un grupo plegado (no
   hay sc-for anidado — el motor de plantillas de este proyecto no lo
   soporta en otros lados del código, así que se evitó por consistencia).
   Nuevo estado UI-only `state.groupOpen` (igual que `hidden`/`expanded`:
   no se persiste, se resetea en `resetStateForProject`/`this.state` inicial).
   Plegar un botón de grupo SOLO oculta sus botones hijos de la barra — NO
   toca `state.hidden` (la visibilidad de un área en el diagrama). Verificado
   en el proyecto "Cierre de Proyectos": Construcción(110) → IDU(64) →
   [IDU, EyD, Entidades de servicios, Ambiental, Social] + EAAB(29) + SDM(17);
   luego Jurídico(1), Financiero(0), Predial(3) — coincide con la
   estructura que pidió el usuario (imagen de referencia con llaves).

## Sesión 2026-07-10 (continuación 2): áreas sueltas primero, con acento propio
Commit `4ece783`. El usuario pidió que las áreas que NO pertenecen a
ningún grupo aparezcan ANTES que los botones de grupo en la barra ÁREAS
(antes iban al final) y que se distingan gráficamente. Se agregó
`looseAreaChip(a)` (junto a `areaChip`/`groupChip` ya existentes en
`renderVals()`): mismo toggle de visibilidad de siempre, pero con marca
"○" fija y borde neutro `#7486A6` (en vez del azul `#61B1E3` de una hoja
dentro de un grupo). En el builder de `chips`, el bloque de áreas sueltas
ahora va PRIMERO, antes del `gs.filter(g => !g.parent).forEach(...)`.

## Pendientes / posibles siguientes pasos
- Ninguno abierto. Si se quiere una réplica más fiel del mockup visual
  (llaves "{" con etiqueta, en vez de indentado + color de borde), sería un
  trabajo de diseño aparte — el usuario ya optó explícitamente por la
  versión "botones colapsables anidados" en vez de rehacer las llaves del
  diagrama.
