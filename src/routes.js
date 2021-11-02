import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import DataStatic from './components/DataStatic/DataStatic'
import PancreasData from './components/PancreasData/PancreasData'
import DataCollection from './components/PancreasData/DataCollection/DataCollection'
import MultiUpload from './components/PancreasData/DataCollection/UploadData/MultiUpload'
import SingleUpload from './components/PancreasData/DataCollection/UploadData/SingleUpload'
import Download from './components/PancreasData/DataCollection/DownloadData'
import DataManage from './components/PancreasData/DataManage/DataManage'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HomePage
        },
        { path: '/datastatic', component: DataStatic },
        {
            path: '/pancreas',
            component: PancreasData,
            children: [
                { path: 'datacollection', component: DataCollection, children: [{ path: 'multiupload', component: MultiUpload }, { path: 'singleupload', component: SingleUpload }, { path: 'download', component: Download }] },
                { path: 'datamanage', component: DataManage },
            ]
        }
    ]
})

export default router