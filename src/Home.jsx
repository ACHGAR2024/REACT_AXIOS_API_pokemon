

import Nav from './components/Nav';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css'

function PageWrapper({ children }) {
  return (
    <main className="flex flex-grow">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </main>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


export default function Home() {
  return (
    <Router>
      <Nav />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomeContent />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </Router>
  );
}


