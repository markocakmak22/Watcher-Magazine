import Header from './Layout/Header';
import Home from './Home';
import Footer from './Layout/Footer';
import Category from './Category';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Kreiraj QueryClient instancu
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <Header />
        <Router>
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
