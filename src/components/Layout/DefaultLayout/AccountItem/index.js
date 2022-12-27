import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import Images from "../../../Images";

const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wapper')}>
            <Images  className={cx('avartar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1671462000&x-signature=1Wvs6eHEC06lFEIFOnpIio111TI%3D" alt="Hoa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')}>Nguyen Van A</span>
            </div>
        </div>
     );
}

export default AccountItem;