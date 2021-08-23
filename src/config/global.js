export default {
  global: {
    componenteFormativo: 'Diagnóstico del mercado',
    descripcionCurso:
      'En el deseo de incursionar en mercados internacionales, el diagnóstico es el primer proceso que permite analizar las variables a considerar en el estudio de mercados.<br/><br/>Mediante el estudio del presente material, será posible identificar los diferentes métodos usados para la selección de ideas, enfocado a la elección del bien y/o servicio a comercializar.<br/><br/>Finalmente, se abordará una breve introducción al plan de mercadeo, con sus objetivos y estrategias.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de selección de ideas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Método <em>Lambin</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Método <em>Brainstorming</em> (lluvia de ideas)',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Método de ponderación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Método DOFA',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagnóstico del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es el entorno?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Macroentorno',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Microentorno',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tratados de Libre Comercio (TLC)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Objetivo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El porqué de los TLC',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tratados de Libre Comercio vigentes',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Beneficios de un Tratado de Libre Comercio (TLC)',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Diferencias entre un Tratado de Libre Comercio y un Acuerdo Comercial',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Introducción al plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Objetivos del plan de mercadeo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estrategia básica del mercadeo',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Andere, E. y Kessel, G. (1992). <em>México y el tratado trilateral de libre comercio: impacto sectorial.</em> México D.F.: MacGraw-Hill.',
    },
    {
      referencia:
        'Barón, J. (2002). <em>Las regiones económicas de Colombia: un análisis de clusters.</em> ',
      link: 'http://www.banrep.gov.co/',
    },
    {
      referencia:
        'Colombia.com. (s.f.) ¿Cuáles son los sectores beneficiados y perjudicados por el TLC?. ',
      link: 'http://www.colombia.com',
    },
    {
      referencia:
        'Dimitri, C. R., & Rodríguez, S. Á. (2009). <em>Planeación estratégica</em>. ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Esteban, T. Á. (3a. ed.). (2014).<em> Principios de marketing.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Fernández, C., Llorente, A. y Pérez, E. (2007). Economía. Madrid, España: EDITEX S.A.',
    },
    {
      referencia:
        'Fernández, R. (3a. ed.). (2009). <em>Segmentación de Mercados.<em> McGraw-Hill Interamericana. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=687&pg=20',
    },
    {
      referencia:
        'Fernández, R. A. (2005). <em>Creatividad e innovación en empresas y organizaciones: técnicas para la resolución de problemas.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Limas, S. S. J. (2012). <em>Marketing empresarial: dirección como estrategia competitiva.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Mankiw, G. (7a. ed.). (2017). <em>Principios de economía.</em> Cengage. ',
      link:
        'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3752&pg=108 Página 75.',
    },
    {
      referencia:
        'Martínez, S. J. M., & Jiménez, E. (2001). <em>Marketing.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2016). <em>Modelo de inteligencia de mercado.</em> Bogotá, Colombia: Impresol Ediciones Ltda.',
    },
    {
      referencia:
        'Murcia, C. H. H. (2011). <em>Creatividad e innovación para el desarrollo empresarial.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Palacios, A. L. C. (2009). <em>Dirección estratégica.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Palacios, L. (2010).<em> Dirección estratégica.</em> Bogotá, Colombia: D´Vinni Impresos. ',
    },
    {
      referencia:
        'Prettel, G. (2016).<em> Marketing, una herramienta para el crecimiento.<em> Ediciones de la U. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=35',
    },
    {
      referencia:
        'ProColombia. (2011).<em> Oferta colombiana en exportaciones.</em> ',
      link: 'http://www.procolombia.co',
    },
    {
      referencia:
        'ProColombia. (s.f.). <em>Inversión en el sector servicios en Colombia.</em> ',
      link: 'http://www.inviertaencolombia.com.co',
    },
    {
      referencia:
        'Rojas, L. M. D., & Medina, M. L. J. (2011). <em>Planeación estratégica: fundamentos y casos.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Scheeider, F. L., Kimbrell, G., & Woloszyk, C. A. (2001). <em>Mercadeo en el siglo XXI.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Van, D. B. R. É. (2014). <em>Tratados de libre comercio: retos y oportunidades.</em> ProQuest Ebook Central. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
  ],
  glosario: [
    {
      termino: 'Canal de distribución',
      significado:
        'Camino seguido por el producto, a través de los intermediarios; va desde el productor al consumidor final. ',
    },
    {
      termino: 'Ciclo de vida del producto',
      significado:
        'Trayectoria que sigue un producto desde su concepción hasta su eliminación de la línea. Las etapas incluyen: introducción, crecimiento, madurez y declinación.',
    },
    {
      termino: 'Clientes',
      significado: 'Quienes compran los productos o servicios.',
    },
    {
      termino: 'Competidores',
      significado:
        'Otras empresas que participan en el mercado con productos y/o servicios similares.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Persona que compra productos de consumo. En mercadeo se aplica a todo comprador.',
    },
    {
      termino: 'Cortapisas',
      significado: 'Barrera o restricción para realizar una acción.',
    },
    {
      termino: 'Costo de vida',
      significado:
        'Representa el valor o coste de los bienes y servicios que los hogares consumen para obtener determinado nivel de satisfacción.',
    },
    {
      termino: 'Demanda',
      significado:
        'La cantidad de bienes y servicios que son adquiridos por consumidores a diferentes precios, o de una unidad de tiempo específico.',
    },
    {
      termino: 'Devaluación de la moneda',
      significado:
        'Es la pérdida del valor de una moneda de un país frente a otras monedas extranjeras.',
    },
    {
      termino: 'Economía de escala',
      significado:
        'El poder que tiene una empresa cuando alcanza un ritmo óptimo de producción para ir produciendo más a menor coste, puesto que a medida que la producción en una empresa crece, sus costes por unidad producida se reducen.',
    },
    {
      termino: 'Elasticidad de la oferta',
      significado:
        'Es un indicador usado en economía para expresar la capacidad de respuesta o flexibilidad de la cantidad ofertada de un producto o servicio, frente a un cambio de su precio.',
    },
    {
      termino: 'Ingreso per cápita',
      significado:
        'Es un cálculo que se realiza para determinar el ingreso que recibe, en promedio, cada uno de los habitantes de un país; es decir, en promedio, cuánto es el ingreso que recibe una persona para subsistir. Este cálculo se obtiene dividiendo el ingreso nacional entre la población total de un país.',
    },
    {
      termino: 'Entorno',
      significado:
        'Se puede definir como el conjunto de fuerzas directas e indirectas, controlables e incontrolables, que son susceptibles de ejercer influencia, desde un ámbito microeconómico y macroeconómico, en todas sus acciones, decisiones y resultados.',
    },
    {
      termino: 'Macroentorno',
      significado:
        'Son todos los factores externos que influyen en la empresa como son: entorno económico, entorno demográfico, entorno legal, entorno tecnológico, entorno ambiental.',
    },
    {
      termino: 'Marketing',
      significado:
        'Conjunto de actividades destinadas a lograr, con beneficio, la satisfacción del consumidor mediante un producto o servicio.',
    },
    {
      termino: 'Mercadeo internacional',
      significado:
        'Es la forma en que una empresa extiende sus esfuerzos para incluir mercados en el extranjero, exportando sus productos y/o servicios y adaptándose a las condiciones de la economía global.',
    },
    {
      termino: 'Mercado local',
      significado:
        'En el ámbito geográfico es el espacio más reducido del mercado. Hace referencia a las empresas, emprendimientos y negocios que se encuentran ubicados y desarrollan sus operaciones en veredas, municipios y departamentos.',
    },
    {
      termino: 'Mercados',
      significado:
        'Conjunto de transacciones de procesos o intercambio de bienes o servicios entre individuos.',
    },
    {
      termino: 'Mercados globales',
      significado:
        'Su origen no es otro que el fenómeno de la globalización. En un mundo tan avanzado como el actual, las empresas operan a nivel mundial, realizando operaciones comerciales que incluyen prácticamente todas las zonas del planeta.',
    },
    {
      termino: 'Mercados internacionales',
      significado:
        'Todas aquellas empresas que extienden sus actividades por diversos países, por ende, los compradores potenciales tienen distintas nacionalidades.',
    },
    {
      termino: 'Mercados nacionales',
      significado:
        'Este tipo de mercado extiende sus operaciones hacia los clientes potenciales en todo el país.',
    },
    {
      termino: 'Método',
      significado:
        'Es un procedimiento ordenado y sistemático que se hace para alcanzar un objetivo.',
    },
    {
      termino: 'Método Brainstorming',
      significado:
        'Es reconocido porque proporciona la libertad suficiente para resolver problemas, mediante la acumulación de todas las ideas expresadas por los miembros del grupo.',
    },
    {
      termino: 'Método de ponderación',
      significado:
        'Esta técnica se utiliza para la selección de ideas en equipo, utilizando criterios ponderados para llevarlo a cabo, se debe asignar a cada uno de los criterios una cifra ponderada según la importancia en el proceso de selección, siendo el valor más alto el que se debe tener en cuenta como el correcto o el más indicado.',
    },
    {
      termino: 'Método DOFA',
      significado:
        'Este método de selección le permite realizar un análisis sobre problemas existentes en la organización, su función radica en la identificación de debilidades, oportunidades, fortalezas y amenazas que giran en torno al problema que se quiere solucionar.',
    },
    {
      termino: 'Microentorno',
      significado:
        'El microambiente es el ambiente más cercano a cada organización y constituye el nicho donde desarrolla sus operaciones, obtiene sus insumos y coloca sus productos y servicios.',
    },
    {
      termino: 'Modorra',
      significado: 'Letargo o somnolencia empresarial.',
    },
    {
      termino: 'Oferta',
      significado:
        'La cantidad ofrecida de cualquier bien o servicio, es la cantidad que los vendedores quieren y pueden vender.',
    },
    {
      termino: 'País subdesarrollado',
      significado:
        'Es aquel que tiene un nivel bajo de Producto Interno Bruto (PIB) per cápita y presenta impedimentos estructurales para su crecimiento económico sostenido.',
    },
    {
      termino: 'Países más desarrollados',
      significado:
        'Se refiere a los países más industrializados y poseen un alto nivel de vida, como son: Estados Unidos, diferentes naciones europeas, Canadá, Australia y Japón.',
    },
    {
      termino: 'Planear',
      significado:
        'Es la etapa que forma parte del proceso administrativo, mediante la cual se establecen directrices, se definen estrategias y se seleccionan las alternativas y rutas de acción, en función de objetivos y metas generales, económicas, sociales y políticas, tomando en consideración los recursos reales y potenciales que permitan establecer un marco de referencia necesario para concretar programas y acciones específicas en tiempo y espacio, logrando una predicción lo más probable del futuro, para generar planes que puedan garantizar el éxito.',
    },
    {
      termino: 'Plantas subsidiarias',
      significado:
        'Es aquella que está controlada por una estación más grande llamada matriz.',
    },
    {
      termino: 'Proveedores',
      significado:
        'Quienes suministran los recursos para la elaboración de un producto o prestación de un servicio.',
    },
    {
      termino: 'Rata de cambio',
      significado:
        'Es el valor de la moneda corriente de un país expresado en la moneda de otro.',
    },
    {
      termino: 'Tasas de crecimiento económico',
      significado:
        'Es la variación porcentual del PIB (Producto Interno Bruto) real en un período de tiempo determinado, usualmente un año.',
    },
    {
      termino: 'Tasa de inflación',
      significado:
        'La tasa de inflación refleja el aumento porcentual de los precios en un determinado período de tiempo.',
    },
    {
      termino: 'Tratado de Libre Comercio',
      significado:
        'Acuerdo comercial existente entre dos o más países, mediante el cual se establecen un conjunto de reglas que les permiten comercializar (comprar y vender) productos y/o servicios entre sí, aumentando los flujos de comercio e inversión.',
    },
  ],

  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Kateryn Valderrama',
        cargo: 'Experta Técnica',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'José Gregorio Ramírez',
        cargo: 'Experto Técnico',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Bertha Paola Bejarano Ávila',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Evaluador Instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Adriana Lozano Zapata',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Zenen Arevalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Carlos Julián Ramírez Benítez', 'Lady Adriana Ariza Luque'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
