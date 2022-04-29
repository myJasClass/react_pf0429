import { Route } from 'react-router-dom';
import './scss/style.scss';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';
//sub
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';

function App() {
  return (
    <>
      <Header />
      <Route exact path='/'>
        <Visual />
        <Content />
      </Route>

      <Route path='/youtube' component={Youtube} />
      <Route path='/gallery' component={Gallery} />

      {/* <Route path='/gallery'>
        <Gallery />
      </Route> */}

      <Footer />
    </>
  );
}

export default App;
