import React from 'react'

function Book({img, title, author}){
    function clickHandler(){
      alert("minkuaa")
    }
  
    return(
      <article className = "book">
        <img 
          className="image"
          src= {img}
          alt="stories book" 
        />
        <h2 onClick={() => console.log(title)} >{title}</h2>
        <h4>{author.toUpperCase()}</h4>
        <button type="button" onClick = {clickHandler}>minkuaa</button>
      </article>
    )
}

export default Book