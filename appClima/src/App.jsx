import { useState } from "react";
import "./index.css";

import Search from "./components/Search";
import Content from "./components/content";

function App() {
  const [searched, setSearched] = useState(false);
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState("");
  const [bandeira, setBandeira] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <>
      <Search
        setSearched={setSearched}
        setCountry={setCountry}
        setTemp={setTemp}
        setDesc={setDesc}
        setBandeira={setBandeira}
        setCidade={setCidade}
      />
      {searched && (
        <Content
          nameCountry={country}
          temp={temp}
          desc={desc}
          bandeira={bandeira}
          cidade={cidade}
        />
      )}
    </>
  );
}

export default App;
