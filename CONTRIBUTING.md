# Cómo contribuir a FOXSEC

¡Gracias por querer mejorar este proyecto! Todo aporte ayuda, desde corregir una tilde hasta sugerir un término nuevo.

## Formas de ayudar

- **Reportar un error o un enlace roto:** abre un *issue* con la plantilla "Error de contenido".
- **Sugerir un término, herramienta o lección:** usa la plantilla "Sugerencia".
- **Proponer un cambio directo:** haz un *fork*, crea una rama, edita y abre un *pull request*.

## Reglas de contenido

- **Español claro y sencillo.** Cada tema debe explicar qué es y para qué sirve, con frases cortas.
- **Fuentes.** Cita de dónde sale la información. No copies textos protegidos por derechos de autor: redáctalos con tus palabras.
- **Licencias.** Si agregas material de otra fuente, indica su licencia en `data/SOURCES.md`.
- **Uso ético.** No se aceptan instrucciones para atacar sistemas ajenos. Todo ejemplo debe poder practicarse en equipos propios o en laboratorios autorizados.
- **Sin datos personales.** No incluyas IP públicas, contraseñas, claves, cédulas ni capturas con información privada.
- **Arte.** Solo imágenes propias o con licencia que permita su uso. No uses marcas ni personajes de terceros.

## Probar en tu equipo

El sitio es estático. Desde la carpeta del proyecto:

```
python3 -m http.server 8000
```

Abre `http://localhost:8000`. Los catálogos se cargan desde `data/`, así que no funcionan abriendo el archivo directamente.

## Convivencia

Trata a todas las personas con respeto. Las críticas se dirigen al contenido, no a quien lo escribió. Los comentarios ofensivos se eliminarán.
