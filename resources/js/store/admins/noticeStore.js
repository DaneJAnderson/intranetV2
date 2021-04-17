// For Admin Only: put, patch, post request, mutations and updated states

export const noticeStore = {
    namespaced: true,

    getters: {
        notices: state => {
            return state.notices;
        },
        url: state => {
            return state.url
        },   
    },

    mutations: {

        SET_NOTICES(state, data) {
            // state.notices = [...data];            
            state.notices = data;            
            },

        UPDATE_NOTICES(state, id) {
                state.notices = state.notices.data.filter(item => {return item.id != id;});            
                },        
        SET_CURRENTPAGE(state, data){
            state.notices.current_page = data;
        }

    },

    actions: {

        GET_Notices({ state,commit  },pageNum) {
            // axios.get(state.url.API_URL+'/noticeboard-admin')                               
            axios.get(state.url.API_URL+'/noticeboard-admin?page='+pageNum)                               
            .then(response => {    
                // console.log(response.data);             
                commit('SET_NOTICES', response.data)   // Call a Mutation             
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
  

        POST_NOTICE({ state,commit,dispatch  }, payload) {
            axios.post(state.url.API_URL+'/uploads/postnotice', payload)                               
            .then(response => {                 
                // commit('SET_Documents', response.data)   // Call a Mutation  
                dispatch('GET_Notices',1);           
                console.log(response.data)   //  
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

    },
}



























/* POST_Login({ state,commit }, payload) {  // Login Authentication  
    return new Promise((resolve, reject) => {        
    axios.post(state.url.API_URL+'/userlogin', payload)                               
    .then(response => {  
        resolve(response);   
        commit('SET_Auth', response.data);
        sessionStorage.setItem('token', response.data.token);             
        sessionStorage.setItem('username', response.data.username);             
        sessionStorage.setItem('email', response.data.email);             
        // localStorage.setItem('token', response.data.token);             
        // localStorage.setItem('username', response.data.username);             
    }).catch(error => {                
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('email');
        // localStorage.removeItem('token');
        // localStorage.removeItem('username');
        reject(error);           
     })

    })
} */