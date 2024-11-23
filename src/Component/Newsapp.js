import React from 'react'
import Card from "./Card"
import { useState,useEffect } from 'react'

export const Newsapp = () => {
 const [search,setSearch]=useState("india")
 const [newsdata,setNewsdata]=useState(null)
 const API_KEY="63f66a3919024191bf9c19b2ca30313d";

 const getData=async()=>{
 const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
 const jsonData=await response.json();
 console.log(jsonData.articles);
 setNewsdata(jsonData.articles)
 }

useEffect(()=>{
  getData()
 },[]) 

 const handleInput=(e)=>{
  console.log(e.target.value);
  setSearch(e.target.value)
 }

 

 const userInput=(event)=>{
  setSearch(event.target.value)
  getData()
 }

  return (
    <div>
     <nav>
      <div>
       <h1>News Wave</h1>
      </div>
      <ul>
       <a>All News</a>
       <a>Trending</a>
      </ul>
      <div className='searchBar'>
       <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
       <button onClick={getData}>Search</button>
      </div>
     </nav>


<div>
 <p className='head'>Stay Update with Trendy News</p>
</div>
     <div className='categoryBtn'>
      <button onClick={userInput} value="sports" >Sports</button>
      <button onClick={userInput} value="politics" >Politics</button>
      <button onClick={userInput} value="entertainment" >Entertainment</button>
      <button onClick={userInput} value="health" >Health</button>
      <button onClick={userInput} value="fitness" >Fitness</button>      
     </div>

     <div>
      {newsdata ? <Card data={newsdata} />  : null }
     </div>
    </div>
  )
}


