<template>
  <div class="home">
    <h1 style="margin-bottom:20px">Bienvenue dans Niagara</h1>
    <!-- <FilterButton></FilterButton> -->
     <v-btn
        @click="addCard"
        elevation="2"
        rounded
        color="primary"
        style="margin-bottom:40px;"
    > &#x2b; Ajouter une carte</v-btn>
    <Card></Card>

  </div>
</template>

<script>
// @ is an alias to /src
// import FilterButton from '@/components/FilterButton.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  components: {
    // FilterButton,
    Card,
  },
  methods: {
    addCard() {
      this.$router.push('/card/1');
    },
  },
};
</script>
