import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import AnimatedSpeedometer from 'react-native-cool-speedometer'

export const Speedometer = ({ velocity }) => {
    
    return (

        <View style={styles.containSpeedometer}>

            <View>
                <Text style={{color: 'green', fontSize: 40}}>{velocity}</Text>
                <Text style={{textAlign: 'center', fontSize: 16}}>Kms/h</Text>
            </View>
            
            

            {/* <AnimatedSpeedometer
                size={250}
                value={velocity}
                max={140}
                angle={250}
                backgroundAngle={200}
                indicatorStyle={{
                    bottom: 25,
                    fontSize: 30,
                    color: 'white'
                }}
                fontFamily='Arial'
                indicatorSuffix='km/h'
                style={styles.speedometer}
                indicatorSuffixStyle= {{
                    color: 'white'
                }}
                secondaryArcColor = {'gray'}
            />  */}

        </View>
    )
}

const styles = StyleSheet.create({
    containSpeedometer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    speedometer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

