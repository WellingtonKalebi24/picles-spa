<<<<<<< HEAD
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./PetDetails.module.css"

export function PetDetails() {
    return (
        <Grid>
            <div className={styles.container}>
            <Header showReturn={true} />
                <h1>Detalhes do pet</h1>
            </div>
        </Grid>
    )
}
=======
import { Header } from '../../components/common/Header'
import { Grid } from '../../components/layout/Grid'
import styles from './PetDetails.module.css'

export function PetDetails() {
  return (
    <Grid>
      <div className={styles.container}>
        <Header showReturn={true} />
        <h1>Detalhes do pet</h1>
      </div>
    </Grid>
  )
}
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
