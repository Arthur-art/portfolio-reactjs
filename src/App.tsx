import { useState } from 'react'
import { Applications } from './components/Applications'
import { Profile } from './components/Profile'
import styles from './app.module.scss'
import { sites } from './api/api'

export function App() {


  return (
    <>
      <Profile />
      <div className={styles.main}>
        {sites.map((sites) => {
          return (
            <Applications.Root img={sites.img} alt={sites.alt} key={sites.id} description={sites.description} link={sites.link} title={sites.title}>
              <Applications.Header title={sites.title} subtitle={sites.subTitle} />
            </Applications.Root>
          )
        })}
      </div>
    </>
  )
}

export default App
