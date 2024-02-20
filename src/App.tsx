import './App.css'
import Directions from './Directions'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

function App() {
  return (
    <>
      <div className="map">
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
          <Map
            defaultCenter={{ lat: 36.15, lng: -79.23 }}
            defaultZoom={9}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            <Directions />
          </Map>
        </APIProvider>
      </div>
    </>
  )
}

export default App
