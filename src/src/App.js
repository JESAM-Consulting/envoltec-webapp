import './App.css';
import './styles/mixins/global.scss';
import Routes from './routes';
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>FE Finance GmbH</title>
        <meta name="description" content=" LBM x FE Finance GmbH" />
      </Helmet>
      <Routes/>
    </>
  );
}

export default App;
