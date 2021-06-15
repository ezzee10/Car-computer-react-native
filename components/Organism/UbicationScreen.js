import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const UbicationScreen = () => {

  const ref = useRef();
  const map = useRef();

  useEffect(() => {
    // ref.current?.setAddressText('Some Text');
  }, []);

  const [location, setLocation] = useState({
    loaded: false,
    latitude: 0,
    longitude: 0,
    listViewDisplayed: 'auto',
    currentLat: "",
    currentLng: "",
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const {loaded, latitude, longitude, listViewDisplayed, currentLat, currentLng, latitudeDelta, longitudeDelta, address} = location;

  const gotoLocation = () => {

    let initialRegion  = {
      longitude,
      latitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    }

    map.current.animateToRegion(initialRegion, 2000);
    
  }

  console.log(location)


  useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
              let {latitude, longitude} = position.coords;
              setLocation({...location, loaded: true, latitude, longitude})
            },
            (error) => {
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
  }, [loaded])

  return (

    <View style={{flex: 1}}>

      { loaded ? 

        <View style={{flex: 1}}>

          <MapView
            ref={map}
            style = {{ flex : 1 }}
            provider = { PROVIDER_GOOGLE }
            showsUserLocation
            initialRegion = {{ latitude , longitude , latitudeDelta , longitudeDelta }}>

            <MapView.Marker
              coordinate={{ latitude, longitude }}
            ></MapView.Marker>

            <MapView.Marker
              coordinate={{
                latitude: currentLat ? currentLat : latitude,
                longitude: currentLng ? currentLng : longitude
              }}
            ></MapView.Marker>

            <MapViewDirections
              origin={{ latitude, longitude }}
              destination = {{
                latitude: currentLat,
                longitude: currentLng
              }}
              strokeWidth = {3}
              strokeColor = "hotpink"
              apikey={'AIzaSyAKUqY51pE1ja6bmTNTsQ5KJOPBwvBWZZc'}
            />

          </MapView>

          <View style={[styles.panelHeader,
              listViewDisplayed? styles.panelFill:styles.panel]}>  

            <GooglePlacesAutocomplete
                currentLocation={false}
                enableHighAccuracyLocation={true}
                ref={ref}
                placeholder={'Buscar un nuevo destino'}
                minLength={2}
                autoFocus={false}
                returnKeyType={"search"}
                listViewDisplayed={listViewDisplayed}
                fetchDetails={true}
                renderDescription={(row) => row.description}
                enablePoweredByContainer={false}
                listUnderlayColor="lightgrey"
                onPress={(data, details) => {
                    setLocation({
                          ...location,
                          setListViewDisplayed: false,
                          address: data.description,
                          currentLat: details.geometry.location.lat,
                          currentLng: details.geometry.location.lng,
                    }),
                    gotoLocation();
                  }}
                textInputProps={{
                  onChangeText: () => {
                      setLocation({...location, listViewDisplayed: 'auto'});
                      },
                  placeholderTextColor: 'black',
                  }}
                getDefaultValue={() => {
                    return ""; 
                  }}
                query={{
                    key: "AIzaSyAKUqY51pE1ja6bmTNTsQ5KJOPBwvBWZZc",
                    language: "es", 
                    components: "country:ar",
                    }}
              styles={{
                textInput: {
                  height: 38,
                  color: '#5d5d5d',
                  fontSize: 16,
                },
                  description: {
                    color: "black",
                    fontSize: 12,
                  },
              predefinedPlacesDescription: {
                  color: "black",
                  },
              listView: {
                borderBottomEndRadius: 15,
                elevation:2,},}}
              nearbyPlacesAPI="GooglePlacesSearch"
              GooglePlacesSearchQuery={{
                  rankby: "distance",
                  types: "building",}}
              filterReverseGeocodingByTypes={[
                  "locality","administrative_area_level_3",]} 
              debounce={200}/>
          
          </View>
      
      </View>
        
        :

        <Text>No se encontró la ubicación</Text>

      }

    </View>
    


  );
}

const styles = StyleSheet.create({
  map:{
    flex:1
    },
  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
    },
  panelFill: {
   position: "absolute",
   top: 0,
   alignSelf: "stretch",
   right: 0,
   left: 0,
  },
  panel: {
   position: "absolute",
   top: 0,
   alignSelf: "stretch",
   right: 0,
   left: 0,
   flex: 1,
  },
});