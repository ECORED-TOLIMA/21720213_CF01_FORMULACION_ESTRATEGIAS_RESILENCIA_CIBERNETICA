<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Sistema de Gestión de Continuidad del Negocio (SGCN)
    
    p.mb-5(data-aos="fade-down") Constituye el marco estructurado que permite a una organización prepararse, responder y recuperarse eficazmente ante interrupciones que afecten sus operaciones críticas. Su propósito principal es garantizar la disponibilidad de los recursos esenciales y la prestación continua de productos o servicios, incluso en condiciones adversas.
    .row.justify-content-center.mb-0
      .col-lg-7.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Un SGCN integra políticas, procedimientos, responsabilidades y recursos orientados a mantener la operatividad y la confianza de los grupos de interés. Además, promueve una cultura organizacional basada en la prevención, la mejora continua y la resiliencia. Este sistema no se limita a reaccionar frente a emergencias, sino que busca anticiparse a los riesgos, estableciendo medidas preventivas y planes de recuperación previamente probados.
        p.mb-0(data-aos="fade-down") La adopción de un SGCN representa una ventaja competitiva, ya que fortalece la reputación institucional, mejora la toma de decisiones bajo presión y contribuye a cumplir con requisitos legales, normativos y contractuales. De esta manera, el SGCN se convierte en una herramienta estratégica esencial para garantizar la sostenibilidad organizacional a largo plazo.
      .col-lg-3.order-lg-2.order-1.mb-3.col-md-6.col-10
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema5/img01.png', alt='Imagen decorativa')
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Estructura y componentes del sistema
    p.mb-5(data-aos="fade-down") El Sistema de Gestión de Continuidad del Negocio (SGCN) se compone de un conjunto de elementos interrelacionados que permiten planificar, implementar, operar, supervisar, revisar y mejorar continuamente la capacidad de una organización para responder ante interrupciones. Su estructura garantiza un enfoque sistemático y de mejora continua, y se fundamenta en el ciclo PHVA (Planear, Hacer, Verificar y Actuar):
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>ciclo PHVA</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema5/img02.svg', alt='En la figura 1 se presenta ciclo de mejoramiento continuo PHVA, conformado por las etapas planear, hacer, verificar y actuar, las cuales están interconectadas en un proceso cíclico.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema5/img03.svg', alt='En la figura 1 se presenta ciclo de mejoramiento continuo PHVA, conformado por las etapas planear, hacer, verificar y actuar, las cuales están interconectadas en un proceso cíclico.')
    p.mb-5(data-aos="fade-down") A continuación, se describen los componentes esenciales que conforman el SGCN:
    .tarjeta.tarjeta--BG07.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="a)")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Política de continuidad del negocio
            p Define el compromiso de la alta dirección con la continuidad operativa. Esta política establece los principios, objetivos generales y el alcance del sistema, garantizando que las decisiones estratégicas se alineen con la resiliencia organizacional.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img04.jpg', alt='Imagen decorativa')
        .row(titulo="b)")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Análisis de impacto en el negocio (BIA, por sus siglas en inglés)
            p Es un proceso clave que identifica las funciones críticas, los recursos necesarios y los tiempos máximos tolerables de interrupción. Su propósito es determinar las prioridades para la recuperación de operaciones, facilitando la toma de decisiones informada.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img05.jpg', alt='Imagen decorativa')
        .row(titulo="c)")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Evaluación de riesgos
            p Consiste en identificar las amenazas que pueden afectar las operaciones (tecnológicas, naturales, humanas o externas), analizar su probabilidad de ocurrencia y el impacto potencial sobre los procesos críticos.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img06.jpg', alt='Imagen decorativa')
        .row(titulo="d)")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Estrategias de continuidad
            p Comprenden las medidas preventivas y de recuperación que la organización diseña para garantizar la disponibilidad de recursos, la comunicación efectiva y la continuidad del servicio. Estas estrategias pueden incluir planes de respaldo de datos, redundancia tecnológica, acuerdos con proveedores o sitios alternos de operación.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img07.jpg', alt='Imagen decorativa')
        .row(titulo="e)")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Planes de continuidad y recuperación
            p Son documentos operativos que detallan los procedimientos a seguir antes, durante y después de una interrupción. Incluyen asignación de responsabilidades, pasos de recuperación, protocolos de comunicación y mecanismos de activación del plan.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img08.jpg', alt='Imagen decorativa')
        .row(titulo="f)")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Programa de capacitación y concienciación
            p Involucra la formación continua del personal en temas de gestión del riesgo, respuesta ante emergencias y continuidad del negocio. Un personal capacitado garantiza una reacción coordinada y reduce errores durante situaciones críticas.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img09.jpg', alt='Imagen decorativa')
        .row(titulo="g)")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas, ejercicios y simulaciones
            p Permiten evaluar la eficacia de los planes y detectar oportunidades de mejora. A través de simulacros, ejercicios de escritorio o pruebas técnicas, la organización valida la funcionalidad de los procedimientos y la capacidad de respuesta de los equipos.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img10.jpg', alt='Imagen decorativa')
        .row(titulo="h)")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Seguimiento y mejora continua
            p Incluye auditorías internas, revisiones por la dirección y análisis de desempeño del sistema. Este componente asegura que el SGCN se mantenga actualizado y alineado con los cambios del entorno, las tecnologías emergentes y las lecciones aprendidas.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img11.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conjunto, estos elementos proporcionan una base sólida para garantizar la continuidad operativa, la protección de los activos y la confianza de los clientes y socios estratégicos. Un SGCN bien estructurado no solo responde ante crisis, sino que también fortalece la cultura organizacional, promoviendo la anticipación, la prevención y la resiliencia como pilares de la gestión empresarial moderna.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Características clave para su implementación efectiva
    p(data-aos="fade-down") La implementación efectiva de un Sistema de Gestión de Continuidad del Negocio (SGCN) requiere la integración de una serie de características fundamentales que garanticen su funcionalidad, sostenibilidad y alineación con los objetivos estratégicos de la organización. Estas características aseguran que el sistema no sea solo un conjunto de procedimientos documentados, sino una práctica viva que fortalece la resiliencia y la capacidad de respuesta institucional.
    p.mb-5(data-aos="fade-down") Entre las principales características se destacan:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Enfoque basado en el riesgo
              p La identificación, evaluación y priorización de riesgos es el punto de partida del SGCN, permitiendo enfocar los esfuerzos en los procesos más críticos y vulnerables para la organización.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img12.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Compromiso de la alta dirección
              p El liderazgo y apoyo de la alta dirección son esenciales para asignar recursos, definir responsabilidades, promover la cultura de continuidad y garantizar la integración del sistema con la estrategia corporativa.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img13.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Participación y sensibilización del personal
              p La continuidad del negocio no depende únicamente de políticas o procedimientos, sino de la preparación del talento humano. La capacitación, los simulacros y la comunicación interna fortalecen la respuesta colectiva ante incidentes.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img14.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Integración con otros sistemas de gestión
              p Un SGCN efectivo se articula con los sistemas de gestión de calidad, seguridad de la información, salud y seguridad en el trabajo, y gestión ambiental, evitando duplicidades y fomentando la coherencia institucional.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img15.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Documentación y control de la información
              p Los procedimientos, planes de respuesta y registros deben mantenerse actualizados, accesibles y protegidos, de manera que sirvan de guía práctica en situaciones de emergencia.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img16.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Pruebas y ejercicios periódicos
              p La verificación constante mediante simulaciones y auditorías permite evaluar la eficacia de los planes de continuidad, identificar oportunidades de mejora y reforzar la capacidad operativa.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img17.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Mejora continua
              p El sistema debe revisarse y ajustarse de forma permanente con base en los resultados de pruebas, auditorías o incidentes reales, promoviendo la innovación y la adaptación al cambio.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img18.jpg', alt='Imagen decorativa')
    p(data-aos="fade-down") Estas características, en conjunto, garantizan que el SGCN se mantenga como una herramienta dinámica que evoluciona con la organización y sus entornos de riesgo, asegurando la continuidad operativa, la protección de los activos críticos y la confianza de las partes interesadas.
    p.mb-5(data-aos="fade-down") La puesta en marcha de un SGCN, implica seguir una secuencia estructurada que asegure la eficacia y coherencia del proceso. Las etapas más comunes son:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img19.svg' alt='AvatarTop')
          h4.text-center Diagnóstico inicial
          p Evaluación del contexto, análisis de brechas y revisión de los procesos críticos existentes.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img20.svg' alt='AvatarTop')
          h4.text-center Definición del alcance
          p Delimitación de los procesos, áreas y activos que estarán cubiertos por el SGCN.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img21.svg' alt='AvatarTop')
          h4.text-center Política y compromiso de la dirección
          p Establecimiento de la política de continuidad y asignación de recursos.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img22.svg' alt='AvatarTop')
          h4.text-center Análisis de impacto en el negocio (BIA)
          p Identificación de funciones esenciales, tiempos de recuperación y dependencias clave.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img23.svg' alt='AvatarTop')
          h4.text-center Evaluación de riesgos
          p Determinación de amenazas, vulnerabilidades y probabilidad de ocurrencia.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img24.svg' alt='AvatarTop')
          h4.text-center Desarrollo de estrategias de continuidad
          p Diseño de planes de respuesta, recuperación y comunicación.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img25.svg' alt='AvatarTop')
          h4.text-center Implementación y capacitación
          p Ejecución de los planes, formación del personal y difusión de responsabilidades.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img26.svg' alt='AvatarTop')
          h4.text-center Pruebas, mantenimiento y mejora continua
          p Validación periódica del sistema, revisión de resultados y ajustes según los cambios organizacionales o tecnológicos.
    p.mb-0(data-aos="fade-down") Estas etapas permiten asegurar que el SGCN no solo se documente correctamente, sino que funcione en la práctica como un sistema preventivo, adaptable y sostenible.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Normativa y estándares internacionales aplicables
    p(data-aos="fade-down") La gestión de la continuidad del negocio en Colombia se encuentra respaldada por diversas disposiciones legales y lineamientos nacionales, que establecen la necesidad de proteger la información, garantizar la prestación continua de los servicios y fortalecer la resiliencia institucional. Estas normativas constituyen la base sobre la cual se desarrollan los sistemas de gestión, asegurando su alineación con los estándares internacionales.
    p.mb-5(data-aos="fade-down") Entre las principales normas y marcos regulatorios nacionales se destacan:
      .tarjeta.tarjeta--BG02.px-lg-5.mb-5
        .col-lg-10.col-12.mb-5
          LineaTiempoE.color-primario.p-4
            .row.justify-content-center(titulo="01" subtitulo="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Ley 1581 de 2012 y Decreto 1377 de 2013
                p Regulan la protección de datos personales y establecen obligaciones sobre el tratamiento seguro de la información.
              .col-lg-2.col-6.col-md-5.order-lg-1.order-1.mb-3(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/temas/tema5/img27.svg', alt='Imagen decorativa')
            .row.justify-content-center(titulo="02" subtitulo="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Circular Básica Jurídica (Capítulo VI, Título I) de la Superintendencia Financiera de Colombia: 
                p Exige a las entidades vigiladas implementar planes de continuidad del negocio para garantizar la estabilidad operativa y la protección de los recursos financieros.
              .col-lg-2.col-6.col-md-5.order-lg-1.order-1.mb-3(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/temas/tema5/img28.svg', alt='Imagen decorativa')
            .row.justify-content-center(titulo="03" subtitulo="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Decreto 1083 de 2015
                p Compila normas del sector público y promueve la adopción de prácticas de gestión del riesgo y continuidad en las entidades estatales.
              .col-lg-2.col-6.col-md-5.order-lg-1.order-1.mb-3(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/temas/tema5/img29.svg', alt='Imagen decorativa')
            .row.justify-content-center(titulo="04" subtitulo="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Política de Seguridad y Privacidad de la Información del Estado Colombiano (PSPIEC):
                p Define directrices para la protección de la información, la gestión de incidentes y la continuidad de los servicios en el ámbito gubernamental.
              .col-lg-2.col-6.col-md-5.order-lg-1.order-1.mb-3(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/temas/tema5/img30.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Estas disposiciones nacionales se articulan con normas y estándares internacionales, que proporcionan metodologías y marcos de referencia para el diseño e implementación de sistemas de gestión eficaces. Entre ellos se destacan:
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial
          .row.mb-0(numero="1" titulo="ISO 22301:2019")
            .col-12
              h4 Sistemas de Gestión de la Continuidad del Negocio.
            .col-12.mb-4
              p.mb-0 Establece los requisitos para planificar, implementar, mantener y mejorar un sistema que garantice la continuidad de las operaciones ante interrupciones. Su enfoque se basa en el ciclo PHVA (Planear, Hacer, Verificar y Actuar), fomentando la mejora continua y la preparación ante emergencias.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema5/img31.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="2" titulo="ISO/IEC 27001:2022")
            .col-12
              h4 Sistemas de Gestión de la Seguridad de la Información
            .col-12.mb-4
              p.mb-0 Complementa la ISO 22301 al establecer controles para proteger la confidencialidad, integridad y disponibilidad de la información, aspectos esenciales para la continuidad organizacional.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema5/img32.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="3" titulo="ISO 31000:2018")
            .col-12
              h4 Gestión del Riesgo
            .col-12.mb-4
              p.mb-0 Proporciona principios y directrices para identificar, analizar y tratar los riesgos que puedan afectar el logro de los objetivos institucionales y la continuidad operativa.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema5/img33.jpg', alt='Imagen decorativa')
    p(data-aos="fade-down") De manera complementaria, otras referencias internacionales como la NFPA 1600 (gestión de emergencias), NIST SP 800-34 (planificación de continuidad de TI) y los marcos COBIT e ITIL (gobierno y gestión de servicios tecnológicos) ofrecen buenas prácticas aplicables según el tipo de organización y su nivel de madurez.
    p.mb-0(data-aos="fade-down") En conjunto, estas normativas y estándares fortalecen la capacidad institucional para anticipar, responder y recuperarse de incidentes que puedan afectar la operación, promoviendo una cultura de resiliencia y cumplimiento normativo.
</template>

<script>
export default {
  name: 'Tema5',
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
