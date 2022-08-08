import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Home/Home'
import BrowsePage from '../BrowsePage/BrowsePage';
// import ResultsPage from '../ResultsPage/ResultsPage';
// import WriteReview from '../WriteReview/WriteReview';
// import UserPage from '../UserPage/UserPage';
// import ReadReviewPage from '../ReadReviewPage/ReadReviewPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirect to sign up page upon start */}
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path ="/search" element={<BrowsePage/>}/>
        {/* <Route path="/searchresults" element={<ResultsPage/>}/>
        <Route path="/createreview" element={ <WriteReview />}/>
        <Route path="/myreviews" element={<UserPage />}/>
        <Route path="/review/:id" element={<ReadReviewPage />}/> */}
      </Routes>
    </div>
  );
}

export default App;