import { useState } from 'react'
import { Applications } from './components/Applications'
import { Profile } from './components/Profile'
import styles from './app.module.scss'
import { sites } from './api/api'

export function App() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Profile />
      <div className={styles.main}>
        {sites.map((sites) => {
          return (
            <Applications.Root img={sites.img} alt={sites.alt} key={sites.id}>
              <Applications.Modal description={sites.description} link={sites.link} title={sites.title} modalIsOpen={modalIsOpen} closeModal={closeModal} />
              <Applications.Header title={sites.title} subtitle={sites.subTitle} />
              <Applications.Subtitle link={sites.link} openModal={openModal} />
            </Applications.Root>
          )
        })}
      </div>
    </>
  )
}

export default App
