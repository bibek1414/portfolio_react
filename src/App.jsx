import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/portfolio/Home';
import Projects from './components/portfolio/Projects';
import Profile from './components/portfolio/Profile';
import Contact from './components/portfolio/Contact';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;