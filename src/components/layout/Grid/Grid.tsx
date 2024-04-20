<<<<<<< HEAD
import { ReactNode } from 'react';
import styles from './Grid.module.css';

interface IGrid {
    children: ReactNode
}

export function Grid({ children} : IGrid){
    return <div className={styles.grid}>
        {children}
    </div>
}
=======
import { ReactNode } from 'react'
import styles from './Grid.module.css'

interface IGrid {
  children: ReactNode
}

export function Grid({ children }: IGrid) {
  return <div className={styles.grid}>{children}</div>
}
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
