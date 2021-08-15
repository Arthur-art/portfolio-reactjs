import React from 'react';
import { Applications } from './components/Applications';
import { Profile } from './components/Profile';
import styles from "./app.module.scss"

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
          img={"https://arthur-art-portfolio.vercel.app/src/img/ScienceNet.JPG"}
          link={"https://repository-movie-created-arthur-art.vercel.app/"}
          subTitle="Site baseado na netflix" />

        <Applications titleLink={"Visitar Aplicação"}
          titleModal={"Moveit"}
          description={"Esta aplicação é um projeto da Rocketseat a #NLW4-React.Projeto construido em react e next, que ensina a desenvolver um jogo no estilo pomodoro para estudar com eficiência e evitar o sedentarismo."}
          title={"Moveit"}
          alt={"img-moveit"}
          img={"https://arthur-art-portfolio.vercel.app/src/img/Moveit.JPG"}
          link={"https://moveit-next-arthur-art.vercel.app/"}
          subTitle="Site estilo pomodoro" />

        <Applications titleLink={"Visitar Aplicação"}
          titleModal={"DevFinance"}
          description={"Esta aplicação é um projeto da Rocketseat o Discovery.Projeto que ensina a desenvolver um sistema de cálculo para finanças."}
          title={"DevFinance"}
          alt={"img-devfinance"}
          img={"https://arthur-art-portfolio.vercel.app/src/img/DevFinance.JPG"}
          link={"https://dev-finance-created-arthur-art.vercel.app/"}
          subTitle="Site para organizar finanças" />

        <Applications titleLink={"Visitar Aplicação"}
          titleModal={"COVID-19-Progressive-Web-Application"}
          description={"Nesta aplicação foi desenvolvido uma Progressive Web Application para mostrar os dados de uma api pública em uma interface trabalhada em reactJS, essa api disponibiliza dados de vários países sobre o COVID19."}
          title={"COVID-19-Progressive-Web-Application"}
          alt={"img-covid"}
          img={"https://arthur-art-portfolio.vercel.app/src/img/Covid.jpeg"}
          link={"https://covid-pwa-arthur-art.vercel.app/"}
          subTitle="Site para se informar sobre o covid no mundo" />
      </div>
    </>
  );
}

export default App;
