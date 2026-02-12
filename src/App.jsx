import { useState } from "react";
import terrorists from "./data/terrorists.json";

import TerroristsCard from "./TerroristsCard";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  const [filteredTerrorists, setFilteredTerrorists] = useState(terrorists);

  const handleInputChange = (event) => {
    setFilteredTerrorists(
      terrorists.filter((terrorist) =>
        terrorist.name.startsWith(event.target.value),
      ),
    );
  };
  const handleInputChangeAttacksCount = (event) => {
    setFilteredTerrorists(
      terrorists.filter(
        (terrorist) => terrorist.attacksCount >= event.target.value,
      ),
    );
  };
  const handleInputChangeStatus = (event) => {
    setFilteredTerrorists(
      terrorists.filter((terrorist) => terrorist.status === event.target.value),
    );
  };
  const handleMostDangerou = () => {
    setFilteredTerrorists(
      terrorists.filter((terrorist) => {
        return terrorist.status === "active" && terrorist.imageUrl != null; //&& terrorists.attacksCount ,
      }),
    );
  };

  return (
    <>
      <Header />
      <Nav
        handleInputChange={handleInputChange}
        AttacksCount={handleInputChangeAttacksCount}
        handleInputChangeStatus={handleInputChangeStatus}
        handleMostDangerou={handleMostDangerou}
      />
      <TerroristsCard users={filteredTerrorists} />
    </>
  );
}

export default App;
