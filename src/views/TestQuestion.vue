<template>
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <!-- Tu contenido principal aquí -->
        <!-- ... -->
        <h1>Preguntas</h1>
  
        <!-- Pregunta 1 -->
        <v-card>
          <v-card-text>
            <ol>
              <li>¿Qué seres vivos además de los animales se mencionan en el texto?</li>
            </ol>
            <v-text-field v-model="respuestas[0]" label="Respuesta 1" variant="outlined" ></v-text-field>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 2 -->
        <v-card>
          <v-card-text>
            <ol>
              <li>¿Cómo se les llama a estos seres vivos fijos a la tierra?</li>
            </ol>
            <v-text-field v-model="respuestas[1]" label="Respuesta 2" variant="outlined"></v-text-field>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 3 -->
        <v-card>
          <v-card-text>
            <ol>
              <li>¿Qué función desempeñan las plantas en el ecosistema según el texto?</li>
            </ol>
            <v-text-field v-model="respuestas[2]" label="Respuesta 3" variant="outlined"></v-text-field>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 4 -->
        <v-card>
          <v-card-text>
            <ol>
              <li>¿Cuántas clases de plantas se mencionan en el texto? ¿Puedes nombrar algunas de ellas?</li>
            </ol>
            <v-text-field v-model="respuestas[3]" label="Respuesta 4" variant="outlined"></v-text-field>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 5 -->
        <v-card>
          <v-card-text>
            <ol>
              <li>¿Qué características comparten las plantas con los animales en términos de su ciclo de vida?</li>
            </ol>
            <v-text-field v-model="respuestas[4]" label="Respuesta 5" variant="outlined"></v-text-field>
          </v-card-text>
        </v-card>

        <v-btn
          color="primary"
          class=" white--text"
          depressed
          to="/testResults"
          @click="enviarRespuestas"
        >
            Enviar respuestas
        </v-btn>
      </v-responsive>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        respuestas: ["", "", "", "", ""], // Respuestas a las 5 preguntas
      };
    },
  };
  </script>
  