import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import PancreasData from './components/PancreasData/PancreasData'
import DataCollection from './components/PancreasData/DataCollection/DataCollection'
import MultiUpload from './components/PancreasData/DataCollection/UploadData/MultiUpload'
import SingleUpload from './components/PancreasData/DataCollection/UploadData/SingleUpload'

import DataManage from './components/PancreasData/DataManage/DataManage'
import DataStatic from './components/PancreasData/DataStatic/DataStatic'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HomePage
        },
        {
            path: '/pancreas',
            component: PancreasData,
            children: [
                { path: 'datacollection', component: DataCollection, children: [{ path: 'multiupload', component: MultiUpload }, { path: 'singleupload', component: SingleUpload }] },
                { path: 'datamanage', component: DataManage },
                { path: 'datastatic', component: DataStatic }
            ]
        }
    ]
})

export default router