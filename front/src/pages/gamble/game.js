import React, { useEffect, useState } from "react";

import NavBar from "../../component/NavBar";
const Game = () => {
    
    useEffect(() => {
        console.log("Game mounted");
        return () => {
            console.log("Game unmounted");
        };
    }, []);

  return (
    <>
        <NavBar />
      <div className="game">
        <h1>Game</h1>
      </div>
    </>
  );
};

export default Game;
