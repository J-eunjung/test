import React from "react";
import "./styles/Community.css";
import { Link } from "react-router-dom";
import PopularRank from "./PopularRank";

function Community() {
  return (
    <div className="main">
      <div className="menu">
        <div className="groupcreate">
          <button>운동</button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="groupbtn">
          <button>
            <Link to="/">그룹생성1111111</Link>
          </button>
        </div>
      </div>
      <div className="rank">
        <div className="title">
          <p>인기 상승 그룹111111111</p>
        </div>
        <PopularRank />
      </div>
      <div className="GroupList"></div>
    </div>
  );
}
export default Community;
