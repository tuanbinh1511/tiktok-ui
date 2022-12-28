import Home from '../pages/Home'
import Following from '../pages/Following';
import UpLoad from '../pages/Upload';

import config from '../config'


const PulicRoutes =[
    { path: config.routes.home , component : Home},
    { path: config.routes.home , component : Following},
    { path: config.routes.profile , component : Following},
    { path: config.routes.upload , component : UpLoad , layout : null}

]
const PrivateRoutes =[

]
export  {PulicRoutes,PrivateRoutes}