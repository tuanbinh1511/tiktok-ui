import AccountItem from "../AccountItem";
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import  * as searchService  from "../../../../apiServices/searchService";
import {faCircleXmark , faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useEffect, useState , useRef } from 'react';
import { useDebounce } from "../../../../hooks";
import { Wrapper as PopperWrapper } from '../../../Popper';
const cx = classNames.bind(styles)

function Search() {
    const [searchResult , setSearchResult] = useState([])
    const [searchValue , setSearchValue] = useState('')
    const [showResult , setShowResult] = useState(true)
    const [loading , setLoading] = useState(false)
    
    const debounced= useDebounce(searchValue,600)

    const handleClear = () =>{        
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }

    const inputRef = useRef()

     useEffect(() =>{
        if(!searchValue.trim()){
            setSearchResult([])
            return;
        }
        const fetchApi = async ()=>{
            setLoading(true)
            const result = await searchService.search(debounced)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()    
    },[debounced])

    const handleHideResult =()=>{
        setShowResult(false)
    }

    const handleChange =(e) => {
        const searchValue = e.target.value 
        if(!searchValue.startsWith(' ') ){
            setSearchValue(searchValue)
        }
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
                                {searchResult.map((result)=>(
                                    <AccountItem key={result.id} data={result} />
                                ))
                                }
                                
                            </PopperWrapper>
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                  <div className={cx('search')}>
                    <input ref={inputRef} value ={searchValue}  placeholder="Search account and video" spellCheck="false" onChange={handleChange} onFocus={() => setShowResult(true)}/>
                    { !!searchValue && !loading &&(
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )
                    }
                    <button >
                        {loading &&<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    </button>
                    
                        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                         </button>
                  </div>
                </HeadlessTippy>
    );
}

export default Search;