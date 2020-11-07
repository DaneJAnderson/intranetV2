//  For User only: get resquest, getters and initail state
export default {
    
    namespaced: true,
    state:  () => ({

        notices: []
/*             {
            image1: 'images/News_Feed/covid_water_pipe.png'
        },
        {
            image2: 'images/News_Feed/COVID_AH_KIP.jpg'
        },
        {
            image3: 'images/News_Feed/know_the_covid.png'
        }, */
    ,
    url: {
            StorageURL: window.location.protocol+'//'+window.location.hostname+'/intranetV2/storage/app/public/',
            PublicURL: window.publicURL,
            API_URL: window.publicURL+'/api',
         }

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