import Register from './Pages/Sign/Sign';
import Header from './Ui/Components/Header';
import Footer from './Ui/Components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

