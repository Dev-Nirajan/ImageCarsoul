import './App.css'
import { useState } from "react";
import CatCard from "./CatCard";
import NavButton from "./NavButton";
import CATS from "./cats";

const App = () => {
  const [catIDX, setcatIDX] = useState(1);
  return (
    <div className="w-[100%] flex justify-center items-center">
      <NavButton 
        icon="left" 
        onClick={() => setcatIDX(catIDX - 1)}
        show = {catIDX > 0} 
      />
      <CatCard Cat={CATS[catIDX]} />
      <NavButton
        icon="right"
        onClick={() => setcatIDX(catIDX + 1)}
        show = {catIDX < CATS.length - 1} 
      />
    </div>
  );
};

export default App;
