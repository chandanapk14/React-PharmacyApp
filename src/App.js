import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
