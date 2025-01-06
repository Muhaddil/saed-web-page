<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import ThemeSwitch from '../components/ThemeSwitch.vue';

const faqs = ref([
  {
    question: '¿Qué es el SAED?',
    answer: 'El SAED (San Andreas Emergency Department) es la organización privada que gestiona los servicios de emergencias en San Andreas. Incluye el SAMS (Servicios Médicos) y el SAFD (Bomberos), asegurando la seguridad y bienestar de los ciudadanos.',
  },
  {
    question: '¿Cómo funciona el SAED?',
    answer: 'El SAED opera mediante una estructura jerárquica con equipos altamente capacitados. Los servicios médicos (SAMS) atienden emergencias sanitarias, mientras que los bomberos (SAFD) responden a incendios, rescates y emergencias relacionadas. Ambos trabajan en conjunto para ofrecer una respuesta integral.',
  },
  {
    question: '¿Cómo puedo unirme al SAED?',
    answer: 'Para unirte al SAED, debes completar un formulario de solicitud y participar en un proceso de selección. Este incluye entrevistas, pruebas prácticas y evaluaciones de aptitud. Dependiendo de tus intereses, puedes postularte al SAMS o al SAFD.',
  },
  {
    question: '¿Cuánto se cobra trabajando para el SAED?',
    answer: 'Los ingresos en el SAED dependen de si formas parte del SAMS o del SAFD, y de tu rango dentro de la organización...',
  },
  {
    question: '¿Qué servicios ofrece el SAMS?',
    answer: 'El SAMS brinda atención médica de emergencia, traslados en ambulancia, soporte vital avanzado y servicios de consulta preventiva. Además, organiza campañas de salud para la comunidad.',
  },
  {
    question: '¿Qué servicios ofrece el SAFD?',
    answer: 'El SAFD se encarga de responder a incendios, rescates en accidentes vehiculares, operaciones de búsqueda y rescate, y control de materiales peligrosos. También realiza inspecciones de seguridad contra incendios.',
  },
  {
    question: '¿Qué requisitos debo cumplir para unirme al SAED?',
    answer: 'Debes tener al menos 21 años, poseer todas las licencias de coducción terrestres, y demostrar habilidades de trabajo en equipo y disposición para responder ante emergencias. Además, es necesario completar una capacitación inicial en la academia correspondiente.',
  },
  {
    question: '¿Cómo puedo colaborar con el SAED si no soy miembro?',
    answer: 'Puedes colaborar participando en simulacros de emergencia, asistiendo a talleres comunitarios o donando suministros. También puedes ofrecer tu tiempo como voluntario en actividades específicas organizadas por el SAED.',
  },
  {
    question: '¿Cómo puedo reportar un problema relacionado con los servicios del SAED?',
    answer: 'Puedes reportar cualquier problema o sugerencia a través del formulario de contacto en nuestra página oficial o directamente en las oficinas del SAED. Tu retroalimentación nos ayuda a mejorar continuamente.',
  },
  {
    question: '¿Existen programas de formación continua para los miembros del SAED?',
    answer: 'Sí, el SAED ofrece programas de capacitación regular para sus miembros, incluyendo talleres de primeros auxilios avanzados, técnicas de rescate y gestión de crisis. La formación es clave para mantener altos estándares de servicio.',
  },
  {
    question: '¿Qué debo hacer si tengo una emergencia?',
    answer: 'En caso de emergencia, llama al número correspondiente (SAFD o SAMS) en la app de "Servicios" en tu movil. Mantén la calma, proporciona tu ubicación exacta y describe brevemente la situación. Los equipos del SAED estarán en camino para asistirte.',
  },
]);

const searchTerm = ref("");
const drawer = ref<boolean>(false);
const randomMessage = ref<string>("");
const messageShown = ref<boolean>(false);

