import React from "react";

export default function Button({ title, onClick }) {
  return (
    <div style={styles.wrapper} onClick={onClick}>
      <p style={styles.title}>{title}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#43A0C5",
    borderRadius: 20,
  },
  title: {
    color: "White",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    cursor: "pointer",
  },
};
