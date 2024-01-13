import React from "react";
import memeData from "../components/data";

export default function Meme() {
  // const [meme, setMeme]=React.useState("http://i.imgflip.com/1bij.jpg")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImage, setAllMemeImage] = React.useState(memeData);

  function getMemeImage() {
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event){
    const {name,value}=event.target;
    setMeme(prevMeme=>({
      ...prevMeme,
      [name]:value
    }))
  }

  return (
    <main>
      <div className="meme">
        <input 
          type="text" 
          placeholder="Top-text" 
          className="form-input-1"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
          />
        <input 
          type="text" 
          placeholder="Bottom-text" 
          className="form-input-2"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText} />
        <button className="form-btn" onClick={getMemeImage} type="submit">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="memes">
  <img alt="memeImg" src={meme.randomImage} className="meme-img"/>
  <h1 className="meme-text meme-text-top">{meme.topText}</h1>
  <h1 className="meme-text meme-text-bottom">{meme.bottomText}</h1>
</div>

    </main>
  );
}
