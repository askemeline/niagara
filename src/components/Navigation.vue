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
  </v-footer>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    nextBtnTxt() {
      if (this.$route.name === 'thirdStep') {
        return 'Terminer';
      }
      return 'Suivant';
    },

    navigateNext() {
      this.nextBtnTxt = 'Next';
      if (this.$route.name === 'firstStep') {
        this.$router.push('/card/2');
      } else if (this.$route.name === 'secondStep') {
        this.$router.push('/card/3');
      } else {
        this.nextBtnTxt = 'Terminer' && this.$router.push('/');
      }
    },
    navigatePrev() {
      this.nextBtnTxt = 'Previous';
      if (this.$route.name === 'firstStep') {
        this.$router.push('/');
      }
      this.nextBtnTxt = 'Next';
      if (this.$route.name === 'thirdStep') {
        this.$router.push('/card/2');
      } else if (this.$route.name === 'secondStep') {
        this.$router.push('/card/1');
      }
    },
  },
};
</script>
