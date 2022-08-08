import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirect to sign up page upon start */}
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;