
import Main from "./Pages/Home/Home";
import Register from "./Pages/Sign/Sign";
import Header from "./Ui/Components/Header";

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path='/header' element={<Header/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/' element={<Main/>} />
          </Routes>
        </Router>

  );
};

export default App;
