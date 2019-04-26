import React from 'react';
import '../../App.css';
const Blackhole = props => {
  return (
    <div className="blackhole">
      <h3>{props.title}</h3>
      <strong>{props.category}</strong>
      <p>{props.text} Tell the blackhole anything</p>
      <button className="btn-delete"type='button' onClick={props.deletePost}>Delete</button>
      <button className="btn-update" type='button' onClick={props.updatelackholes}>Update</button>
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

