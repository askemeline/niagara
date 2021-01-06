import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    format: '',
    nameCard: null,
    selectDate: { year: null, month: null, date: null },
    team: ['logistique', 'production', 'qualité', 'maintenance'],
    action: '',
    cards: [],
    // newCard: '',
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
    getCard(state, todo) {
      state.newCard = todo;
    },
    ADD_CARD(state, payload) {
      const newCard = payload;
      state.cards.push(newCard);
    },
  },
  getters: {
    getCard: (state) => state.cards,
    formattedDate: (state) => (state.selectDate.year !== null && state.selectDate.month !== null && state.selectDate.date !== null ? `Vous avez selectionner le ${state.selectDate.date}/${state.selectDate.month + 1}/${state.selectDate.year}` : ''),
  },
  actions: {
    // getCard({ commit }, cards) {
    //   commit('GET_CARD', cards);
    // },
    // addCard(context, payload) {
    //   context.commit('ADD_CARD', payload);
    // },
    addCard(context, payload) {
      context.commit('ADD_CARD', payload);
    },
  },
});
