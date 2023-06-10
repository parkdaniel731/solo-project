import React from "react";
import Card from '../components/Card.jsx';

const ScoreContainer = () => {
  return (
    <div className="score-container">
      <div className="player1-score-container">
        <Card key={8000} card-id={'placeholder8'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={9000} card-id={'placeholder9'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={10000} card-id={'placeholder10'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={11000} card-id={'placeholder11'} src={'../images/nickyoung.png'} alt={'place holder'} />
      </div>
      <div className="player2-score-container">
        <Card key={12000} card-id={'placeholder12'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={13000} card-id={'placeholder13'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={14000} card-id={'placeholder14'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={15000} card-id={'placeholder15'} src={'../images/nickyoung.png'} alt={'place holder'} />
      </div>
      <div className="player3-score-container">
        <Card key={16000} card-id={'placeholder16'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={17000} card-id={'placeholder17'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={18000} card-id={'placeholder18'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={19000} card-id={'placeholder19'} src={'../images/nickyoung.png'} alt={'place holder'} />
      </div>
    </div>
  );
};

export default ScoreContainer;