<template>
  <div>
    <Steppers e1="2"></Steppers>
    <div class="margin-step">
      <h1>Renseignez la carte</h1>
      <vue-dropzone :options="dropzoneOptions" :useCustomSlot="true" id="dropzone">
        <div class="dropzone-custom-content flex">
          <div class="img"></div>
          <div>
            <h3 class="dropzone-custom-title">Glisser et déposer vos fichier ici</h3>
            <p class="subtitle">Ou cherche un fichier</p>
          </div>
        </div>
      </vue-dropzone>
      <div style="margin-bottom: 20px;" class="d-flex justify-center align-center flex-column">
        <p><b>Donner un nom a votre carte</b></p>
        <v-text-field
          name="nameCard"
          v-model="nameCard"
          class="input"
          label="Données de production des pommes"
        />
      </div>
      <div class="d-flex justify-center align-center flex-column">
        <p><b>Ajouter des étiquettes à l'équipe</b></p>
        <div>
          <v-col class="d-flex">
            <v-select
              filled
              label="Selectionner"
              :items="items"
              v-model="team"
              class="select-team"
            ></v-select>
          </v-col>
        </div>
      </div>
    </div>
    <Navigation></Navigation>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import vue2Dropzone from 'vue2-dropzone';
import Navigation from '../Navigation.vue';
import Steppers from '../Steppers.vue';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  components: { Navigation, Steppers, vueDropzone: vue2Dropzone },
  data: () => ({
    items: ['Logistique', 'Production', 'Qualité', 'Maintenance'],
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      thumbnailWidth: 200,
      addRemoveLinks: true,
    },
  }),
  computed: {
    ...mapState({
      team: (state) => state.team,
      nameCard: (state) => state.nameCard,
    }),
    nameCard: {
      get() {
        return this.$store.nameCard;
      },
      set(value) {
        this.$store.commit('setNameCard', { nameCard: value });
      },
    },
    team: {
      get() {
        return this.$store.team;
      },
      set(value) {
        this.$store.commit('setTeam', { team: value });
      },
    },
  },
  methods: {},
};
</script>
<style>
.dropzone-custom-title {
  margin-top: 0;
  color: black;
}

.subtitle {
  color: grey;
  text-align: left;
}
.img {
  width: 50px;
  height: 50px;
  background-color: grey;
  margin-right: 20px;
}

.flex {
  display: flex;
  justify-content: center;
}
.vue-dropzone {
  border: dashed darkgrey;
  font-family: Arial, sans-serif;
  letter-spacing: 0.2px;
  color: #777;
  transition: 0.2s linear;
  width: 600px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.select-team {
  width: 400px;
}

.input {
  background-color: #eeeeee;
  border-style: none;
  width: 400px;
  padding: 10px;
  margin: 10px;
}

.margin-step {
  height: 100%;

}
.v-application p {
  margin-bottom: 0px;
}
</style>
