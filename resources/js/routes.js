
// import HomeComponent from './components/Home/HomeComponent'
const Home = ()=> import(/*webpackChunkName: "Home"*/ './components/Home/HomeComponent')
const birthday = () => import(/*webpackChunkName: "birthday"*/'./components/Home/BirthdayComponent')
const gallery = () => import(/*webpackChunkName: "gallery"*/'./components/Home/GalleryComponent')
const notice = () => import(/*webpackChunkName: "notice"*/'./components/Home/NoticeComponent')
const inventory = () => import(/*webpackChunkName: "inventory"*/'./components/Inventories/InventoryComponent')
const forms = () => import(/*webpackChunkName: "forms"*/'./components/Forms/FormsComponent')
const news = () => import(/*webpackChunkName: "news"*/'./components/News/NewsComponent')
const msteams = () => import(/*webpackChunkName: "msteams"*/'./components/News/MSTeamsComponent')
const tools = () => import(/*webpackChunkName: "tools"*/'./components/Tools/ToolsComponent')
const suggestion = () => import(/*webpackChunkName: "suggestionBox"*/'./components/Tools/SuggestboxComponent')
const groupHealth = () => import(/*webpackChunkName: "groupHeath"*/'./components/Tools/GroupHealthComponent')
const documents = () => import(/*webpackChunkName: "documents"*/'./components/Tools/DocumentsComponent')
const document = () => import(/*webpackChunkName: "document"*/'./components/Tools/DocumentComponent')
const subfolder = () => import(/*webpackChunkName: "subfolder"*/'./components/Tools/SubfolderComponent')
const admins = () => import (/*webpackChunkName: "admins"*/'./components/admins/AdminComponent')
const admNotice = () => import (/*webpackChunkName: "admNotice"*/'./components/admins/AdmnoticeComponent')
const admSuggestionBox = () => import (/*webpackChunkName: "admSuggestionBox"*/'./components/admins/admSuggestionBox')
const admGallery = () => import (/*webpackChunkName: "admGallery"*/'./components/admins/AdmGalleryComponent')
const admDocuments = () => import (/*webpackChunkName: "admDocuments"*/'./components/admins/AdmindocumentsComponent')
const intranet = 'COKCU - '


export  const routes = [

      // { path: '/', name:'Home', component: HomeComponent,meta: {title: intranet+'Home'}},
      { path: '/', name:'Home', component: Home,meta: {title: intranet+'Home'}},
      { path: '/admins', name:'Admins', component: admins,meta: {title: intranet+'Admins'}}, 
      { path: '/admins/notice', name:'AdminsNotice', component: admNotice,meta: {title: intranet+'Admin-Notice'}}, 
      { path: '/admins/suggestion-box', name:'AdmSuggestionBox', component: admSuggestionBox,meta: {title: intranet+'Admin-Suggestion-Box'}}, 
      { path: '/admins/gallery', name:'AdminsGallery', component: admGallery,meta: {title: intranet+'Admin-Gallery'}}, 
      { path: '/admins/documents', name:'AdminsDocuments', component: admDocuments,meta: {title: intranet+'Admin-Docs'}}, 
      { path: '/about', name:'About', component: () => import (/*webpackChunkName: "about"*/'./components/AboutComponent'),meta: {title: intranet+'About'}}, 
      { path: '/birthday', name:'birthday', component: birthday, meta: {title: intranet+'Birthday Listing'} },     
      { path: '/gallery', name:'gallery', component: gallery, meta: {title: intranet+'Gallery'} },     
      { path: '/notice', name:'notice', component: notice,meta: {title: intranet+'Notice Board'} },     
      { path: '/inventory', name:'inventory', component: inventory,meta: {title: intranet+'Inventory'} }, 
      { path: '/tools/forms', name:'forms', component: forms,meta: {title: intranet+'Forms'} }, 
      { path: '/news', name:'news', component: news,meta: {title: intranet+'News'} },
      { path: '/news/microsoft-teams', name:'msteams', component: msteams,meta: {title: intranet+'MS Teams'} },
      { path: '/tools', name:'tools', component: tools,meta: {title: intranet+'Tools'}}, 
      { path: '/tools/suggestion-box', name:'suggestionBox',component: suggestion, meta: {title: intranet+'Suggestion-Box'}}, 
      { path: '/tools/group-health', name:'groupHealth', component: groupHealth, meta: {title: intranet+'Group-Health'}}, 
      { path: '/tools/documents', name:'documents', component: documents, meta: {title: intranet+'Documents'}}, 
      { path: '/tools/documents/document/:id', name:'document', component: document,meta: {title: intranet+'Document'}}, 
      { path: '/tools/documents/subfolder/:id/', name:'subfolder', component: subfolder,meta: {title: intranet+'Subfolder'}}, 
           
    ]       




















    












    //   path: '/user/:id', component: User,
        //   children: [
        //     {

        //       path: 'profile',
        //       component: UserProfile
        //     },
        //     {

        //       path: 'posts',
        //       component: UserPosts
        //     }
        //             ]