<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos y factores que garantizan la continuidad del negocio y la protección de los activos de información en las organizaciones. Se analizan los principios de seguridad, la gestión del riesgo y la importancia de la resiliencia organizacional para mantener las operaciones ante posibles interrupciones. Asimismo, se estudian los tipos de proyectos de continuidad, sus objetivos y beneficios, junto con la estructura del Sistema de Gestión de Continuidad del Negocio (SGCN) y las normas internacionales que lo respaldan, como las ISO 22301 e ISO 27001. Finalmente, se incluyen ejercicios prácticos orientados a la identificación de procesos críticos, el análisis de riesgos y la caracterización de necesidades de seguridad, fortaleciendo las competencias necesarias para garantizar la sostenibilidad y la continuidad operativa en cualquier contexto. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se describe cómo los fundamentos y factores de continuidad del negocio permiten proteger los activos de información y mantener las operaciones ante posibles interrupciones. También se destacan la gestión del riesgo, la resiliencia organizacional y la aplicación del Sistema de Gestión de Continuidad del Negocio (SGCN) como elementos clave para garantizar la sostenibilidad y la seguridad institucional.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
