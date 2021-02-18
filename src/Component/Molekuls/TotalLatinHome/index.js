import React from "react";
import { CurrentStore, MiniSquare, Spacing } from "../../Atoms";

const TotalLatinHome = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.currentScore}>
        <CurrentStore />
      </div>
      <div style={styles.totalLatin}>
        <MiniSquare
          title="Latin Incomplete"
          total="12"
          persen="50%"
          color="#E9F0FA"
        />
        <Spacing width={30} />
        <MiniSquare
          title="Latin Completed"
          total="12"
          persen="50%"
          color="#E9FAED"
        />
        <MiniSquare
          title="Latin Waiting Review"
          total="12"
          persen="50%"
          color="#F2E9FA"
        />
        <Spacing width={30} />
        <MiniSquare
          title="Latin Violation"
          total="12"
          persen="50%"
          color="#FAEBE9"
        />
      </div>
    </div>
  );
};

export default TotalLatinHome;

const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },
  currentScore: {
    width: "30%",
  },
  totalLatin: {
    width: "70%",
    display: "flex",
    flexWrap: "wrap",
  },
};
