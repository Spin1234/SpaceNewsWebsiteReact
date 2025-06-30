import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

const App = ()=> {

  const[searchKey, setSearchKey] = useState('');

  const getData = (query)=>{
    setSearchKey(query);
  };

    return (
      <div>
        <Navbar onType={getData}/>
        <News searchQuery={searchKey}/>
      </div>
    )
}
export default App