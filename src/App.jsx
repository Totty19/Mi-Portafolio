import './Style.scss';
import { Footer, Main, Header, Navbar} from './Common/index'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
