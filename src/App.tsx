import React from 'react';
import { Applications } from './components/Applications';
import { Profile } from './components/Profile';
import styles from "./app.module.scss"
import CovidImg from "./img/Covidpwa.png"
import scienceImg from "./img/scienceNet.png"
import DevFinanceImg from "./img/DevFinance.png"
import MoveitImg from "./img/Moveit.png"

export function App() {

  return (
    <>
      <Profile />
      <div className={styles.main}>
        <Applications titleLink={"Visitar Aplicação"}
          titleModal={"Science-net"}
          description={"Nesta aplicação desenvolvi um layout inspirado no site da NETFLIX, com foco em filmes de ciências e ficção científica."}
          title={"Science-net"}
          alt={"img-netflix"}
          img={scienceImg}
          link={"https://repository-movie-created-arthur-art.vercel.app/"}
          subTitle="Layout inspirado nos sites de streaming" />

        <Applications titleLink={"Visitar Aplicação"}
          titleModal={"Moveit"}
          description={"Esta aplicação é um projeto da Rocketseat a #NLW4-React.Projeto construido em react e next, que ensina a desenvolver um jogo no estilo pomodoro para estudar com eficiência e evitar o sedentarismo."}
          title={"Moveit"}
          alt={"img-moveit"}
          img={MoveitImg}
          link={"https://moveit-next-arthur-art.vercel.app/"}
          subTitle="Site estilo pomodoro" />

        <Applications titleLink={"Visitar Aplicação"}
          titleModal={"DevFinance"}
          description={"Esta aplicação é um projeto da Rocketseat o Discovery.Projeto que ensina a desenvolver um sistema de cálculo para finanças."}
          title={"DevFinance"}
          alt={"img-devfinance"}
          img={DevFinanceImg}
          link={"https://dev-finance-created-arthur-art.vercel.app/"}
          subTitle="Organizando finanças" />

        <Applications titleLink={"Visitar Aplicação"}
          titleModal={"COVID-19-PWA"}
          description={"Nesta aplicação foi desenvolvido uma Progressive Web Application para mostrar os dados de uma api pública em uma interface trabalhada em reactJS, essa api disponibiliza dados de vários países sobre o COVID19."}
          title={"COVID-19-PWA"}
          alt={"img-covid"}
          img={CovidImg}
          link={"https://covid-pwa-arthur-art.vercel.app/"}
          subTitle="Informações sobre o COVID-19" />
      </div>
    </>
  );
}

export default App;
