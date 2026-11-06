# Mi Recetario · v1.3 Diseño Espresso

Interfaz rediseñada según la referencia visual aprobada: fondo crema, barra lateral marrón espresso, tarjetas de ingredientes por secciones, pasos de preparación, etiquetas, notas y utensilios.

## Instalación en GitHub Pages
1. **No cambies el nombre del repositorio ni la URL**. Continúa usando `Mi-Recetario` (mayúsculas incluidas).
2. Sube los archivos **descomprimidos** en la raíz del mismo repositorio, reemplazando los de la versión anterior.
3. En Settings → Pages mantén `main` y `/(root)`.
4. En Actions confirma la publicación verde; actualiza la PWA abriéndola con conexión.

## Seguridad de datos
- Base de datos IndexedDB: `mi-recetario-v1`, misma clave y mismos object stores que en versiones anteriores. Las recetas ya creadas no deberían eliminarse por actualizar archivos del sitio.
- Guarda una copia en Configuración → Exportar copia completa **antes de subir esta versión**. No borres la PWA ni los datos de Safari.
- Las copias automáticas a Google Drive aún NO están implementadas.
- Las recetas eliminadas se mueven a Papelera y pueden restaurarse.
- El almacenamiento de la PWA instalada en iOS y el de Safari pueden estar separados.

## Funciones
- Múltiples fotos comprimidas, ingredientes por secciones, buscador predictivo, pasos con duración, temperatura e intensidad, utensilios, etiquetas, ajustes por comensales, copias manuales, intercambio de recetas.
- Diseño responsive de escritorio y móvil, sin librerías externas de iconos ni fuentes.
