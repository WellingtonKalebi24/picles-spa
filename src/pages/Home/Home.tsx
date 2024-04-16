import { Link } from 'react-router-dom';
import dog from '../../assets/dog.svg';
import { Button } from '../../components/common/Button';
import { ButtonVariant } from '../../components/common/Button/Button.constants';
import styles from './Home.module.css';

export function Home() {

    return(
       <div className={styles.container}>
        <img src={dog} alt='Dog' width="278px"></img>
        <Link to="/pets">
            <Button variant={ButtonVariant.Default} >Tenho um abrigo</Button>
        </Link>
        <Link to="/admin">
            <Button variant={ButtonVariant.Outlined} >Tenho um abrigo</Button>
        </Link>
        </div>
      )
  }