const filteredFaqs = computed(() =>
  faqs.value.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

const noResultsMessages = [
  "¿Has probado a buscar algo que tenga sentido?",
  "¿Seguro que escribiste bien? Yo lo encontré a la primera.",
  "Bueno, si no está aquí, será que no era tan importante.",
  "¿No será que estás buscando en el lugar equivocado?",
  "¿Seguro que es algo que existe? Porque yo no veo nada.",
  "A ver si pruebas con otra búsqueda, porque yo lo encontraría en 5 segundos.",
  "No te rindas, pero... ¿estás seguro de que lo escribiste correctamente?",
  "Hmm, eso no parece estar por aquí. ¿Lo estás buscando bien?",
  "Parece que el universo no tiene esa respuesta... ¿Estás seguro de lo que buscas?",
  "¿Revisaste si la ortografía está bien? A veces los detalles importan.",
  "No encuentro nada con eso... Tal vez es una búsqueda demasiado avanzada para mí.",
  "¡Vaya! ¿Estás seguro de que existe algo con esa descripción?",
  "¿Seguro que esa es la pregunta correcta? Yo no lo encuentro por aquí.",
  "A lo mejor intentas buscar en otro lugar... ¡Yo no veo nada!",
  "¿Lo escribiste bien? A veces con una sola letra cambia todo.",
  "Parece que esa información no está aquí, pero ¿has probado con otro término?",
  "¿Has probado a hacer una búsqueda más precisa? Esto se está volviendo difícil.",
  "Nada encontrado... tal vez estamos buscando en el lugar equivocado.",
  "Eso no lo tengo, ¿pero seguro que es algo relevante?",
  "¿Has probado con otro término? Esto se está poniendo interesante.",
  "¿Estás buscando algo que realmente exista? Porque no lo encuentro por aquí.",
  "No sé si me estoy perdiendo algo, pero no encuentro nada relacionado.",
  "Hmm... eso no me suena. Tal vez necesites un mejor término de búsqueda.",
  "Eso de buscar en internet no es tan difícil, ¿eh? Solo tienes que saber cómo hacerlo.",
  "Es que, si supieras cómo funciona esto, lo encontrarías enseguida.",
  "Te lo dije, no hay nada ahí, es obvio. Mejor prueba en otro sitio.",
  "Yo lo busqué y lo encontré en 3 segundos. ¿No estarás escribiendo mal?",
  "Si no encuentras nada, tal vez es porque no estás buscando bien.",
  "Es que, con lo fácil que es buscar esto, no entiendo cómo no lo encuentras.",
  "No sé, yo no tendría muchas esperanzas con eso. Mejor busca algo más sencillo.",
  "Yo me acuerdo que hace años encontré eso sin problema, pero seguro que tú lo complicaste.",
  "La respuesta está ahí, pero claro, si no sabes cómo buscar, es normal que no la encuentres.",
  "Tienes que poner más atención, porque eso que buscas es fácil de encontrar, no sé cómo no lo ves.",
  "Te lo estoy diciendo, eso no existe o ya no está. Mejor busca otra cosa.",
  "Pues si yo lo encontré hace poco, y ahora tú no. ¿Qué hiciste mal?",
  "Yo ni busqué y ya sé lo que hay, ¿cómo no lo encontraste tú?",
  "Claro, la respuesta estaba frente a tus narices, pero ¿quién sabe buscar, no?",
  "Es que no lo entiendo, a mí no me costó nada encontrarlo. ¿Seguiste todos los pasos?",
];

const getRandomMessage = (): string => {
  const randomIndex = Math.floor(Math.random() * noResultsMessages.length);
  return noResultsMessages[randomIndex] || '';
};

watchEffect(() => {
  if (searchTerm.value === "") {
    randomMessage.value = "";
    messageShown.value = false;
  } else if (filteredFaqs.value.length === 0 && !messageShown.value) {
    randomMessage.value = getRandomMessage();
    messageShown.value = true;
  } else if (filteredFaqs.value.length > 0) {
    randomMessage.value = "";
    messageShown.value = false;
  }
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar>
        <q-btn flat icon="menu" @click="drawer = !drawer" v-if="$q.screen.gt.sm" aria-label="Abrir menú lateral" />
        <q-toolbar-title>
          <img src="/images/SAEDLogo.png" alt="SAED Logo" class="logo" />
          San Andreas Emergency Department (SAED)
        </q-toolbar-title>

        <a href="/saed-web-page/">
          <q-btn flat icon="fas fa-home" aria-label="Ir a inicio" />
        </a>

        <a href="information.html">
          <q-btn flat icon="fas fa-info-circle" aria-label="Información sobre SAED" />
        </a>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="left" bordered show-if-above>
      <q-list>
        <a href="/saed-web-page/">
          <q-item clickable>
            <q-item-section>
              <q-icon name="fas fa-info-circle" />
              Información General
            </q-item-section>
          </q-item>
        </a>

        <a href="sams.html">
          <q-item clickable>
            <q-item-section>
              <q-icon name="fas fa-hospital" />
              SAMS
            </q-item-section>
          </q-item>
        </a>

        <a href="safd.html">
          <q-item clickable>
            <q-item-section>
              <q-icon name="fas fa-fire" />
              SAFD
            </q-item-section>
          </q-item>
        </a>

        <a href="faq.html">
          <q-item clickable>
            <q-item-section>
              <q-icon name="fas fa-question-circle" />
              FAQ
            </q-item-section>
          </q-item>
        </a>

        <a href="contact.html">
          <q-item clickable>
            <q-item-section>
              <q-icon name="fas fa-phone" />
              Contacto
            </q-item-section>
          </q-item>
        </a>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">

        <div class="q-mb-md flex justify-between">
          <ThemeSwitch />
        </div>

        <div class="faq-container">
          <div class="search-container">
            <q-input rounded filled v-model="searchTerm" placeholder="Buscar preguntas..." class="search-container input" />
          </div>

          <div class="faq-list q-mt-md">
            <div v-for="(item, index) in filteredFaqs" :key="index" class="faq-item">
              <q-card class="q-mb-md">
                <q-card-section>
                  <q-expansion-item :label="item.question">
                    <q-card>
                      <q-card-section>
                        <div class="faq-answer">{{ item.answer }}</div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div v-if="filteredFaqs.length === 0 && messageShown" class="no-results-message">
            <p>{{ randomMessage }}</p>
          </div>

          <q-footer>
            <div class="text-center">
              <p><i>Creado y mantenido por el equipo de comunicaciones del SAED</i></p>
            </div>
          </q-footer>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.search-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 20px auto;
  border-radius: 50%;
}

.search-container input {
  width: 100%;
  padding: 0.75rem 2.5rem;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
}

.search-container input:focus {
  outline: none;
  border-color: #4e73df;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.search-container input::placeholder {
  color: #aaa;
  opacity: 0.8;
}

.logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: #888;
  font-size: 1.3rem;
  transition: font-size 0.3s ease, left 0.3s ease;
}

.search-container input:focus~.search-icon {
  font-size: 1.6rem;
  left: 12px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.faq-item {
  width: 100%;
  max-width: 50%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  font-size: 1.2rem;
}

.faq-answer {
  font-size: 0.9rem;
}

.faq-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.q-expansion-item {
  border-bottom: 1px solid #f1f1f1;
  transition: all 0.3s ease;
}

.q-expansion-item--label {
  font-weight: bold;
  color: #333;
  font-size: 2.1rem;
  transition: color 0.3s ease;
}

.no-results-message {
  font-size: 1.2rem;
  color: #d9534f;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
