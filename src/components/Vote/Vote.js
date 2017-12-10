import React from 'react';


const Vote = ({ up, down, voteScore = null }) =>
  <div>
    <button onClick={up}>Up</button>
    { voteScore }
    <button onClick={down}>Down</button>
  </div>
;


export default Vote;
