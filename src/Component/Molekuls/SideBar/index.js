import React, { useState } from "react";
import { NavSide } from "../../Atoms";
import {
  Home,
  Latin,
  Lightrees,
  MasterLatin,
  Report,
  Review,
  Reward,
} from "../../../Assets";
import { useHistory } from "react-router";

const SideBar = () => {
  const history = useHistory();
  const [active, setActive] = useState("");

  const Button = (title) => {
    setActive(title);
    history.push(`/${title}`);
  };
  return (
    <div style={styles.wrapper}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={Lightrees} style={styles.img} />
      </div>
      <div style={{ paddingLeft: 30 }}>
        <h3>LATIN (Laporan Rutin)</h3>
        <NavSide
          image={Home}
          title="Home"
          active={active === "Home" ? "#86D3FF" : "transparent"}
          onClick={() => Button("Home")}
        />
        <NavSide
          image={MasterLatin}
          title="Master Latin"
          active={active === "MasterLatin" ? "#86D3FF" : "transparent"}
          onClick={() => Button("MasterLatin")}
        />
        <NavSide
          image={Latin}
          title="Latin"
          active={active === "Latin" ? "#86D3FF" : "transparent"}
          onClick={() => Button("Latin")}
        />
        <NavSide
          image={Report}
          title="Report"
          active={active === "Report" ? "#86D3FF" : "transparent"}
          onClick={() => Button("Report")}
        />
        <NavSide
          image={Reward}
          title="Reward and consequences"
          active={active === "Reward" ? "#86D3FF" : "transparent"}
          onClick={() => Button("Reward")}
        />
        <NavSide
          image={Review}
          title="Review"
          active={active === "Review" ? "#86D3FF" : "transparent"}
          onClick={() => Button("Review")}
        />
      </div>
    </div>
  );
};

export default SideBar;

const styles = {
  wrapper: {
    backgroundColor: "#E5E5E5",
    width: "20%",
    height: window.innerHeight,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  img: {
    width: "40%",
    height: "20%",
    textAlign: "center",
  },
};
