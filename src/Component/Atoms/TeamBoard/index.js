import React from "react";
import { Spacing } from "..";
import { AvatarWomen } from "../../../Assets";

const TeamBoard = () => {
  return (
    <div style={styles.wrapper}>
      <img src={AvatarWomen} />
      <Spacing width={20} />
      <p>Arifah Fariza</p>
    </div>
  );
};

export default TeamBoard;

const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
  },
};
