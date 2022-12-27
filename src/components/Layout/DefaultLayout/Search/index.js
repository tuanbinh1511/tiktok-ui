import AccountItem from "../AccountItem";
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import {faCircleXmark , faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useEffect, useState , useRef } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
const cx = classNames.bind(styles)

function Search() {
    const [searchResult , setSearchResult] = useState([])
    const [searchValue , setSearchValue] = useState('')
    const [showResult , setShowResult] = useState(true)
    
    const handleClear = () =>{        
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }

    const inputRef = useRef()

     useEffect(() =>{
        setTimeout(()=>{
            setSearchResult([1,2,3])
        },1000)
    },[])

    const handleHideResult =()=>{
        setShowResult(false)
    }
    return (
        <HeadlessTippy 
                    interactive
                    visible={searchResult.length >0 && showResult}
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
                    onClickOutside={handleHideResult}
                >
                  <div className={cx('search')}>
                    <input ref={inputRef} value ={searchValue}  placeholder="Search account and video" spellCheck="false" onChange={(e) => setSearchValue(e.target.value)} onFocus={() => setShowResult(true)}/>
                    { !!searchValue &&(
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )
                    }
                    <button >
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    </button>
                    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                         </button>
                  </div>
                </HeadlessTippy>
    );
}

export default Search;