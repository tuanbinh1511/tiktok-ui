import Home from '../pages/Home'
import Following from '../pages/Following';
import UpLoad from '../pages/Upload';

const PulicRoutes =[
    { path: '/' , component : Home},
    { path: '/following' , component : Following},
    { path: '/upLoad' , component : UpLoad , layout : null}

]
   

const PrivateRoutes =[

]
export  {PulicRoutes,PrivateRoutes}