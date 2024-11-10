import React, { createContext } from "react";
import Parent from "./Parent";

export const xyz = createContext();

function Dadaji() {
  return (
    <div>
      <xyz.Provider value={[12,34,456]}>
        <Parent />
      </xyz.Provider>
    </div>
  );
}

export default Dadaji;
