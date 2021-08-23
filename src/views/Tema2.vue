<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diagnóstico del mercado

    h4 Introducción
    .row.align-self-center.mb-5  
      .col-md-7.align-self-center.mb-5
        p Posterior a la elección del método de selección de ideas, se establecen las variables a considerar para elegir la plaza en la cual se desea realizar la comercialización internacional del producto y/o servicio a exportar.
        p Para ello, es necesario estudiar el entorno del producto y la empresa en general, considerando variables políticas, geográficas, económicas, entre otras. 
      .col-md-5       
        figure
          img(src="@/assets/tema2/img-1-.svg", )
    #t_2_1.titulo-segundo
      h2 2.1 ¿Qué es el entorno?
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10     
        .cajon.color-acento-contenido.fnd1.p-4.mb-4
          .row 
            .col-7
              p El entorno de <em>Marketing</em> de una organización, en sus relaciones de intercambio, se puede definir como el conjunto de fuerzas directas e indirectas, controlables e incontrolables, que son susceptibles de ejercer influencia, desde un ámbito microeconómico y macroeconómico, en todas sus acciones, decisiones y resultados. (Esteban, T, 2014, p. 61).
            .col-5 
              figure
                img.img-150(src="@/assets/tema2/img-2-.svg", )        
    h4 Matriz DOFA
    figure.mb-5
      img(src="@/assets/tema2/img-3.svg", )
      figcaption.mx-5 Autoría propia 
    p Es una herramienta metodológica de diagnóstico empresarial, estratégico y competitivo, que se emplea para identificar acciones factibles, mediante el cruce de variables, con el fin de formular y evaluar la estrategia.
    p.mb-5 El análisis debe hacerse teniendo en cuenta lo siguiente:
    .row.justify-content-around.align-items-center
      .col-lg-8 
        figure.mb-5
          img(src="@/assets/tema2/img-4.svg", )
          figcaption.mx-5 Autoría propia 

    separador
    #t_2_2.titulo-segundo
      h2 2.2 Macroentorno
    p Es un escenario no controlable, donde suceden todos los fenómenos que afectan las empresas de forma externa. 
    p.mb-5 Analicemos cada uno de ellos:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Entorno económico" :icono="require('@/assets/tema2/img-5.svg')")
        .row
          h4 Entorno económico
          

          .col-md-8.mb-4.mb-md-0
            p Los aspectos que influyen en el poder adquisitivo y consumo de los usuarios son:
            .row
              .col-6
                .ul.lista-ul--color.p-3
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Naturaleza del sistema económico.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Estado general de la economía.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Población.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Producto Interno Bruto (PIB).
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Renta per cápita.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Infraestructura social.
              .col-6
                .ul.lista-ul--color.p-3
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Recursos naturales.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Tasa de inflación.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Índice de desempeño.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Estabilidad monetaria.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Tipo de cambio monetario.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Disponibilidad de capital.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Tasa de interés.
                   

          .col-md-4
            figure
              img.img-300(src='@/assets/tema2/img-12.svg')
              figcaption.mx-5 Fuente: (Palacios, 2009, p. 21). 
              
      .py-4.py-md-5(titulo="Entorno legal" :icono="require('@/assets/tema2/img-6.svg')")
        .row
          h4 Entorno legal
          

          .col-md-8.mb-4.mb-md-0
            p Aspectos relacionados con las regulaciones y leyes que influyen en el ejercicio de las organizaciones:
            .row
              .ul.lista-ul--color.p-3
                li.mb-2
                  i.fas.fa-angle-right.ii
                  p Legislación comercial.
                li.mb-2
                  i.fas.fa-angle-right.ii
                  p Legislación tributaria.
                li.mb-2
                  i.fas.fa-angle-right.ii
                  p Sistema de impuestos y tasas.
                li.mb-2
                  i.fas.fa-angle-right.ii
                  p Eficacia del sistema legal.
          .col-md-4
            figure
              img.img-300(src='@/assets/tema2/img-13.svg')
              figcaption.mx-5 Fuente: (Palacios, 2009, p. 21).
      .py-4.py-md-5(titulo="Entorno político" :icono="require('@/assets/tema2/img-7.svg')")
        .row
          h4 Entorno político
          

          .col-md-8.mb-4.mb-md-0
            p Aspectos relacionados con los sistemas políticos que rigen los países:
            .ul.lista-ul--color.p-3
              li.mb-2
                i.fas.fa-angle-right.ii
                p Sistema político.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Ideología política.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Estabilidad del gobierno.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Fuerza de los partidos políticos y la oposición.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Política exterior.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Actitud del gobierno local, regional y nacional frente a las empresas.


          .col-md-4
            figure
              img.img-300(src='@/assets/tema2/img-14.svg')
              figcaption.mx-5 Fuente: (Palacios, 2009, p. 21).
      .py-4.py-md-5(titulo="Entorno demográfico" :icono="require('@/assets/tema2/img-8.svg')")
        .row
          h4 Entorno demográfico
          .col-md-8.mb-4.mb-md-0
            p Aspectos relacionados con las características de la población:
            .row
              .col-6
                .ul.lista-ul--color.p-3
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Tamaño de la población.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Ubicación y distribución geográfica.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Tasas de crecimiento.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Edad.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Sexo.

              .col-6
                .ul.lista-ul--color.p-3
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Raza.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Ocupación.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Distribución del ingreso.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Receptividad de bienes y servicios.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Infraestructura social.


          .col-md-4
            figure
              img.img-300(src='@/assets/tema2/img-15.svg')
              figcaption.mx-5 Fuente: (Palacios, 2009, p. 21).
      .py-4.py-md-5(titulo="Entorno tecnológico" :icono="require('@/assets/tema2/img-9.svg')")
        .row
          h4 Entorno tecnológico
          

          .col-md-8.mb-4.mb-md-0
            p Aspectos relacionados con la influencia que tiene la tecnología en el desarrollo actual de las empresas y cómo la utilizan para realizar su trabajo:

            .ul.lista-ul--color.p-3
              li.mb-2
                i.fas.fa-angle-right.ii
                p Procedimientos.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Equipo.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Investigación y desarrollo.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Avances científicos.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Tecnología de punta.

                   

          .col-md-4
            figure
              img.img-300(src='@/assets/tema2/img-16.svg')
              figcaption.mx-5 Fuente: (Palacios, 2009, p. 21).
      .py-4.py-md-5(titulo="Entorno sociocultural" :icono="require('@/assets/tema2/img-10.svg')")
        .row
          h4 Entorno sociocultural
          

          .col-md-8.mb-4.mb-md-0
            p Aspectos relacionados con la cultura que es la que en parte guía lo que ocurre en el sistema social:
            .row
              .col-6
                .ul.lista-ul--color.p-3
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Estilo de vida.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Nivel de educación.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Hábitos.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Principios.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Creencias.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Valores.

              .col-6
                .ul.lista-ul--color.p-3
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Estándares de comportamiento.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Seguridad.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Costumbres y normas sociales.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Actitudes y motivaciones.
                  li.mb-2
                    i.fas.fa-angle-right.ii
                    p Símbolos de estatus.

          .col-md-4
            figure
              img.img-300(src='@/assets/tema2/img-17.svg')
              figcaption.mx-5 Fuente: (Palacios, 2009, p. 21).
      .py-4.py-md-5(titulo="Entorno ecológico" :icono="require('@/assets/tema2/img-11.svg')")
        .row
          h4 Entorno ecológico
          .col-md-8.mb-4.mb-md-0
            p Aspectos relacionados con la conservación de la naturaleza y el uso de los recursos naturales:
            .ul.lista-ul--color.p-3
              li.mb-2
                i.fas.fa-angle-right.ii
                p Estado de la naturaleza.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Recursos naturales.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Renovación.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Niveles de contaminación.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Racionamiento energético.
              li.mb-2
                i.fas.fa-angle-right.ii
                p Costo de la energía.


          .col-md-4
            figure
              img.img-300(src='@/assets/tema2/img-18.svg')
              figcaption.mx-5 Fuente: (Palacios, 2009, p. 21).


    separador
    #t_2_3.titulo-segundo
      h2 2.3 Microentorno
    .row
      .col-lg-7
        .bloque-texto-b.color-secundario.p-4.mb-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 El microambiente es el ambiente más cercano a cada organización y constituye el nicho donde desarrolla sus operaciones, obtiene sus insumos y coloca sus productos y servicios
            i.fas.fa-quote-right  
            br
            span.p-cent.img-c (Palacios, 2009, p. 22).   
      .row.justify-content-around.align-items-center
        .col-md-9
          figure
            img(src='@/assets/tema2/img-19.svg')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
