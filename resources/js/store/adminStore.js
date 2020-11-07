// For Admin Only: put, patch, post request, mutations and updated states

export const adminStore = {
    namespaced: true,
    // state: () => ( {
    state: {

        adminIcons: [{
            img: '/images/adminIcons/noticeIcon.png',
            name: 'Notice Board',
            link: '/admins/notice'
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

    // }),
    },

    getters: {

    },

    mutations: {

    },

    actions: {

    }
}