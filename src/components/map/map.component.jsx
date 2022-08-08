import './map.styles.css'
import { DirectionsService, DirectionsRenderer } from '@react-google-maps/api'
import { useCallback, useEffect, useMemo, useState } from 'react'


const MapConatiner = ({result}) => {

  console.log("result", result)
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

{/* <DirectionsRenderer
options={{
  directions: result
}}
/>  */}
