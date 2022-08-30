import React from 'react'
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
            <Applications
              key={sites.id}
              description={sites.description}
              title={sites.title}
              alt={sites.alt}
              img={sites.img}
              link={sites.link}
              subTitle={sites.subTitle}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
