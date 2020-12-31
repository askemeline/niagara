<template>
  <div>
    <v-card
      elevation="2"
      class="d-flex align-center justify-space-between pa-6"
    >
      <div>
        <p v-if="nameCard !== ''" class="font-weight-black">{{nameCard}}</p>
        <p v-else class="font-weight-black">Pas de donnée</p>
      </div>
      <v-chip-group v-model="selection" column>
        <v-chip v-if="nameCard !== ''">{{nameCard}}</v-chip>
        <v-chip v-else>Pas de donnée</v-chip>
      </v-chip-group>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['nameCard', 'team']),
  },
};
</script>
