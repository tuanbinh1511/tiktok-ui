import {forwardRef , useState} from 'react';
import images from '../../assets/images';
import classNames from 'classnames';
import styles from './Images.module.scss'
const Images = forwardRef(({src,alt,className,...props},ref) => {
    const[fallback , setFallback] = useState('');
    const handleError = ()=>{
        setFallback(images.noImage)
    }

    return ( 
        <img className={classNames(styles.wrapper,className)} ref={ref} src={fallback || src} alt={alt}  {...props} onError={handleError}/>
     );
})

export default Images;