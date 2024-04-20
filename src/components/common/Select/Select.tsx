<<<<<<< HEAD
import styles from './Select.module.css';
import { SelectHTMLAttributes } from 'react';

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    options:{
        value: string
        text: string
    }[]
}

export function Select({label, options, ...rest}: ISelect) {
    return <div className={styles.selectGroup}>
        <label>label</label>
        <select {...rest}> 
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.text}</option>
            ))}
        </select>
    </div>
}
=======
import { SelectHTMLAttributes } from 'react'
import styles from './Select.module.css'

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: {
    value: string
    text: string
  }[]
}

export function Select({ label, options, ...rest }: ISelect) {
  return (
    <div className={styles.selectGroup}>
      <label>{label}</label>
      <select {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
