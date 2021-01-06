<template class="margin-step">
  <div>
    <Steppers e1="3"></Steppers>
    <div class="margin-step">
      <h1>Selectionnez le déclencheur</h1>
      <div class="d-flex justify-center align-center flex-column margin-bottom">
        <div class="margin-bottom margin-top">
        <p><b>Choissisez le type de déclencheur pour mettre à jour les données</b></p>
        </div>
        <v-select
          filled
          label="Type de déclencheur"
          :items="items"
          v-model="action"
          class="select-team"
        ></v-select>
      </div>
      <div>
        <div class="d-flex justify-center align-center flex-column">
          <div class="margin-bottom">
            <p>
              <b
                >Choissiez la date de mise à jour attendue (pour envoyer une alerte en cas de non
                réalisation)</b
              >
            </p>
          </div>
          <SingleDatePicker :first-day-of-week="1" @selectDate="selectDate" />
          <p v-if="formattedDate" class="margin-top">
            <b>{{ formattedDate }}</b>
          </p>
          <p v-else class="margin-top"><b>Veuillez selectionner une date</b></p>
        </div>
      </div>
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
  data: () => ({
    items: ['Manuel', 'Action', 'Calendaire'],
  }),
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
.margin-top {
  margin-top: 20px;
}
.margin-bottom {
  margin-bottom: 20px;
}
</style>
