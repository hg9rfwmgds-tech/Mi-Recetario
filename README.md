# Mi Recetario — paquete para GitHub Pages (versión funcional 1.2)

Este paquete incluye el diseño de icono vintage seleccionado y sus versiones:
- `icon-192.png`: icono PWA (192 × 192)
- `icon-512.png`: icono PWA (512 × 512)
- `icon-maskable-512.png`: icono Android con margen seguro
- `apple-touch-icon.png`: icono iPhone de 180 × 180
- `favicon-32.png`: icono de pestaña del navegador

Además se incluyen `index.html`, `manifest.webmanifest` y `sw.js`.

## Publicación en GitHub Pages
1. Abre https://github.com/new e inicia sesión con tu cuenta existente.
2. Crea un repositorio público, por ejemplo `mi-recetario`.
3. Descarga y DESCOMPRIME el ZIP. En el repositorio usa `Add file` > `Upload files` y sube **los archivos sueltos** de la carpeta (no subas el ZIP tal cual).
4. En el repositorio: `Settings` > `Pages` > `Build and deployment` > `Deploy from a branch` > `main` > `/(root)` > `Save`.
5. Cuando esté publicado, entra en `https://TU-USUARIO.github.io/mi-recetario/` (sustituye el nombre de usuario).
6. En iPhone: Safari > Compartir > Añadir a pantalla de inicio. En Android: Chrome > Instalar.

## Muy importante sobre las recetas
- **El almacenamiento sigue siendo local (IndexedDB).** No contiene todavía copias automáticas, ni intercambio individual, ni mejoras pendientes de la versión 1.3.
- GitHub guarda el código, **no las recetas de los usuarios**.
- Si ya tienes recetas en otra URL del prototipo, expórtalas antes desde Configuración y restaura el archivo en la web publicada.
- Mantén la misma URL del repositorio: cambiar el dominio o el origen puede dejar las recetas locales inaccesibles desde la nueva ubicación.
- No borres datos de Safari/Chrome ni desinstales la PWA sin copia externa reciente.

## Actualizaciones
Reemplaza archivos en el mismo repositorio. `sw.js` usa una nueva versión de caché para el icono actualizado.
