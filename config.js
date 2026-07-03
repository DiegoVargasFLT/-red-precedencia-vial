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
  url: "",
  anonKey: "",
  boardId: "red-precedencia-vial"
};
