<template>
   <v-container class="fill-height">
     <v-responsive class="align-center text-center fill-height">
       <!-- Tu contenido principal aquí -->
       <!-- ... -->
       <h1>Las plantas tienen vida</h1>
       <div class="py-14">
         
         <p class="text-justify">
            Además de los animales, existen otros seres con vida que viven fijos a la tierra, 
            de la que se alimentan. Son las hierbas, arbustos y árboles, que reciben el nombre 
            de plantas o vegetales. Sin las plantas, no tendríamos alimentos vegetales, no vivirían 
            los animales, no habrían casas, ni barcos, ni aire puro. Sin las plantas no podríamos vivir.
             Existen muchas clases de plantas. Unas se distinguen por su gran tamaño, como el roble, el 
             álamo y el pino. Otras son medianas, como el rosal y el limonero. Algunas son pequeñas, como 
             el musgo de los prados. A las plantas les ocurre lo mismo que a los animales, pues como tienen 
             vida, nacen, crecen, se alimentan, respiran, tienen hijos, envejecen y mueren.  A diferencia de 
             los animales, que se trasladan de un lugar a otro y  tienen órganos de los sentidos, las plantas 
             viven fijas y no tienen sentidos. Algunas plantas sólo duran un año o menos, y otras pasan de cien 
             años de vida. </p>
      </div>
      
      <v-btn color="primary" to="/testQuestion" >Termine la lectura </v-btn>
       <!-- Diálogo modal -->
       <v-dialog v-model="dialogVisible" persistent max-width="400px">
         <v-card>
           <v-card-title class="headline">Instrucciones</v-card-title>
           <v-card-text>
               <!-- Contenido del diálogo -->
               <p>
                  En este ejercicio leeras un texto, cuando termines de leer presiona el boton "Termine la lectura"
                  para continuar con la prueba.
                  En la siguiente pantalla se te haran una serie de preguntas.
                  Presiona el boton "Comenzar" para comenzar la prueba, a partir de ese momento se contara el tiempo.
                  <br>
               </p>
           </v-card-text>
           <v-card-actions>
             <!-- Botón "Comenzar" en el diálogo -->
             <v-btn color="primary" @click="comenzar">Comenzar</v-btn>
           </v-card-actions>
         </v-card>
         
       </v-dialog>
      
     </v-responsive>
   </v-container>
 </template>
 
 <script>

 

 export default {
   data() {
     return {
       dialogVisible: true,
     };
   },
   methods: {
     mostrarDialogo() {
       this.dialogVisible = true;
     },
     comenzar() {
       // Lógica para comenzar la prueba
       this.dialogVisible = false; // Oculta el diálogo
     },
   },
 };
 </script>
 