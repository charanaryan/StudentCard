// eslint-disable-next-line no-unused-vars
import React from 'react';
import './studentCard.css'; 

const StudentCard = (input) => {


  return (
    <div className='card-parent'>
      {input.users.map((elements, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={elements.image} alt={elements.username} />
          </div>
          <div className="card-desc">
            <h1>{elements.username}</h1>
            <p>{elements.user_desc}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;

