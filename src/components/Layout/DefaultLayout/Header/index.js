import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {Link} from 'react-router-dom'
 // optional
import Button from '../../../../Button';
import Menu from '../../../Popper/Menu';
import Images from '../../../Images';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../Icons';
import Search from '../Search';
import routeConfig from '../../../../config/routes';



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
    const handleMenuChange =(menuItem) =>{
        console.log(menuItem);
    }
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
                <Link to={routeConfig.home} className={cx('logo-link')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="tiktok" />
                    </div>
                </Link>
                
                <Search/>
                <div className={cx('actions')}>
                    {currentUser ?(
                        <>
                            <Tippy  delay={(0,300)} content="Upload video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>
                            <Tippy  delay={(0,300)} content="Message" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy  delay={(0,300)} content="Inbox" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
                                </button>
                            </Tippy>
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
                                        <Images className={cx('user-avatar')} src={"https://scontent.fdad3-5.fna.fbcdn.net/v/t1.6435-9/99013175_1552654368248618_9221118823996850176_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ygo3m2czMS8AX-NSysA&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBvV-4LiagkLtEZDjlceAurvpu503icgQBl7882OL2yFQ&oe=63CDDF56"} alt="Dang Thu Ha"></Images>
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