// import "./UserReview.css";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import profile from "../../assets/profile-icon.svg";
// import coffee from "../../assets/coffee-icon.svg";
// import star from "../../assets/star-icon.svg";
// import xClose from "../../assets/x-close-icon.svg";

// function UserReviewPage() {
//   const navigate = useNavigate();
//   const [reviews, setReviews] = useState([]);

//   function handleBack() {
//     navigate(-1);
//   }
// //   function handleDelete(e) {
// //     axios
// //       .delete(
// //         `http://localhost:8005/api/reviews/`,
// //         window.localStorage.getItem("Token")
// //       )
// //       .then(() => {
// //         navigate("/profile");
// //       });
// //   }

//   function handleLogout() {
//     window.localStorage.removeItem("Token");
//     window.localStorage.removeItem("Email");
//     navigate("/home");
//   }

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/users`).then((res) => {
//       const usersArr = res.data;
//       const loggedOnUser = usersArr.find(
//         (user) => user.email === window.localStorage.getItem("Email")
//       );
//       const loggedOnUserId = loggedOnUser.id;
//       console.log(loggedOnUserId)
//       axios
//         .get(`http://localhost:8000/api/reviews/user/${loggedOnUserId}`)
//         .then((res) => {
//           console.log(res.data)
//           setReviews(res.data);
//         });
//     });
//   }, []);

//   // <Link to= "/createreview"><button className="edit"> Edit</button></Link>
//   // <button onClick={handleDelete} className="delete"> Delete</button>
//   return (
//     <div className="user-review-page">
//       <div className="heading">
//         <div className="back">
//          <button onClick={handleBack} className="back-button">
//             Back
//           </button>
//         </div>
//         <Link to="/reviews">
//             <img className="x-close" src={xClose} alt="x" />
//           </Link>
//       </div>

//       <div className="user-review-container">
//         <div className="header">
//           <h2>My Book Nooks</h2>
//         </div>
//         <div className="scrolling-cards">
//         {reviews.map((review) => (
//           <div className="user-review-card" key={review._id}>
//             <div className="top">
//               <div className="study-spot-info">
//                 <div className="study-spot-icon-name">
//                   <img
//                     className="study-spot-icon"
//                     src={coffee}
//                     alt="coffee-icon"
//                   />
//                   <h2 className="study-spot-name">{review.name}</h2>
//                 </div>
//                 <div className="study-spot-star-rating">
//                   <img className="star" src={star} alt="star-icon" />
//                   <p className="rating">
//                     {
//                       +(
//                         (review.noise_level_rating +
//                           review.outlets_rating +
//                           review.wifi_rating +
//                           review.aesthetic_rating) /
//                         4
//                       ).toFixed(1)
//                     }
//                   </p>
//                 </div>
//                 </div>
//         <div className="edit-delete-btn-container">
//           <Link to={`/createreview/${review.study_spot}/${review._id}`}>
//             <button className="edit"> Edit</button>
//           </Link>
//           <button onClick={function handleDelete(e) {
//     axios
//       .delete(
//         `http://localhost:8000/api/reviews/${review._id}`,
//         window.localStorage.getItem("Token")
//       )
//       .then(() => {
//         navigate("/reviews");
//       });
//   }} className="delete">
//             Delete
//           </button>
//         </div>
              
//             </div>
//           </div>
          
//         ))}
//         </div>
//         <div className="log-out-div">
//           <button onClick={handleLogout} className="log-out-button">
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserReviewPage;


import "./UserReview.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cafe from "../../assets/cafe-icon.svg";
import star from "../../assets/star-icon.svg";
import booknook from "../../assets/book-nook-icon.svg";
import xClose from "../../assets/x-close-icon.svg";
function UserReviewPage() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  function handleBack() {
    navigate(-1);
  }
  //   function handleDelete(e) {
  //     axios
  //       .delete(
  //         `http://localhost:8005/api/reviews/`,
  //         window.localStorage.getItem("Token")
  //       )
  //       .then(() => {
  //         navigate("/profile");
  //       });
  //   }
  function handleLogout() {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("Email");
    navigate("/home");
  }
  useEffect(() => {
    axios.get(`http://localhost:8000/api/users`).then((res) => {
      const usersArr = res.data;
      const loggedOnUser = usersArr.find(
        (user) => user.email === window.localStorage.getItem("Email")
      );
      const loggedOnUserId = loggedOnUser.id;
      console.log(loggedOnUserId);
      axios
        .get(`http://localhost:8000/api/reviews/user/${loggedOnUserId}`)
        .then((res) => {
          console.log(res.data);
          setReviews(res.data);
        });
    });
  }, []);
  // <Link to= "/createreview"><button className="edit"> Edit</button></Link>
  // <button onClick={handleDelete} className="delete"> Delete</button>
  return (
    <div className="user-review-page">
      <div className="ed-heading">
        <div className="bookback">
          <Link to="/reviews">
            <div className="logo-icon-name">
              <img className="book-nook-logo" src={booknook} alt="booknook" />
              <p className="book-nook-name">Book Nook</p>
            </div>
          </Link>
        </div>
        <img className="x-close" src={xClose} alt="x" onClick={handleBack} />
      </div>
      <div className="user-review-container">
        <div className="ed-header">
          <h2 className="my-book-nooks">My Book Nooks</h2>
        </div>
        <div className="scrolling-cards">
          {reviews.map((review) => (
            <div className="user-review-card" key={review._id}>
              <div className="ed-top">
                <div className="ed-study-spot-info">
                  <div className="ed-study-spot-icon-name">
                    <img
                      className="study-spot-icon"
                      src={cafe}
                      alt="cafe-icon"
                    />
                    {review.study_spot.length > 18 ? (
                      <h2 className="ed-study-spot-name">
                        {review.study_spot.substring(0, 18)}...
                      </h2>
                    ) : (
                      <h2 className="ed-study-spot-name">
                        {review.study_spot}
                      </h2>
                    )}
                  </div>
                  <div className="ed-study-spot-star-rating">
                    <img className="star" src={star} alt="star-icon" />
                    <p className="rating">
                      {
                        +(
                          (review.noise_level_rating +
                            review.outlets_rating +
                            review.wifi_rating +
                            review.aesthetic_rating) /
                          4
                        ).toFixed(1)
                      }
                    </p>
                  </div>
                </div>
                <div className="edit-delete-btn-container">
                  <Link to={`/createreview/${review.study_spot}/${review._id}`}>
                    <button className="edit"> Edit</button>
                  </Link>
                  <button
                    onClick={function handleDelete(e) {
                      axios
                        .delete(
                          `http://localhost:8000/api/reviews/${review._id}`,
                          window.localStorage.getItem("Token")
                        )
                        .then(() => {
                          navigate("/reviews");
                        });
                    }}
                    className="delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="log-out-div">
          <button onClick={handleLogout} className="log-out-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserReviewPage;


