import React from "react";
import { Link } from "react-router-dom";
import { Lightrees } from "../../Assets";

export default function Login() {
  const color = "pink";
  return (
    <div style={styles.mainWrapper(color)}>
      <div style={styles.leftSide}>
        <div className="block"></div>
      </div>
      <div style={styles.rightSide}>
        <img src={Lightrees} style={styles.logo} />
      </div>
    </div>
  );
}
const styles = {
  mainWrapper: (color) => ({
    margin: 0,
    padding: 0,
    width: "100%",
    display: "flex",
  }),
  leftSide: {
    width: "60%",
    backgroundColor: "yellow",
  },
  rightSide: {
    width: "40%",
  },
  logo: {
    width: "100px",
    height: "100px",
  },
};
