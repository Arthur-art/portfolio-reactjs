import CovidImg from '../img/Covidpwa.png'
import scienceImg from '../img/scienceNet.png'
import DevFinanceImg from '../img/DevFinance.png'
import MoveitImg from '../img/Moveit.png'
import igniteFeedImg from '../img/igniteFeed.png'
import githubexplorer from '../img/githubexplorer.png'

export const sites = [
  {
    id: 'Projeto1',
    description:
      'Nesta aplicação desenvolvi um layout inspirado no site da NETFLIX, com foco em filmes de ciências e ficção científica.',
    title: 'Science-net',
    alt: 'img-netflix',
    img: scienceImg,
    link: 'https://repository-movie-created-arthur-art.vercel.app/',
    subTitle: 'Layout inspirado nos sites de streaming',
  },
  {
    id: 'Projeto2',
    description:
      'Nesta aplicação eu desenvolvi um frontend em react utilizando vite, para consumir uma api do github e trazendo os usuários de forma dinâmica.',
    title: 'Github Explorer',
    alt: 'img-github-explorer',
    img: githubexplorer,
    link: 'https://github-explorer-puce.vercel.app/',
    subTitle: 'Frontend consumindo uma api do github',
  },
  {
    id: 'Projeto3',
    description:
      'Esta aplicação é um projeto da Rocketseat a #NLW4-React.Projeto construido em react e next, que ensina a desenvolver um jogo no estilo pomodoro para estudar com eficiência e evitar o sedentarismo.',
    title: 'Moveit',
    alt: 'img-moveit',
    img: MoveitImg,
    link: 'https://moveit-next-arthur-art.vercel.app/',
    subTitle: 'Site estilo pomodoro',
  },
  {
    id: 'Projeto4',
    description:
      'Esta aplicação é um projeto da Rocketseat o Discovery.Projeto que ensina a desenvolver um sistema de cálculo para finanças.',
    title: 'DevFinance',
    alt: 'img-devfinance',
    img: DevFinanceImg,
    link: 'https://dev-finance-created-arthur-art.vercel.app/',
    subTitle: 'Organizando finanças',
  },
  {
    id: 'Projeto5',
    description:
      'Esta aplicação é um projeto da Rocketseat o Ignite-ReactJS, Projeto com ensina a desenvolver o frontend de um feed numa rede social.',
    title: 'Ignite-feed',
    alt: 'img-ignite-feed',
    img: igniteFeedImg,
    link: 'https://to-do-list-feed-reactjs.vercel.app/',
    subTitle: 'Aplicação para simular um feed de uma rede social',
  },
  {
    id: 'Projeto6',
    description:
      'Nesta aplicação foi desenvolvido uma Progressive Web Application para mostrar os dados de uma api pública em uma interface trabalhada em reactJS, essa api disponibiliza dados de vários países sobre o COVID19.',
    title: 'COVID-19-PWA',
    alt: 'img-covid',
    img: CovidImg,
    link: 'https://covid-pwa-arthur-art.vercel.app/',
    subTitle: 'Informações sobre o COVID-19',
  },
]
