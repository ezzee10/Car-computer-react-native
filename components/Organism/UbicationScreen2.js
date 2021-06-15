import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {View, Text} from "react-native";

export const UbicationScreen = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAKUqY51pE1ja6bmTNTsQ5KJOPBwvBWZZc',
        language: 'en',
      }}
    />
  );
};
