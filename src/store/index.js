import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    format: '',
    nameCard: '',
    selectDate: { year: '', month: '', date: '' },
    team: '',
    action: '',
  },
  mutations: {
    setNameCard(state, payload) {
      state.nameCard = payload.nameCard;
    },
    setFormat(state, payload) {
      state.format = payload.format;
    },
    setSelectDate(state, payload) {
      state.selectDate = payload.selectDate;
    },
    setTeam(state, payload) {
      state.team = payload.team;
    },
    setAction(state, payload) {
      state.action = payload.actions;
    },
  },
  actions: {},
});
