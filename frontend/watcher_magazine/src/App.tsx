import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './ui/Header';
import Home from './Home';
import Category from './Category';
import Footer from './ui/Footer';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryName" element={<Category />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
export default App;
