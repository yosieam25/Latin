import React from "react";

export default function Input({ placeholder }) {
  return (
    <div style={styles.wrapper}>
      <input style={styles.input} type="email" placeholder={placeholder} />
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    outlineStyle: "none",
    border: "none",
    backgroundColor: "transparent",
    paddingLeft: 10,
  },
  wrapper: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
};
