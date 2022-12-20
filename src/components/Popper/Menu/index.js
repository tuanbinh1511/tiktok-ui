import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Menu.mdule.scss'
import {Wrapper as PopperWrapper} from '../../../components/Popper'
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const defaultFn = ()=>{

}
const cx = classNames.bind(styles)

function Menu({children , items=[]} , onChange=defaultFn) {

    const [history,setHistory] = useState([{data :items}])
    const current =history[history.length-1]


    const renderITems = () =>{
        return current.data.map((item,index) =>{
            const isParent = !!item.children 
            return <MenuItem key={index} data={item } onClick={()=>{
                if(isParent){
                   setHistory(prev => [...prev , item.children])
                }else{
                    onChange(item)
                }
            }} />
        })
    }

    return (
    <Tippy   
        visible
        interactive
        delay={[0,800]}
        placement='bottom-end' 
        render={(attrs) =>(
        <div className ={cx('menu-items')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length>1 && <Header title='Language' onBack={()=>{
                    setHistory(prev => prev.slice(0,prev.length-1))
                }}></Header> }
                {renderITems()}
            </PopperWrapper>
        </div>
        )}
    >
        {children}
    </Tippy>

    );
}

export default Menu;