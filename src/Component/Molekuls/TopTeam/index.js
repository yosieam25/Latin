import React from "react";
import { TeamBoard } from "../../Atoms";

const TopTeam = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={styles.wrapper}>
        <TeamBoard />
      </div>
    </div>
  );
};

export default TopTeam;

const styles = {
  wrapper: {
    width: "100%",
    height: "100%",
    border: "black",
  },
};
