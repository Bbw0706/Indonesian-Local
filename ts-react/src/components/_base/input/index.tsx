import * as React from 'react';
import './css/style.css';

interface inputType {
  list: string,
  value: string,
  placeholder: string,
  changeText: () => void;
}

const Input: Function = (props: inputType) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Search Location</label>
      <input
        type="text"
        list={props.list}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.changeText}
      />
    </div>
  );
}

export default Input;