import { createApp } from "vue";
import { Quasar, Loading } from "quasar";
import quasarLang from "quasar/lang/es";
import quasarIconSet from "quasar/icon-set/fontawesome-v6";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import { Colours } from './css/stylePreset';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "@quasar/extras/mdi-v7/mdi-v7.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "@quasar/extras/eva-icons/eva-icons.css";
import "@quasar/extras/themify/themify.css";
import "@quasar/extras/line-awesome/line-awesome.css";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

app.use(PrimeVue, {
  theme: {
    preset: Colours,
    options: {
      darkModeSelector: '.theme-dark',
    },
  },
  locale: {
    startsWith: 'Empieza con',
    contains: 'Contiene',
    notContains: 'No contiene',
    endsWith: 'Termina con',
    equals: 'Es igual a',
    notEquals: 'No es igual a',
    noFilter: 'Sin filtro',
    lt: 'Menor que',
    lte: 'Menor o igual que',
    gt: 'Mayor que',
    gte: 'Mayor o igual que',
    dateIs: 'La fecha es',
    dateIsNot: 'La fecha no es',
    dateBefore: 'La fecha es anterior a',
    dateAfter: 'La fecha es posterior a',
    clear: 'Limpiar',
    apply: 'Aplicar',
    matchAll: 'Coincidir todo',
    matchAny: 'Coincidir cualquiera',
    addRule: 'Agregar regla',
    removeRule: 'Eliminar regla',
    accept: 'Aceptar',
    reject: 'Rechazar',
    choose: 'Elegir',
    upload: 'Subir',
    cancel: 'Cancelar',
    completed: 'Completado',
    pending: 'Pendiente',
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    chooseYear: 'Elegir año',
    chooseMonth: 'Elegir mes',
    chooseDate: 'Elegir fecha',
    prevDecade: 'Década anterior',
    nextDecade: 'Década siguiente',
    prevYear: 'Año anterior',
    nextYear: 'Año siguiente',
    prevMonth: 'Mes anterior',
    nextMonth: 'Mes siguiente',
    prevHour: 'Hora anterior',
    nextHour: 'Hora siguiente',
    prevMinute: 'Minuto anterior',
    nextMinute: 'Minuto siguiente',
    prevSecond: 'Segundo anterior',
    nextSecond: 'Segundo siguiente',
    am: 'a. m.',
    pm: 'p. m.',
    today: 'Hoy',
    weekHeader: 'Sem',
    firstDayOfWeek: 0,
    weak: 'Débil',
    medium: 'Medio',
    strong: 'Fuerte',
    passwordPrompt: 'Introduce una contraseña',
    searchMessage: 'Hay {0} resultados disponibles',
    selectionMessage: 'Se han seleccionado {0} elementos',
    emptySelectionMessage: 'No hay ningún elemento seleccionado',
    emptySearchMessage: 'No se encontraron resultados',
    fileChosenMessage: '{0} archivos',
    noFileChosenMessage: 'No se ha elegido ningún archivo',
    emptyMessage: 'No hay opciones disponibles',
  },
});

app.use(Toast, {
  position: POSITION.BOTTOM_CENTER,
  pauseOnHover: false,
  draggable: true,
  closeOnClick: true,
  maxToasts: 5,
});

app.use(Quasar, {
  plugins: {
    Loading,
  },
  lang: quasarLang,
  iconSet: quasarIconSet,
});

app.mount("#app");
