import { BrowserRouter, Routes, Route } from "react-router-dom";
import Motorcycles from './pages/Motorcycles';
import NewUpdate from './pages/NewUpdate';

export default function MotorcyclesRouter(){
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Motorcycles/>} />
        <Route path="/newupdate/:motorcycle_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
  
}