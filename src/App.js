import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';

//routing
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogDetails from './components/BlogDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
            <Switch>
              <Route exact path='/'>
                  <Home />
              </Route>
              <Route exact path='/create'>
                  <Form />
              </Route>
              <Route exact path='/blogs/:id'>
                  <BlogDetails />
              </Route>
              <Route path='*'>
                <PageNotFound />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
