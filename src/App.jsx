import Profile from './Pages/Profile/Profile';
import Register from './Pages/Sign/Sign';
import Header from './Ui/Components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

