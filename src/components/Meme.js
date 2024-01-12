import React from "react";
import memeData from "../components/data";

export default function Meme() {
  // const [meme, setMeme]=React.useState("http://i.imgflip.com/1bij.jpg")
  const [meme, setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg",
  })

  const [allMemeImage,setAllMemeImage]=React.useState(memeData)


    function getMemeImage(){
      const memesArray=memeData.data.memes;
      const randomNumber=Math.floor(Math.random()*memesArray.length);
      const url=memesArray[randomNumber].url;
      setMeme(prevMeme=>({
        ...prevMeme,
        randomImage:url
      }));
    }
    
  return (
    <main>
      <div className="meme">
        <input type="text" placeholder="Top-text" className="form-input-1"/>
        <input type="text" placeholder="Bottom-text" className="form-input-2"/>
        <button className="form-btn" onClick={getMemeImage} type="submit">Get a new meme image  🖼</button>
    </div>
    <img src={meme.randomImage} alt="meme" className="meme-img"/>

    </main>
  );
}
