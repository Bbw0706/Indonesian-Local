import React, { useContext } from 'react';
import Input from '../../../../components/_base/input';
import townContext from '../../../../store/town';

import SearchLogo from '../../../../assets/img/magnifier.svg';

import './css/style.css';

interface townType {
  kabko: string,
  lat?: string,
  long?: string
}

interface formType {
  search: string,
  changeSearch: (e: any) => void,
  changeTown: (e: any) => void
}

const Form = (props: formType) => {
  const town = useContext(townContext);
  const dataTown = town.map((item: townType) => {
    return (
      <option 
        value={item.kabko}
        key={item.kabko}
      >
        {item.kabko}
      </option>
    )
  })
  return (
    <div className="form-group">
      <form action="#">
        <Input 
          list="town"
          value={props.search}
          placeholder="Search town"
          changeText={props.changeSearch}
        />
        <datalist id="town">
          {dataTown}
        </datalist>
        <button onClick={props.changeTown}>
          <img src={SearchLogo} alt="Search" />
        </button>
      </form>
    </div>
  )
}

export default Form;