import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark , faMagnifyingGlass, faSpinner, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import {  faCloudDownload, faMessage } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../AccountItem';
import Button from '../../../../Button';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(styles)

const MENU_ITEMS= [
    {
        icon:<FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children:{
            title:'language',
            data:[
                {
                    code: 'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Việt Nam',
                }
            ]
        }
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion }/>,
        title:'Feedback and help',
        to:'./feedback',
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard}/>,
        title:'Keyboard shortcuts',
    }
]
    
const currentUser = true

function Header() {
    const [searchResult , setSearchResult] = useState([])
    const handleMenuChange =(menuItem) =>{
        console.log(menuItem);
    }
    useEffect(() =>{
        setTimeout(()=>{
            setSearchResult([])
        },0)
    })
    const userMenu = [
        {
            icon:<FontAwesomeIcon icon={faUser }/>,
            title:'View Profile',
            to:'./@hoaa',
        },
        {
            icon:<FontAwesomeIcon icon={faCoins }/>,
            title:'Get coins',
            to:'./coin',
        },
        {
            icon:<FontAwesomeIcon icon={faGear }/>,
            title:'Setting',
            to:'./setting',
        },
        
        ...MENU_ITEMS,
        {
            icon:<FontAwesomeIcon icon={faSignOut }/>,
            title:'Log out',
            to:'./setting',
            separate:true,
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                   <img src={images.logo} alt="tiktok" />
                </div>
                <HeadlessTippy 
                    interactive
                    visible={searchResult.length >0}
                    render={(attrs) =>(
                        <div className ={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                  <div className={cx('search')}>
                    <input  placeholder="Search account and video" spellCheck="false"/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button >
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    </button>
                    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                  </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ?(
                        <>
                            <Tippy  delay={(0,300)} content="Upload video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudDownload} ></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} ></FontAwesomeIcon>                               
                            </button>
                        </>
                    ):(
                        <>
                            <Button text  onClick={()=> alert('Clicked')}>UpLoad</Button>
                            <Button primary   onClick={()=> alert('Clicked')}>Log in</Button>
                        </>
                    )}
                            
                        <Menu
                            items={currentUser ? userMenu :MENU_ITEMS} onChange ={handleMenuChange}
                        >
                            {
                                currentUser ? (
                                        <img className={cx('user-avatar')} src={"https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/bde0d542ad0c559ff67015e13369e03c.jpeg?x-expires=1671753600&x-signature=y5vuMxknlhODz5fcCoGaQ%2BMKgrQ%3D"} alt="Dang Thu Ha"></img>
                                ):(
                                    

                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                                    </button>
                                    
                                )
                            }
                        </Menu>
                        
                    
                </div>
            </div>
        </header>
    );
}

export default Header;