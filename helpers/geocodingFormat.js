const geocodingFormat = (address) => {
    
    let addressComponent = address.results[0].address_components[1].long_name + ", " + address.results[0].address_components[0].long_name + ", " +
                          address.results[0].address_components[2].long_name + ", " + address.results[0].address_components[4].long_name + ", " + address.results[0].address_components[5].long_name;
    
    return addressComponent;
}

export default geocodingFormat
