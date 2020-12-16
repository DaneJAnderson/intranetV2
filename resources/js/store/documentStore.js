export default {
    
    namespaced: true,

    mutations:{

        SET_Documents(state, data) {
            state.documents = [...data];            
            },
        SET_Subfolder(state, data) {
            state.subfolder = [...data];            
            },

        SET_SubfolderPostData(state, data) {
            state.subfolderPostData = data;                 
            },

    },

    actions: {

        GET_Documents({ state,commit  }, payload_id) {
            axios.get(state.url.API_URL+'/documents/' + payload_id)                               
            .then(response => {      
                // console.log(response.data);           
                commit('SET_Documents', response.data)   // Call a Mutation             
            }).catch(error => {console.log(error)})
        },

        GET_Subfolder({ state,commit  }, payload) {
            axios.post(state.url.API_URL+'/subfolder', payload)                               
            .then(response => {      
                // console.log(response.data);           
                commit('SET_Subfolder', response.data)   // Call a Mutation             
            }).catch(error => {console.log(error)})
        },

    },

    getters: {

        documents: state => {
            return state.documents;
        },
        subfolder: state => {
            return state.subfolder;
        },
        subfolderPostData: state => {
            return state.subfolderPostData;
        },

        url: state => {
            return state.url
        }

    }, 

    state: {
       
        documents:[],
        subfolder:[],
        subfolderPostData: {},
     
            url: {
                StorageURL: window.storageURL,
                PublicURL: window.publicURL,
                API_URL: window.urlAPI,
             },

    }

}