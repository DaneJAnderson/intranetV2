// For Admin Only: put, patch, post request, mutations and updated states

export const galleryStore = {
    namespaced: true,

    getters: {
        gallery: state => {
            return state.gallery;
        },
        url: state => {
            return state.url
        },   
    },

    mutations: {

        SET_GALLERY(state, data) {
            // state.gallery = [...data];            
            state.gallery = data;            
            },

        UPDATE_GALLERY(state, id) {
            console.log(state);
            console.log(id); 
                state.gallery = state.gallery.data.filter(item => {return item.id != id;});            
                },        
        SET_CURRENTPAGE(state, data){
            state.gallery.current_page = data;
        }

    },

    actions: {

        GET_GALLERY({ state,commit  },pageNum) {
                                      
            axios.get(state.url.API_URL+'/gallery?page='+pageNum)                               
            .then(response => {    
                // console.log(response.data);             
                commit('SET_GALLERY', response.data)   // Call a Mutation             
            }).catch(error => {console.log(error)})
        },
        
    
   /*      PUT_Notice_Name({ state,commit  }, data) {
            axios.put(state.url.API_URL+'/noticeboard-setname-admin', data)                               
            .then(response => {                        
                // 
            }).catch(error => {console.log(error)})
        },
 */
        DELETE_GALLERY({ state,commit,dispatch  }, id) {
            axios.put(state.url.API_URL+'/gallery-remove-admin', {id})                               
            .then(response => {   

                commit('UPDATE_GALLERY', id)
                // dispatch('GET_GALLERY'); // Call Another Action
          
            }).catch(error => {console.log(error)})
        },


        POST_GALLERY({ state,commit,dispatch  }, payload) {
            axios.post(state.url.API_URL+'/uploads/post-gallery', payload)                               
            .then(response => {                 
                // commit('SET_Documents', response.data)   // Call a Mutation  
                dispatch('GET_GALLERY',1);            
                console.log(response.data)   //  
            }).catch(error => {console.log(error)})
        },


    },
    state: {

        gallery: [],  
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