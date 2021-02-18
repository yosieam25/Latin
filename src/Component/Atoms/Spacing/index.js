import React from "react";

const Spacing = ({ width, height }) => {
  return <div style={styles.wrapper(width, height)}></div>;
};

export default Spacing;

const styles = {
  wrapper: (width, height) => ({
    width: width,
    height: height,
  }),
};
