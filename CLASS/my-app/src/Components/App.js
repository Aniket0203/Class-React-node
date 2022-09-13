import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Pagenotfound from "./Pagenotfound";
import Lifecycle from "./Lifecycle";
import Compa from "./Compa";
import Comp1 from "./Comp1";
import Didupdate from "./Didupdate";
import ErrorExample from "./ErrorExample";
import Hook1 from "./Hook1";
import Hook2 from "./Hook2"
import Addproduct from "./Addproduct";
import Showproduct from "./Showproduct";
import Deleteproduct from "./Deleteproduct";
import Edit from "./Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path ="/aboutus"element={<Aboutus/>}/>
          <Route path ="/services"element={<Services/>}/>
          <Route path ="/lifecycle"element={<Lifecycle/>}/>
          <Route path ="/paraent-child"element={<Compa/>}/>
          <Route path ="/State-lift"element={<Comp1/>}/>
          <Route path ="/did-update"element={<Didupdate/>}/>
          <Route path ="/err-example"element={<ErrorExample/>}/>
          <Route path ="/hook"element={<Hook1 age="30"/>}/>
          <Route path ="/hook2"element={<Hook2/>}/>
          <Route path ="/add"element={<Addproduct/>}/>
          <Route path ="/show"element={<Showproduct/>}/>
          <Route path ="/delete/:xyz"element={<Deleteproduct/>}/>
          <Route path ="/edit/:xyz"element={<Edit/>}/>


        

          

          


          

          





          


          <Route path ="*"element={<Pagenotfound/>}/>



            
          
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
