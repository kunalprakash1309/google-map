import './map.styles.css'
import { DirectionsRenderer } from '@react-google-maps/api'


const MapConatiner = ({result}) => {

  return (
        result ? 
        result.routes.map((route, i) => (
          <DirectionsRenderer 
            options={{
              directions: result,
              routeIndex: i,
              draggable: true,
            }}
          />
        ))
        : <h2>Loading ...</h2>
  )
}

export default MapConatiner
