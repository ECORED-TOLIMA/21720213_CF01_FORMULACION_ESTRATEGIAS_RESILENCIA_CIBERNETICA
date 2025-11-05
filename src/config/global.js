export default {
  global: {
    componenteFormativo: 'Fundamentos y factores de continuidad del negocio',
    descripcionCurso:
      'Este componente formativo aborda los fundamentos de la seguridad de la información y la continuidad del negocio, pilares para garantizar la sostenibilidad operativa. Incluye el estudio de activos, riesgos, procesos críticos, resiliencia organizacional y sistemas de gestión de continuidad, junto con la normativa aplicable, para establecer factores que aseguren la estabilidad empresarial ante incidentes o interrupciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Seguridad de la información y activos organizacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Activos de información y sus características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios de seguridad de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Identificación de riesgos asociados a los activos de información',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Continuidad del negocio y resiliencia organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Relación entre continuidad y resiliencia organizacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Procesos críticos y su impacto en la sostenibilidad del negocio',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Beneficios de la continuidad del negocio para las organizaciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Proyectos de continuidad del negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos y características de los proyectos de continuidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Objetivos y alcance de los proyectos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Beneficios y buenas prácticas en su implementación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión del riesgo en la continuidad del negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Identificación y análisis de riesgos operativos y tecnológicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Evaluación de probabilidad e impacto',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Estrategias para mitigar riesgos y fortalecer la resiliencia organizacional',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistema de Gestión de Continuidad del Negocio (SGCN)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estructura y componentes del sistema',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características clave para su implementación efectiva',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Normativa y estándares internacionales aplicables',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aplicación práctica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Identificación de activos y procesos críticos en una organización',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Análisis de riesgos y continuidad operativa',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Caracterización de necesidades de seguridad de la información',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_2720213_DU.pdf',
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
  complementario: [
    {
      tema: 'Seguridad de la información y activos organizacionales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Controles y estándares para el manejo de la seguridad de la información</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=n6Dffo75ts0',
    },
    {
      tema: 'Sistema de Gestión de Continuidad del Negocio (SGCN)',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Sistemas de gestión de continuidad del negocio - SGCN</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qpuZFGZG8Gk',
    },
    {
      tema: 'Sistema de Gestión de Continuidad del Negocio (SGCN)',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Implementación de un SGCN</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZbrLjTtDFcY',
    },
  ],
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'Recurso que posee valor para la organización, como datos, sistemas, infraestructura o conocimientos, cuya protección es fundamental para mantener la operación y la seguridad institucional.',
    },
    {
      termino: 'Análisis de impacto en el negocio (BIA)',
      significado:
        'Herramienta que permite identificar los procesos críticos y evaluar las consecuencias de su interrupción, ayudando a definir estrategias de recuperación efectivas.',
    },
    {
      termino: 'Continuidad del negocio',
      significado:
        'Capacidad de una organización para mantener sus funciones críticas y recuperarse rápidamente ante incidentes que interrumpan sus operaciones normales.',
    },
    {
      termino: 'ISO 22301',
      significado:
        'Norma internacional que establece los requisitos para implementar y mantener un Sistema de Gestión de Continuidad del Negocio eficaz.',
    },
    {
      termino: 'ISO 27001',
      significado:
        'Norma que define los lineamientos para establecer, implementar y mantener un Sistema de Gestión de Seguridad de la Información (SGSI).',
    },
    {
      termino: 'Resiliencia organizacional',
      significado:
        'Habilidad de una organización para adaptarse, resistir y recuperarse de situaciones adversas, garantizando su estabilidad y sostenibilidad a largo plazo.',
    },
    {
      termino: 'Riesgo operativo',
      significado:
        'Posibilidad de pérdidas o impactos negativos debido a fallas en los procesos, el personal, los sistemas o factores externos.',
    },
    {
      termino: 'RPO (Recovery Point Objective)',
      significado:
        'Cantidad máxima de datos que una organización puede permitirse perder, medida en el tiempo transcurrido entre la última copia de seguridad y el momento de la interrupción.',
    },
    {
      termino: 'RTO (Recovery Time Objective)',
      significado:
        'Tiempo máximo aceptable que una organización puede tardar en recuperar un proceso o sistema tras una interrupción.',
    },
    {
      termino: 'Sistema de Gestión de Continuidad del Negocio (SGCN)',
      significado:
        'Conjunto de políticas, procedimientos y recursos que aseguran la planificación, implementación y mejora continua de la continuidad operativa en la organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'ISO. (2018). <em>ISO 31000:2018 - Risk management: Guidelines</em>. International Organization for Standardization.',
      link: '',
    },
    {
      referencia:
        'ISO. (2019). <em>ISO 22301:2019 - Security and resilience - Business continuity management systems - Requirements</em>. International Organization for Standardization.',
      link: '',
    },
    {
      referencia:
        'ISO. (2022). <em>ISO/IEC 27001:2022 - Information security, cybersecurity and privacy protection - Information security management systems - Requirements</em>. International Organization for Standardization.',
      link: '',
    },
    {
      referencia:
        'ISO. (s.f.). <em>ISO/IEC 27005 - Information security risk management</em>. International Organization for Standardization.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (2013). Decreto 1377 de 2013. <em>En uso de sus atribuciones constitucionales, y en particular las previstas en el numeral 11 del artículo 189 de la Constitución Política y en la Ley 1581 de 2012</em>. Reglamentario del Sector de Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646',
    },
    {
      referencia:
        'República de Colombia. (2015). <em>Decreto 1083 de 2015. Por medio del cual se expide el Decreto Único</em>. Reglamentario del Sector de Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62866',
    },
    {
      referencia:
        'República de Colombia. (2020). <em>Políticas de Operación Proceso de Tecnologías de la Información</em>. Reglamentario del Sector de Función Pública.',
      link:
        'https://www1.funcionpublica.gov.co/documents/418537/36701283/politica-de-seguridad-de-la-informacion.pdf.pdf/325019e5-a92f-0b44-3676-2356bd71240c?t=1586355315672',
    },
    {
      referencia:
        'República de Colombia. (2012). <em>Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales</em>. Reglamentario del Sector de Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2014). Circular Básica Jurídica. Circular Externa 029 de 2014 (Capítulo VI, Título I).',
      link: '',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2025). Circular Externa 006 de 2025 — Versión actualizada de la Circular Básica Jurídica.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Armando Javier López Sierra',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
