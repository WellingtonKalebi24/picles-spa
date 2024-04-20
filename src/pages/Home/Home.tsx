<<<<<<< HEAD
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
            <Button variant={ButtonVariant.Default} >Quero adotar</Button>
        </Link>
        <Link to="/admin">
            <Button variant={ButtonVariant.Outlined} >Tenho um abrigo</Button>
        </Link>
        </div>
      )
  }
=======
import dog from '../../assets/dog.svg'
import { Link } from 'react-router-dom'
import { Button, ButtonVariant } from '../../components/common/Button'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.container}>
      <img src={dog} width="278px" />
      <Link to="/pets">
        <Button variant={ButtonVariant.Default}>Quero adotar</Button>
      </Link>
      <Link to="/admin">
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
      </Link>
    </div>
  )
}
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
