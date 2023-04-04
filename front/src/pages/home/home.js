import React, { useEffect } from "react";
import NavBar from "../../component/NavBar";
import "../../styles/Home.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Coins from "../home/—Pngtree—gold coin map_4006641.png";
import Popup from "reactjs-popup";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>;
    } else {
      let path = "/login";
      navigate(path);
    }
  }, []);
  let navigate = useNavigate();

  const betPage = () => {
    let path = "/bet";
    navigate(path);
  };

  return (
    <>
      <NavBar />
      <h2 className="title_home">
        Be Ze<span>Bet</span>
      </h2>
      <div className="container">
        <p className="text-ro">
          Tu veux créer ton propre <span>Pari</span> ?<br />
          Inviter tes amis ? <br />
          Miser Pour ou Contre ? <br />
          Et remporter toutes leurs mise ? <br />
          <p></p>
          Créer ton compte et lance toi !<br />
          Des paris infinis t'attendent !<br />
          Et si tu gagnes, tu pourras te faire plaisir avec tes gains !<br />
          Lance maintenant ton Propre <span>Pari</span> !<br />
        </p>

        <img src={Coins} alt="logo" className="logo_home" />
      </div>
      <Button
        variant="contained"
        color="warning"
        className="button"
        onClick={betPage}
      >
        Get Started
      </Button>
    </>
  );
};
