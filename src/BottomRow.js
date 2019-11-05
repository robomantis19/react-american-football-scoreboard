import React from "react";
import "./App.css";

const BottomRow = (props) => {
  function won(){
    if(props.quarters == 1){
      if(props.score[0] > props.score[1]){ 
        return <span>Lions Won</span>
      }else{return <span>Tigers Won</span>}
    }
  }
  return (
    <div>

      
      <div className="bottomRow">
        <div className="down">
        {won()}
          <h3 className="down__title">Down</h3>
          <div className="down__value">3</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">7</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">21</div>
        </div>
        <div className="quarter">
        {won()}
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{props.quarters}</div>
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
