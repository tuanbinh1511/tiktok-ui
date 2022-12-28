import Home from '../pages/Home'
import Following from '../pages/Following';
import UpLoad from '../pages/Upload';

import routeConfig from '../config/routes'

const PulicRoutes =[
    { path: routeConfig.home , component : Home},
    { path: routeConfig.home , component : Following},
    { path: routeConfig.profile , component : Following},
    { path: routeConfig.upload , component : UpLoad , layout : null}

]
   

const PrivateRoutes =[

]
export  {PulicRoutes,PrivateRoutes}