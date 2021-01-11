// For Admin Only: put, patch, post request, mutations and updated states

export const adminStore = {
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
            state.notices = [...data];            
            },

        UPDATE_NOTICES(state, id) {
                state.notices = state.notices.filter(item => {return item.id != id;});            
                }

    },

    actions: {

        GET_Notices({ state,commit  }) {
            axios.get(state.url.API_URL+'/noticeboard-admin')                               
            .then(response => {                 
                commit('SET_NOTICES', response.data)   // Call a Mutation             
            }).catch(error => {console.log(error)})
        },
        
        POST_Documents({ state,commit  }, payload) {
            axios.post(state.url.API_URL+'/uploads/post', payload)                               
            .then(response => {                 
                // commit('SET_Documents', response.data)   // Call a Mutation             
                console.log(response.data)   //  
            }).catch(error => {console.log(error)})
        },

        PUT_Notice_Name({ state,commit  }, data) {
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

    },
    state: {

        notices: [],
        url: {
            StorageURL: window.storageURL,
            PublicURL: window.publicURL,
            API_URL: window.urlAPI,
         },

        adminIcons: [{
            img: '/images/adminIcons/noticeIcon.png',
            name: 'Notice Board',
            link: '/admins/notice'
        },
        {
            img: '/images/documents_types/clipboard.png',
            name: 'Documents',
            link: '/admins/documents'
        },
        {
            img: '/images/News_Feed/COVID_AH_KIP.jpg',
            name: 'Birthday',
            link: '#'
        },
        {
            img: '/images/News_Feed/know_the_covid.png',
            name: 'Gallery',
            link: '#'
        },
        {
            img: '/images/News_Feed/know_the_covid.png',
            name: 'Inventories',
            link: '#'
        },
        {
            img: '/images/News_Feed/know_the_covid.png',
            name: 'SuggestionBox',
            link: '#'
        },
    ],

    },
}