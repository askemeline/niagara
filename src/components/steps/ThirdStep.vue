<template>
  <div>
    <Steppers e1="3"></Steppers>
    <h1>Selectionnez le déclencheur</h1>
    <div style="margin-bottom: 20px;">
      <p>Choissisez le type de déclencheur pour mettre à jour les données</p>
      <select v-model="action" class="select">
        <label>Selectionner l'étiquettes à l'équipe</label>
        <option value="manuel">Manuel</option>
        <option value="action">Action prédefinie</option>
        <option value="calendaire">Calendaire</option>
      </select>
    </div>
    <div>
      <p>
        Choissiez la date de mise à jour attendue (pour envoyer une alerte en cas de non
        réalisation)
      </p>
      <SingleDatePicker :first-day-of-week="1" @selectDate="selectDate" />
      <p>{{ formattedDate }}</p>
    </div>
    <Navigation></Navigation>
  </div>
</template>
<script>
import SingleDatePicker from 'vue-single-date-picker';
import { mapGetters } from 'vuex';
import Steppers from '../Steppers.vue';
import Navigation from '../Navigation.vue';

export default {
  components: { Navigation, SingleDatePicker, Steppers },
  methods: {
    selectDate(value) {
      this.$store.commit('setSelectDate', { selectDate: value });
    },
  },
  computed: {
    ...mapGetters(['formattedDate']),

    action: {
      get() {
        return this.$store.action;
      },
      set(value) {
        this.$store.commit('setAction', { action: value });
      },
    },
  },
};
</script>
<style>
@import "~vue-single-date-picker/dist/vue-single-date-picker.css";
.single-date-picker__calendar-month-header[data-v-1179a6d7] {
  background-color: blue;
  background-image: unset;
  color: white;
}
#single-date-picker[data-v-61873592] {
  margin: auto;
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
