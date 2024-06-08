/*import'./App.css';
import Navbar from './Component/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Homecategory from './pages/home category'
import Footer from './Component/Footer/Footer';
//import ph_banner from './Component/assests/ph';




function App() {

  return(
  <div>
<BrowserRouter>
<Navbar/>
<Routes>
 <Route path="/" element= {<Home/>} ></Route>

 <Route path="/phone" element= {<Homecategory  category="phone"/>} ></Route>
 <Route path="/laptop" element= {<Homecategory category="laptop"/>} ></Route>
 <Route path="/speaker" element= {<Homecategory category="speaker"/>}></Route>
 <Route path="/order" element= {<Homecategory category="order"/>}></Route>
 
 <Route path= "/product" element={<product/>}></Route>
 <Route path="/login" element={<login/>}></Route>   
 </Routes>
 <Footer/>
</BrowserRouter>


  </div>
 




  );

}
export default  App;*/
import React from "react";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
//import Footer from './Footer/Footer';
import Home from "./components/home";
import About from "./components/about";
import Content from "./components/content";
import Speaker from "./components/speaker";
import Login from './components/login';
import Textmoinal from './components/texmoinal'


function App() {
  return(
    <div >
  
  <Router>
<Navbar/>

<Routes>

 <Route path="/" element= {<Home/>} ></Route>
 

 <Route path="/about" element= {<About/>} ></Route>
 <Route path="/content" element= {<Content/>} ></Route>
 <Route path="/speaker" element= {<Speaker/>} ></Route>
 <Route path="/textmoinal" element= {<Textmoinal/>} ></Route>
 <Route path="/login" element={<Login/>}></Route>   
</Routes>
</Router>


</div>

       


      
  
  );
} 





export default App;