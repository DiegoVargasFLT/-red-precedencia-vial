# Red de Precedencia — Panel IDU

Panel interactivo de precedencias viales (dashboard de actividades por área,
estados y dependencias). Sitio **estático** (HTML + JS) con persistencia
opcional en la nube vía **Supabase**.

## Arquitectura

- `index.html` — la aplicación (React vía dc-runtime). Los datos y la lógica
  viven aquí. **No requiere build.**
- `support.js` — runtime generado (no editar).
- `config.js` — credenciales de Supabase (la anon key es pública por diseño).
- `schema.sql` — esquema de la base de datos (tabla `boards`).

**Persistencia:** todo cambio pasa por `setNodes()`, que guarda en
`localStorage` (respaldo/offline) y sube el tablero completo a Supabase.
Si `config.js` no tiene credenciales, funciona solo con localStorage.

---

## Puesta en línea (paso a paso)

### 1. Supabase (base de datos gratis)
1. Crear cuenta en https://supabase.com → **New project** (free tier).
2. **SQL Editor → New query** → pegar el contenido de `schema.sql` → **Run**.
3. **Project Settings → API**: copiar `Project URL` y la `anon public` key.
4. Pegarlos en `config.js` (`url` y `anonKey`).

### 2. GitHub
1. Crear un repositorio **privado** (recomendado): p. ej. `red-precedencia-vial`.
2. Desde esta carpeta:
   ```bash
   git remote add origin https://github.com/<usuario>/red-precedencia-vial.git
   git push -u origin main
   ```

### 3. Vercel (hosting gratis)
1. https://vercel.com → **Add New → Project** → importar el repo de GitHub.
2. Framework preset: **Other** (es estático, sin build). Root: la raíz del repo.
3. **Deploy.** Cada `git push` a `main` redespliega automáticamente.

> Alternativa sin GitHub: `vercel` (CLI) desde esta carpeta despliega directo.

---

## Modelo de acceso actual: **ABIERTO**
Cualquiera con el link puede ver y editar (protegido solo por lo privado que
mantengas la URL). Para restringir la edición más adelante:
- **Passphrase** (disuasión del lado cliente), o
- **Supabase Auth** (magic link) + políticas RLS por `auth.uid()` — control real.

## Desarrollo local
Servir la carpeta con cualquier servidor estático (no abrir con `file://`,
porque el runtime hace `fetch`):
```bash
npx serve .
# o
python -m http.server 8000
```
