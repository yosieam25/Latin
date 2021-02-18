import React from "react";

const CurrentStore = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Current score</h2>
      <p style={styles.subTitle}>Februari</p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: 100,
          paddingRight: 20,
        }}
      >
        <div style={styles.wrapperPoints}>
          <p style={styles.score}>86</p>
          <p>points</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentStore;

const styles = {
  wrapper: {
    width: 221,
    height: 223,
    backgroundColor: "#E9F0FA",
    borderRadius: 24,
    paddingTop: 20,
    paddingLeft: 20,
  },
  title: {
    margin: 0,
    width: 100,
  },
  subTitle: {
    margin: 0,
    marginTop: 10,
  },
  wrapperPoints: {
    backgroundColor: "#C7DBF0",
    width: 110,
    height: 59,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignSelf: "flexEnd",
  },
  score: {
    fontWeight: "bold",
    fontSize: 36,
    margin: 0,
    padding: 0,
  },
};
