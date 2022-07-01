import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getData } from './redux/sportSlice';
import { getDetails } from './redux/detailsSlice';
import Sports from './pages/HomePage';
import Details from './pages/Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(getDetails());
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Sports />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
