import React,{useState} from "react";
import axios from "axios";
import Card from "./Card";

const Main=()=>{
     const[search,setSearch]=useState("");
     const[bookData,setData]=useState([]);
     const searchBook=(e)=>{
        if(e.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=10').then(res=>setData(res.data.items)).catch(err=>console.log(err))
        }
     }
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>Book Search</h1>
            </div>
            <div className="search">
                <input type="text" 
                placeholder="Search for a Book"
                value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
            </div>
        </div>
        <div className="container">
            {
                <Card book={bookData}/>
            }
        </div>
        </>
    )
}

export default Main;