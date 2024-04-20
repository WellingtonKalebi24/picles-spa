<<<<<<< HEAD
import { Button } from '../Button'
import styles from './Pagination.module.css'

interface IPagination {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange}: IPagination) {
    const pageNumber = Array.from({ length: totalPages}, (_, i) => i + 1)


    return (
        <nav>
            <ul className={styles.pagination}>
           {pageNumber.map((number) => (
            <li 
                key={number}
                className={`${currentPage === number ? styles.active : null}`} >
                    <Button onClick={() => onPageChange(number)}>{number}</Button>
                </li>
           ))}
           </ul>
        </nav>
    )
}
=======
import styles from './Pagination.module.css'

interface IPagination {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: IPagination) {
  const pageNumber = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumber.map((number) => (
          <li
            key={number}
            className={`${currentPage === number ? styles.active : null}`}
          >
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
