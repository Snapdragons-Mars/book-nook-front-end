import { Routes, Route, useLocation} from 'react-router-dom'
import SignUp from '../SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/signup"
          element={<SignUp/>}
        />
      </Routes>
    </div>
  );
}

export default App;