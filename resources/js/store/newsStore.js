// For NewsStore Only: put, patch, post request, mutations and updated states

export const newsStore = {
    namespaced: true,

    getters: {
        notices: state => {
            return state.notices;
        },
        url: state => {
            return state.url
        }
    },

    mutations: {

        SET_NOTICES(state, data) {
            // state.notices = [...data];            
            state.notices = data;            
            },

        UPDATE_NOTICES(state, id) {
                state.notices = state.notices.filter(item => {return item.id != id;});            
                },
        SET_CURRENTPAGE(state, data){
            state.notices.current_page = data;
        }
        

    },

    actions: {

        GET_Notices({ state,commit  }, pageNum) {
            axios.get(state.url.API_URL+'/noticeboard-admin?page='+pageNum)                               
            .then(response => {                 
                commit('SET_NOTICES', response.data)   // Call a Mutation             
            }).catch(error => {console.log(error)})
        },

/*         PUT_Notice_Name({ state,commit  }, data) {
            axios.put(state.url.API_URL+'/noticeboard-setname-admin', data)                               
            .then(response => {                        
                // 
            }).catch(error => {console.log(error)})
        },

        DELETE_Notice({ state,commit,dispatch  }, id) {
            axios.put(state.url.API_URL+'/noticeboard-remove-admin', {id})                               
            .then(response => {   

                commit('UPDATE_NOTICES', id)
                // dispatch('GET_Notices'); // Call Another Action
          
            }).catch(error => {console.log(error)})
        },
 */
    },
    state: {

        notices: [],
        url: {
            StorageURL: window.storageURL,
            PublicURL: window.publicURL,
            API_URL: window.urlAPI,
         },

    },
}