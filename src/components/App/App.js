import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import BrowsePage from './BrowsePage/BrowsePage';
import ResultsPage from './ResultsPage/ResultsPage';
import WriteReview from './WriteReview/WriteReview';
import UserPage from './UserPage/UserPage';
import ReadReviewPage from './ReadReviewPage/ReadReviewPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>

        <Route exact path="/">
          <SignIn />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/search">
          <BrowsePage />
        </Route>

        <Route path="/searchresults">
          <ResultsPage />
        </Route>

        <Route path="/createreview">
          <WriteReview />
        </Route>

        <Route path="/myreviews">
          <UserPage />
        </Route>

        <Route path="/review/:id">
          <ReadReviewPage />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;

reportWebVitals();