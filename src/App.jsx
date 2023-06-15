
import Main from "./Pages/Home/Home";
import Register from "./Pages/Sign/Sign";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Main/>} />
      </Routes>
    </Router>

  );
};

export default App;
