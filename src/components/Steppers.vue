<template>
  <div>
    <v-stepper alt-labels v-model="e1">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="e1 > 1">
          Etape 1
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" :complete="e1 > 2">
          Etape 2
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Etape 3
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'Steppers',
  props: {
    e1: String,
  },
};
</script>
