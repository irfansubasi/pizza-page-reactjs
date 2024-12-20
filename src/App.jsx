import './index.css';
import './fonts/fonts.css';
import OrderPage from './Pages/OrderPage/OrderPage';
import SuccessPage from './Pages/SuccessPage/SuccessPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;
