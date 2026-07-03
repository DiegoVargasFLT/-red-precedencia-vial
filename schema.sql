-- ============================================================
-- Esquema Supabase — Panel "Red de Precedencia" (IDU)
-- Ejecutar en: Supabase → SQL Editor → New query → pegar → Run
-- ============================================================

-- 1) Tabla: un tablero = una fila. El array completo de actividades
--    se guarda como JSON en la columna "data".
create table if not exists public.boards (
  id         text primary key,
  data       jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

-- 2) Row Level Security
alter table public.boards enable row level security;

-- 3) Políticas — MODELO "ABIERTO":
--    cualquiera con la anon key (es decir, cualquiera con el link) puede
--    leer y escribir. Simple y sin logins. Si más adelante quieres
--    restringir la edición, se reemplazan estas políticas por unas basadas
--    en auth.uid() (Supabase Auth).
drop policy if exists "boards_select_anon" on public.boards;
create policy "boards_select_anon"
  on public.boards for select
  to anon
  using (true);

drop policy if exists "boards_insert_anon" on public.boards;
create policy "boards_insert_anon"
  on public.boards for insert
  to anon
  with check (true);

drop policy if exists "boards_update_anon" on public.boards;
create policy "boards_update_anon"
  on public.boards for update
  to anon
  using (true)
  with check (true);

-- 4) (Opcional) Tiempo real: permite que las ediciones de un usuario
--    aparezcan en vivo en las pantallas de los demás.
--    Si da error "already member", ignóralo (ya estaba habilitado).
alter publication supabase_realtime add table public.boards;

-- ============================================================
-- Nota: NO es necesario insertar datos aquí. La primera vez que
-- abras el panel con credenciales configuradas, éste sembrará
-- automáticamente la fila 'red-precedencia-vial' con las actividades
-- por defecto (o con lo que ya tengas guardado localmente).
-- ============================================================
