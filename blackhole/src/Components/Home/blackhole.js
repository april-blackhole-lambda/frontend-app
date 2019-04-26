import React from 'react';

const Blackhole = props => {
  return (
    <div className="Blackhole">
      <h3>Title: {props.title}</h3>
      <strong>Category: {props.category}</strong>
      <p>{props.text}</p>
    </div>
  );
};

Blackhole.defaultProps = {
  title: '',
  text: '',
  category: '',
  days_to_destruct: ''
};


export default Blackhole;

