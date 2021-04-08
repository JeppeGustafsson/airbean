import { useHistory } from 'react-router-dom';
import Style from './Loader.module.css';
import Logo from '../content/airbean-landing.svg';
import LeftDecor from '../content/intro-graphic-left.svg';
import RightDecor from '../content/intro-graphic-right.svg';

const Loader = () => {
    let history = useHistory();

    setTimeout(() => {
        history.push('/menu');
    }, 6000);

    return (
        <div className={Style.Loader}>
            <img src={Logo} className={Style.Logo} alt="Logo" />
            <img src={LeftDecor} className={Style.LeftDecor} alt="Flowers" />
            <img src={RightDecor} className={Style.RightDecor} alt="Flowers" />
        </div>
    )
}

export default Loader;