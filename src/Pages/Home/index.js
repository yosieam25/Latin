import React from "react";
import { SideBar, TopTeam, TotalLatinHome } from "../../Component";

const Home = () => {
  return (
    <div style={styles.wrapperMain}>
      <SideBar />
      <div style={styles.rightSide}>
        <div style={styles.contentLeft}>
          <TotalLatinHome />
        </div>
        <div style={styles.contentRight}>
          <TopTeam />
        </div>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  wrapperMain: {
    width: window.innerWidth,
    height: window.innerHeight,
    display: "flex",
  },
  rightSide: {
    width: "80%",
    display: "flex",
  },
  contentLeft: {
    width: "70%",
  },
  contentRight: {
    width: "30%",
  },
};
