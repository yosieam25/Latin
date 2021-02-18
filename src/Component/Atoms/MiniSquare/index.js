import React, { useState } from "react";

const MiniSquare = ({ title, total, persen, color }) => {
  return (
    <div style={styles.wrapper(color)}>
      <p style={styles.title}>{title}</p>
      <br />
      <p style={styles.total}>{total}</p>
      <p style={styles.persen}>{persen}</p>
    </div>
  );
};

export default MiniSquare;

const styles = {
  wrapper: (color) => ({
    width: 221,
    height: 102,
    backgroundColor: color,
    borderRadius: 24,
    paddingLeft: 28,
    paddingTop: 10,
    marginBottom: 20,
  }),
  title: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 0,
  },
  total: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 0,
  },
  persen: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 0,
    textAlign: "right",
    marginRight: 17,
  },
};
