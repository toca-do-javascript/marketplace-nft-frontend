
import Register from "./Pages/Register/Index";
import Header from "./Ui/Components/Header";

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path='/header' element={<Header/>} />
            <Route path='/' element={<Register/>} />
          </Routes>
        </Router>

  );
};

export default App;
