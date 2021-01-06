<template>
  <v-footer padless fixed class="d-flex justify-space-around" style="height:100px">
      <v-btn
        @click="navigatePrev"
        elevation="2"
        rounded
    > &#8592; Précédent</v-btn>
      <v-btn
        color="primary"
        elevation="2"
        rounded
        @click="navigateNext"
    >  {{ nextBtnTxt() }}</v-btn>
       <!-- <p>helloe</p> {{getTeam}} -->
  </v-footer>
</template>
<script>
// import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(['formattedDate']),
    // ...mapGetters({
    //   team: (state) => state.team,
    // }),
  },
  // getTeam() {
  //   return this.$store.state.team;
  // },
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
        const { team, nameCard } = this.$store.state;
        const concat = { team, nameCard };
        console.log('test');
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
.v-sheet.v-footer:not(.v-sheet--outlined){
    box-shadow: 3px 2px 6px rgba(0,0,0,0.5);
}

.v-footer--fixed{
  position: unset;
}
</style>
