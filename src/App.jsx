import './Style.scss';
import { Footer, Main, Header, BarNav} from './Common/index'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <BarNav />
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
