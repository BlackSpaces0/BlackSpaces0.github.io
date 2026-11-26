# Cómo contribuir a FOXSEC

¡Gracias por ayudar a que FOXSEC crezca! Es un proyecto educativo abierto, comunitario y en evolución. Son bienvenidos los aportes pequeños: corregir un enlace, mejorar una explicación, traducir una lección, reportar una barrera de accesibilidad o proponer una actividad.

## Antes de empezar

1. Revisa [la hoja de ruta](ROADMAP.md) y los issues abiertos para evitar trabajo duplicado.
2. Para cambios grandes, abre primero un issue y acuerda el alcance.
3. Usa una rama y un pull request; no publiques directamente en `main`.

## Contenido y recursos

- Envía contenido original o confirma que tienes permiso para compartirlo.
- Para recursos externos, incluye URL oficial, autor o proyecto, licencia y fecha en que verificaste la información.
- Conserva atribuciones y condiciones de las fuentes. No copies bancos de exámenes, libros, cursos ni definiciones con licencia incompatible.
- Indica el idioma original. No presentes traducciones automáticas como texto oficial.
- Las recomendaciones legales, precios y certificaciones cambian: enlaza a fuentes primarias y evita prometer resultados.
- Las actividades prácticas deben usar laboratorios propios o autorizados; no incluyas instrucciones dirigidas a sistemas de terceros.
- No subas contraseñas, tokens, datos personales ni capturas con información sensible.
- Para microlecciones, explica una idea por bloque, añade un ejemplo verificable y un reto con retroalimentación; no uses preguntas oficiales de certificaciones.

## Accesibilidad y estilo

- Escribe en español claro, con párrafos breves, títulos descriptivos y una idea principal por bloque.
- Expande las siglas la primera vez y acompaña los términos nuevos con un ejemplo.
- Mantén navegación por teclado, etiquetas accesibles, contraste legible y movimiento reducido.
- Los ajustes de lectura son opcionales: no hay una única configuración adecuada para todo el mundo.

## Comprobaciones antes de abrir un PR

```sh
node scripts/validate-content.mjs
git diff --check
```

Describe qué cambiaste, cómo lo probaste y añade las fuentes/licencias cuando corresponda. Si no puedes ejecutar una comprobación, indícalo en el PR.

El workflow de GitHub Actions también ejecuta `scripts/validate-content.mjs` en cada pull request. Si el cambio añade una nueva colección de datos, amplía el validador para que compruebe su estructura y atribución.

## Licencia de los aportes

El código y la documentación del proyecto están bajo MIT, salvo que un archivo indique otra cosa. Al enviar un aporte confirmas que puedes compartirlo bajo esa licencia. Los catálogos de terceros conservan sus propias atribuciones y licencias; la licencia MIT del sitio no las reemplaza.
