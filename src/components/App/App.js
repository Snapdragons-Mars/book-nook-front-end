import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Home/Home'
import WriteReview from '../WriteReview/WriteReview';
import UserReview from '../UserPage/UserReview';
import ReadReviewPage from '../ReadReviewPage/ReadReviewPage';

// CURRENT VERSION
// 1/22/23 test comment

function App() {

  return (
    <div className="App">
      <Routes>
        {/* {!window.localStorage.getItem('Token') ? (
          <> */}
            <Route path="/home" element={<Home/>}/>
          {/* </>
        ) : (
          <> */}
            <Route path="/reviews" element={<ReadReviewPage />}/>
            <Route path="/createreview" element={<WriteReview/>}/>
            <Route path="/createreview/:spot/:reviewId" element={<WriteReview/>}/>
            <Route path="/profile" element={<UserReview />}/> 
            <Route path="/*" element={<Navigate to="/home"/>}/>
          {/* </>
        )} */}
      </Routes>
    </div>
  );
}

export default App;