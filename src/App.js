import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ItemProfile from './components/ItemProfile';


function App() {
  const frontImage = '/assets/mainjpg.jpg';
  const imageGallery = [{
    Id: 1,
    HeadImageURL: '/assets/tileA.jpg',
    Images: ['/assets/tileA.jpg','/assets/tileB.jpg','/assets/tileC.jpg','/assets/tileD.jpg'],
    Title: "Item A",
    Description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },{
    Id: 2,
    HeadImageURL: '/assets/tileB.jpg',
    Images: ['/assets/tileA.jpg','/assets/tileB.jpg','/assets/tileC.jpg','/assets/tileD.jpg'],
    Title: "Item B",
    Description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },{
    Id: 3,
    HeadImageURL: '/assets/tileC.jpg',
    Images: ['/assets/tileA.jpg','/assets/tileB.jpg','/assets/tileC.jpg','/assets/tileD.jpg'],
    Title: "Item C",
    Description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },{
    Id: 4,
    HeadImageURL: '/assets/tileD.jpg',
    Images: ['/assets/tileA.jpg','/assets/tileB.jpg','/assets/tileC.jpg','/assets/tileD.jpg'],
    Title: "Item D",
    Description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },{
    Id: 5,
    HeadImageURL: '/assets/tileA.jpg',
    Images: ['/assets/tileA.jpg','/assets/tileB.jpg','/assets/tileC.jpg','/assets/tileD.jpg'],
    Title: "Item E",
    Description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },{
    Id: 6,
    HeadImageURL: '/assets/tileB.jpg',
    Images: ['/assets/tileA.jpg','/assets/tileB.jpg','/assets/tileC.jpg','/assets/tileD.jpg'],
    Title: "Item F",
    Description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  }]
  return (
    <div className="App">
    <Router>
      <Link className="link" to={'/'}><Header /></Link>
        <Switch>
          <Route exact path="/" render={() => <Home frontImage={frontImage} imageGallery={imageGallery} />}/>
          <Route path="/:id" component={({match}) => <ItemProfile imageGallery={imageGallery[parseInt(match.params.id)-1]}/>} />
        </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
