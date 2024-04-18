import { useEffect } from "react";
import { Card } from "../../components/common/Card";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css'
import { getPets } from "../../services/pets/getPets";

import { Skeleton } from "../../components/common/Skeleton/Skeleton";

export function Pets() {
    useEffect(() => {
        async function loadData(){
            const data = await getPets()
            console.log(data)
        }
    })
    return (
        <Grid>
            <div className={styles.container}>
                <Header  />
                <main className={styles.container2}>
                <Skeleton count={5} containerClassName={styles.skeleton} />    
                <Card href="/pets/1" text="nina" thumb='' />
                
                </main>
            </div>
        </Grid>
    )
}