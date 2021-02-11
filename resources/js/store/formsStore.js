export const formsStore = {
    namespaced: true,

    getters: {
      
        forms: state => {
            return state.forms;
        },
        formTabs: state => {
            return state.formTabs;
        },
        url: state => {
            return state.url
        }
    },

    mutations: {

        SET_FORMS(state, data) {
            state.forms = [...data];            
            },

        UPDATE_FORMS(state, form) {
                // state.forms = state.forms.filter(item => {return item.id != id;});            
                state.forms = form;            
                }

    },

    actions: {

        GET_Forms({ state,commit  }) {
            axios.get(state.url.API_URL+'/getforms')                               
            .then(response => {                 
                commit('SET_FORMS', response.data)   // Call a Mutation             
            }).catch(error => {console.log(error)})
        },

        POST_Forms({ state,commit  }, payload) {
            axios.post(state.url.API_URL+'/postforms', payload)                               
            .then(response => {                 
                // commit('SET_FORMS', response.data)   // Call a Mutation  
                console.log(response.data);           
            }).catch(error => {console.log(error)})
        },

        UPDATE_Forms({ state,commit  }, form) {
            axios.put(state.url.API_URL+'/updateforms', form)                               
            .then(response => {                        
                // commit('UPDATE_FORMS', form)
            }).catch(error => {console.log(error)})
        },

    },
    state: {
     
        url: {
            StorageURL: window.storageURL,
            PublicURL: window.publicURL,
            API_URL: window.urlAPI,
         },
         forms:[],
         formTabs:[
             {
            header:'PERSONAL INFORMATION DATA SHEET ',
            link: '',
            },
             {
            header:'CONNECTED PARTY ANNUAL DECLARATION FORM',
            link: '',
            },
             {
            header:'ANNUAL ETHICS & CONFLICT OF INTEREST STATEMENT',
            link: '',
            },
             {
            header:'ANTI-MONEY LAUNDERING & COUNTER FINANCING OF TERRORISM',
            link: '',
            },
             {
            header:'EMPLOYEE CONFIDENTIALITY AGREEMENT',
            link: '',
            },
             {
            header:'STAFF DECLARATION',
            link: '',
            },
          /*    {
            header:'',
            link: '',
            }, */
        ]

    },
}