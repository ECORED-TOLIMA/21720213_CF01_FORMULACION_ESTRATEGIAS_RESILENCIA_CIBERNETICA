<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Proyectos de continuidad del negocio
    
    p.mb-5(data-aos="fade-down") Los proyectos de continuidad del negocio constituyen un componente esencial dentro de la gestión integral de riesgos y la resiliencia organizacional. Su finalidad es planificar, diseñar e implementar mecanismos que permitan garantizar la operación continua de los procesos críticos ante cualquier evento que pueda interrumpir las actividades normales de la organización.

    .row.justify-content-center.mb-0
      .col-lg-7.order-lg-1.order-2
        p(data-aos="fade-down") Estos proyectos se desarrollan con base en políticas, procedimientos y recursos específicos que buscan asegurar que, en caso de incidentes, la entidad pueda responder de manera estructurada y eficiente, minimizando los tiempos de inactividad y los impactos operativos, financieros y reputacionales.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") La formulación de un proyecto de continuidad requiere identificar los procesos esenciales del negocio, analizar los riesgos asociados, definir estrategias de respuesta y establecer roles y responsabilidades claras. Asimismo, debe contemplar la coordinación entre las diferentes áreas, la comunicación efectiva durante emergencias y la implementación de mecanismos de recuperación tecnológica y operativa.
        p.mb-0(data-aos="fade-down") En términos generales, los proyectos de continuidad del negocio fortalecen la capacidad de las organizaciones para anticipar, resistir y recuperarse de los incidentes, consolidando una cultura de prevención y sostenibilidad. Los siguientes apartados profundizan en sus tipos, objetivos, alcance, beneficios y buenas prácticas de implementación.
      .col-lg-3.order-lg-2.order-1.mb-3.col-md-5.col-7
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Tipos y características de los proyectos de continuidad
    
    p(data-aos="fade-down") Los proyectos de continuidad del negocio pueden adoptar diferentes enfoques según la naturaleza de la organización, el tipo de riesgo identificado y el alcance de las operaciones que se busca proteger. Aunque todos comparten el objetivo de garantizar la continuidad de los procesos críticos, se diferencian por su propósito, nivel de intervención y grado de madurez dentro del sistema de gestión organizacional.
    p.mb-5(data-aos="fade-down") Entre los principales tipos de proyectos de continuidad se destacan:
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img02.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Proyectos de prevención y preparación
            h5.t2.mb-2 Proyectos de prevención y preparación
            p.mb-0 Buscan anticiparse a posibles interrupciones mediante la identificación de amenazas, la implementación de controles preventivos y la capacitación del personal. Por ejemplo, la creación de políticas de respaldo de información o la instalación de sistemas redundantes.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img03.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Proyectos de respuesta y recuperación
            h5.t2.mb-2 Proyectos de respuesta y recuperación
            p.mb-0 Se centran en establecer procedimientos claros para actuar ante una crisis, restaurar los servicios esenciales y reducir el tiempo de inactividad. Suelen incluir planes de emergencia, protocolos de comunicación y estrategias de recuperación tecnológica.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img04.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Proyectos de mejora y fortalecimiento
            h5.t2.mb-2 Proyectos de mejora y fortalecimiento
            p.mb-0 Orientados a evaluar la eficacia de los planes existentes, realizar pruebas o simulacros y ajustar las estrategias según los resultados obtenidos. Este tipo de proyectos promueve la mejora continua y la madurez del sistema de gestión de continuidad.
    p.mb-5(data-aos="fade-down") En cuanto a las características clave de los proyectos de continuidad del negocio, se destacan las siguientes:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-6.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
        p(data-aos="fade-down") 
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Enfoque proactivo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Priorizan la anticipación y la preparación frente a la reacción.
          .row(numero="2" titulo="Orientación estratégica")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se alinean con los objetivos y políticas generales de la organización.
          .row(numero="3" titulo="Integración transversal")
            .col-12.mb-4.mb-md-0
              p.mb-0 Involucran a todas las áreas, desde la alta dirección hasta los equipos operativos.
          .row(numero="4" titulo="Actualización constante")
            .col-12.mb-4.mb-md-0
              p.mb-0 Deben revisarse periódicamente para adaptarse a cambios tecnológicos, normativos o estructurales.
          .row(numero="5" titulo="Documentación formal")
            .col-12.mb-4.mb-md-0
              p.mb-0 Requieren registros, procedimientos y evidencias verificables.
          .row(numero="6" titulo="Medición y evaluación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Incluyen indicadores de desempeño que permiten evaluar su efectividad.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img05.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conjunto, estos proyectos constituyen un marco estructurado que permite fortalecer la resiliencia organizacional, garantizando la continuidad de las operaciones y la sostenibilidad del negocio frente a imprevistos o emergencias.
    
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Objetivos y alcance de los proyectos
    
    p(data-aos="fade-down") Los proyectos de continuidad del negocio tienen como objetivo principal garantizar que las organizaciones estén preparadas para responder de manera eficaz ante incidentes que puedan interrumpir sus operaciones críticas. Buscan mantener la prestación de servicios esenciales, reducir el impacto de los eventos disruptivos y proteger los activos de información, los recursos humanos y la infraestructura tecnológica.
    p.mb-5(data-aos="fade-down") Entre los objetivos específicos más comunes se encuentran:
    .row.mb-4
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img06.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Proteger la integridad y disponibilidad de la información ante eventos como fallas tecnológicas, ciberataques o desastres naturales.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img07.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Asegurar la continuidad de los procesos críticos dentro de los niveles mínimos de operación aceptables.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img08.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Reducir el tiempo de inactividad mediante estrategias de recuperación efectivas.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img09.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Definir responsabilidades y procedimientos claros para la atención de incidentes.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img10.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Cumplir con normativas nacionales e internacionales relacionadas con la gestión de la continuidad y la seguridad de la información (por ejemplo, ISO 22301 e ISO 27001).
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img11.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              p Fomentar una cultura organizacional resiliente, basada en la prevención y la mejora continua.
    p(data-aos="fade-down") El alcance de los proyectos de continuidad depende del tamaño de la organización, su estructura operativa, los recursos disponibles y los riesgos a los que se encuentra expuesta. Puede abarcar desde un solo proceso crítico hasta todos los sistemas y áreas de la empresa.
    p.mb-5(data-aos="fade-down") Ejemplos de alcance según el tipo de organización:
    .row.justify-content-center.mb-4
      .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
        .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt1--img
            figure
              img(src="@/assets/curso/temas/tema3/img13.png", alt="Imagen decorativa")
          .crd_hover_txt1--body
            h5.t1.mb-3 Empresa industrial
            h5.t2.mb-2 Empresa industrial
            p.mb-0 Un proyecto puede enfocarse en la continuidad de la línea de producción y la protección de la cadena de suministro, asegurando la disponibilidad de materias primas y maquinaria ante interrupciones.
      .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
        .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt1--img
            figure
              img(src="@/assets/curso/temas/tema3/img14.png", alt="Imagen decorativa")
          .crd_hover_txt1--body
            h5.t1.mb-3 Entidad financiera
            h5.t2.mb-2 Entidad financiera
            p.mb-0 Puede centrarse en garantizar la operatividad de los sistemas de pago, la atención al cliente y la protección de la información confidencial.
      .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
        .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt1--img
            figure
              img(src="@/assets/curso/temas/tema3/img15.png", alt="Imagen decorativa")
          .crd_hover_txt1--body
            h5.t1.mb-3 Institución educativa
            h5.t2.mb-2 Institución educativa
            p.mb-0 El proyecto podría incluir la disponibilidad de plataformas virtuales, sistemas académicos y servicios administrativos ante fallas tecnológicas.
      .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
        .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt1--img
            figure
              img(src="@/assets/curso/temas/tema3/img16.png", alt="Imagen decorativa")
          .crd_hover_txt1--body
            h5.t1.mb-3 Entidad pública
            h5.t2.mb-2 Entidad pública
            p.mb-0 Su alcance puede orientarse a la continuidad de los servicios ciudadanos y la preservación de datos institucionales frente a incidentes o ataques cibernéticos.
    p.mb-0(data-aos="fade-down") En todos los casos, definir con claridad el objetivo y alcance del proyecto permite priorizar los procesos esenciales, optimizar los recursos y asegurar que las estrategias implementadas sean coherentes con las necesidades reales de la organización. Esto facilita una respuesta estructurada, coordinada y eficaz ante cualquier evento que amenace la continuidad del negocio.    
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Beneficios y buenas prácticas en su implementación
    
    p(data-aos="fade-down") La implementación de proyectos de continuidad del negocio aporta múltiples beneficios que fortalecen la estabilidad y competitividad de las organizaciones. Estos proyectos no solo preparan a las empresas para responder ante situaciones críticas, sino que también promueven una gestión proactiva y resiliente que favorece la mejora continua.
    .tarjeta.tarjeta--BG02.px-lg-5.mb-5
      p.mb-5(data-aos="fade-down") Entre los principales beneficios se destacan:
      .row.justify-content-center(data-aos="flip-up")
        .col-lg-8.col-12.order-lg-2.order-2
          ol.lista-ol--cuadro.lista-ol--separador
            li.mb-3 
              .lista-ol--cuadro__vineta.v--green
                span.text-bold 1
              p.mb-0 Reducción de pérdidas económicas y operativas, al minimizar el tiempo de inactividad y los costos derivados de interrupciones no planificadas.
            li.mb-3 
              .lista-ol--cuadro__vineta.v--green
                span.text-bold 2
              p.mb-0 Protección de la reputación institucional, ya que una respuesta eficaz ante crisis refuerza la confianza de los clientes, proveedores y partes interesadas.
            li.mb-3 
              .lista-ol--cuadro__vineta.v--green
                span.text-bold 3
              p.mb-0 Cumplimiento normativo y regulatorio, al alinearse con estándares internacionales como la norma ISO 22301, que establece los requisitos para los sistemas de gestión de continuidad del negocio.
            li.mb-3 
              .lista-ol--cuadro__vineta.v--green
                span.text-bold 4
              p.mb-0 Mejora en la toma de decisiones, gracias a la planificación y documentación de procedimientos claros para responder ante incidentes.
            li.mb-0
              .lista-ol--cuadro__vineta.v--green
                span.text-bold 5
              p.mb-0 Fortalecimiento de la cultura organizacional, fomentando la responsabilidad compartida y el compromiso de todas las áreas en la gestión del riesgo.
        .col-lg-4.col-md-6.col-12.mb-3.order-lg-1.order-1.mb-lg-0
          .row.justify-content-center(data-aos="flip-up")
            .col
              figure
                img(src='@/assets/curso/temas/tema3/img17.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") En términos prácticos, estos beneficios se evidencian cuando las organizaciones logran mantener sus operaciones críticas o restablecerlas en plazos aceptables, evitando pérdidas significativas o impactos negativos en su imagen.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Una empresa de servicios tecnológicos que implementa un proyecto de continuidad del negocio, establece procedimientos para realizar copias de seguridad automáticas y configurar servidores de respaldo. Durante una falla inesperada en su centro de datos principal, la compañía activa su plan de recuperación y logra restablecer los servicios en menos de una hora. Esto evita afectaciones mayores a los clientes y demuestra la eficacia de su planificación.
    p.mb-5(data-aos="fade-down") Para maximizar estos beneficios, se recomienda aplicar las siguientes buenas prácticas:
    .tarjeta.tarjeta--BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/img18.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema3/img19.svg", alt="alt").img100.m-auto
              P Realizar evaluaciones periódicas de riesgos y actualizar los planes de continuidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema3/img20.svg", alt="alt").img100.m-auto
              P Capacitar al personal en sus roles y responsabilidades dentro del plan.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema3/img21.svg", alt="alt").img100.m-auto
              P Realizar simulacros y pruebas regulares para validar la eficacia de los procedimientos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema3/img22.svg", alt="alt").img100.m-auto
              P Mantener comunicación constante entre las áreas clave y la alta dirección.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema3/img23.svg", alt="alt").img100.m-auto
              P Documentar y revisar las lecciones aprendidas después de cada evento o ejercicio.
    p.mb-0(data-aos="fade-down") En conjunto, estas acciones fortalecen la resiliencia organizacional y permiten que la empresa responda con eficacia ante cualquier eventualidad, garantizando la continuidad de sus operaciones y la protección de sus recursos más valiosos.

</template>

<script>
export default {
  name: 'Tema3',
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
