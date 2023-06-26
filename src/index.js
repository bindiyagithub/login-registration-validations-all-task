import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from './views/Login'
import Registration from './views/Registration';
import Navbar from './components/Navbar';

import Registration2 from './views/Registration2';
import Login2 from './views/Login2';
import Navbar2 from './components/Navbar2'
import Student from './views/Student';
import Nav_Header from './router-simple-eg/Nav_Header';
import Home from './router-simple-eg/Home';
import About from './router-simple-eg/About';
import Contact from './router-simple-eg/Contact';

import Search from './router-simple-eg/Search';

import PageNotFound from './router-simple-eg/PageNotFound';

import Products from './router-simple-eg/Products';

import Jeans from './router-simple-eg/nested-components for products/Jeans';
import Shirts from './router-simple-eg/nested-components for products/Shirts'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Registration/> */}
    
     
    <BrowserRouter>

         {/* <Nav_Header/>
            <Routes>
               <Route path='/' element={ <Home/> } />
               <Route path='/About' element={<About/>} />
               <Route path='/Contact' element={<Contact/>} />
               <Route path='/Search' element={<Search/>} />
               <Route path='*' element={<PageNotFound/>} /> */}


         {/*  this is knows as parent-child routes (nested routes) */}
            {/* <Route path='/Products' element={<Products/>}>
               <Route path='Shirts' element={<Shirts />} />
               <Route path='Jeans' element={<Jeans />} /> 
            </Route>
               
            </Routes> */}


            
       <Navbar/>

             <Routes>
                 <Route path='/' element={<App/>} />
                 <Route path='/Login' element={<Login/>} />
                 <Route path='/Registration' element={<Registration/> } />
            </Routes>  
            
            {/* <Navbar2/>
             <Routes>
                <Route path='/' element={<App/>}></Route>
                 <Route path='/Login2' element={<Login2/>}></Route>
                 <Route path='/Registration2' element={<Registration2/>} > </Route>
              </Routes> */}

            {/* <Navbar/>
              <Routes>
                 <Route path='/' element={<App/>} />
                 <Route path='/Login' element={<Login/>} />
                 <Route path='/Registration' element={<Registration/> } />
                 
              </Routes> */}

               {/* <Navbar2/>
               <Routes>
                  <Route path='/Student' element={<Student/>} > 
                  </Route>
               </Routes> */}
    </BrowserRouter>
       
       
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
