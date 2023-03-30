 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import NavScrollExample from './Menu'
//import UserRegister from "./UserRegister";
import UserRegister from "./UserRegister";
import Data from './Show'
import Edit from "./Edit";
function App() {
  return (
   <><BrowserRouter>
 <NavScrollExample/>

   <Routes>
    <Route path="/" element={<UserRegister/>}/>
   
    <Route path="/services" element={<Data></Data>}/>
    <Route path="/edit" element={<Edit/>}/>
    <Route path="/contact" element={<h1>contact</h1>}/>
   </Routes>
   
   </BrowserRouter></>
  );
}

export default App;
