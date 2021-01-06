<template>
  <div>
    <v-card
      elevation="2"
      class="d-flex align-center justify-space-between pa-6 margin"
      v-for="(card, key) in cards"
      :key="key"
    >
      <div>
        <p>{{ card.nameCard }}</p>
      </div>
      <v-chip-group column>
        <v-chip>{{ card.team }}</v-chip>
      </v-chip-group>
    </v-card>
    {{ card }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['nameCard', 'team', 'card']),
    cards() {
      return this.$store.getters.getCard;
    },
  },
};
</script>
<style>
.margin {
  margin: 30px 0;
}
</style>
