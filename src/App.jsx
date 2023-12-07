
import React from "react";
import './App.css';
import elephant from "./images/elephant.jpeg";



function App({imageData}) {
  let image_arr=image()
  console.log(image_arr)
  return (
   <div>
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

export default App;
