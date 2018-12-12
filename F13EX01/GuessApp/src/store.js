import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    generatedNumber: 0,
    minLimit: 0,
    maxLimit: 1000,
    maxAttempts: 10,
    top: 5,
    scores: []
  },
  getters: {
    getGeneratedNumber: state => state.generatedNumber,
    getMaxAttempts: state => state.maxAttempts,
    getMaxLimit: state => state.maxLimit,
    getScores: state => {
      const top = state.scores.sort(
        function orderByLessAttempts(a, b) {
          if (a.attempts > b.attempts) return 1;
          if (a.attempts < b.attempts) return -1;
          else return 0;
        }
      )
      return top.slice(0, state.top)
    }
  },
  mutations: {
    GENERATE_NUMBER(state) {
      state.generatedNumber = Math.floor(
        Math.random() * state.maxLimit + state.minLimit
      );
    },
    SET_SCORE(state, payload) {
      state.scores.push(payload);
    }
  },
  actions: {
    generate_number(context) {
      context.commit("GENERATE_NUMBER");
    },
    set_score(context, payload) {
      context.commit("SET_SCORE", payload);
    }
  }
});