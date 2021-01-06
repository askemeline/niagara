<template>
  <div class="home">
    <h1>Bienvenue dans Niagara</h1>
    <div class="d-flex justify-center align-center flex-column">
      <v-btn
        @click="$router.push({ name: 'firstStep' })"
        elevation="2"
        rounded
        color="primary"
        class="btn"
      >
        &#x2b; Ajouter une carte</v-btn
      >
    </div>
    <Card></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data: () => ({
    items: ['Logistique', 'Production', 'Qualité', 'Maintenance'],
    value: '',
  }),
  computed: {
    ...mapGetters({
      team: (state) => state.team,
    }),
    team: {
      get() {
        return this.$store.action;
      },
      set(value) {
        this.$store.commit('setTeam', { action: value });
      },
    },
  },
};
</script>
<style>
.home {
  text-align: center;
  background-color: #fafafa;
  height: 100%;
  padding: 40px;
}
.btn {
  margin: 40px 0;
}
</style>
