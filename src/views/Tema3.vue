<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tratados de Libre Comercio (TLC) 

    h4 Introducción
    p Es indispensable identificar los acuerdos y tratados comerciales existentes entre los países para conocer los beneficios que estos proporcionan a las economías cuando quieren llevar sus operaciones a nivel internacional.
    p.mb-5 A continuación estudiaremos aspectos relevantes de los Tratados de Libre Comercio (TLC) y algunos ejemplos de los TLC vigentes entre Colombia y los demás países.
    h4 ¿Qué es un Tratado de Libre Comercio?
    p.mb-5 Se denomina Tratado de Libre Comercio (TLC) al acuerdo comercial existente entre dos o más países, mediante el cual se establece un conjunto de reglas que les permiten comercializar (comprar y vender) productos y servicios entre sí, aumentando los flujos de comercio e inversión.
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4.fnd2
          
          p Estas normas determinan cómo y cuándo se eliminarán las barreras arancelarias para conseguir el libre paso de los productos y servicios entre los países participantes y que se realicen “sin restricciones injustificadas y en condiciones transparentes y predecibles” (Ministerio de Agricultura y Desarrollo Rural, 2016).

    #t_3_1.titulo-segundo
      h2 3.1 Objetivos
    .row
      .col-md-6.align-self-center.mb-5
        figure
          img(src="@/assets/tema3/img-1.svg", )
      .col-md-6  
        .ul.lista-ul--color.p-3
          li.mb-2
            i.fas.fa-angle-right.ii
            p Incrementar el comercio internacional y las exportaciones de los productos o servicios con ventajas competitivas de los países firmantes del TLC o del acuerdo comercial. 
          li.mb-2
            i.fas.fa-angle-right.ii
            p Incrementar la inversión extranjera por parte de los inversionistas de los países firmantes o de terceros países. 
          li.mb-2
            i.fas.fa-angle-right.ii
            p Fortalecer los lazos de amistad y cooperación, promoviendo la integración económica. 
          li.mb-2
            i.fas.fa-angle-right.ii
            p Crear nuevas oportunidades de empleo y mejorar el nivel de vida. Promover un desarrollo económico integral para reducir la pobreza. 
          li.mb-2
            i.fas.fa-angle-right.ii
            p Estimular la creatividad y la innovación, promoviendo el comercio en los sectores innovadores.
          li.mb-2
            i.fas.fa-angle-right.ii
            p Establecer reglas que rijan el intercambio comercial entre los países firmantes. 
          li.mb-2
            i.fas.fa-angle-right.ii
            p Asegurar un marco jurídico y comercial para los negocios y las inversiones. 
          li.mb-2
            i.fas.fa-angle-right.ii
            p Implementar el tratado con una cooperación en materia ambiental. 
          li.mb-2
            i.fas.fa-angle-right.ii
            p Permitir a los compradores adquirir sus artículos dentro de una mayor gama de productos disponibles.  (Van, D. B. R. É. 2014)
    separador 

    #t_3_2.titulo-segundo
      h2 3.2 El porqué de los TLC

    p El incremento en las exportaciones originado por los Tratados de Libre Comercio, llega a ser beneficioso para los países involucrados porque:
    .row.justify-content-around.align-items-center.mb-5
      .col-md-8
        .tabla-b.color-acento-contenido.mb-5
          table
            tr.tabla-b__header
              th.wd-50 Exportador
              td.wd-50 Importador
            tr
              th El exportador vende productos en los que tiene ventaja competitiva internacional.
              td Adquiere los productos importados más baratos que si los produjera en su país.
            tr
              th Incrementa su Producto Nacional Bruto (PNB) y su Balanza Comercial (BC).
              td Al importador le permite llevar nueva maquinaria, nuevos productos y nuevas tecnologías al país.
            tr
              th La exportación le permite al país productor bajar sus costos debido a la economía de escala por el mayor volumen de producción que implica tener acceso a otros mercados.  
              td A mediano y largo plazo coadyuvará a su crecimiento económico e industrial.
      
    p.mb-5 En el comercio internacional, cada país exporta los bienes o servicios que tenga en abundancia e importa los que le sean escasos y le ayuden a su desarrollo o a mejorar la calidad de vida de sus habitantes. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/io6CoTPxrB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 
    p.mb-5 Así también se promueven las instituciones gubernamentales y privadas, transparentes y responsables, que coadyuven al desarrollo industrial y comercial de un país, con un respeto absoluto hacia los derechos humanos, educando y preparando la población para que con su esfuerzo ayude al desarrollo de sus comunidades, incluyendo beneficios para el cuidado y la conservación de la naturaleza y el medio ambiente. Algunos gobiernos, afortunadamente cada vez menos, creen que reducir las importaciones es beneficioso para la economía de su país y que la globalización con la disminución o eliminación de aranceles genera un retroceso en el sector industrial y, por ende, en la economía de la nación. Por el contrario, reducir las importaciones es perjudicial para la economía del país, ya que conlleva a disminuir las exportaciones, debido a: 

    .row.fond-3.px-5.mb-5
      LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")
    
    #t_3_3.titulo-segundo
      h2 3.3 Tratados de Libre Comercio vigentes

    p Actualmente, Colombia cuenta con los siguientes TLC:
    .row.mx-3.justify-content-around.align-items-center
      .col-11
        ImagenInfografica.color-acento-botones.mb-5

          template(v-slot:imagen)
            figure
              img(src='@/assets/tema3/img-11.png', alt='Tratados de Libre Comercio vigentes')
              

          .tarjeta.color-primario.p-3(x="44.3%" y="16%")
            p.text-center El Acuerdo Comercial Multipartes entre la Unión Europea, Colombia, Perú y Ecuador, está en vigencia provisional desde el 1 de agosto de 2013, mediante el Decreto 1513 del 18 de julio de 2013.
          .tarjeta.color-primario.p-3(x="55.5%" y="18.7%")
            p.text-center Acuerdo Comercial, Acuerdo de Promoción Comercial entre la República de Colombia y los Estados Unidos de América, suscrito el 22 noviembre de 2006 y puesto en vigencia el 15 de mayo de 2012.   
          .tarjeta.color-primario.p-3(x="65.5%" y="25.4%")
            p.text-center El Acuerdo de Promoción Comercial entre Colombia y Canadá fue suscrito en Lima, Perú, el 21 de noviembre de 2008. Complementa el Acuerdo de Cooperación Laboral y el Acuerdo de Cooperación Ambiental firmados en la misma fecha. El Acuerdo entró en vigor el 15 de agosto de 2011, y fue aprobado mediante la Ley1363 del 9 de diciembre de 2009 por el Congreso Colombiano.
          .tarjeta.color-primario.p-3(x="71.3%" y="36.4%")
            p.text-center El acuerdo de Libre Comercio entre Colombia  y los Estados  AELC-EFTA (Suiza, Noruega, Islandia y Liechtenstein) se suscribió el 25 de noviembre de 2008 y fue aprobado mediante ley 1372del 7 de enero de 2010.
          .tarjeta.color-primario.p-3(x="73.8%" y="49%")
            p.text-center El acuerdo comercial entre Colombia y Corea del Sur se suscribió el 21 de febrero de 2013 en Seúl. Fue aprobado en el Congreso de Colombia mediante la Ley 1747 del 26 de diciembre de 2014 y declarado exequible por la Corte Constitucional el 14 de abril de 2016. Entró en vigor  el 15 de Julio de 2016.

          .tarjeta.color-primario.p-3(x="71.8%" y="62.9%")
            p.text-center La Alianza del Pacífico es un mecanismo de articulación política, económica y una plataforma de integración entre Chile, Colombia, México y Perú con el Asia Pacifico, establecido en abril de 2011 con la Declaración Presidencial de Lima. Constituido formal y jurídicamente el 6  de  junio  de  2012,  con  la suscripción del Acuerdo Marco, el cual entró en vigor el 20 de julio de 2015. Está definida como un área de integración profunda, que busca avanzar progresivamente hacia la libre circulación de bienes, servicios, capitales y personas.

          .tarjeta.color-primario.p-3(x="65.5%" y="73%")
            p.text-center El Acuerdo de Integración Subregional Andino, suscrito el 26 de mayo de 1969, y posteriormente denominado Acuerdo de Cartagena, comenzó a gestarse desde	1966 con la Declaración  de  Bogotá, y  entró  en vigencia el  16 de octubre de 1969, cuando el Comité permanente de la ALALC obtuvo la ratificación oficial del Gobierno de Perú, después de la de los  Gobiernos  de  Colombia y Chile.  En  1973,  Venezuela  adhirió, Chile se retiró en 1976, y en el año 2006 Venezuela lo denunció, concluyendo	su proceso de desvinculación en 2011.
          .tarjeta.color-primario.p-3(x="55.5%" y="80%")
            p.text-center Las  preferencias comerciales con Argentina, Brasil, Paraguay y Uruguay se rigen por el Acuerdo de Complementación Económica No  72 (ACE-72), suscrito en julio de 2017, el cual recoge lo acordado en el ACE-59, vigente desde el año 2005.
          .tarjeta.color-primario.p-3(x="44.5%" y="83%")
            p.text-center En 1994, Colombia y Venezuela suscribieron con México un Acuerdo Comercial denominado Tratado del Grupo de los Tres (TLC-G#), que entró en vigor en enero de 1995. En agosto de 2009, Colombia y México culminaron trabajos de adecuación del Acuerdo, el cual se ajustó a las nuevas realidades comerciales, luego de la salida de Venezuela, en 2006. En junio de 2010 se suscribió el Protocolo Modificatorio, que entró en vigor en agosto de 2011. Cabe anotar que este acuerdo tiene un alcance de la Alianza del Pacifico.
          .tarjeta.color-primario.p-3(x="33.4%" y="78.7%")
            p.text-center El Acuerdo entre Colombia y los países del Triángulo Norte (TN) fue firmado en agosto de 2007 y entró en vigor de manera bilateral así: Colombia -Guatemala en noviembre de 2009, Colombia -El Salvador en febrero de 2010 y Colombia-Honduras en marzo de 2010.
          .tarjeta.color-primario.p-3(x="24%" y="72.2%")
            p.text-center El Acuerdo Complementación Económica (ACE) No 224, suscrito en Santiago de Chile el 6 de diciembre de 1993, entró en vigencia el 1o de enero de 1994, e incluye disposiciones relacionadas con el ámbito de bienes. En noviembre de 2006 se constituye un Protocolo adicional al ACE N224, el cual entró en vigor en mayo de 2009, e incorpora disciplinas en servicios,	compras públicas, inversión, así como compromisos en materia laboral y ambiental.
          .tarjeta.color-primario.p-3(x="18.3%" y="61.3%")
            p.text-center Acuerdo de Alcance Parcial de naturaleza Comercial AAPC No 28, suscrito en noviembre de 2011 y vigente desde octubre de 2012. Con el Acuerdo, Colombia recibe preferencias arancelarias del 100% en más de 4,900 subpartidas por parte de Venezuela y preferencias entre el 0% y 80% para 109 subpartidas. Por su parte, Colombia otorga preferencias arancelarias del 100% a más de 4,800 subpartidas y entre 0% y 33% a 111 subpartidas.
          .tarjeta.color-primario.p-3(x="16.2%" y="49%")
            p.text-center El tratado de Libre Comercio con Costa Rica fue aprobado mediante la Ley 1763 del 15 de julio de 2016 y entró en vigencia el 1o de agosto de 2016. Por sectores, el 81% de los productos agrícolas iniciaron un proceso de desgravación de aranceles en plazos máximos de 15 años. Para  la indusria, este porcentaje alcanza el 98% de los productos en plazos máximos de 15 años.
          .tarjeta.color-primario.p-3(x="17.5%" y="37%")
            p.text-center El acuerdo de Alcance Parcial No 31 sobre Comercio y Cooperación Económica y Técnica, entró  en vigencia  a partir del 1 de enero de 1995, mediante el Decreto No 2891 y el 1 de enero de 1999, mediante el Decreto No 973. Países miembros de CARICOM (de los 15 miembros) que participan del AAP No 31 son: Trinidad y Tobago, Jamaica, Barbados, Guyana, Antigua y Barbuda, Belice, Dominica, Granada, Monserrat, San Cristobal y Nieves, Santa Lucia, San Vicente y las Granadinas. Los países de CARICOM  que no son parte del AAP No31 son: Surinam, Haiti y Bahamas.
          .tarjeta.color-primario.p-3(x="24%" y="26%")
            p.text-center El acuerdo de Complementación Económica No 49 está vigente desde julio de 2001. El acuerdo  abarca cerca de 1,500 productos con preferencias a favor de Colombia y casi 1,000 a favor de Cuba. Beneficia a productos  como: carne bovina, lácteos, flores, hortalizas, café, confetis, mermeladas, maquinaria, equipos, vehículos, entre otros. Este Acuerdo se ha profundizado en tres ocasiones.
          .tarjeta.color-primario.p-3(x="33%" y="18.3%")
            p.text-center Desde julio de 1993, Colombia y Panamá tienen vigente el AAP N229, que incluye dos protocolos modificatorios de 2005 y 2013. En el marco de este Acuerdo, Colombia otorga preferencias en más de 300 productos y recibe preferencias en más de 80 productos, que van del 20% al 100%.

    p.mb-5 Pero ¿Qué buscan los países al agruparse en estos tratados? “La dinámica económica del mundo ha llevado a realizar alianzas, acuerdos y comercios que permitan comprar a menor precio y vender en mejores condiciones, siempre con el objetivo de lograr un mayor bienestar para los ciudadanos” (El Tiempo, 2004).


    #t_3_4.titulo-segundo
      h2 3.4 Beneficios de un Tratado de Libre Comercio (TLC)
    .row
      .col-md-5
        figure.mb-5
            img(src="@/assets/tema3/img-12.svg", )

      .col-md-7
        .bloque-texto-b.color-secundario.p-4.mb-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Amplía el comercio y promueve la eficiencia, el ingreso real de la población aumenta. Si esto es dinámico, el beneficio se dará a través de mayores tasas de crecimiento económico, que reducirán la pobreza absoluta, generando un ingreso per cápita ascendente
            i.fas.fa-quote-right  
            br
            span.p-cent.img-c Andere y Kessel, 1992 
        p Se espera que al ingresar un mayor flujo de inversión y comercio, se aproveche la ventaja comparativa sobre todo proceso intensivo en mano de obra, lo que generaría un aumento de la producción de los países involucrados, unido al mejoramiento del empleo y los salarios.
        p En cualquier negociación se corren riesgos, puede haber empresas ganadoras y perdedoras, pero para ello cada país cuenta con un grupo de negociadores bien preparados que intercambian propuestas y las discuten, teniendo en cuenta el bienestar de sus empresarios, su población y del país en general (Colombia.com, s.f.).
    separador 

    #t_3_5.titulo-segundo
      h2 3.5 Diferencias entre un Tratado de Libre Comercio y un Acuerdo Comercial
    .row
      .col-md-6.fond5.p-5
        figure.mb-5
          img.img-200(src="@/assets/tema3/img-13.svg", )
        h4.texxt Tratados de libre comercio
        p.texxt - Acuerdo bilateral
        p.texxt - Busca crear una zona de libre comercio.
        p.texxt - Libre circulación  para bienes,  servicios y capitales.
        p.texxt - Políticas  y normas jurídicas tendientes a la armonización de los objetivos.

      .col-md-6.fond5-.p-5.texxt
        figure.mb-5
          img.img-200(src="@/assets/tema3/img-14.svg", )     
        h4.texxt Acuerdos comerciales
        p.texxt - Término general utilizado para una negociación.
        p.texxt - Se pueden distinguir tres tipos de acuerdos, según el alcance:
        p.texxt - Acuerdo de  alcance parcial (el más básico en materias arancelarias).
        p.texxt - Acuerdo de asociación estratégica (alcance medio  donde también se tratan temas no comerciales como tecnológica o social).
        p.texxt - Acuerdos  de complementación economica, por lo general,  son acuerdos con objetivos integradores de apertura para mercancias y materias primas,  mayores a los Acuerdos de Alcance Parcial.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        texto:
          'Los productos que se exportan utilizan materias primas o productos semielaborados que previamente se han importado de países que los producen en exceso o que tienen una ventaja comparativa internacional; si estos no se pueden adquirir, por regulación del gobierno, las exportaciones serán menos competitivas.',
        icono: require('@/assets/tema3/img-2.svg'),
      },
      {
        texto:
          'Existen convenios comerciales entre países, en los que una nación adquiere productos del otro siempre y cuando el primero compre los artículos que ofrece el segundo, dentro de una gama de productos. Si un país pone cortapisas a sus importaciones, otros países también decretarán sus propias barreras arancelarias, creándose una cadena que disminuye notablemente el comercio internacional y afectan las exportaciones del país que inició la comercialización.',
        icono: require('@/assets/tema3/img-3.svg'),
      },
      {
        texto:
          'El cierre de importaciones crea una fuerte presión para afectar la rata de cambio y la devaluación de la moneda, originado por la dificultad de lograr divisas obtenidas mediante la exportación de sus productos.',
        icono: require('@/assets/tema3/img-4.svg'),
      },
      {
        texto:
          'Los productos importados, normalmente son más económicos que los nacionales, lo cual conlleva a disminuir la tasa de inflación de un país y a mejorar la calidad de vida de sus habitantes, al tener los consumidores, una mayor gama de productos a precios razonables.',
        icono: require('@/assets/tema3/img-5.svg'),
      },
      {
        texto:
          'Al sentir la competencia internacional muchos empresarios salen de su modorra administrativa y gerencial, sintiéndose en la necesidad de investigar e innovar para hacer a su empresa más competitiva, mediante la utilización de la reingeniería o una reestructuración profunda, por ejemplo, cambiando de producto o de mercado objetivo, hacia una línea en que sea más competitiva internacionalmente.',
        icono: require('@/assets/tema3/img-6.svg'),
      },
      {
        texto:
          'Las empresas exportadoras aplican una tecnología mayor que las que se dedican a suplir el mercado doméstico, y así consiguen una productividad más alta y, por ende, pueden pagar mejores salarios a sus colaboradores, lo cual coadyuva a incrementar el Ingreso Per Cápita del país.',
        icono: require('@/assets/tema3/img-7.svg'),
      },
      {
        texto:
          'Al aprovechar las ventajas de los Tratados de Libre Comercio, se exporta más porque se incrementan las ventas en el mercado, lo que lleva al aumento de la producción por la economía de escala, y los costos unitarios de producción se disminuyen, lo que permite bajar el precio de venta sin afectar las utilidades, lo que hace a las empresas más competitivas en el mercado nacional e internacional.',
        icono: require('@/assets/tema3/img-8.svg'),
      },
      {
        texto:
          'La exportación es una venta adicional que le permite al empresario obtener unas ganancias extras con unos costos de producción bajos, al utilizar la misma maquinaria, activos fijos e instalaciones de la empresa.',
        icono: require('@/assets/tema3/img-9.svg'),
      },
      {
        texto:
          'El empresario, al incrementar sus exportaciones, gracias a los Tratados de Libre Comercio o los Acuerdos Comerciales, puede elegir entre una gran gama de países y de compradores de diferentes tamaños, con distintos volúmenes de compra y con un pago más seguro, especialmente si la exportación está garantizada por un banco comercial (Van, D. B. R. É., 2014).',
        icono: require('@/assets/tema3/img-10.svg'),
      },
    ],

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
