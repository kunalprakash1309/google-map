import { useState } from 'react';
import InputPage from '../input-page/input-page.component.jsx';
import MapConatiner from '../map/map.component';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import './main-page.styles.css';

const MainPage = () => {

  const [result, setResult] = useState(null)

  const center = {lat: 25.6, lng: 85.1}

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries: ["places"]
  })
  console.log("Error :",loadError)
  
  return (
    isLoaded ? (
      
        <div className='main-page-container'>
            
            <InputPage setResult={setResult} result={result}/>
            <GoogleMap 
              mapContainerClassName="mapContainerStyle" 
              center={center} 
              zoom={10}
              options={{
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
              }}
            >
              <MapConatiner result={result}/>
            </GoogleMap>
          
        </div>
    )
    :
    <h1>Loading...</h1>
  )
}

export default MainPage