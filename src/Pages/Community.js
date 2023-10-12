import React from "react";
import "./Community.css";
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
            <Link to="/Groupcreate">그룹생성</Link>
          </button>
        </div>
      </div>
      <div className="rank">
        <div className="title">
          <p>인기 상승 그룹1</p>
        </div>
        <PopularRank />
      </div>
      <div className="GroupList"></div>
    </div>
  );
}
export default Community;
