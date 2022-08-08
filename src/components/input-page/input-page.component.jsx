import { Autocomplete } from '@react-google-maps/api'
import { useState } from 'react'
import './input-page.styles.css'


const InputPage = ({setResult}) => {

  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [distance, setdistance] = useState("")
  const [originName, setOriginName] = useState("")
  const [destinationName, setDestinationName] = useState("")

  const onOriginLoad = (autocomplete) => {
    setOrigin(autocomplete)
  }

  const onDestinationLoad = (autocomplete) => {
    setDestination(autocomplete)
  }

  const onPlaceChanged = () => {
    console.log("Bye",origin.getPlace(), destination.getPlace())
  }

  const calculateRoute = async () => {
    const directionService = new window.google.maps.DirectionsService()
    const results = await directionService.route({
      origin: origin.getPlace().formatted_address,
      destination: destination.getPlace().formatted_address,
      travelMode: "DRIVING",
      provideRouteAlternatives: true,
    })
    setResult(results)
    setdistance(results.routes[0].legs[0].distance.text)
    console.log("origin Name",origin.getPlace().name)
    setOriginName(origin.getPlace().name)
    setDestinationName(destination.getPlace().name)
  }
  //console.log("origin Name",originName)
  return (
    <div className='input-container'>
      <div className='input-box'>
        <label htmlFor='origin'>Origin</label>
        <Autocomplete onLoad={onOriginLoad} onPlaceChanged={onPlaceChanged}>
          <input id='origin' placeholder='Enter Origin'></input>
        </Autocomplete>
      </div>
          
        <button onClick={calculateRoute}>Calculate</button>

      <div className='input-box'>
        <label htmlFor='desitnation'>Destination</label>
        <Autocomplete onLoad={onDestinationLoad} onPlaceChanged={onPlaceChanged}>
          <input id='destination' placeholder='Enter Destination'></input>
        </Autocomplete>
      </div>

      <div className='distance-box'>
        <span className='distance-text'>Distance</span>
        <span className='distance-result'>{distance}</span>
      </div>

      <p> The distance between <b>{originName}</b> and <b>{destinationName}</b> is <b>{distance}</b></p>
    </div>
  )
}

export default InputPage