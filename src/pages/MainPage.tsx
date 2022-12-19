import { Helmet } from 'react-helmet';
import Header from '../common/Header';
import HomeContainer from '../components/Main/HomeContainer';

const MainPage = () => (
  <>
    <Helmet>
      <title>EYEAR || 메인</title>
      <meta property="og:url" content="https://eyear22.github.io/type_eyear_frontend/" />
      <meta property="og:title" content="EYEAR" />
    </Helmet>
    <Header />
    <HomeContainer />
  </>
);

export default MainPage;
