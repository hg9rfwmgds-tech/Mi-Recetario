# Mi Recetario · versión 1.5.1 · Diseño Espresso

**Novedades:** exportar una receta a PDF A4 real, descargable y compartible, y navegación corregida en iPhone horizontal. Conserva todo lo incorporado en la versión 1.4 (galería deslizante, fotos vinculadas a pasos, categorías de elaboración y utensilios con iconos precisos o texto).

## Corrección urgente 1.5.1 — barra inferior en iPhone

En la versión 1.5, el menú inferior utilizaba CSS `position:fixed`, una técnica
que en algunas versiones de iOS/WebKit hace que la barra se desplace hacia el
centro de la pantalla o tape los ingredientes al desplazarse.

La versión 1.5.1 utiliza un **contenedor vertical flexible**: solo la zona de
recetas tiene desplazamiento y el menú inferior queda fuera de ella, ocupando
su espacio al pie de la pantalla. Ya no depende de `position:fixed` en iPhone.
También se ha adaptado el reinicio del desplazamiento al cambiar de receta.

La corrección se ha probado en navegador con tamaños de iPhone vertical y
horizontal. **No se ha podido probar directamente en Safari/iPhone físico**.
Si el iPhone sigue mostrando la versión 1.5, conecta a Internet, cierra
por completo la PWA y vuelve a abrirla para permitir la actualización del
service worker. **No desinstales la PWA ni borres datos**: las recetas están
guardadas localmente.

## Actualizar en GitHub Pages

1. **Antes de cambiar ningún archivo**, abre Mi Recetario en el dispositivo que guarda tus recetas → Configuración → Exportar copia completa. Guarda el JSON fuera del dispositivo. Usa «Verificar archivo de copia» para revisarlo.
2. Mantén el mismo repositorio **`Mi-Recetario`**, su dirección, rama `main` y carpeta `/(root)` de GitHub Pages.
3. Sustituye **`index.html`, `sw.js`, `manifest.webmanifest`, `README.md`** por los cuatro archivos de este ZIP. No incluyas la carpeta externa si la has descomprimido: los archivos van a la raíz.
4. **Conserva los iconos PNG existentes** en el repositorio: `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `favicon-32.png`. No venían en los archivos recibidos y por eso no se incluyen.
5. Espera a que GitHub Pages haya publicado y abre la PWA con conexión a Internet. Si aún aparece la versión antigua, ciérrala y vuelve a abrirla con conexión para que se active la caché nueva.
6. **No borres la PWA, su almacenamiento ni los datos de Safari**: las recetas existentes viven en IndexedDB y no se sincronizan con una cuenta.

## Crear y compartir una receta en PDF

1. Abre una receta de **Mis recetas**.
2. Pulsa **«Exportar PDF»** (también disponible mediante el botón PDF de la cabecera).
3. Elige **«Ilustrado · combinación B + C»** (por defecto) o **«Compacto · ficha de cocina»**.
4. Pulsa **«Crear y compartir PDF»**. En el siguiente diálogo usa **«Compartir PDF»** para abrir la hoja de compartir de iOS si el navegador permite compartir archivos; o **«Guardar PDF»** para descargarlo.
5. El archivo se puede enviar a cualquier persona: no necesita instalar Mi Recetario.

**Incluye:** nombre, descripción, foto principal (cuando exista), tiempo y dificultad, número de raciones que tenías seleccionado al exportar, ingredientes por secciones con cantidades recalculadas y casillas para marcar, pasos numerados, fotos vinculadas específicamente a pasos (solo en modo ilustrado), utensilios y notas.

**Formato y privacidad:** PDF verdadero A4 generado **en el propio navegador**, sin bibliotecas remotas ni envíos a servidores. El archivo incorpora texto seleccionable y JPEG de las fotografías. Los pasos se mantienen juntos siempre que caben en una página; para instrucciones extraordinariamente largas se usan páginas adicionales. Ninguna fotografía se asigna automáticamente a un paso no vinculado.

**Nota iPhone:** la forma de compartir/guardar depende de Safari y de la instalación de la PWA. La hoja de compartir solo se abre tras pulsar el botón dedicado, para evitar restricciones de seguridad del navegador.

## Navegación horizontal en iPhone

Si el dispositivo tiene pantalla táctil y está en horizontal con poca altura, **no aparece la barra lateral**, aunque su anchura supere el punto de corte habitual de móvil. Se usa la **navegación inferior** en ambas orientaciones. Las columnas de la receta aprovechan la anchura disponible. En tabletas y ordenadores se mantiene el menú lateral.

## Compatibilidad y datos

- Base de datos existente: **`mi-recetario-v1`** y las mismas tablas `recipes` e `ingredients`. No hay migración de datos ni reemplazo de recetas.
- El *service worker* usa una nueva versión de caché para renovar los archivos de la PWA.
- No hay nuevas bibliotecas externas, registro, nube ni conexión obligatoria para generar PDF.
- Las copias siguen siendo manuales; el archivo PDF no es una copia de seguridad editable ni reemplaza el JSON de respaldo.
- La PWA instalada en iPhone y Safari pueden conservar datos distintos. No desinstales la PWA para actualizarla.

## Alcance

Esta versión **no** incorpora todavía la planificación de menús, el inventario de congelados, la lista de compra agregada ni la comparación de precios entre supermercados: estas funciones requieren una planificación de producto y, en el caso de precios actuales, fuentes fiables. Su análisis se entrega por separado.

## Pruebas técnicas realizadas

- JavaScript comprobado con Node.js.
- Generación y descarga de un PDF de una receta de prueba de 41 ingredientes, 12 pasos y fotos, con 5 páginas correctamente interpretadas por un lector PDF.
- PDF renderizado para revisar su diseño, cantidades y vínculos fotográficos.
- Vista móvil táctil simulada: menú lateral oculto y navegación inferior visible en anchuras/alturas equivalentes a iPhone horizontal y vertical.
- **Pendiente de comprobar en el iPhone real y tu cuenta GitHub Pages.** El paquete no se ha publicado en tu repositorio.
