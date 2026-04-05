# Detalles APP

## 2026-04-04
- Rediseno total de la version premium en `inma-premium.html` con nueva arquitectura visual, navegacion simplificada y bloques de conversion reforzados.
- Nueva direccion de arte en `inma-premium.css` con paleta azul/gris/blanco mas elegante, tipografia premium y layout editorial responsive.
- Reescritura de `inma-premium.js` manteniendo tracking, cookies, validaciones y anadiendo interacciones visuales fluidas.
- Integracion de imagenes nuevas para hero, servicios y galeria (`assets/photo-hero-main.svg`, `assets/photo-hero-detail.svg`, `assets/service-*.svg`, `assets/photo-gallery-*.svg`).
- Mejora de experiencia general: lightbox, animaciones de entrada, efecto de profundidad en tarjetas y CTA de reserva persistente.
- Personalizacion de la landing React en `velvet/velvet-veil-studio-main`: nueva marca Maria Rosa, telefono/WhatsApp y direccion actualizados.
- Nueva seccion de tarifas con sesiones, bonos y packs reales en `velvet/velvet-veil-studio-main/src/components/PricingSection.tsx`.
- Actualizacion de servicios destacados con precios por sesion y textos alineados al catalogo actual.
- Integracion de rutas para imagenes reales de tratamientos en `velvet/velvet-veil-studio-main/public/maria-rosa/` con fallback visual para no alterar el estilo ni romper la web.
- Integradas 9 imagenes reales enviadas por cliente en `velvet/velvet-veil-studio-main/public/maria-rosa/` y usadas en servicios/promociones de la landing.
- Telefono y enlaces de WhatsApp actualizados al numero real 619420464 en toda la landing React.

## 2026-04-05
- Duplicado el proyecto React base a `velvet/estetica-olga-diaz-main` para crear una version independiente del negocio Estetica Olga Diaz.
- Rebranding completo en hero, experiencia, servicios, precios, filosofia, resenas, CTA, contacto y footer con datos reales de ficha Google Maps.
- Actualizados nombre comercial, telefono `915 26 52 81`, direccion `C. de Jaime Vera, 9, Latina, 28011 Madrid` y referencia Maps `C76C+VG Madrid`.
- Sustituidas rutas de imagenes especificas por placeholders reutilizados desde `src/assets` para mantener consistencia visual sin depender de material nuevo.
- Ajustadas metatags SEO en `velvet/estetica-olga-diaz-main/index.html` y documentacion del clon en `velvet/estetica-olga-diaz-main/README.md`.
- Validacion tecnica completada con `npm run build` sin errores de compilacion.
- Rediseno premium v2 en `velvet/estetica-olga-diaz-main`: nueva direccion visual editorial (azul/gris), tipografia de alto contraste, fondos atmosfericos y bloques glass para mejorar percepcion de marca.
- Mejorada jerarquia de conversion en hero/CTA con botones diferenciados para llamada y WhatsApp, manteniendo experiencia responsive en mobile y desktop.
- Formulario de contacto conectado a WhatsApp y email en `velvet/estetica-olga-diaz-main/src/components/ContactSection.tsx`, con mensaje pre-rellenado usando nombre, telefono y detalle de cita.
- AÃ±adido canal de correo visible tambien en footer (`citas@esteticaolgadiaz.com`) para reforzar alternativas de contacto.
- Ajustada la identidad visual de `velvet/estetica-olga-diaz-main` a una paleta mas elegante en blanco, lila y rosa, eliminando acentos azules en variables globales, degradados y hovers principales.
- Renombrada la carpeta base `velvet/velvet-veil-studio-main` a `velvet/maria-rosa-main` para ordenar los proyectos por marca.
- Duplicada `velvet/estetica-olga-diaz-main` a `velvet/estetica-inma-fernandez-main` para crear una nueva web independiente del negocio Centro de Estetica Inma Fernandez.
- Rebranding completo del clon Inma: nombre comercial, SEO, direccion `Av. de San Luis, 86, local derecho, Hortaleza, 28033 Madrid`, telefonos `910 34 26 09` y `625 91 67 96`, correo `inmafernandez.estetica@gmail.com`, horario L-V 10:00-20:00 e Instagram `@inmafernandez.estetica`.
- Actualizadas reseÃ±as destacadas y reputacion en la landing de Inma a `5,0` con `100` opiniones para alinear la web con la ficha del negocio.
- Transformada la landing principal en `index.html` a la version definitiva de Barber Shop Downtown con direccion visual premium (dark blue/gray), estructura de conversion y copy centrado en barberia.
- Nueva capa de estilos globales en `styles.css` con tipografia expresiva (`Bebas Neue` + `Archivo`), fondos atmosfericos, componentes glass, responsive completo y soporte para paginas legales.
- Reescritura total de `script.js` para incluir menu movil, animaciones reveal, carrusel de reseÃ±as y logica de reserva inteligente.
- Integrada reserva real con Koalendar embebido y enlazado en CTA principal, CTA sticky y botones de contacto para reservar sin salir de la web.
- Implementada seleccion de barbero + servicio antes de reservar, con sincronizacion automatica del enlace Koalendar y mensaje de confirmacion por WhatsApp.
- AÃ±adida galeria visual con fotos de referencia de cortes para reforzar marca y conversion sin depender de enlaces externos.
- Actualizados `privacy.html`, `cookies.html` y `legal.html` con datos de Barber Shop Downtown (Usera, Madrid) para mantener coherencia legal en todo el sitio.
- Reemplazadas las fotos de hero, galeria y reseÃ±as por material nuevo de `dowtonw/cortes/`, eliminando las imagenes anteriores para un look mas autentico.
- Redisenada la seccion de reseÃ±as en formato editorial premium: bloque de historia de marca, tarjetas con avatar, transiciones suaves y control por dots sin botones laterales.
- AÃ±adidas animaciones elegantes en toda la landing (`dowtonw/styles.css` + `dowtonw/script.js`): barra de progreso de scroll, cinta de reputacion en movimiento, micro-stagger de aparicion y efecto de profundidad en galeria.
- Mejorada la percepcion profesional y de conversion en la version de `dowtonw/` sin perder rendimiento ni responsive mobile/desktop.
- Renombrados los perfiles de equipo a `Barbero 1`, `Barbero 2` y `Barbero 3` en tarjetas y selector de cita, manteniendo la logica de eleccion previa.
- Unificado el calendario de reserva para cualquier barbero con el enlace `https://koalendar.com/e/reunirse-con-downtown` (boton principal, iframe y CTA sticky).
- Corregido el menu movil en `dowtonw/styles.css` con panel desplegable limpio y mejor legibilidad en pantallas pequenas, sin afectar desktop.
- Simplificada la galeria para visualizacion directa de fotos (sin enlaces ni texto de Google Maps), como experiencia mas limpia y elegante.
- Normalizada la marca visible en la web a `Barber Shop Downtown` en portada, legal y mensajes de WhatsApp.

