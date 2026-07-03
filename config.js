// Configuración de Supabase para el panel Red de Precedencia.
// La "anon key" es PÚBLICA por diseño (se protege con RLS en la base de datos),
// por eso es seguro versionarla en este archivo.
//
// Cómo obtener estos valores:
//   Supabase → tu proyecto → Project Settings → Data API / API Keys
//     url     = Project URL            (https://xxxxxxxx.supabase.co)
//     anonKey = anon / public API key  (empieza con "eyJ...")
//
// Mientras estén vacíos, el panel funciona igual usando solo localStorage.
window.RP_SUPABASE = {
  url: "https://olkcsvcgjtgwujhluyio.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sa2NzdmNnanRnd3VqaGx1eWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwODA4MjQsImV4cCI6MjA5ODY1NjgyNH0.xuYfsCHJTy-5uvuFuptDIvihCzuHb7h5K3w4I5Pm7iA",
  boardId: "red-precedencia-vial"
};
