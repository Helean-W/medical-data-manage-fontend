import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import PancreasData from './components/PancreasData/PancreasData'
import DataCollection from './components/PancreasData/DataCollection/DataCollection'
import MultiUpload from './components/PancreasData/DataCollection/UploadData/MultiUpload'
import SingleUpload from './components/PancreasData/DataCollection/UploadData/SingleUpload'
import Download from './components/PancreasData/DataCollection/DownloadData'
import DataManage from './components/PancreasData/DataManage/DataManage'
import DataStatic from './components/PancreasData/DataStatic/DataStatic'
import PancreasChart from './components/PancreasData/DataStatic/Charts/PancreasChart'
import AllChart from './components/PancreasData/DataStatic/Charts/AllChart'

import EyesData from './components/EyesData/EyesData'
import EyesDataCollection from './components/EyesData/DataCollection/DataCollection'
import EyesMultiUpload from './components/EyesData/DataCollection/UploadData/MultiUpload'
import EyesSingleUpload from './components/EyesData/DataCollection/UploadData/SingleUpload'
import EyesDownload from './components/EyesData/DataCollection/DownloadData'
import EyesDataManage from './components/EyesData/DataManage/DataManage'
import EyesDataStatic from './components/EyesData/DataStatic/DataStatic'
import EyesChart from './components/EyesData/DataStatic/Charts/EyesChart'
import EyesAllChart from './components/EyesData/DataStatic/Charts/AllChart'

import LungsData from './components/LungsData/LungsData'
import LungsDataCollection from './components/LungsData/DataCollection/DataCollection'
import LungsMultiUpload from './components/LungsData/DataCollection/UploadData/MultiUpload'
import LungsSingleUpload from './components/LungsData/DataCollection/UploadData/SingleUpload'
import LungsDownload from './components/LungsData/DataCollection/DownloadData'
import LungsDataManage from './components/LungsData/DataManage/DataManage'
import LungsDataStatic from './components/LungsData/DataStatic/DataStatic'
import LungsChart from './components/LungsData/DataStatic/Charts/LungsChart'
import LungsAllChart from './components/LungsData/DataStatic/Charts/AllChart'

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
                { path: 'datacollection', component: DataCollection, children: [{ path: 'multiupload', component: MultiUpload }, { path: 'singleupload', component: SingleUpload }, { path: 'download', component: Download }] },
                { path: 'datamanage', component: DataManage },
                { path: 'datastatic', component: DataStatic, children: [{ path: 'pancreaschart', component: PancreasChart }, { path: 'allchart', component: AllChart }] },
            ]
        },
        {
            path: '/eyes',
            component: EyesData,
            children: [
                { path: 'datacollection', component: EyesDataCollection, children: [{ path: 'multiupload', component: EyesMultiUpload }, { path: 'singleupload', component: EyesSingleUpload }, { path: 'download', component: EyesDownload }] },
                { path: 'datamanage', component: EyesDataManage },
                { path: 'datastatic', component: EyesDataStatic, children: [{ path: 'eyeschart', component: EyesChart }, { path: 'allchart', component: EyesAllChart }] },
            ]
        },
        {
            path: '/lungs',
            component: LungsData,
            children: [
                { path: 'datacollection', component: LungsDataCollection, children: [{ path: 'multiupload', component: LungsMultiUpload }, { path: 'singleupload', component: LungsSingleUpload }, { path: 'download', component: LungsDownload }] },
                { path: 'datamanage', component: LungsDataManage },
                { path: 'datastatic', component: LungsDataStatic, children: [{ path: 'lungschart', component: LungsChart }, { path: 'allchart', component: LungsAllChart }] },
            ]
        }
    ]
})

export default router