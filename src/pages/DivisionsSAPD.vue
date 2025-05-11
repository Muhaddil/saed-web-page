<script setup lang="ts">
import { ref } from "vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

const leftDrawerOpen = ref(false);
const language = ref("es");

function switchLanguage() {
  language.value = language.value === "es" ? "en" : "es";
}
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/images/SAPDLogo.png" alt="SAPD Logo" />
          </q-avatar>
          San Andreas Police Department (SAPD)
        </q-toolbar-title>

        <a href="sapdhome.html">
          <q-btn flat icon="fas fa-home" aria-label="Ir a inicio" />
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-btn
            flat
            icon="fas fa-info-circle"
            aria-label="Información sobre SAPD"
          />
        </a>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <a href="sapdhome.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="local_police" class="icon" />
                Información General
              </span>
            </q-item-section>
          </q-item>
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="policy" class="icon" />
                Divisiones
              </span>
            </q-item-section>
          </q-item>
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="eva-archive-outline" class="icon" />
                Reclutamiento
              </span>
            </q-item-section>
          </q-item>
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="fas fa-question-circle" class="icon" />
                FAQ
              </span>
            </q-item-section>
          </q-item>
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="fas fa-phone" class="icon" />
                Contacto
              </span>
            </q-item-section>
          </q-item>
        </a>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <div class="q-mb-md flex justify-between">
          <ThemeSwitch />
          <q-btn
            @click="switchLanguage"
            icon="fas fa-language"
            label="Cambiar idioma"
            color="secondary"
            size="sm"
            aria-label="Cambiar idioma"
          />
        </div>

        <section id="info-section" class="info-section">
          <h2>
            {{
              language === "es"
                ? "San Andreas Police Department"
                : "San Andreas Police Department"
            }}
          </h2>
          <p v-if="language === 'es'">
            El San Andreas Police Department (SAPD) es la principal agencia
            encargada de mantener la ley y el orden en el estado de San Andreas.
            Nuestro compromiso es proteger y servir a la comunidad, garantizando
            la seguridad y el bienestar de todos los ciudadanos. Contamos con
            oficiales altamente capacitados y dedicados a mantener la paz y la
            justicia en nuestra jurisdicción.
          </p>
          <p v-else>
            The San Andreas Police Department (SAPD) is the leading agency
            responsible for maintaining law and order in the state of San
            Andreas. Our commitment is to protect and serve the community,
            ensuring the safety and well-being of all citizens. We have highly
            trained officers dedicated to maintaining peace and justice in our
            jurisdiction.
          </p>
        </section>

        <section class="care-section">
          <h2 class="text-center">
            {{ language === "es" ? "DIVISIONES" : "DIVISIONS" }}
          </h2>
          <div class="care-cards">
            <q-card class="care-card">
              <q-card-section>
                <!-- Recruitment and Employment -->
                <div class="d-flex align-items-center">
                  <span class="emoji" style="font-size: 40px">👨‍🏫</span>
                  <div>
                    <h3>
                      {{
                        language === "es"
                          ? "Recruitment and Employment"
                          : "Recruitment and Employment"
                      }}
                    </h3>
                    <p>
                      {{
                        language === "es"
                          ? "Es la división encargada de la realización de las pruebas de acceso a la SAPD, así como de la instrucción básica que se le debe dar a las personas que aprueban las oposiciones y entran a formar parte de alguno de los dos cuerpos que integran la SAPD. También se encarga de realizar formación a toda la plantilla respecto a las actuaciones policiales básicas mediante cursos sobre cómo procesar, como detener, trato a los detenidos, determinación de delitos, interrogatorios."
                          : "This is the division responsible for carrying out the entrance exams for the SAPD, as well as the basic training that must be given to people who pass the exams and become part of one of the two bodies that make up the SAPD. It is also responsible for training all staff regarding basic police actions through courses on how to process, how to arrest, treatment of detainees, determination of crimes, and interrogations."
                      }}
                    </p>
                  </div>
                </div>
                <div class="divider"></div>
                <!-- Divisor blanco -->

                <!-- Air Support Division -->
                <div class="d-flex align-items-center">
                  <span class="emoji" style="font-size: 40px">🚁</span>
                  <div>
                    <h3>
                      {{
                        language === "es"
                          ? "Air Support Division"
                          : "Air Support Division"
                      }}
                    </h3>
                    <p>
                      {{
                        language === "es"
                          ? "Proporcionar apoyo aéreo en diversas operaciones. Vigilancia y reconocimiento, asistencia en operaciones de rescate, transporte aéreo y apoyo en operaciones de seguridad."
                          : "Provide air support in a variety of operations. Surveillance and reconnaissance, assistance in rescue operations, air transport and support in security operations."
                      }}
                    </p>
                  </div>
                </div>
                <div class="divider"></div>
                <!-- Divisor blanco -->

                <!-- San Andreas Highway Patrol -->
                <div class="d-flex align-items-center">
                  <span class="emoji" style="font-size: 40px">🚔</span>
                  <div>
                    <h3>
                      {{
                        language === "es"
                          ? "San Andreas Highway Patrol"
                          : "San Andreas Highway Patrol"
                      }}
                    </h3>
                    <p>
                      {{
                        language === "es"
                          ? "Es la encargada de la vigilancia y control de las autopistas y carreteras principales en el estado de San Andreas. Su misión es garantizar la seguridad vial mediante la aplicación de las leyes de tránsito, la respuesta rápida a accidentes y emergencias, y la asistencia a conductores en dificultades. Además, el SAHP también participa en operaciones de control de velocidad, detección de conductores ebrios o bajo la influencia de sustancias, y otras actividades relacionadas con el mantenimiento del orden en las vías públicas."
                          : "SAHP is responsible for the surveillance and control of highways and major roads in the state of San Andreas. Its mission is to ensure road safety by enforcing traffic laws, responding quickly to accidents and emergencies, and assisting drivers in distress. In addition, SAHP is also involved in speed enforcement, detecting drunk or impaired drivers, and other activities related to maintaining order on public roads."
                      }}
                    </p>
                  </div>
                </div>
                <div class="divider"></div>
                <!-- Divisor blanco -->

                <!-- Internal Affairs -->
                <div class="d-flex align-items-center">
                  <span class="emoji" style="font-size: 40px">⚖️</span>
                  <div>
                    <h3>
                      {{
                        language === "es"
                          ? "Internal Affairs"
                          : "Internal Affairs"
                      }}
                    </h3>
                    <p>
                      {{
                        language === "es"
                          ? "La división de asuntos internos investiga denuncias contra oficiales, incluyendo abuso de fuerza y corrupción, operando de manera independiente para garantizar imparcialidad y proteger los derechos civiles. Recomienda medidas disciplinarias, mantiene transparencia a través de informes públicos y también participa en la prevención y capacitación para fomentar la ética y la responsabilidad en la fuerza policial."
                          : "The Internal Affairs Division investigates complaints against officers, including abuse of force and corruption, operating independently to ensure impartiality and protect civil rights. It recommends disciplinary action, maintains transparency through public reporting, and also engages in prevention and training to foster ethics and accountability in the police force."
                      }}
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>

            <q-card class="care-card">
              <q-card-section>
                <!-- Special Weapons and Tactics -->
                <div class="d-flex align-items-center">
                  <span class="emoji" style="font-size: 40px">⚔️</span>
                  <div>
                    <h3>
                      {{
                        language === "es"
                          ? "Special Weapons and Tactics"
                          : "Special Weapons and Tactics"
                      }}
                    </h3>
                    <p>
                      {{
                        language === "es"
                          ? "Es una unidad policial especializada en responder a situaciones de alto riesgo, como rescates de rehenes, operaciones contra el terrorismo, y enfrentamientos armados, utilizando tácticas avanzadas y equipo especializado. Su objetivo es manejar situaciones peligrosas con precisión y minimizar el riesgo para civiles y oficiales."
                          : "It is a police unit specialized in responding to high-risk situations, such as hostage rescues, counter-terrorism operations, and armed confrontations, using advanced tactics and specialized equipment. Its objective is to handle dangerous situations with precision and minimize the risk to civilians and officers."
                      }}
                    </p>
                  </div>
                </div>
                <div class="divider"></div>
                <!-- Divisor blanco -->

                <!-- Metropolitan Division -->
                <div class="d-flex align-items-center">
                  <span class="emoji" style="font-size: 40px">🗡️</span>
                  <div>
                    <h3>
                      {{
                        language === "es"
                          ? "Metropolitan Division"
                          : "Metropolitan Division"
                      }}
                    </h3>
                    <p>
                      {{
                        language === "es"
                          ? "Como tal, esta división debe ser convocada para labores que puedan categorizarse entre las siguientes: robos medios, acudir a todo tipo de robos medios, escolta de altas personalidades, colaboración en la protección de altas personalidades, negociaciones con rehenes, especialistas en todo tipo de negociaciones con rehenes de por medio e incluso posibles suicidas, control de masas, intervención en grandes concentraciones de masas, reuniones en lugares de tránsito público, manifestaciones y espectáculos públicos, y contra terrorismo, desactivación de artefactos explosivos y negociaciones. SOLO LSPD"
                          : "As such, this division should be called upon for tasks that can be categorized as follows: medium-sized robberies, attending all types of medium-sized robberies, escorting high-ranking personalities, collaborating in the protection of high-ranking personalities, negotiations with hostages, specialists in all types of negotiations with hostages involved and even possible suicides, crowd control, intervention in large mass gatherings, meetings in public transit areas, demonstrations and public shows, and counter-terrorism, deactivation of explosive devices and negotiations. ONLY LSPD"
                      }}
                    </p>
                  </div>
                </div>
                <div class="divider"></div>
                <!-- Divisor blanco -->

                <!-- San Andreas State Park Rangers -->
                <div class="d-flex align-items-center">
                  <span class="emoji" style="font-size: 40px">🪓</span>
                  <div>
                    <h3>
                      {{
                        language === "es"
                          ? "San Andreas State Park Rangers"
                          : "San Andreas State Park Rangers"
                      }}
                    </h3>
                    <p>
                      {{
                        language === "es"
                          ? "Los park rangers supervisan la seguridad del parque, protegen el entorno natural y responden a emergencias, participan en el mantenimiento y conservación de infraestructuras, interactúan con el público para asegurar el cumplimiento de las reglas. LSSD"
                          : "Park rangers oversee park security, protect the natural environment and respond to emergencies, participate in the maintenance and upkeep of infrastructure, and interact with the public to ensure compliance with the rules. LSSD"
                      }}
                    </p>
                  </div>
                </div>
                <div class="divider"></div>
                <!-- Divisor blanco -->

                <!-- Federal Investigation Bureau -->
                <div class="d-flex align-items-center">
                  <span class="emoji" style="font-size: 40px">🕵️</span>
                  <div>
                    <h3>
                      {{
                        language === "es"
                          ? "Federal Investigation Bureau"
                          : "Federal Investigation Bureau"
                      }}
                    </h3>
                    <p>
                      {{
                        language === "es"
                          ? "La Oficina Federal de Investigaciones es el principal brazo de investigación del Departamento de Justicia de los EE. UU. y miembro de pleno derecho de la Comunidad de Inteligencia de los EE. UU. Sus poderes de investigación son los más amplios de todas las agencias federales de aplicación de la ley. Los agentes federales de la Oficina trabajan tanto en operaciones de inteligencia como de aplicación de la ley. Su trabajo puede abarcar desde casos de terrorismo nacional e internacional hasta delitos cibernéticos, delitos contra los derechos civiles y de cuello blanco, y mucho más."
                          : "The Federal Bureau of Investigation is the principal investigative arm of the U.S. Department of Justice and a full member of the U.S. Intelligence Community. Its investigative powers are the broadest of any federal law enforcement agency. Federal agents in the Bureau work in both intelligence and law enforcement operations. Their work can range from domestic and international terrorism cases to cybercrime, civil rights and white-collar crimes, and much more."
                      }}
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </section>
      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-dark text-white">
      <div class="q-pa-md footer-content text-center">
        <img src="/images/SAPDLogo.png" alt="SAED Logo" class="logofooter" />
        <p>
          &copy; 2025 San Andreas Police Department. Todos los derechos
          reservados.
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped lang="scss">
.drawer {
  margin-top: 5px;
  font-size: 1.1rem;
}

.logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.q-card {
  cursor: pointer;
  border-radius: 15px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  max-width: 300px;
  margin: 0 auto;
}

.q-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.block-icon {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.info-section {
  margin-bottom: 40px;
  text-align: center;
}

.q-footer {
  background-color: #343a40;
  color: #fff;
  font-size: 14px;
}

.form-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .form-section {
    grid-template-columns: 1fr;
  }

  .block-icon {
    width: 50px;
    height: 50px;
  }
}

.q-btn {
  font-size: 0.8rem;
}

.q-btn .q-icon {
  margin-right: 6px;
}

.care-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
}

.logofooter {
  width: 5%;
  height: auto;
}

.care-card {
  display: grid;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: auto;
  width: auto;
  max-width: 40%;
  box-sizing: border-box;
}

.care-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  flex-grow: 1;
  overflow: hidden;
}

.card-content h3 {
  margin-bottom: 8px;
  text-align: center;
}

.card-content p {
  text-align: center;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.care-card q-icon {
  margin-bottom: 16px;
}

.divider {
  height: 1px;
  background-color: white;
  margin: 20px 0;
  width: 100%;
}

.item-row {
  display: flex;
  margin-top: 10px;
}

.icon {
  margin-right: 8px;
  font-size: 1.5rem;
  line-height: 1;
}

q-item-section span {
  line-height: 1.5;
}
</style>
