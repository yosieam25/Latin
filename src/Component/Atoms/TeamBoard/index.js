import React from "react";
import { Spacing } from "..";
import { AvatarWomen } from "../../../Assets";

const TeamBoard = () => {
  return (
    <div style={styles.wrapper}>
      <img src={AvatarWomen} style={styles.image} />
      <Spacing width={20} />
      <div
        style={{
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "black",
          borderBlockStyle: "dashed",
        }}
      >
        <p style={styles.title}>Arifah Fariza</p>
        <p style={styles.subTitle}>80%</p>
      </div>
    </div>
  );
};

export default TeamBoard;

const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
  },
  title: {
    margin: 0,
  },
  subTitle: {
    margin: 0,
  },
  image: {
    width: 50,
    height: 50,
  },
};
