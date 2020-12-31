<template>
  <div>
    <Steppers e1="2"></Steppers>
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
    <div style="margin-bottom: 20px;">
      <p>Donner un nom a votre carte</p>
      <input
        type="text"
        name="nameCard"
        v-model="nameCard"
        placeholder="Données de production des pommes"
        style="
          background-color: #EEEEEE;
          border-style: none;
          width: 400px;
          padding: 10px;
          margin: 10px;"
      />
    </div>

    <div>
      <p>Ajouter des étiquettes à l'équipe</p>
      <select v-model="team" class="select">
        <label>Selectionner l'étiquettes à l'équipe</label>
        <option value="logistique" selected>logistique</option>
        <option value="production" >production</option>
        <option value="qualité" >qualité</option>
        <option value="maintenance" >maintenance</option>
      </select>
    </div>
    <Navigation></Navigation>
  </div>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone';
import Navigation from '../Navigation.vue';
import Steppers from '../Steppers.vue';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  components: { Navigation, Steppers, vueDropzone: vue2Dropzone },
  data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 200,
        addRemoveLinks: true,
      },
    };
  },
  computed: {
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

.select {
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #eeeeee;
  border-style: none;
  width: 400px;
}

</style>
