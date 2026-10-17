/* =========================================================================
   comisiones.js  —  ARCHIVO EDITABLE
   Las pestañas, las opciones y los precios de la página Commissions.
   =========================================================================

   *** IMPORTANTE SOBRE LOS PRECIOS ***
   Cada opción tiene DOS precios que escribís vos a mano y que no tienen
   ninguna relación entre sí:
       precioUSD  -> el número que se muestra en dólares
       precioARS  -> el número que se muestra en pesos
   El de pesos NO se calcula a partir del de dólares. No hay ningún tipo
   de cambio en el código. Vos ponés el número en pesos que quieras.

   Se escriben SIN puntos, SIN comas y SIN el símbolo $:
       precioARS: 15000        BIEN
       precioARS: 15.000       MAL
       precioARS: "$15000"     MAL
   Los puntos de miles los pone la página sola al mostrarlo.
   ========================================================================= */


/* =========================================================================
   1) OPCIÓN DE FONDO (Background)  —  DESACTIVADA POR DEFECTO
   -------------------------------------------------------------------------
   La caja "Background  [ ] No  [ ] Sí" NO se ve en la página. Para que
   aparezca en una pestaña (Icon, Half body, Full body o Gif) hay que
   hacer DOS cosas en la sección 2 de más abajo:

     a) En la pestaña, cambiar    fondoActivo: false    por    fondoActivo: true

     b) En cada opción de esa pestaña (Sketch, Lineart, Color...), revisar
        los dos precios CON fondo:
            precioFondoUSD: 15,
            precioFondoARS: 15000,

   IMPORTANTE: estos precios son el precio FINAL con fondo, escrito por vos.
   NO se suma ni se calcula nada: si la opción sin fondo cuesta 10 y con
   fondo cuesta 17, escribís  precioUSD: 10  y  precioFondoUSD: 17.
   Cada pestaña se maneja por separado: podés activar el fondo en Icon y
   dejarlo apagado en Full body.

   Si una pestaña tiene fondoActivo: true pero a una opción le borrás los
   precios con fondo, esa opción no muestra la caja de Background.
   ========================================================================= */


/* =========================================================================
   2) LAS 4 PESTAÑAS Y SUS 3 OPCIONES CADA UNA
   ---------------------------------------------------------------------
   nombre = el texto que se ve en la pestaña o en el botón
   id     = se usa para armar el nombre del archivo de imagen.
            NO lo cambies salvo que también renombres las imágenes.

   fondoActivo = true / false. Prende o apaga la caja Background de esa
            pestaña (ver sección 1 de arriba). Viene en false en todas.
   precioFondoUSD / precioFondoARS = precio FINAL de esa opción cuando el
            visitante marca Background = Sí. Escribilo vos, no se calcula.
            Sólo se usa si la pestaña tiene fondoActivo: true.

   La imagen de ejemplo de cada combinación se busca sola en:
       img/comisiones/ID-DEPESTAÑA - ID-DE-OPCION - sinfondo/confondo .png
   Por ejemplo:
       img/comisiones/icon-sketch-sinfondo.png
       img/comisiones/fullbody-color-confondo.png   (sólo si activaste fondo)
   También sirve GIF (animado o no): guardalo con el mismo nombre pero
   terminado en .gif, por ejemplo  icon-sketch-sinfondo.gif
   La página prueba sola .png, .gif y .jpg, en ese orden.
   Mientras el archivo no exista se ve un recuadro punteado que dice
   qué nombre le tenés que poner.
   ---------------------------------------------------------------------
   PROVISIONAL: TODOS los precios de abajo (con y sin fondo) son inventados.
   ========================================================================= */
const COMISIONES = [

  {
    nombre: "Icon",
    id: "icon",
    fondoActivo: false,   // <- true = muestra la opción de Background en esta pestaña
    opciones: [
      { nombre: "Sketch",  id: "sketch",  precioUSD: 10, precioARS: 10000, precioFondoUSD: 15, precioFondoARS: 15000 },
      { nombre: "Lineart", id: "lineart", precioUSD: 15, precioARS: 15000, precioFondoUSD: 20, precioFondoARS: 20000 },
      { nombre: "Color",   id: "color",   precioUSD: 20, precioARS: 20000, precioFondoUSD: 25, precioFondoARS: 25000 },
    ],
  },

  {
    nombre: "Half body",
    id: "halfbody",
    fondoActivo: false,   // <- true = muestra la opción de Background en esta pestaña
    opciones: [
      { nombre: "Sketch",  id: "sketch",  precioUSD: 20, precioARS: 20000, precioFondoUSD: 25, precioFondoARS: 25000 },
      { nombre: "Lineart", id: "lineart", precioUSD: 28, precioARS: 28000, precioFondoUSD: 33, precioFondoARS: 33000 },
      { nombre: "Color",   id: "color",   precioUSD: 35, precioARS: 35000, precioFondoUSD: 40, precioFondoARS: 40000 },
    ],
  },

  {
    nombre: "Full body",
    id: "fullbody",
    fondoActivo: false,   // <- true = muestra la opción de Background en esta pestaña
    opciones: [
      { nombre: "Sketch",  id: "sketch",  precioUSD: 30, precioARS: 30000, precioFondoUSD: 35, precioFondoARS: 35000 },
      { nombre: "Lineart", id: "lineart", precioUSD: 40, precioARS: 40000, precioFondoUSD: 45, precioFondoARS: 45000 },
      { nombre: "Color",   id: "color",   precioUSD: 50, precioARS: 50000, precioFondoUSD: 55, precioFondoARS: 55000 },
    ],
  },

  {
    /* =====================================================================
       PESTAÑA GIF
       Funciona igual que las otras tres: 3 opciones.
       Solo que los nombres todavía no están definidos.
       *** RENOMBRA "Opcion1", "Opcion2" y "Opcion3" por los nombres
           que vos quieras. Cambiá sólo lo que dice nombre: ***
       Si también cambiás el id:, acordate de renombrar las imagenes
       de la carpeta img/comisiones/ para que coincidan.
       ===================================================================== */
    nombre: "Gif",
    id: "gif",
    fondoActivo: false,   // <- true = muestra la opción de Background en esta pestaña
    opciones: [
      { nombre: "Opcion1", id: "opcion1", precioUSD: 45, precioARS: 45000, precioFondoUSD: 50, precioFondoARS: 50000 },
      { nombre: "Opcion2", id: "opcion2", precioUSD: 60, precioARS: 60000, precioFondoUSD: 65, precioFondoARS: 65000 },
      { nombre: "Opcion3", id: "opcion3", precioUSD: 80, precioARS: 80000, precioFondoUSD: 85, precioFondoARS: 85000 },
    ],
  },

];
