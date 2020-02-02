import { initialState } from '../../../utils/requestsStates';
import makeMutations from '../../../utils/makeMutations';
import getPurchases from '../../../services/purchases';


export default {
  state: { ...initialState },

  getters: {
    fetchLoading({ isFetching }) {
      return isFetching;
    },
    fetchHasError({ hasError }) {
      return hasError;
    },
    fetchHasSucceeded({ hasSucceeded }) {
      return hasSucceeded;
    },
  },

  actions: {
    fetchPurchases({ commit }) {
      commit('fetchPurchasesRequest');

      return getPurchases()
        .then((data) => {
          commit('fetchPurchasesSuccess');
          return data;
        })
        .catch(error => commit('fetchPurchasesFailure', error));
    },
  },

  mutations: {
    ...makeMutations('fetchPurchases'),
  },
};
