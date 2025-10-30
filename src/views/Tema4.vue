<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Gestión del riesgo en la continuidad del negocio
    
    p.mb-5(data-aos="fade-down") La gestión del riesgo constituye uno de los pilares fundamentales de la continuidad del negocio, ya que permite anticipar, evaluar y controlar los factores que pueden afectar la estabilidad operativa de una organización. Su objetivo es garantizar que, ante la ocurrencia de incidentes o crisis, la entidad cuente con la capacidad de responder, recuperarse y mantener su funcionamiento esencial dentro de parámetros aceptables.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p(data-aos="fade-down") Históricamente, la gestión del riesgo ha evolucionado desde un enfoque reactivo, centrado en responder a desastres naturales o fallas operativas, hacia una visión preventiva e integral, que busca identificar los riesgos antes de que se materialicen. En la década de 1970, este concepto empezó a ganar relevancia en el ámbito empresarial, especialmente en sectores como la banca y las telecomunicaciones, donde las interrupciones operativas representaban grandes pérdidas económicas. 
        br
        br
        p.mb-0(data-aos="fade-down") Posteriormente, con el desarrollo de normas internacionales como la ISO 31000 sobre gestión del riesgo y la ISO 22301 sobre continuidad del negocio, se consolidó un marco metodológico que integra la planificación, la evaluación y la mejora continua como ejes fundamentales.
    p(data-aos="fade-down") Hoy en día, la gestión del riesgo no solo se limita a la protección de los activos físicos o tecnológicos, sino que abarca también la gestión reputacional, la seguridad de la información, la sostenibilidad ambiental y la estabilidad social. En un entorno caracterizado por la interdependencia global, la transformación digital y las amenazas emergentes (como los ciberataques o las disrupciones en la cadena de suministro), las organizaciones deben adoptar un enfoque proactivo que combine prevención, respuesta y aprendizaje.
    p.mb-5(data-aos="fade-down") Una gestión del riesgo eficaz dentro de la continuidad del negocio se basa en los siguientes principios:
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-10.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C01.p-2.mb-5
              .row.justify-content-center.align-items-center
                .col-lg-3.col-8.col-md-7.order-lg-1.order-1.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema4/img02.svg', alt='Imagen decorativa')
                .col-lg-9.col-12.order-lg-2.order-2
                  ul.lista-ul--color.mb-0(data-aos="fade-down")
                    li.mb-1
                      i.fas.fa-cog
                      | Identificación temprana de amenazas internas y externas.
                    li.mb-1
                      i.fas.fa-cog
                      | Evaluación sistemática de probabilidad e impacto sobre los procesos críticos.
                    li.mb-1
                      i.fas.fa-cog
                      | Desarrollo de estrategias de mitigación, contingencia y recuperación.
                    li.mb-1
                      i.fas.fa-cog
                      | Monitoreo y revisión continua del entorno operativo.
                    li.mb-0
                      i.fas.fa-cog
                      | Fomento de una cultura organizacional resiliente que promueva la anticipación y la adaptación al cambio.
            p.mb-0(data-aos="fade-down") De esta manera, la gestión del riesgo no se concibe únicamente como un procedimiento técnico, sino como una competencia institucional que fortalece la capacidad de la organización para sostener sus operaciones, proteger sus recursos y asegurar la confianza de sus clientes, colaboradores y partes interesadas.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Identificación y análisis de riesgos operativos y tecnológicos
    
    p(data-aos="fade-down") La identificación y análisis de riesgos operativos y tecnológicos constituye una etapa esencial dentro del proceso de gestión del riesgo y de la planificación de la continuidad del negocio. Su propósito es reconocer las amenazas que pueden afectar los activos críticos, los procesos esenciales y la infraestructura tecnológica de la organización, evaluando la probabilidad de su ocurrencia y el impacto potencial sobre las operaciones.
    p.mb-4(data-aos="fade-down") Desde una perspectiva organizacional, el riesgo operativo se define como la posibilidad de pérdida o afectación derivada de fallos en los procesos internos, errores humanos, deficiencias en los sistemas o eventos externos que alteren el funcionamiento normal de la entidad. Por su parte, el riesgo tecnológico está relacionado con las vulnerabilidades en los sistemas informáticos, redes, plataformas digitales y dispositivos, cuya explotación o falla puede comprometer la disponibilidad, integridad o confidencialidad de la información.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") La identificación y análisis de riesgos operativos y tecnológicos constituye una etapa esencial dentro del proceso de gestión del riesgo y de la planificación de la continuidad del negocio. Su propósito es reconocer las amenazas que pueden afectar los activos críticos, los procesos esenciales y la infraestructura tecnológica de la organización, evaluando la probabilidad de su ocurrencia y el impacto potencial sobre las operaciones.
    p.mb-5(data-aos="fade-down") Estos riesgos pueden originarse por diferentes factores, entre los que se destacan:
    .row.justify-content-center
      .col-12.mb-4.movil
        figure
          img(src='@/assets/curso/temas/tema4/img04.svg', alt='Imagen decorativa')
      .col-lg-10.col-12.desktop
        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/temas/tema4/img03.svg', alt="Imagen decorativa")
          .tarjeta.color-acento-botones.p-3(x="17%" y="18%" numero="1")
            p Errores de operación, negligencia, desconocimiento de procedimientos o falta de capacitación del personal.
          .tarjeta.color-acento-botones.p-3(x="17%" y="50%" numero="2")
            p Fallas en <em>hardware</em>, <em>software</em>, redes o servicios tecnológicos esenciales.
          .tarjeta.color-acento-botones.p-3(x="84%" y="10%" numero="3")
            p Incendios, inundaciones, cortes eléctricos, desastres naturales u otros eventos que afecten la infraestructura.
          .tarjeta.color-acento-botones.p-3(x="84%" y="40%" numero="4")
            p Ciberataques, sabotajes, fallos en servicios de terceros o interrupciones en la cadena de suministro.
          .tarjeta.color-acento-botones.p-3(x="84%" y="73%" numero="5")
            p Ausencia de políticas de seguridad, deficiencias en el control interno o falta de mantenimiento preventivo.
    p.mb-5(data-aos="fade-down") El proceso de identificación de riesgos debe desarrollarse de forma sistemática y participativa, involucrando a las áreas claves de la organización para garantizar una visión integral. Entre las principales herramientas empleadas se encuentran:
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Matrices de riesgo
                p.mb-0 Instrumentos que permiten listar las amenazas, estimar su probabilidad e impacto y priorizar las más críticas.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img05.svg')})`}")
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img06.svg')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Análisis FODA de riesgos
                p.mb-0 Identifica fortalezas, oportunidades, debilidades y amenazas relacionadas con los activos y procesos clave.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img07.svg')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Entrevistas y talleres con expertos
                p.mb-0 Facilitan la detección de vulnerabilidades no evidentes en los procedimientos operativos o tecnológicos.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img08.svg')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Revisión de incidentes pasados
                p.mb-0 Permite aprender de experiencias previas y fortalecer las medidas de prevención y respuesta.
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img05_1.png', alt='Imagen decorativa')
            h4 Matrices de riesgo
            p.mb-0 Instrumentos que permiten listar las amenazas, estimar su probabilidad e impacto y priorizar las más críticas.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img06_1.png', alt='Imagen decorativa')
            h4 Análisis FODA de riesgos
            p.mb-0 Identifica fortalezas, oportunidades, debilidades y amenazas relacionadas con los activos y procesos clave.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img07_1.png', alt='Imagen decorativa')
            h4 Entrevistas y talleres con expertos
            p.mb-0 Facilitan la detección de vulnerabilidades no evidentes en los procedimientos operativos o tecnológicos.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img08_1.png', alt='Imagen decorativa')
            h4 Revisión de incidentes pasados
            p.mb-0 Permite aprender de experiencias previas y fortalecer las medidas de prevención y respuesta.
    //- .row.justify-content-center.mb-4
    //-   .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
    //-     .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       .crd_hover_txt1--img
    //-         figure
    //-           img(src="@/assets/curso/temas/tema4/img05.png", alt="Imagen decorativa")
    //-       .crd_hover_txt1--body
    //-         h5.t1.mb-3 Matrices de riesgo
    //-         h5.t2.mb-2 Matrices de riesgo
    //-         p.mb-0 Instrumentos que permiten listar las amenazas, estimar su probabilidad e impacto y priorizar las más críticas.
    //-   .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
    //-     .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       .crd_hover_txt1--img
    //-         figure
    //-           img(src="@/assets/curso/temas/tema4/img06.png", alt="Imagen decorativa")
    //-       .crd_hover_txt1--body
    //-         h5.t1.mb-3 Análisis FODA de riesgos
    //-         h5.t2.mb-2 Análisis FODA de riesgos
    //-         p.mb-0 Identifica fortalezas, oportunidades, debilidades y amenazas relacionadas con los activos y procesos clave.
    //-   .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
    //-     .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       .crd_hover_txt1--img
    //-         figure
    //-           img(src="@/assets/curso/temas/tema4/img07.png", alt="Imagen decorativa")
    //-       .crd_hover_txt1--body
    //-         h5.t1.mb-3 Entrevistas y talleres con expertos
    //-         h5.t2.mb-2 Entrevistas y talleres con expertos
    //-         p.mb-0 Facilitan la detección de vulnerabilidades no evidentes en los procedimientos operativos o tecnológicos.
    //-   .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
    //-     .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       .crd_hover_txt1--img
    //-         figure
    //-           img(src="@/assets/curso/temas/tema4/img08.png", alt="Imagen decorativa")
    //-       .crd_hover_txt1--body
    //-         h5.t1.mb-3 Revisión de incidentes pasados
    //-         h5.t2.mb-2 Revisión de incidentes pasados
    //-         p.mb-0 Permite aprender de experiencias previas y fortalecer las medidas de prevención y respuesta.
    p.mb-5(data-aos="fade-down") Una vez identificados los riesgos, se realiza su análisis, que consiste en evaluar la probabilidad de ocurrencia y el nivel de impacto sobre los objetivos organizacionales. Esta etapa facilita la priorización de los riesgos y la definición de acciones de mitigación adecuadas. El análisis puede ser cualitativo, basado en juicios de expertos y escalas descriptivas (alto, medio, bajo), o cuantitativo, utilizando métricas y datos históricos para calcular pérdidas potenciales y tiempos de recuperación.
    .row.justify-content-center.mb-4
      .col-lg-5.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Por ejemplo, en una organización de servicios financieros, la caída del sistema de transacciones puede ser clasificada como un riesgo tecnológico de alta probabilidad y alto impacto, mientras que un error en el envío de informes administrativos puede representar un riesgo operativo de baja probabilidad y bajo impacto. Esta diferenciación permite enfocar los recursos en los riesgos más críticos para la continuidad del negocio.
      .col-lg-5.order-lg-2.order-1.mb-3.col-md-8.col-10
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema4/img09.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p(data-aos="fade-down") El resultado final de este proceso se plasma en un mapa o matriz de riesgos, donde se representan gráficamente los riesgos identificados según su nivel de probabilidad e impacto, facilitando la toma de decisiones estratégicas y la asignación eficiente de recursos.
        p.mb-0(data-aos="fade-down") Una gestión eficaz de la identificación y análisis de riesgos contribuye a:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img10.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Prevenir interrupciones operativas significativas.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Optimizar los tiempos de respuesta ante emergencias.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img12.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Fortalecer la confianza de clientes, usuarios y aliados.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img13.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Cumplir con normativas internacionales como la ISO 31000 (Gestión del riesgo) y la ISO 22301 (Continuidad del negocio).
        
    p.mb-0(data-aos="fade-down") En síntesis, el análisis de riesgos operativos y tecnológicos permite anticipar escenarios adversos y diseñar estrategias preventivas que fortalezcan la resiliencia organizacional, asegurando la sostenibilidad y competitividad de la entidad frente a los desafíos del entorno.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Evaluación de probabilidad e impacto
    .tarjeta.tarjeta--BG02.px-lg-5.mb-5
      .row.justify-content-center
        .col-lg-12.col-10
          p.mb-5(data-aos="fade-down") La evaluación de la probabilidad e impacto es una fase fundamental dentro de la gestión del riesgo, ya que permite determinar el nivel de exposición de una organización frente a las amenazas identificadas y priorizar las acciones necesarias para su tratamiento. Este análisis constituye la base para la toma de decisiones estratégicas orientadas a la protección de los activos, la continuidad del negocio y la resiliencia organizacional.
      .row.justify-content-center.mb-0
        .col-lg-7.order-lg-2.order-2.col-10
          p(data-aos="fade-down") La probabilidad se refiere a la posibilidad de que un riesgo se materialice, considerando la frecuencia con la que podría ocurrir un evento adverso. Esta se estima a partir de datos históricos, registros de incidentes, comportamiento del entorno, condiciones tecnológicas y experiencia del personal. Por ejemplo, un ciberataque en una organización con múltiples vulnerabilidades tecnológicas puede considerarse de alta probabilidad, mientras que una falla en un centro de datos con redundancia y mantenimiento constante podría clasificarse de baja probabilidad.
          p(data-aos="fade-down") El impacto, por su parte, corresponde a la magnitud de las consecuencias que tendría la ocurrencia del riesgo sobre los objetivos del negocio, la reputación institucional, la seguridad de la información o el cumplimiento normativo. Este puede expresarse en términos financieros, operativos, legales, reputacionales o sociales, dependiendo de la naturaleza de la organización y de los procesos afectados.
          .cajon.cajon.C01.color-primario.p-4.mb-3
            p.mb-0(data-aos="fade-down") La combinación de ambos factores “probabilidad e impacto” permite determinar el nivel de riesgo, que refleja el grado de criticidad o prioridad de atención que debe asignarse a cada evento. En la práctica, este análisis se representa mediante una matriz de evaluación de riesgos, donde se cruzan los niveles de probabilidad e impacto, clasificando los riesgos en categorías como alto, medio o bajo.
        .col-lg-3.order-lg-1.order-1.mb-3.col-md-5.col-7
          figure(data-aos="fade-up") 
            img(src='@/assets/curso/temas/tema4/img14.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Ejemplo de matriz de evaluación de riesgos</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Probabilidad / Impacto
                th(data-aos="fade-down")(style= "width: 20%") Bajo impacto
                th(data-aos="fade-down")(style= "width: 20%") Impacto medio
                th(data-aos="fade-down")(style= "width: 20%") Alto impacto
            tbody
              tr
                td.text-bold(data-aos="fade-down") Alta probabilidad
                td(data-aos="fade-down") Riesgo medio
                td(data-aos="fade-down") Riesgo alto
                td(data-aos="fade-down") Riesgo crítico
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Probabilidad media
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Riesgo bajo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Riesgo medio
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Riesgo alto
              tr
                td.text-bold(data-aos="fade-down") Baja probabilidad
                td(data-aos="fade-down") Riesgo bajo
                td(data-aos="fade-down") Riesgo bajo
                td(data-aos="fade-down") Riesgo medio
    p.mb-4(data-aos="fade-down") Esta herramienta facilita la priorización de riesgos, orientando los esfuerzos hacia aquellos eventos con mayor posibilidad de ocurrencia y consecuencias más graves. Por ejemplo:
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema4/img15.svg', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 Una interrupción del sistema de facturación podría clasificarse como riesgo alto, al tener alta probabilidad e impacto financiero significativo.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema4/img16.svg', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 Un error menor en reportes administrativos podría considerarse riesgo bajo, por su baja probabilidad e impacto limitado.
    p.mb-5(data-aos="fade-down") En algunos casos, la organización puede aplicar métodos cuantitativos, utilizando métricas y fórmulas para estimar la pérdida esperada o el tiempo de recuperación necesario. Entre los indicadores más utilizados se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/img17.svg", alt="Imagen decorativa").img100.m-auto
          h4.text-center RTO (Recovery Time Objective)
          p.mb-0 Tiempo máximo de recuperación permitido para un proceso o sistema.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/img18.svg", alt="Imagen decorativa").img100.m-auto
          h4.text-center RPO (Recovery Point Objective)
          p.mb-0 Punto máximo de pérdida de datos aceptable.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/img19.svg", alt="Imagen decorativa").img100.m-auto
          h4.text-center MTD (Maximum Tolerable Downtime)
          p.mb-0 Tiempo máximo que la organización puede soportar sin ejecutar un proceso crítico.
    .row.justify-content-center.mb-0
      .col-lg-6.order-lg-1.order-2
        p(data-aos="fade-down") Estas métricas permiten establecer umbrales de tolerancia y definir los tiempos y recursos requeridos para mantener la operatividad mínima durante una interrupción.
        p(data-aos="fade-down") La evaluación de probabilidad e impacto no solo cuantifica el riesgo, sino que también promueve una visión preventiva, fortaleciendo la cultura de gestión anticipada en la organización. De esta manera, los equipos pueden priorizar inversiones, diseñar planes de contingencia realistas y establecer políticas de seguridad coherentes con la criticidad de los procesos y activos.
        p.mb-0(data-aos="fade-down") En síntesis, la evaluación de probabilidad e impacto permite pasar del simple reconocimiento de los riesgos a una gestión estratégica basada en evidencia, contribuyendo al desarrollo de organizaciones más resilientes, seguras y sostenibles frente a las amenazas emergentes del entorno.
      .col-lg-4.order-lg-2.order-1.mb-3.col-md-8.col-10
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema4/img20.png', alt='Imagen decorativa')
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Estrategias para mitigar riesgos y fortalecer la resiliencia organizacional
    p(data-aos="fade-down") Una vez identificados y evaluados los riesgos, el siguiente paso dentro del proceso de gestión consiste en diseñar y aplicar estrategias de mitigación que permitan reducir la probabilidad de ocurrencia o el impacto potencial de los eventos adversos. Estas estrategias constituyen la base para la resiliencia organizacional, entendida como la capacidad de anticiparse, resistir, adaptarse y recuperarse ante interrupciones que puedan afectar la continuidad del negocio.
    p.mb-5(data-aos="fade-down") En términos generales, las estrategias de mitigación se clasifican en cuatro enfoques principales:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12.mb-0
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            TabsA.color-acento-botones(data-aos="zoom-in")
              .tarjeta.tarjeta--C01.p-3(titulo="Evitar el riesgo")
                p.mb-0 Implica eliminar la causa o modificar las condiciones que generan la amenaza. Por ejemplo, suspender el uso de una tecnología obsoleta que presenta vulnerabilidades de seguridad.
              .tarjeta.tarjeta--C01.p-3(titulo="Reducir el riesgo")
                p.mb-0 Consiste en aplicar controles preventivos o correctivos para disminuir su probabilidad o impacto, como la implementación de sistemas de respaldo, planes de mantenimiento o actualización de <em>software</em>.
              .tarjeta.tarjeta--C01.p-3(titulo="Transferir el riesgo")
                p.mb-0 Se refiere a delegar parcial o totalmente la responsabilidad del riesgo a un tercero, a través de mecanismos como seguros, contratos de servicios externos o acuerdos con proveedores especializados.
              .tarjeta.tarjeta--C01.p-3(titulo="Aceptar el riesgo")
                p.mb-0 Ocurre cuando los costos de mitigación superan los beneficios o cuando se considera que el riesgo es tolerable, siempre y cuando se mantenga bajo monitoreo y con planes de respuesta definidos.
          .col-lg-3.col-sm-4.col-10.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img21.svg', alt='Imagen decorativa')
    p(data-aos="fade-down") La selección del enfoque depende del nivel de riesgo residual, los recursos disponibles y la tolerancia al riesgo de la organización. Para garantizar su efectividad, las estrategias deben alinearse con los objetivos estratégicos y los marcos de referencia internacionales, como la ISO 31000 (Gestión del riesgo), la ISO 27005 (Gestión del riesgo de seguridad de la información) y la ISO 22301 (Continuidad del negocio).
    p.mb-5(data-aos="fade-down") Entre las principales estrategias de mitigación y fortalecimiento de la resiliencia organizacional, se destacan las siguientes:
    .tarjeta.tarjeta--BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src="@/assets/curso/temas/tema4/img22.png", alt="alt")
          .col-lg-8
            SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src="@/assets/curso/temas/tema4/img23.svg", alt="alt").img80.m-auto
                P.mb-0 Implementación de controles de seguridad de la información, tales como autenticación multifactor, cifrado de datos y gestión de accesos.
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src="@/assets/curso/temas/tema4/img24.svg", alt="alt").img80.m-auto
                P.mb-0 Diseño de planes de contingencia y continuidad, que definan roles, responsabilidades, protocolos de comunicación y procedimientos de recuperación.
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src="@/assets/curso/temas/tema4/img25.svg", alt="alt").img80.m-auto
                P.mb-0 Redundancia tecnológica, mediante la duplicación de sistemas críticos, servidores espejo o respaldos automáticos para garantizar la disponibilidad de la información.
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src="@/assets/curso/temas/tema4/img26.svg", alt="alt").img80.m-auto
                P.mb-0 Capacitación y sensibilización del personal, orientada a promover buenas prácticas de seguridad y respuesta ante incidentes.
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src="@/assets/curso/temas/tema4/img27.svg", alt="alt").img80.m-auto
                P.mb-0 Gestión de proveedores críticos, asegurando que las entidades externas también mantengan estándares adecuados de seguridad y continuidad.
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src="@/assets/curso/temas/tema4/img28.svg", alt="alt").img80.m-auto
                P.mb-0 Simulacros y pruebas periódicas, que permitan validar la eficacia de las estrategias y detectar oportunidades de mejora.
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src="@/assets/curso/temas/tema4/img29.svg", alt="alt").img80.m-auto
                P.mb-0 Análisis post-incidente, para identificar causas raíz, evaluar la efectividad de las acciones correctivas y fortalecer la capacidad de respuesta institucional.
    p(data-aos="fade-down") Estas medidas no solo disminuyen la vulnerabilidad operativa y tecnológica, sino que fomentan una cultura organizacional proactiva, donde la prevención, la adaptación y la mejora continua se convierten en principios fundamentales de gestión.
    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo práctico:
    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2
        .tarjeta.tarjeta--C01.p-3
          p.mb-4(data-aos="fade-down") Una empresa del sector financiero identifica como riesgo crítico la posible indisponibilidad del sistema de pagos en línea debido a un ataque informático. Como estrategias de mitigación, decide:
          ul.lista-ul.mb-0(data-aos="fade-down") 
            li.mb-3
              i.lista-ul__vineta
              p.mb-0 Implementar una infraestructura de respaldo geográficamente separada.
            li.mb-3
              i.lista-ul__vineta
              p.mb-0 Aplicar controles de acceso más estrictos y cifrado de extremo a extremo.
            li.mb-3
              i.lista-ul__vineta
              p.mb-0 Realizar copias de seguridad diarias automáticas.
            li.mb-0
              i.lista-ul__vineta
              p.mb-3 Ejecutar pruebas de recuperación trimestrales.
          p.mb-0(data-aos="fade-down") Gracias a estas acciones, la organización logra mantener la continuidad del servicio y proteger la confianza de sus clientes, incluso ante un incidente real.
      .col-lg-4.order-lg-2.order-1.mb-3.col-md-7.col-10
        figure(data-aos="fade-down") 
          img(src='@/assets/curso/temas/tema4/img30.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p(data-aos="fade-down") Las estrategias de mitigación de riesgos y fortalecimiento de la resiliencia organizacional deben concebirse como un proceso dinámico, integral y evolutivo, en el que la prevención, la preparación y la adaptación permiten a las organizaciones afrontar con éxito los desafíos de un entorno cada vez más incierto y complejo.

</template>

<script>
export default {
  name: 'Tema4',
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
