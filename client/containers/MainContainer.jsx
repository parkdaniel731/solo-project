import React from "react";
import TableContainer from './TableContainer.jsx';
import HandContainer from './HandContainer.jsx';
import ScoreContainer from './ScoreContainer.jsx';

const MainContainer = () => {
  return (
    <div className="main-container">
      <TableContainer />
      <HandContainer />
      <ScoreContainer />
    </div>
  );
};

export default MainContainer;