import React from 'react';

import './Vote.css';

const Vote = ({ up, down, voteScore = null }) =>
  <div className="wrapper">
    <button className="up" onClick={up}>
      Up
    </button>
    <div className="score">
      { voteScore }
    </div>
    <button className="down" onClick={down}>
      Down
    </button>
  </div>
;


export default Vote;
