//  For User only: get resquest, getters and initail state
export default {
    
    namespaced: true,
    state:  () => ({

        notices: [],
        birthdays: [],
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

        birthdays: state => {

            // Dane Staff Birthday
				var bdayToday = state.birthdays.filter( function (item) { return item.bday == 'true'; });				

                var upcomingBday = state.birthdays.filter( function (item) { return item.bday != 'true'; });
                
                let birthdays = {};
				
				if(upcomingBday.length > 4) {

				var firstHalf = upcomingBday.slice(0, 4);				
				var secHalf = upcomingBday.slice(4, 8);
				var thirdHalf = upcomingBday.slice(8, 12);
				var forthHalf = upcomingBday.slice(12, upcomingBday.length);
				
                birthdays = {firstHalf,secHalf,thirdHalf,forthHalf,bdayToday};
                }
                else{
                    birthdays = {'firstHalf':upcomingBday,bdayToday};
                }
                
                return birthdays;

            // return state.birthdays;
        },
        url: state => {
            return state.url
        }

    },
    
    actions: {        
        
        GET_Notices({ state,commit  }) {
            axios.get(state.url.API_URL+'/noticeboard3')                               
            .then(response => {                 
                commit('SET_NOTICES', response.data)
                
            }).catch(error => {console.log(error)})
        },  

        GET_Birthdays({ state,commit  }) {
            axios.get(state.url.API_URL+'/birthdays-this-month')                               
            .then(response => {                 
                // console.log(response.data);
                commit('SET_BIRTHDAYS', response.data);
                
            }).catch(error => {console.log(error)})
        },        
    },

    mutations: {

        SET_NOTICES(state, data) {
            state.notices = [...data];
            // state.notices.push(...data);
            },

        SET_BIRTHDAYS(state, data) {
            state.birthdays = [...data];          
            },
    },
}