import React ,{Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact';
import Work from './Components/Work';
import Portfolio from './Components/Portfolio';
import About from './Components/About';

class App extends Component
 {
    render()
     {
        return (
            <div className="App">
              <BrowserRouter>
                  <Navbar />
                  <Route exact path="/" component={Index} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/work" component={Work} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/about" component={About} />
               </BrowserRouter>
            </div>
        );
    }

}

export default App;
