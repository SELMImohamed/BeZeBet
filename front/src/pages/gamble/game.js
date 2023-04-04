import React, { useEffect, useState } from "react";
import { getAllBet } from "../../services/bet";

import NavBar from "../../component/NavBar";
const Game = () => {
  const [allBet, setAllBet] = useState({});

  useEffect(() => {
    const fetchAllBet = async () => {
      await getAllBet().then((response) => {
        setAllBet(response.data);
      });
    };
    fetchAllBet();
    console.log(allBet);
  }, []);

  return (
    <>
      <NavBar />
      <div className="game">
      {Array.isArray(allBet) && allBet.length > 0 ? (
        allBet.map((bet) => <Bet key={bet._id} bet={bet} />)
      ) : (
        <p>No bets found.</p>
      )}
      </div>
    </>
  );
};

export default Game;
