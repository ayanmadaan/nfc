import React from "react";
import Navbar from "../navbar/Navbar";
import "./Section.scss";

function Section() {
  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="cc">
          <div className="card">
            <img src="/assets/ShangChi.jpeg" alt="" className="thumbnail" />
            <p className="title">Shang-Chi</p>
            <p className="genre">Action, Thriller</p>
          </div>
          <div className="card">
            <img src="/assets/wows.jpg" alt="" className="thumbnail" />
            <p className="title">Wolf of Wall Street</p>
            <p className="genre">Finance, Comedy</p>
          </div>
          <div className="card">
            <img src="/assets/endgame.png" alt="" className="thumbnail" />
            <p className="title">Endgame</p>
            <p className="genre">Action, Thriller</p>
          </div>
          <div className="card">
            <img src="/assets/f9.jpg" alt="" className="thumbnail" />
            <p className="title">F9</p>
            <p className="genre">Action, Fake</p>
          </div>
          <div className="card">
            <img src="/assets/gvk.jpg" alt="" className="thumbnail" />
            <p className="title">Godzilla v/s Kong</p>
            <p className="genre">Action, Thriller</p>
          </div>
          <div className="card">
            <img src="/assets/billions.jpg" alt="" className="thumbnail" />
            <p className="title">Billions</p>
            <p className="genre">Finance, Rich</p>
          </div>
          <div className="card">
            <img src="/assets/pb.jpg" alt="" className="thumbnail" />
            <p className="title">Peaky Blinders</p>
            <p className="genre">Action, Thriller</p>
          </div>
          <div className="card">
            <img src="/assets/suits.jpg" alt="" className="thumbnail" />
            <p className="title">Suits</p>
            <p className="genre">Rich, Drama</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
