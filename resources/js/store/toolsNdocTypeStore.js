export default {
    
    namespaced: true,

    mutations:{

        SET_DocType(state, data) {
            state.docType = [...data]; 
            // state.docType = data;            
            // console.log(state.docType)           
            },

        SET_Documents(state, data) {
            state.docType = [...data];            
            },

    },

    actions: {

        GET_DocType({ state,commit  }) {
            axios.get(state.url.API_URL+'/doc-type')                               
            .then(response => {      
                // console.log(response.data);           
                commit('SET_DocType', response.data)   // Call a Mutation             
            }).catch(error => {console.log(error)})
        },

        GET_Documents({ state,commit  }) {
            axios.get(state.url.API_URL+'/documents')                               
            .then(response => {      
                // console.log(response.data);           
                commit('SET_Documents', response.data)   // Call a Mutation             
            }).catch(error => {console.log(error)})
        },

    },

    getters: {

        tools: state => {
            return state.tools;
        },

        docType: state => {
            return state.docType;
        },
        documents: state => {
            return state.documents;
        },

        url: state => {
            return state.url
        }

    }, 

    state: {

        docType: [],
        documents:[],
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
            link: 'http://intranew/Petty_Cash_App'
            },
            {
            title: 'License Manager',
            subtitle: 'License Maintenance',
            icon: '/images/License_Manager.png',
            link: 'http://intranew/License_Manager/public/'
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
            link: 'http://intranew/COK_HR_MIS/public/'
            },
            {
            title: 'Queueing System',
            subtitle: 'MSO and front desk application',
            icon: '/images/Queueing_System.png',
            link: 'http://intranew/queuing_system/'
            },
            {
            title: 'Webmail',
            subtitle: 'Internal email system',
            icon: '/images/WebMail.png',
            link: 'https://login.microsoftonline.com/'
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