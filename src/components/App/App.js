import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Home/Home'
import WriteReview from '../WriteReview/WriteReview';
import UserReview from '../UserPage/UserReview';
import ReadReviewPage from '../ReadReviewPage/ReadReviewPage';

function App() {
  
  return (
    <div className="App">
      <Routes>
        {/* Redirect to sign up page upon start */}
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/reviews" element={<ReadReviewPage />}/>
        <Route path="/createreview" element={ <WriteReview />}/>
        <Route path="/profile" element={<UserReview />}/> 
      </Routes>
    </div>
  );
}

export default App;