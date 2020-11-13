//  For User only: get resquest, getters and initail state
export default {
    
    namespaced: true,
    state:  () => ({

        notices: [],
        url: {
            StorageURL: window.storageURL,
            PublicURL: window.publicURL,
            API_URL: window.urlAPI,
        },    

    }),

    getters: {

        notices: state => {
            return state.notices;
        },
        url: state => {
            return state.url
        }

    },
    
    actions: {        
        
        GET_Notices({ state,commit  }) {
            axios.get(state.url.API_URL+'/noticeboard')                               
            .then(response => {                 
                commit('SET_NOTICES', response.data)
                
            }).catch(error => {console.log(error)})
        }        
    },

    mutations: {

        SET_NOTICES(state, data) {
            state.notices = [...data]
            // state.notices.push(...data);
            }
    },
}