import React from "react";
// import Card from "./components/Card";
// import data from "./components/data";
import Logo from "./components/Logo";
import Meme from "./components/Meme";

function App() {
  // const cards = data.map((item) => {
  //   return (
  //     <Card
  //       key={item.id}
  //       {...item} // Pass the entire item object as props
  //     />
  //   );
  // });

  return (
    <div className="App">
      <Logo/>
      <Meme/>
    </div>
  );
}

export default App;
