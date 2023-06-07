import React from "react";

const TableContainer = () => {
  return (
    <div className="table-container">
      <div className="jan-jun-container">
        <span>jan</span>
        <span>feb</span>
        <span>mar</span>
        <span>apr</span>
        <span>may</span>
        <span>jun</span>
      </div>
      <div className="deck-container">
        <span>deck</span>
      </div>
      <div className="jul-dec-container">
        <span>jul</span>
        <span>aug</span>
        <span>sep</span>
        <span>oct</span>
        <span>nov</span>
        <span>dec</span>
      </div>
    </div>
  );
};

export default TableContainer;