import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import './css/style.css';

import Form from './components/Form';
import townContext from '../../store/town';

interface townType {
  kabko: string,
  lat?: string,
  long?: string
}

const Home = (props: any) => {
  const [ lat, setLat ] = useState(0.92);
  const [ lng, setLng ] = useState(104.47);
  const [ town, setTown ] = useState([]);
  const [ search, setSearch ] = useState('');

  const changeSearch = (e: any) => setSearch(e.target.value);
  
  const getTown = async () => {
    try {
      const data = await axios.get(`//${process.env.REACT_APP_API_GATEWAY}/town`);
      const { result } = data.data;
      setTown(result);
    } catch(e) {
      throw new Error(e);
    }
  }

  const changeTown = () => {
    const townData: any = town.find((item: townType) =>  item.kabko === search.trim())
    setLat(Number(townData.lat))
    setLng(Number(townData.long))
  }

  useEffect(() => {
    getTown();
  }, [])
  
  return (
    <section className="home-wrapper">
      <townContext.Provider value={town}>
        <div className="map-wrapper">
          <Map
            google={props.google}
            zoom={14}
            initialCenter={{
              lat,
              lng 
            }}
            center={{
              lat,
              lng 
            }}
          />
        </div>
        <Form 
          search={search}
          changeSearch={changeSearch}
          changeTown={changeTown}
        />
      </townContext.Provider>
    </section>
  )
}

export default GoogleApiWrapper({apiKey: `${process.env.REACT_APP_GOOGLE_API_MAPS}`})(Home);