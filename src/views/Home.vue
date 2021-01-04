<template>
  <div class="home">
    <h1 style="margin-bottom:20px">Bienvenue dans Niagara</h1>
     <v-btn
        @click="$router.push({ name: 'firstStep' });"
        elevation="2"
        rounded
        color="primary"
        style="margin-bottom:40px;"
    > &#x2b; Ajouter une carte</v-btn>
    <Card></Card>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
};
</script>
