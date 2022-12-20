import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Menu.mdule.scss'
import {Wrapper as PopperWrapper} from '../../../components/Popper'
import MenuItem from './MenuItem';


const cx = classNames.bind(styles)

function Menu({children , items=[]}) {

    const renderITems = () =>{
        return items.map((item,index) =>(
            <MenuItem key={index} data={item} />
        ))
    }

    return (
    <Tippy   
        interactive
        delay={[0,800]}
        placement='bottom-end' 
        render={(attrs) =>(
        <div className ={cx('menu-items')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
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