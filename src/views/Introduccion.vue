<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-down") Este componente presenta los aspectos esenciales de la continuidad del negocio y la seguridad de la información, abordando los principios, procesos y estrategias que permiten a las organizaciones mantener su operación ante incidentes, interrupciones o crisis. Se orienta al reconocimiento de los activos de información, la identificación de riesgos y la aplicación de mecanismos que garanticen la resiliencia organizacional.

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-8.col-9.mb-3
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
      .col-lg-7
        p(data-aos="fade-down") El propósito de este componente es fortalecer las competencias para gestionar la continuidad operativa y la protección de los recursos críticos, comprendiendo su importancia en la sostenibilidad empresarial, la toma de decisiones y el cumplimiento de los estándares nacionales e internacionales, como las normas ISO 22301 e ISO 27001. A través del análisis de casos, herramientas de evaluación y ejercicios prácticos, se promueve una visión integral de cómo la gestión del riesgo y la seguridad de la información contribuyen a la estabilidad institucional.
        .bloque-texto-b.color-secundario.py-2
          .bloque-texto-b__texto     
            p.mb-0(data-aos="fade-down") El desarrollo de los temas se realiza mediante un enfoque teórico-práctico que permite al aprendiz comprender los fundamentos, aplicar metodologías de análisis y proponer estrategias de mejora continua. De esta manera, se busca que el participante adquiera las capacidades necesarias para identificar activos y procesos críticos, analizar amenazas y establecer planes de continuidad acordes con las necesidades de la organización.
    
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/1ecwycTFvFs?si=GZD1-cwxNaJKfJPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
