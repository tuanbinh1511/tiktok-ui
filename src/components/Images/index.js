import {forwardRef , useState} from 'react';
import images from '../../assets/images';
import classNames from 'classnames';
import styles from './Images.module.scss'
import PropTypes from 'prop-types';

const Images = forwardRef(({src,alt,className,...props},ref) => {
    const[fallback , setFallback] = useState('');
    const handleError = ()=>{
        setFallback(images.noImage)
    }

    return ( 
        <img className={classNames(styles.wrapper,className)} ref={ref} src={fallback || src} alt={alt}  {...props} onError={handleError}/>
     );
})
Images.propTypes={
    src:PropTypes.string,
    alt:PropTypes.string,
    className:PropTypes.string,
}

export default Images;