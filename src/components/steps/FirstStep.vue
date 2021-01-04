<template>
  <div>
    <Steppers e1="1"></Steppers>
    <h1>Selectionner le format d'entrée</h1>
    <v-container>
      <v-row justify="space-around">
        <v-radio-group v-model="format">
          <v-row>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <v-radio value="file"></v-radio>
                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                <v-card-text>
                  <div>Fichier</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <v-radio value="app"></v-radio>
                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                <v-card-text>
                  <div>Application</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <v-radio value="api"></v-radio>
                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                <v-card-text>
                  <div>API</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-radio-group>
      </v-row>
    </v-container>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../Navigation.vue';
import Steppers from '../Steppers.vue';

export default {
  components: { Navigation, Steppers },
  computed: {
    format: {
      get() {
        return this.$store.format;
      },
      set(value) {
        this.$store.commit('setFormat', { format: value });
      },
    },
  },
};
</script>
