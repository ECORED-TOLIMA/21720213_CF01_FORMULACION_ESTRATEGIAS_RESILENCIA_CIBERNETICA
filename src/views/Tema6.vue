<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 6
      h1 Aplicación práctica
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La aplicación práctica de los conceptos relacionados con la continuidad del negocio y la seguridad de la información permite trasladar los conocimientos teóricos a escenarios reales, fortaleciendo la capacidad de análisis, diagnóstico y toma de decisiones en contextos organizacionales. En esta etapa, el aprendiz integra las competencias desarrolladas para identificar activos de información, analizar riesgos y establecer prioridades que aseguren la sostenibilidad operativa.
    p(data-aos="fade-down") El propósito de esta sección es que el aprendiz reconozca, dentro de un entorno simulado o real, cómo los diferentes elementos del Sistema de Gestión de Continuidad del Negocio (SGCN) interactúan para garantizar la protección de los recursos críticos, la mitigación de riesgos y la continuidad de las operaciones ante posibles incidentes.
    p.mb-0(data-aos="fade-down") A través de ejercicios de análisis, caracterización y evaluación, se busca promover una comprensión integral del ciclo de continuidad, desde la identificación de activos hasta la definición de estrategias de respuesta, permitiendo aplicar las mejores prácticas basadas en estándares internacionales como la ISO 22301 y la ISO 27001.
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Identificación de activos y procesos críticos en una organización
    p(data-aos="fade-down") La identificación de activos y procesos críticos es una actividad esencial dentro del Sistema de Gestión de Continuidad del Negocio (SGCN), ya que permite determinar los elementos cuya pérdida o interrupción podría comprometer gravemente la capacidad operativa, financiera, legal o reputacional de una organización. Este proceso constituye la base para el análisis de riesgos, la definición de estrategias de recuperación y la priorización de recursos en situaciones de crisis.
    p.mb-5(data-aos="fade-down") En primer lugar, se debe realizar una identificación exhaustiva de los activos que soportan los procesos misionales y de apoyo. Un activo se entiende como todo recurso que posee valor para la organización, y puede clasificarse en las siguientes categorías:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12.mb-0
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            TabsA.color-acento-botones(data-aos="zoom-in")
              .tarjeta.tarjeta--C01.p-3(titulo="Activos de información")
                p.mb-0 Datos, bases de datos, registros, documentos y sistemas que contienen información crítica.
              .tarjeta.tarjeta--C01.p-3(titulo="Activos tecnológicos")
                p.mb-0 <em>Hardware</em>, <em>software</em>, redes, servidores, dispositivos de comunicación y sistemas de respaldo.
              .tarjeta.tarjeta--C01.p-3(titulo="Activos humanos")
                p.mb-0 Conocimientos, habilidades y experiencia del personal clave en la operación.
              .tarjeta.tarjeta--C01.p-3(titulo="Activos físicos")
                p.mb-0 Infraestructura, instalaciones, equipos y mobiliario.
              .tarjeta.tarjeta--C01.p-3(titulo="Activos intangibles")
                p.mb-0 Reputación, propiedad intelectual, relaciones comerciales y confianza institucional.
          .col-lg-3.col-sm-4.col-10.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img02.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Una vez identificados los activos, se procede a determinar los procesos críticos, entendidos como aquellas actividades o funciones que, de ser interrumpidas, afectarían de manera significativa los objetivos estratégicos de la organización, el cumplimiento normativo o la prestación de servicios esenciales. Para ello, se recomienda realizar un Análisis de impacto en el negocio (BIA, por sus siglas en inglés), el cual permite:
    .row.mb-4
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema6/img03.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Identificar los procesos organizacionales y sus dependencias.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema6/img04.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Evaluar las consecuencias de su interrupción, considerando aspectos financieros, operativos, legales, reputacionales y de seguridad.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema6/img05.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Estimar el tiempo máximo de inactividad tolerable (RTO) y el nivel de pérdida de datos admisible (RPO).
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema6/img06.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Clasificar y priorizar los procesos según su nivel de criticidad e impacto.
    .tarjeta.tarjeta--BG02.px-lg-5.mb-5
      p(data-aos="fade-down") Durante este análisis, es importante incluir las interdependencias internas y externas, es decir, la relación entre procesos, áreas y proveedores, ya que una interrupción en un componente puede generar un efecto en cadena sobre otros servicios esenciales. Asimismo, se deben registrar los controles existentes y las brechas identificadas, con el fin de definir acciones preventivas o correctivas.
      p(data-aos="fade-down") El resultado de esta etapa se materializa en un inventario documentado de activos y procesos críticos, que incluye su descripción, responsable, ubicación, nivel de criticidad y medidas de protección existentes.
      p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo de formato para registrar los activos y procesos críticos de una organización, con el fin de facilitar su análisis y priorización dentro del Sistema de Gestión de Continuidad del Negocio (SGCN):
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <em>Ejemplo de inventario de activos y procesos críticos</em>
        .tabla-a.responsive.color-primario
          table
            thead
              tr
                th(data-aos="fade-down") Activo o recurso
                th(data-aos="fade-down") Proceso asociado
                th(data-aos="fade-down") Descripción / Función principal
                th(data-aos="fade-down") Impacto ante interrupción
                th(data-aos="fade-down") RTO (Tiempo máximo de recuperación)
                th(data-aos="fade-down") RPO (Pérdida máxima de datos aceptable)
                th(data-aos="fade-down") Nivel de criticidad
                th(data-aos="fade-down") Responsable
            tbody
              tr
                td.text-bold(data-aos="fade-down") Servidor principal de datos.
                td(data-aos="fade-down") Gestión académica.
                td(data-aos="fade-down") Almacena la base de datos institucional, registros académicos y financieros.
                td(data-aos="fade-down") Alta afectación en la operación y pérdida de información sensible.
                td(data-aos="fade-down") 4 horas
                td(data-aos="fade-down") 1 hora
                td(data-aos="fade-down") Crítico
                td(data-aos="fade-down") Coordinador de TI.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Plataforma virtual de aprendizaje.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Formación en línea.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite el acceso de instructores y aprendices a contenidos y evaluaciones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alta, afecta continuidad del servicio educativo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 6 horas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 2 horas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Crítico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Administrador LMS.
              tr
                td.text-bold(data-aos="fade-down") Sistema contable.
                td(data-aos="fade-down") Finanzas.
                td(data-aos="fade-down") Registra y gestiona transacciones financieras y presupuestales.
                td(data-aos="fade-down") Media, genera retrasos en reportes y pagos.
                td(data-aos="fade-down") 12 horas
                td(data-aos="fade-down") 4 horas
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") Contador general.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Red eléctrica y UPS.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Soporte tecnológico.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Garantiza suministro de energía a servidores y equipos críticos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Muy alta, afecta toda la operación tecnológica.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 2 horas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 0 horas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Crítico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Jefe de mantenimiento.
              tr
                td.text-bold(data-aos="fade-down") Personal técnico especializado.
                td(data-aos="fade-down") Soporte operativo.
                td(data-aos="fade-down") Brinda mantenimiento y atención a incidentes técnicos.
                td(data-aos="fade-down") Media, afecta tiempos de respuesta y resolución.
                td(data-aos="fade-down") 8 horas
                td(data-aos="fade-down") N/A
                td(data-aos="fade-down") Media
                td(data-aos="fade-down") Coordinador de soporte.
    p(data-aos="fade-down") Esta tabla ejemplifica cómo se documentan los activos y procesos críticos dentro del Sistema de Gestión de Continuidad del Negocio. Cada fila representa un elemento esencial para el funcionamiento organizacional, incluyendo información clave sobre su función, impacto, tiempos de recuperación (RTO y RPO), nivel de criticidad y responsable directo.
    p.mb-5(data-aos="fade-down") El análisis conjunto de estos datos permite priorizar recursos, establecer estrategias de respaldo y definir planes de contingencia más eficaces.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema6/img07.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              p.mb-0 Por ejemplo, en una institución educativa, los sistemas de gestión académica, la plataforma virtual de aprendizaje y la base de datos de aprendices representan activos y procesos críticos, ya que su interrupción afectaría directamente la prestación del servicio y la confianza de la comunidad educativa.
    p.mb-0(data-aos="fade-down") En conclusión, la identificación de activos y procesos críticos no solo permite conocer los puntos más vulnerables de la organización, sino que también orienta la toma de decisiones estratégicas para asegurar la resiliencia y la continuidad de las operaciones ante cualquier contingencia.
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Análisis de riesgos y continuidad operativa
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img08.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de riesgos constituye una etapa fundamental dentro del Sistema de Gestión de Continuidad del Negocio (SGCN), ya que permite identificar, evaluar y priorizar las amenazas que pueden afectar los activos, procesos críticos y operaciones esenciales de una organización. Su propósito es determinar el nivel de exposición ante eventos que podrían interrumpir las actividades normales y, a partir de ello, definir medidas de control y recuperación que garanticen la continuidad operativa.
    p.mb-5(data-aos="fade-down") El proceso inicia con la identificación de riesgos, donde se reconocen los eventos potenciales que podrían afectar los activos de información, los recursos humanos, la infraestructura tecnológica o las instalaciones físicas. Estos riesgos pueden clasificarse en tres grandes categorías:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema6/img09.svg", alt="Imagen decorativa").img280
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema6/img10.svg", alt="Imagen decorativa").img100
            .col
              h4 Riesgos operativos
              p.mb-0 Fallas humanas, errores de procedimiento, deficiencias en la cadena de suministro o interrupciones en servicios esenciales. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema6/img11.svg", alt="Imagen decorativa").img100
            .col
              h4 Riesgos tecnológicos
              p.mb-0 Ataques cibernéticos, pérdida de datos, caídas de sistemas, fallas de <em>hardware</em> o <em>software</em>.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema6/img12.svg", alt="Imagen decorativa").img100
            .col
              h4 Riesgos externos o ambientales
              p Desastres naturales, cortes de energía, disturbios sociales o emergencias sanitarias.
    .row.justify-content-center
      .col-lg-8.col-12
        p.mb-5(data-aos="fade-down") Una vez identificados los riesgos, se procede a su evaluación, considerando dos variables principales:
    .row.justify-content-center.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4
              p.mb-0.text-center <b>a)</b> Probabilidad de ocurrencia, es decir, la frecuencia o posibilidad de que el evento se materialice.
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4
              p.mb-0.text-center <b>b)</b> Impacto potencial, que representa el grado de afectación que tendría el riesgo sobre los objetivos estratégicos, la continuidad de las operaciones y la reputación de la organización.
    .row.justify-content-center
      .col-lg-10.col-12
        p(data-aos="fade-down") El cruce de estas variables permite establecer un nivel de riesgo (bajo, medio o alto) y priorizar la implementación de controles y estrategias de mitigación. Esta valoración puede representarse en una matriz de riesgos, una herramienta visual que facilita la toma de decisiones y el seguimiento de acciones preventivas.
        p.mb-5(data-aos="fade-down") La siguiente tabla presenta un ejemplo de cómo estructurar una matriz de análisis de riesgos para apoyar la continuidad operativa:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span <em>Ejemplo de matriz de análisis de riesgos y continuidad operativa</em>
        .tabla-a.responsive.color-primario
          table
            thead
              tr
                th(data-aos="fade-down") Riesgo identificado
                th(data-aos="fade-down") Tipo de riesgo
                th(data-aos="fade-down") Activo o proceso afectado
                th(data-aos="fade-down") Probabilidad
                th(data-aos="fade-down") Impacto
                th(data-aos="fade-down") Nivel de riesgo
                th(data-aos="fade-down") Estrategia de mitigación
                th(data-aos="fade-down") Responsable
            tbody
              tr
                td.text-bold(data-aos="fade-down") Falla del servidor principal.
                td(data-aos="fade-down") Tecnológico
                td(data-aos="fade-down") Plataforma virtual de aprendizaje.
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") Alto
                td(data-aos="fade-down") Alto
                td(data-aos="fade-down") Implementar servidores redundantes y copias de seguridad diarias.
                td(data-aos="fade-down") Coordinador de TI.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Interrupción del suministro eléctrico.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Operativo / Externo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sistemas críticos y red interna.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Media
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Instalación de UPS y planta eléctrica de respaldo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Jefe de mantenimiento.
              tr
                td.text-bold(data-aos="fade-down") Error humano en carga de información.
                td(data-aos="fade-down") Operativo
                td(data-aos="fade-down") Base de datos académica.
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") Medio
                td(data-aos="fade-down") Medio
                td(data-aos="fade-down") Capacitación y procedimientos de control de cambios.
                td(data-aos="fade-down") Administrador de base de datos.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Ciberataque (<em>ransomware</em>).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tecnológico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Información institucional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Media
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Políticas de ciberseguridad, antivirus actualizado y respaldos cifrados.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Coordinador de seguridad.
              tr
                td.text-bold(data-aos="fade-down") Emergencia sanitaria.
                td(data-aos="fade-down") Externo
                td(data-aos="fade-down") Actividades presenciales.
                td(data-aos="fade-down") Baja
                td(data-aos="fade-down") Alto
                td(data-aos="fade-down") Medio
                td(data-aos="fade-down") Implementar modalidad de teletrabajo y clases virtuales.
                td(data-aos="fade-down") Dirección académica.
    p.mb-5(data-aos="fade-down") El análisis de riesgos no solo se limita a detectar amenazas, sino que también permite planificar respuestas operativas y definir responsabilidades claras ante diferentes escenarios. De esta manera, la organización puede anticipar sus vulnerabilidades y preparar planes de acción que reduzcan el impacto de los eventos disruptivos.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .row.justify-content-center.mb-5
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                .col-lg-11(data-aos="flip-up")
                  img(src='@/assets/curso/temas/tema6/img15.svg' alt="Imagen decorativa")
              .tarjeta.tarjeta--C01
                .p-4
                  p.mb-0 Por ejemplo, una institución educativa que identifique como riesgo la caída de su plataforma virtual puede establecer un sistema de respaldo en la nube y protocolos de comunicación alternativos, garantizando así la continuidad del proceso formativo sin mayores interrupciones.
        p.mb-0(data-aos="fade-down") En síntesis, el análisis de riesgos constituye el puente entre la prevención y la respuesta efectiva. Al integrar los resultados de este análisis con los planes de continuidad del negocio, la organización fortalece su capacidad de resiliencia, minimiza pérdidas y asegura su sostenibilidad operativa ante cualquier eventualidad.
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Caracterización de necesidades de seguridad de la información
    .tarjeta.tarjeta--BG02.px-lg-5.mb-5
      p(data-aos="fade-down") La caracterización de las necesidades de seguridad de la información consiste en identificar, analizar y priorizar los requerimientos que garantizan la protección de los activos de información y el cumplimiento de los principios de confidencialidad, integridad y disponibilidad. Esta etapa es esencial dentro del Sistema de Gestión de Continuidad del Negocio (SGCN), ya que permite establecer controles adecuados que aseguren la resiliencia tecnológica y operativa frente a posibles amenazas.
      p(data-aos="fade-down") El proceso inicia con la evaluación del contexto organizacional, que implica analizar el entorno interno y externo, los objetivos estratégicos, los requisitos legales o normativos, y las expectativas de las partes interesadas (clientes, proveedores, entidades de control, entre otros). A partir de este diagnóstico, se determinan los requisitos de seguridad específicos de cada activo y proceso crítico.
      p(data-aos="fade-down") Entre las principales necesidades de seguridad de la información se destacan las siguientes:
    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Protección de la confidencialidad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Asegurar que solo las personas autorizadas accedan a la información sensible o restringida.
              .row(numero="2" titulo="Garantía de la integridad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Mantener la exactitud, coherencia y confiabilidad de los datos a lo largo de su ciclo de vida.
              .row(numero="3" titulo="Disponibilidad operativa")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Garantizar el acceso oportuno a la información y los sistemas cuando sea necesario para la operación.
              .row(numero="4" titulo="Trazabilidad y control de acceso")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Registrar y monitorear las acciones realizadas sobre los activos de información.
              .row(numero="5" titulo="Cumplimiento normativo")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Adoptar controles alineados con estándares internacionales (como ISO/IEC 27001 e ISO 22301) y la normativa nacional aplicable.
          .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img16.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Una vez identificadas las necesidades, se procede a definir las medidas de seguridad y control que mitiguen los riesgos detectados en el análisis previo. Estas medidas pueden incluir acciones técnicas, administrativas o físicas, tales como:
    .row.justify-content-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--C01
          .row.justify-content-center.align-items-center
            .col-lg-4.col-8.col-md-7.order-lg-1.order-1.mb-3
              figure
                img(src='@/assets/curso/temas/tema6/img17.svg', alt='Imagen decorativa')
            .col-lg-7.col-12.order-lg-2.order-2
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-1
                  i.fas.fa-cog
                  | Autenticación y control de accesos.
                li.mb-1
                  i.fas.fa-cog
                  | Cifrado de datos y comunicaciones.
                li.mb-1
                  i.fas.fa-cog
                  | Políticas de copias de seguridad y recuperación de información.
                li.mb-1
                  i.fas.fa-cog
                  | Capacitación en buenas prácticas de ciberseguridad.
                li.mb-0
                  i.fas.fa-cog
                  | Supervisión y auditoría continua de los sistemas.
    p.mb-5(data-aos="fade-down") La siguiente tabla presenta un ejemplo práctico de caracterización de necesidades de seguridad de la información, que permite relacionar los activos críticos con los riesgos asociados y las medidas de control sugeridas.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span <em>Ejemplo de caracterización de necesidades de seguridad de la información</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down") Activo o proceso crítico
                th(data-aos="fade-down") Riesgo identificado
                th(data-aos="fade-down") Necesidad de seguridad
                th(data-aos="fade-down") Medida de control o mitigación
                th(data-aos="fade-down") Responsable
            tbody
              tr
                td.text-bold(data-aos="fade-down") Base de datos académica.
                td(data-aos="fade-down") Acceso no autorizado.
                td(data-aos="fade-down") Confidencialidad y control de acceso.
                td(data-aos="fade-down") Implementar autenticación multifactor y perfiles de usuario diferenciados.
                td(data-aos="fade-down") Administrador de TI.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Plataforma virtual de aprendizaje.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Falla del sistema o pérdida de datos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Disponibilidad y respaldo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Copias de seguridad automáticas y servidores redundantes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Coordinador de tecnología.
              tr
                td.text-bold(data-aos="fade-down") Sistema contable.
                td(data-aos="fade-down") Alteración de información financiera.
                td(data-aos="fade-down") Integridad y trazabilidad.
                td(data-aos="fade-down") Registro de auditoría y validación cruzada de datos.
                td(data-aos="fade-down") Contador general.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Correo institucional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>Phishing</em> o robo de credenciales.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Confidencialidad e integridad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Filtros <em>antispam</em>, campañas de sensibilización y políticas de contraseñas seguras.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Área de seguridad informática.
              tr
                td.text-bold(data-aos="fade-down") Red de comunicaciones.
                td(data-aos="fade-down") Ciberataque o <em>malware</em>.
                td(data-aos="fade-down") Continuidad y protección perimetral.
                td(data-aos="fade-down") <em>Firewalls</em>, antivirus actualizado y segmentación de red.
                td(data-aos="fade-down") Coordinador de infraestructura.
    p.mb-5(data-aos="fade-down") Este ejercicio permite establecer un mapa claro de las prioridades en materia de seguridad, facilitando la asignación de recursos y responsabilidades. Además, contribuye a fortalecer la cultura organizacional hacia la prevención y respuesta ante incidentes de seguridad.
    .row.justify-content-center.mb-4
      .col-lg-5.order-lg-1.order-2
        .tarjeta.tarjeta--C01.p-4
          p.mb-4(data-aos="fade-down") Por ejemplo, en una institución educativa, la caracterización de necesidades de seguridad puede evidenciar que la protección de las bases de datos académicas y la disponibilidad de la plataforma virtual son aspectos prioritarios. En este caso, se implementan controles como respaldos automáticos, restricciones de acceso y monitoreo constante de la infraestructura tecnológica.
      .col-lg-5.order-lg-2.order-1.mb-3.col-md-7.col-10
        figure(data-aos="fade-down") 
          img(src='@/assets/curso/temas/tema6/img18.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") En conclusión, la caracterización de necesidades de seguridad de la información proporciona una visión integral de las vulnerabilidades y fortalezas de la organización, permitiendo desarrollar políticas y estrategias alineadas con los objetivos del negocio y los requerimientos de continuidad operativa. Su adecuada gestión contribuye a consolidar una cultura de seguridad, confianza y resiliencia digital.

</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass"></style>
