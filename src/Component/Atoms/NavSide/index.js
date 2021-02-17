import React, { useState } from "react";

const NavSide = ({ image, title, onClick, active }) => {
  return (
    <div style={styles.wrapper(active)} onClick={onClick}>
      <img src={image} style={styles.img} />
      <p style={styles.title}>{title}</p>
    </div>
  );
};

export default NavSide;

const styles = {
  wrapper: (active) => ({
    display: "flex",
    marginTop: 10,
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: active,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 10,
  }),
  img: {
    width: "10%",
    height: "10%",
  },
  title: {
    marginLeft: 20,
    color: "#828282",
    fontSize: 15,
  },
};
