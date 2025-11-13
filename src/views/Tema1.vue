<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Seguridad de la información y activos organizacionales
    
    p.mb-5(data-aos="fade-down") La seguridad de la información constituye un pilar fundamental para el funcionamiento y la sostenibilidad de las organizaciones, ya que garantiza la protección de los datos, los sistemas y los recursos tecnológicos que soportan los procesos operativos y estratégicos. Su propósito principal es preservar la confidencialidad, integridad y disponibilidad de la información, evitando accesos no autorizados, modificaciones indebidas o pérdidas que puedan comprometer la continuidad del negocio.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En un entorno empresarial cada vez más digitalizado, la información se ha convertido en un activo estratégico que representa un valor tangible e intangible para las organizaciones. Los activos de información comprenden todos los elementos que intervienen en la creación, almacenamiento, procesamiento y transmisión de datos, incluyendo documentos físicos y digitales, <em>software</em>, <em>hardware</em>, redes, sistemas y, especialmente, el conocimiento del personal. Identificar y clasificar adecuadamente estos activos permite establecer medidas de protección acordes con su nivel de criticidad e impacto potencial ante un incidente.
    
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema1/img02.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              p.mb-0 La gestión de la seguridad de la información implica la aplicación de políticas, procedimientos y controles diseñados para mitigar riesgos. Estas acciones se enmarcan en normas internacionales como la ISO/IEC 27001, que establece requisitos para implementar un Sistema de Gestión de Seguridad de la Información (SGSI), promoviendo la mejora continua y el cumplimiento normativo.

    p.mb-0(data-aos="fade-down") Asimismo, la seguridad de la información debe integrarse con la cultura organizacional, de modo que todos los colaboradores comprendan su rol en la protección de los datos y en la prevención de incidentes. Una organización que gestiona de forma adecuada sus activos de información fortalece su resiliencia frente a amenazas internas y externas, garantizando la confianza de clientes, proveedores y aliados estratégicos.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Activos de información y sus características
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-md-8.col-9.mb-3
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/tema1/img03.svg', alt='Imagen decorativa')
      .col-lg-9
        p(data-aos="fade-down") Los activos de información representan todos los elementos que poseen valor para una organización y que son esenciales para el cumplimiento de sus objetivos estratégicos, operativos y administrativos. Estos activos no se limitan únicamente a los datos digitales o documentos físicos, sino que también abarcan sistemas informáticos, aplicaciones, redes, infraestructura tecnológica, bases de datos, procesos, conocimientos del personal y la reputación institucional. Cada uno de estos componentes contribuye de manera directa o indirecta a la generación de valor y a la continuidad de las operaciones.
        p.mb-0(data-aos="fade-down") La gestión de los activos de información inicia con su identificación, seguida de la clasificación según su nivel de importancia, sensibilidad y criticidad para el negocio. Este proceso permite determinar cuáles son los recursos más vulnerables y establecer medidas de control proporcionales a su relevancia. Un activo puede clasificarse como crítico cuando su pérdida, alteración o divulgación compromete la operatividad, la confianza o la imagen de la organización.
    p.mb-5(data-aos="fade-down") Entre las principales características de los activos de información se destacan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img04.svg' alt='AvatarTop')
          h4.text-center Valor
          p Representa el beneficio o utilidad que el activo aporta al cumplimiento de los objetivos del negocio.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img05.svg' alt='AvatarTop')
          h4.text-center Confidencialidad
          p Garantiza que la información esté protegida frente al acceso, uso o divulgación no autorizada.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img06.svg' alt='AvatarTop')
          h4.text-center Integridad
          p Asegura la exactitud, coherencia y veracidad de los datos, evitando modificaciones no autorizadas.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img07.svg' alt='AvatarTop')
          h4.text-center Disponibilidad
          p Permite que la información esté accesible y utilizable por los usuarios autorizados en el momento que se requiera.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img08.svg' alt='AvatarTop')
          h4.text-center Vulnerabilidad
          p Refleja el grado de exposición del activo frente a amenazas o incidentes que puedan comprometer su seguridad.
    
    .tarjeta.tarjeta--BG02.px-lg-5.p-4.mb-0
      .row.justify-content-center
        .col-lg-10
          p.mb-0(data-aos="fade-down") Una gestión eficaz de los activos de información permite priorizar los recursos críticos, orientar las estrategias de seguridad de la información y fortalecer la capacidad de respuesta ante posibles interrupciones o incidentes. En este sentido, la identificación y valoración de los activos constituye el primer paso dentro de un sistema integral de seguridad y continuidad del negocio, alineado con las buenas prácticas establecidas en estándares internacionales como la ISO/IEC 27001 y la ISO 22301.
  
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Principios de seguridad de la información
    
    p(data-aos="fade-down") La seguridad de la información constituye un pilar esencial para la protección de los activos organizacionales, al garantizar que los datos sean tratados, almacenados y transmitidos de forma segura dentro de un marco normativo y técnico. Su propósito es preservar la integridad de los recursos informativos, minimizar los riesgos y asegurar la continuidad de las operaciones frente a amenazas internas o externas.
    p.mb-5(data-aos="fade-down") Los principios de seguridad de la información, establecidos principalmente por la norma ISO/IEC 27001, orientan la gestión y el diseño de controles que protegen los sistemas y la información. Estos principios son los siguientes:

    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Confidencialidad
              p Implica que la información solo sea accesible a personas, sistemas o procesos debidamente autorizados. Este principio previene el acceso, divulgación o uso no autorizado de los datos y se logra mediante mecanismos de autenticación, cifrado, control de accesos y políticas de clasificación de la información.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img09.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Integridad
              p Garantiza que los datos se mantengan completos, coherentes y no sean modificados sin autorización. Este principio protege la exactitud y fiabilidad de la información mediante controles como firmas digitales, auditorías de cambios y verificaciones de consistencia.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img10.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Disponibilidad
              p Asegura que la información, los sistemas y los servicios estén accesibles cuando se requieran para la operación del negocio. Para mantener este principio, se implementan estrategias de respaldo, redundancia, planes de recuperación ante desastres y monitoreo continuo de los sistemas.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img11.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Autenticidad
              p Establece la verificación de la identidad de los usuarios, dispositivos o sistemas que acceden a los recursos de información, garantizando que las comunicaciones y transacciones sean legítimas.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img12.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Trazabilidad o responsabilidad (<em>accountability</em>)
              p Permite registrar y rastrear las acciones realizadas sobre los activos de información, identificando responsables y facilitando la detección de incidentes de seguridad.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img13.jpg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") Estos principios constituyen la base para el desarrollo de políticas, procedimientos y controles que conforman el Sistema de Gestión de Seguridad de la Información (SGSI). Su aplicación efectiva promueve una cultura organizacional orientada a la protección de los datos y a la resiliencia tecnológica, factores determinantes para la continuidad del negocio y la confianza institucional.
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Identificación de riesgos asociados a los activos de información
    p.mb-5(data-aos="fade-down") La identificación de riesgos asociados a los activos de información constituye un proceso fundamental dentro de la gestión de la seguridad organizacional, ya que permite reconocer las amenazas que pueden afectar la confidencialidad, integridad o disponibilidad de los datos. Comprender los riesgos facilita la implementación de controles preventivos y correctivos que minimicen el impacto de incidentes y aseguren la continuidad de las operaciones.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El riesgo se define como la probabilidad de que una amenaza explote una vulnerabilidad, generando un impacto negativo en los activos de información o en los procesos que dependen de ellos. Por ello, su gestión debe iniciar con una evaluación sistemática que considere los diferentes tipos de amenazas, tanto internas como externas, incluyendo fallas humanas, errores de configuración, accesos no autorizados, pérdida de equipos, ataques cibernéticos, desastres naturales o interrupciones tecnológicas.
    
    p.mb-5(data-aos="fade-down") El proceso de identificación de riesgos generalmente incluye los siguientes pasos:

    .col-lg-10.col-12.mb-5
      LineaTiempoE.color-primario
        .row.justify-content-center(titulo="01" subtitulo="")
          .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
            h4 Inventario de activos de información
            p Registrar y clasificar los activos según su criticidad y valor para la organización.
          .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/tema1/img15.svg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="02" subtitulo="")
          .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
            h4 Identificación de amenazas
            p Determinar los eventos o agentes que pueden afectar los activos, como <em>malware</em>, accesos indebidos o fallas eléctricas.
          .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="03" subtitulo="")
          .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
            h4 Detección de vulnerabilidades
            p Reconocer debilidades técnicas, organizacionales o procedimentales que puedan ser aprovechadas por una amenaza.
          .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="04" subtitulo="")
          .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
            h4 Análisis del impacto potencial
            p Estimar las consecuencias operativas, financieras, legales o reputacionales que podría generar un incidente.
          .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="05" subtitulo="")
          .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
            h4 Determinación del nivel de riesgo
            p Combinar la probabilidad de ocurrencia con el nivel de impacto para priorizar la atención y definir controles de mitigación.
          .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/tema1/img19.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-5
          p.mb-0(data-aos="fade-down") Una adecuada identificación de riesgos permite establecer una base sólida para la gestión de la seguridad de la información, facilitando la toma de decisiones y el diseño de estrategias de continuidad del negocio. Este proceso debe ser dinámico y revisado periódicamente, considerando los cambios tecnológicos, normativos y organizacionales que puedan modificar el nivel de exposición al riesgo.
        p.mb-0(data-aos="fade-down") Asimismo, los lineamientos de normas internacionales como la ISO/IEC 27005 y la ISO 31000 orientan la aplicación de metodologías estructuradas para la gestión del riesgo, promoviendo una cultura de prevención y resiliencia frente a posibles incidentes de seguridad de la información.



</template>

<script>
export default {
  name: 'Tema1',
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
