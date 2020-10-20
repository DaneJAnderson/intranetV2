export default {

    state: {

        notices: [{
            image1: 'images/News_Feed/covid_water_pipe.png'
        },
        {
            image2: 'images/News_Feed/COVID_AH_KIP.jpg'
        },
        {
            image3: 'images/News_Feed/know_the_covid.png'
        },
    ],
        url: {
            StorageURL: window.location.protocol+'//'+window.location.hostname+'/intranetV2/storage/app/public/',
            PublicURL: window.publicURL
        }

    },

    getters: {
        // notices: state => {
        //     return state.notices
        // },
        // url: state => {
        //     return state.url
        // }

    },

    mutations: {

    },

    actions: {
        
    }
}