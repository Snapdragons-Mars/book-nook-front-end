import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router';
//import SignIn
//import SignUp
//import BrowsePage
//import ResultsPage

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

      </Switch>
    </div>
    </Router>
  );
}

export default App;