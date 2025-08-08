import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<div>Saved News Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
