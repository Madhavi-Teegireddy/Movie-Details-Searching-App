import './App.scss';
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import PageNotFound from './component/PageNotFound/PageNotFound';
import MovieDetails from './component/MovieDetails/MovieDetails';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
        <Route element={<PageNotFound/>}/>
        </Routes>
        </div>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
