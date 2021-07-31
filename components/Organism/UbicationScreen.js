import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from "react-redux";
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import variables from '../../variables';
import geocodingFormat from "../../helpers/geocodingFormat";
import { clienteAxios } from "../../config/config";
import { saveTravel } from "../../actions/user";

export const UbicationScreen = () => {

  const ref = useRef();
  const map = useRef();

  useEffect(() => {
    Geocoder.init(variables.GOOGLE_API_KEY, {language : "es"});
  }, []);

  const { odometer } = useSelector(state => state.carStatus)

  const dispatch = useDispatch()

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

  const {loaded, latitude, longitude, listViewDisplayed, currentLat, currentLng, latitudeDelta, longitudeDelta } = location;

  const gotoLocation = () => {
    let initialRegion  = {
      longitude,
      latitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    }
    map.current.animateToRegion(initialRegion, 2000);
  }

  const [kmsTravelStart, setKmsTravelStart] = useState(0);
  const [dateTravelStart, setDateTravelStart] = useState(null);
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

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

  const startTravel = async () => {
    setKmsTravelStart(odometer);
    setDateTravelStart(new Date());

    try {
      const response = await Geocoder.from(latitude, longitude);  
      setOriginPlace(geocodingFormat(response));
    } catch (error) {
      console.log(error);
    }
  }

  const saveTravel = async () => {

    try {
      const response = await Geocoder.from(currentLat, currentLng);
      let travel = {
        kilometresTravel: Math.abs(odometer - kmsTravelStart),
        originPlace: originPlace,
        destinationPlace: geocodingFormat(response),
        dateOriginPlace: dateTravelStart,
        dateDestinationPlace: new Date()
      }
      setKmsTravelStart(0);
      await clienteAxios.post('/api/travel', travel);
      console.log(travel);
      dispatch(saveTravel(travel));  
      console.log(travel);
    } catch (error) {
      console.log(error);
    } 
  }

  return (

    <View style={{flex: 1}}>

      { loaded ? 

        <View style={{flex: 1}}>

          <MapView
            ref={map}
            style = {{ flex : 1 }}
            provider = { PROVIDER_GOOGLE }
            showsUserLocation
            initialRegion = {{ latitude , apitude , latitudeDelta , longitudeDelta }}>

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
              apikey={variables.GOOGLE_API_KEY}
              onReady = { result =>  {
                console.log(result.distance);
                if(result.distance <= 100) {
                  saveTravel();
                }
              }}
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
                    startTravel();
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
                    key: variables.GOOGLE_API_KEY,
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