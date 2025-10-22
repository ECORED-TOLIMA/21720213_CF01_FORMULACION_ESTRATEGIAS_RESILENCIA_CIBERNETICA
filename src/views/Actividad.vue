<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Los activos de información incluyen únicamente los documentos físicos y no los datos digitales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La confidencialidad, integridad y disponibilidad son principios fundamentales de la seguridad de la información.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La vulnerabilidad de un activo se refiere al grado de exposición frente a amenazas o incidentes de seguridad.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La continuidad del negocio busca garantizar que la organización pueda mantener operaciones críticas ante interrupciones.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La resiliencia organizacional se enfoca únicamente en la infraestructura tecnológica.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Los procesos críticos son aquellos que pueden interrumpirse sin afectar el cumplimiento de los objetivos estratégicos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'El análisis de impacto en el negocio (BIA) permite identificar los procesos esenciales y estimar los tiempos máximos de recuperación.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El Tiempo Máximo de Recuperación (RTO) indica cuánto tarda una organización en volver a operar después de una interrupción.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Los proyectos de continuidad del negocio no requieren alinearse con los objetivos estratégicos de la organización.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La planificación de la continuidad del negocio reduce la improvisación y mejora la coordinación entre áreas ante emergencias.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La gestión del riesgo en la continuidad del negocio solo considera amenazas externas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La evaluación de probabilidad e impacto permite priorizar los riesgos más críticos para la organización.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Las estrategias de mitigación buscan reducir tanto la probabilidad como el impacto de los riesgos identificados.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El Sistema de Gestión de Continuidad del Negocio (SGCN) se basa en el ciclo PHVA (Planear, Hacer, Verificar, Actuar).',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La norma ISO 22301 establece los requisitos específicos para implementar un SGCN efectivo.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La norma ISO 27001 se enfoca en la gestión de la seguridad de la información.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'En Colombia no existe normativa relacionada con la gestión de riesgos o la continuidad del negocio.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'La identificación de activos críticos es una etapa opcional dentro del SGCN.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Los ejercicios prácticos de continuidad ayudan a validar los planes y mejorar la capacidad de respuesta institucional.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La caracterización de necesidades de seguridad permite definir medidas de protección acordes con los riesgos y recursos disponibles.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre continuidad del negocio, gestión del riesgo, seguridad de la información y resiliencia organizacional, demostrando una comprensión integral de los factores que garantizan la sostenibilidad operativa en las organizaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
