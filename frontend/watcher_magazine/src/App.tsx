import Header from './Layout/Header';
import Home from './Home';
import Footer from './Layout/Footer';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Kreiraj QueryClient instancu
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <Header />
        <Home />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
export default App;
