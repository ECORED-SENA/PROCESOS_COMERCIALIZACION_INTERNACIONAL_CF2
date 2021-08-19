<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-0  
      .col-lg-5
        figure.px-5
          img.img-400(src="@/assets/tema1/img-intro.svg", )

      .col-lg-7.mb-0 
        p Los retos para las empresas son cada vez más fuertes debido a que las tendencias del mercado cambian constantemente y la necesidad de innovar crece de manera exponencial.
        p Lograr desarrollar un producto o servicio estrella, requiere tiempo, dedicación y conocimiento, lo cual, contando con múltiples fuentes de información, puede generar confusión a la hora de tomar decisiones. 
        p De allí la importancia de elegir el método de selección de ideas correcto, conociendo sus características, ventajas, desventajas y, sobre todo, adecuándose a las necesidades de investigación que cada empresa requiere realizar. 
        p Para este proceso se puedes utilizar diferentes métodos, dentro de los cuales encontramos: 
    .row.d-none.d-xl-block

      figure.mb-5
        img(src="@/assets/tema1/fnd-1-.svg")
 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
