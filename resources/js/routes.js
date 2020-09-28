
import HomeComponent from './components/Home/HomeComponent'
const birthday = () => import('./components/Home/BirthdayComponent')
const gallery = () => import('./components/Home/GalleryComponent')
const notice = () => import('./components/Home/NoticeComponent')
const inventory = () => import('./components/Inventories/InventoryComponent')
const forms = () => import('./components/Forms/FormsComponent')
const news = () => import('./components/News/NewsComponent')
const tools = () => import('./components/Tools/ToolsComponent')
const documents = () => import('./components/Tools/DocumentsComponent')
const document = () => import('./components/Tools/DocumentComponent')

const intranet = 'COKCU - '


export  const routes = [

      { path: '/', name:'Home', component: HomeComponent,meta: {title: intranet+'Home'}},
      { path: '/about', name:'About', component: () => import ('./components/AboutComponent'),meta: {title: intranet+'About'}}, 
      { path: '/birthday', name:'birthday', component: birthday, meta: {title: intranet+'Birthday Listing'} },     
      { path: '/gallery', name:'gallery', component: gallery, meta: {title: intranet+'Gallery'} },     
      { path: '/notice', name:'notice', component: notice,meta: {title: intranet+'Notice Board'} },     
      { path: '/inventory', name:'inventory', component: inventory,meta: {title: intranet+'Inventory'} }, 
      { path: '/forms', name:'forms', component: forms,meta: {title: intranet+'Forms'} }, 
      { path: '/news', name:'news', component: news,meta: {title: intranet+'News'} },
      { path: '/tools', name:'tools', component: tools,meta: {title: intranet+'Tools'}}, 
      { path: '/tools/documents', name:'documents', component: documents, meta: {title: intranet+'Documents'}}, 
      { path: '/tools/documents/document', name:'document', component: document,meta: {title: intranet+'Document'}}, 



           
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