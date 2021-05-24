import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/index';
import SearchFilters from './Components/SearchFilters/index';
import ReactTable from './Components/ReactTable/index';
import UsersData from './Components/data/data.json'

const  App =()=>{
  const[searchKeyword, setSearchKeyWord]=useState(null);
  const[filteredUserData, setFilteredUserData]=useState();

  useEffect(()=>{
    setFilteredUserData(UsersData);
  },[0])
  
  const onSubmitSearch=()=>{
    console.log('testeSearchData', UsersData, searchKeyword);
    const filteredData= UsersData ? UsersData.users.filter(data=>{
      if(searchKeyword == null)
          return data
      else if(data.accountNumber.includes(searchKeyword)){
          return data
      }
    }): null;
    const users= filteredData;

    setFilteredUserData({users:filteredData});
    console.log('testeSearchData', UsersData, filteredData, searchKeyword);
   // setFilteredUserData(UsersData);
  }

  const onSearch=(e)=>{
    setSearchKeyWord(e.target.value)
  }
  return (
    <div>
      <Header />
      <div className="parent">
          <div className="child">
            <SearchFilters onSearch={onSearch} onSubmitSearch={onSubmitSearch}/>
          </div>
        </div>   
        <div className="parent-2">
        <div className="child-container">
        <ReactTable UsersData={filteredUserData} />
          </div>
        </div>
        
    </div>
    
  );
} 
  
export default App;
