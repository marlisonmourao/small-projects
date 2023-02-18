import { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';

import { 
  requestForegroundPermissionsAsync, 
  getCurrentPositionAsync, 
  LocationObject, 
  watchPositionAsync, 
  LocationAccuracy 
} from 'expo-location'

import MapView, { Marker } from 'react-native-maps'
import { styles } from './styles'


export default function App() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requestForegroundPermissions() {
    const { granted } = await requestForegroundPermissionsAsync()

    
    if(granted) {
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
    }
  }

  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    requestForegroundPermissions()
  }, [])

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {
      setLocation(response)
      mapRef.current?.animateCamera({
        pitch: 70,
        center: response.coords
      })
    })
  }, [])

  return (
    <View style={styles.container}>
    {
      location &&
      <MapView 
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker 
          coordinate={{
            latitude: location.coords.latitude,
             longitude: location.coords.longitude,
          }}
        />
      </MapView>
    }
    </View>
  );
}

