import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import MoviePage from './Components/MoviePage';
import Footer from './Components/Footer';

import ArabicMovie from './Components/ArabicMovie';
import TopRated from './Components/TopRated';
import Upcoming from './Components/Upcoming';
import Latest from './Components/Latest';
import NowPlaying from './Components/NowPlaying';

import ActorPage from './Components/ActorPage';
import { StateProvider } from './StateProvider';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';

function App() {
  return (
    <StateProvider>
      <HashRouter>
        <div className="d-flex flex-column vh-100 align-items-stretch p-0 m-0">
          <Navbar />

          <Switch>
            <Route path="/iraq-bc-movies-project-students">
              <Redirect to="/" />
            </Route>
            <Route path={'/Movie/:id'} component={MoviePage} />
            <Route path={'/person/:actorId'} component={ActorPage} />
            <Route exact path="/" component={MainPage} />
            <Route path="/search" component={MainPage} />
            <Route path="/list/457" component={ArabicMovie} />
            <Route path="" component={TopRated} />
            <Route path="" component={Upcoming} />
            <Route path="" component={Latest} />
            <Route path="" component={NowPlaying} />
          </Switch>

          <Footer />
        </div>
      </HashRouter>
    </StateProvider>
  );
}
export default App;
