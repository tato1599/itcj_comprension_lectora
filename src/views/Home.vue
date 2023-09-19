<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
    
      <div class="text-body-2 font-weight-light mb-n1">Bienvenido a</div>

      <h1 class="text-h2 font-weight-bold">Comprensión Lectora APP</h1>
      <h3 class="text-h5 font-weight-light mb-4">Mide tus habilidades de lectura con nosotros</h3>
      <v-divider class="my-4"></v-divider>
      <div class="py-6" />
      <h5 class="text-h5 font-weight-light mb-4">Ingresa tus datos para iniciar la prueba</h5>
      <h6 class="text-h6 font-weight-light mb-4">Al final se te daran los resultados</h6>
      <v-row class="d-flex align-center justify-center">
        <v-col >
          
          <v-text-field
            label="Nombre"
            outlined
            placeholder="Nombre"
            prepend-icon="mdi-account"
            type="text"
          />
           
        </v-col>

      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col>
      <v-text-field
        label="Edad"
        outlined
        placeholder="Edad"
        prepend-icon="mdi-numeric"
        :rules="edadRules"
        :counter="edadCounter"
        v-model="edad"
      />
    </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select 
            label="Nivel de Estudios"
            outlined
            placeholder="Nivel de Estudios"
            prepend-icon="mdi-school"
            type="text"
            :items="items"
          >
          </v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn
            color="primary"
            class="white--text"
            depressed
            large
            rounded
            to="/test"
            block
          >
            Iniciar
          </v-btn>
        </v-col>
      </v-row>

    </v-responsive>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      edad: null,
      items: [
        'Primaria',
        'Secundaria',
        'Preparatoria',
        'Universidad',
        'Posgrado',
      ],
    }
  },
  computed: {
  
    edadRules() {
      return [
        (v) => !!v || 'La edad es requerida',
        (v) => !isNaN(Number(v)) || 'Ingrese un número válido',
        (v) => v >= 0 || 'La edad no puede ser negativa',
        (v) => v <= 120 || 'Ingrese una edad válida', // Cambiar 120 al límite deseado
      ];
    },
    edadCounter() {
      return this.edad ? `${this.edad.length} caracteres` : '';
    },
  },
}

</script>
