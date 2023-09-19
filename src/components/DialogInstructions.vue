<template>
    <v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>Instrucciones</v-card-title>
        <v-card-text>
            
                En este ejercicio leeras un texto y luego responderas a una serie de preguntas.
                durante el proceso de lectura grabara tu voz para analizar tu comprension lectora.
                Debes darle acceso al microfono para poder realizar la prueba.
                <br>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="comenzar">Comenzar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      comenzar() {
        // Lógica para comenzar la lectura
        this.dialogVisible = false; // Oculta el diálogo
      }
    }
  };
  </script>
  