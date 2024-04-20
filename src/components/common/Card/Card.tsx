<<<<<<< HEAD
import { Link } from "react-router-dom";
import styles from './Card.module.css';
import { ImageBase64 } from "../imageBase64/imageBase64";

interface ICard {
    href: string
    text: string
    thumb: string
}

export function Card ({href, text, thumb }: ICard ) {
    return (
        <Link to={href} className={styles.card}>
        <ImageBase64 src={thumb} />
        <span>{text}</span>
        </Link>
    )
}
=======
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { ImageBase64 } from '../ImageBase64/ImageBase64'

interface ICard {
  href: string
  text: string
  thumb: string
}

export function Card({ href, text, thumb }: ICard) {
  return (
    <Link to={href} className={styles.card}>
      <ImageBase64 src={thumb} />
      <span>{text}</span>
    </Link>
  )
}
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
