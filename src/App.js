import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Articles from './components/Articles'
import Article from './components/Article'

const App = ()=> {

  const[searchKey, setSearchKey] = useState('');

  const getData = (query)=>{
    setSearchKey(query);
  };

    return (
      <div>

        <BrowserRouter>
          <Navbar onType={getData}/>
          {/* <News searchQuery={searchKey}/> */}
        <Routes>
          <Route path='/' element={<News searchQuery={searchKey}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Article />} />
        </Routes>
        </BrowserRouter>

      </div>
    )
}
export default App