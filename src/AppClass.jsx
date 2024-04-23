import React, { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  

  // code here

  render (){
    let image_arr=this.props.imageData()
    return (<div>
        <h1>Kalvium Gallery</h1>
       {/* <div className='parent'>
         <img src={image_arr[0].img} className='image'/>
         <img src={image_arr[0].img} className='image'/>
         <img src={image_arr[0].img} className='image'/>
         <img src={image_arr[0].img} className='image'/>
       </div> */}
       <div className='parent'>
       {
         image_arr.map(elem=>{
           return(
             <img className='image' src={elem.img}/>
           )
         })
       }
   
       </div>
      </div>
     )
  }
}