export default {
    
    namespaced: true,

    mutations:{

            SET_SUGGESTION(state, data) {            
            state.suggestions = data;   
            },
            SET_CURRENTPAGE(state, data){
                state.suggestions.current_page = data;
            },
            UPDATE_SUGGESTION(state, id) {
                state.suggestions = state.suggestions.filter(item => {return item.id != id;});            
                }, 
    },

    actions: {

        GET_Suggestions({ state,commit  }) {
            axios.get(state.url.API_URL+'/admins/suggestion-box')                                           
            .then(response => {                 
                console.log(response.data);
                commit('SET_SUGGESTION', response.data);
                
            }).catch(error => {console.log(error)})
        },  

        POST_Suggestion({ state,commit  }, payload) {
            axios.post(state.url.API_URL+'/post-suggestion',payload)                                           
            .then(response => {                 
                console.log(response.data);
                commit('SET_SUGGESTION', response.data);
                
            }).catch(error => {console.log(error)})
        },  

        DELETE_Suggestion({ state,commit  }, id) {
            axios.put(state.url.API_URL+'/admins/suggestion-box/updates', id)                                           
            .then(response => {                 
                console.log(response.data);
                commit('UPDATE_SUGGESTION', id.id);
                
            }).catch(error => {console.log(error)})
        }, 

        POST_Response({ state,commit,dispatch  }, payload) {
            axios.post(state.url.API_URL+'/admins/suggestion-box/suggest-response',payload)                                           
            .then(response => {                 
                console.log(response.data);
                // commit('SET_SUGGESTION', response.data);
                // dispatch('GET_Suggestions');
                
            }).catch(error => {console.log(error)})
        },  

    },

    getters: { 

        suggestions: state => {

            return state.suggestions;
        },     

        url: state => {
            return state.url
        }

    }, 

    state: {

        suggestions: [],
        
            url: {
                StorageURL: window.storageURL,
                PublicURL: window.publicURL,
                API_URL: window.urlAPI,
             },

    }

}