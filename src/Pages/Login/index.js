import React from "react";
import { Link } from "react-router-dom";
import { Lightrees } from "../../Assets";
import { Button, Input } from "../../Component/Atoms";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const Submit = () => {
    history.push("./home");
  };
  return (
    <div style={styles.mainWrapper}>
      <div style={styles.leftSide}>
        <div style={styles.wrapperContent}>
          <h2>Welcome Back To</h2>
          <h1>LATIN</h1>
          <br />
          <br />
          <br />
          <div style={styles.wrapperInput}>
            <p style={styles.login}>LOGIN</p>
            <br />
            <Input placeholder="Email Address" />
            <br />
            <Input placeholder="Password" />
            <br />
            <br />
            <Button title="Login" onClick={Submit} />
          </div>
        </div>
      </div>
      <div style={styles.rightSide}>
        <img src={Lightrees} style={styles.logo} />
      </div>
    </div>
  );
}
const styles = {
  mainWrapper: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: window.innerHeight,
    display: "flex",
  },
  leftSide: {
    width: "80%",
    backgroundColor: "#E5F6FF",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSide: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "50%",
    height: "35%",
  },
  wrapperContent: {
    width: "40%",
  },
  wrapperInput: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 25,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  login: {
    fontSize: 15,
    fontWeight: "bold",
  },
};
