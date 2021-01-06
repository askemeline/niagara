<template>
  <v-footer padless fixed class="d-flex justify-space-around" style="height:100px">
    <v-btn @click="navigatePrev" elevation="2" rounded> &#8592; Précédent</v-btn>
    <v-btn color="primary" elevation="2" rounded @click="navigateNext"> {{ nextBtnTxt() }}</v-btn>
  </v-footer>
</template>
<script>
export default {
  computed: {},
  methods: {
    nextBtnTxt() {
      if (this.$route.name === 'thirdStep') {
        return 'Terminer';
      }
      return 'Suivant';
    },

    navigateNext(val) {
      this.nextBtnTxt = 'Next';
      if (this.$route.name === 'firstStep') {
        this.$router.push({ name: 'secondStep' });
      } else if (this.$route.name === 'secondStep') {
        this.$emit('btn', val);
        this.$router.push({ name: 'thirdStep' });
      } else {
        const {
          team, nameCard, format, selectDate, action,
        } = this.$store.state;
        const concat = {
          team,
          nameCard,
          format,
          selectDate,
          action,
        };
        this.$store.dispatch('addCard', concat);
        this.nextBtnTxt = 'Terminer' && this.$router.push({ name: 'home' });
      }
    },
    navigatePrev() {
      this.nextBtnTxt = 'Previous';
      if (this.$route.name === 'firstStep') {
        this.$router.push({ name: 'home' });
      }
      this.nextBtnTxt = 'Next';
      if (this.$route.name === 'thirdStep') {
        this.$router.push({ name: 'secondStep' });
      } else if (this.$route.name === 'secondStep') {
        this.$router.push({ name: 'firstStep' });
      }
    },
  },
};
</script>
<style>
.v-sheet.v-footer:not(.v-sheet--outlined) {
  box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.5);
}

.v-footer--fixed {
  position: unset;
}
</style>
