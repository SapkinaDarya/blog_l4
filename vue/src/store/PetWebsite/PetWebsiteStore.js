import axios from "axios"

export default {
  namespaced: true,
  state: {
    firstTypeList: [],
    secondTypeList: [],
    searchText: ''
  },
  getters: {
    getFirstType: state => state.firstTypeList,
    getSecondType: state => state.secondTypeList,
    getSerchText: state => state.searchText,
  },
  mutations: {
    setSecondList: (state, payload) => {
      state.secondTypeList = payload
    },
    setFirstList: (state, payload) => {
      state.firstTypeList = payload
    },
    setSearchText (state, searchText) {
      state.searchText = searchText;
    },
  },
  actions: {
    loadFirstList: ({ commit }, payload) => {
      axios.get('http://localhost:3000/firstType', {
        params: {
          title: payload
        }
      })
      .then((result) => {
        commit('setFirstList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      })
    },
    addPet({ dispatch }, petData) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/firstType', petData)
        .then(response => {
          dispatch('loadFirstList'); 
          resolve(response.data);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        })
        .finally(() => {
          console.log(1);
        });
      });
    },
    loadSecondList: ({ commit }, payload) => {
      axios.get('http://localhost:3000/secondType', {
        params: {
          title: payload
        }
      })
      .then((result) => {
        commit('setSecondList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      })
    },
    loadDataById: ({ commit }, payload) => {
      axios.get(`http://localhost:3000/secondType/${payload}`)
      .then((result) => {
        commit('setSecondList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      });
    },
    setSearchText({ commit }, searchText) {
      commit ('setSearchText', searchText);
    }
  }
}
