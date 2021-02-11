export default {
    
    namespaced: true,

    mutations:{

        SET_SUGGESTION(state, data) {            
            state.suggestions = data;   
            },
            SET_CURRENTPAGE(state, data){
                state.suggestions.current_page = data;
            },
    },

    actions: {

        GET_Suggestions({ state,commit  }, payload) {
            axios.get(state.url.API_URL+'/suggestion-box?page='+payload)                                           
            .then(response => {                 
                // console.log(response.data);
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

    },

    getters: {

        tools: state => {
            return state.tools;
        },
        
        suggestions: state => {

            return state.suggestions;
        },  
   

        url: state => {
            return state.url
        }

    }, 

    state: {

        suggestions: [],
        tools: [
            {
            title: 'Cuna forms ',
            subtitle: 'Yearly forms',
            icon: '/images/CUNA.png',
            link: 'https://www.cuna.org/cpdonline/'
            },
            {
            title: 'Loan Tracker',
            subtitle: 'To Track promotional loans',
            icon: '/images/shares.png',
            link: 'http://intranew/Loan_Sale_Promotion/'
            },
            {
            title: 'Documents',
            subtitle: 'Member and Policy documents, etc',
            icon: '/images/Documents.png',
            // link: window.publicURL+'/tools/documents'
            link: '/tools/documents'
            },
            {
            title: 'Facilities Petty Cash',
            subtitle: 'Allow staff to request petty cash',
            icon: '/images/petty_cash_640x480.jpg',
            link: 'http://192.168.110.26/Petty_Cash_App'
            },
            {
            title: 'License Manager',
            subtitle: 'License Maintenance',
            icon: '/images/License_Manager.png',
            link: 'http://192.168.110.26/License_Manager/public/'
            },
            {
            title: 'Meeting Scheduler',
            subtitle: 'Make meeting room request',
            icon: '/images/meeting_scheduler.png',
            link: 'http://intranew/Meeting/'
            },
            {
            title: 'Personal information Form',
            subtitle: 'Yearly forms',
            icon: '/images/Personal_informaption.png',
            // link: 'http://192.168.110.26/COK_HR_MIS/public/',
            link: '/tools/forms',
            },
            {
            title: 'Queueing System',
            subtitle: 'MSO and front desk application',
            icon: '/images/Queueing_System.png',
            link: 'http://192.168.110.26/queuing_system/'
            },
            {
            title: 'Webmail',
            subtitle: 'Internal email system',
            icon: '/images/WebMail.png',
            link: 'https://outlook.office365.com/mail'
            },
            {
            title: 'Suggestion Box',
            subtitle: 'Staff Feedback',
            icon: '/images/suggestion-box2.png',
            // link: window.publicURL+'/tools/suggestion-box'
            link: '/tools/suggestion-box'
            },
            {
            title: 'Group Health Insurance',
            subtitle: 'Health Insurance Forms',
            icon: '/images/Group-Health-Insurance.png',
            // link: window.publicURL+'/tools/group-health'
            link: '/tools/group-health'
            },
            // {
            // title: '',
            // subtitle: '',
            // icon: ''
            // },
            ], 
            url: {
                StorageURL: window.storageURL,
                PublicURL: window.publicURL,
                API_URL: window.urlAPI,
             },

    }

}