import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableHighlight, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {convertDate} from '../../helpers/convertDate';
import { createNote, updateNote } from '../../actions/notes';
import AwesomeAlert from 'react-native-awesome-alerts';
import DialogInput from 'react-native-dialog-input';
import DateTimePicker from '@react-native-community/datetimepicker';

export const ScheduleScreen = () => {

  const dispatch = useDispatch();

  const { note, message, alert } = useSelector(state => state.note);

  const [showAlert, setShowAlert ] = useState(alert);

  const [date, setDate1] = useState(note?.vtv ? new Date(note.vtv) : null);

  const [date2, setDate2] = useState(note?.fireExtinguisher ? new Date(note.fireExtinguisher) : null);

  const [date3, setDate3] = useState(note?.battery ? new Date(note.battery) : null);

  const [wheels, setWheels] = useState(note?.wheels ? note.wheels : 100000);

  const [transmission, setTransmission] = useState(note?.transmission ? note.transmission : 15000);

  const [showDatePicker1, setShow1] = useState(false);

  const [showDatePickerTwo, setShow2] = useState(false);

  const [showDatePickerThree, setShow3] = useState(false);

  const [showDialog1, setShowDialog1] = useState(false);

  const [showDialog2, setShowDialog2] = useState(false);

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow1(Platform.OS === 'ios');
    setDate1(currentDate);

  };

  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
  };

  const onChange3 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow3(Platform.OS === 'ios');
    setDate3(currentDate);
  };

  const handleRegister = () => {

    const new_note = {
      vtv : date,
      fireExtinguisher: date2,
      battery: date3,
      wheels: wheels,
      transmission: transmission
    }

    if (note === undefined ) {
      if (date !== null && date2 !== null && date3 !== null) {
        dispatch(createNote(new_note));
        setShowAlert(true);
      }
    } else {
        dispatch(updateNote(new_note));
        setShowAlert(true);
    }
  }

  return (
    <ScrollView>

      <View style={styles.container}>

        {date ?
          <Text style={styles.label}> El vencimiento de su VTV es el <Text style={styles.data}>{convertDate(date)}</Text></Text>
          : 
          <Text style={styles.label}>Agregue la fecha de vencimiento de su VTV</Text>
        }

        {showDatePicker1 ? 
          <DateTimePicker
            testID="dateTimePicker"
            value={date ? date : new Date()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange1}
          />
          : null 
        }

        <TouchableHighlight 
          style ={styles.button}
          onPress={() => setShow1(!showDatePicker1)}
        >
          <Text style={styles.appButtonText}> {date ? 'Actualizar' : 'Agendar'} </Text>

        </TouchableHighlight> 

        {date2 ?
          <Text style={styles.label}> El vencimiento de su matafuego es el <Text style={styles.data}> {convertDate(date2)} </Text></Text>
          : 
          <Text style={styles.label}>Agregue la fecha de vencimiento de su matafuego </Text>
        }
  
        {showDatePickerTwo ? 
          <DateTimePicker
            testID="dateTimePicker"
            value={date2 ? date2 : new Date()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange2}
            style={{height: 600}}
          />
          : null 
        }

        <TouchableHighlight 
          style ={styles.button}
          onPress={() => setShow2(!showDatePickerTwo)}
        >
          <Text style={styles.appButtonText}> {date2 ? 'Actualizar' : 'Agendar'}</Text>

        </TouchableHighlight> 

        <Text style={styles.label}>La rotación de cubiertas deberá realizarse dentro de <Text style={styles.data}>{wheels} km</Text></Text>

        <TouchableHighlight 
          style ={styles.button}
          onPress={() => setShowDialog1(true)}
        >
          <Text style={styles.appButtonText}> Modificar </Text>

        </TouchableHighlight> 

        <DialogInput isDialogVisible={showDialog1}
            title={"Rotación de cubiertas"}
            message={"Cantidad de kilómetros para rotación de cubiertas"}
            submitInput={ (inputText) => {setWheels(inputText), setShowDialog1(false)} }
            closeDialog={ () => setShowDialog1(false)}
            submitText={"Enviar"}
            cancelText={"Cancelar"}
        >
        </DialogInput>

        <Text style={styles.label}>El chequeo de transmisión deberá realizarse dentro de <Text style={styles.data}>{transmission} km</Text></Text>

        <TouchableHighlight 
          style ={styles.button}
          onPress={() => setShowDialog2(true)}
        >
          <Text style={styles.appButtonText}> Modificar </Text>

        </TouchableHighlight> 

        <DialogInput isDialogVisible={showDialog2}
            title={"Chequeo de transmisión"}
            message={"Cantidad de kilómetros para chequeo de transmisión"}
            submitInput={ (inputText) => {setTransmission(inputText), setShowDialog2(false)} }
            closeDialog={ () => setShowDialog2(false)}
            submitText={"Enviar"}
            cancelText={"Cancelar"}
        >
        </DialogInput>

        {date3 ?
         <Text style={styles.label}>El chequeo de bateria deberá realizarse el <Text style={styles.data}>{convertDate(date3)}</Text></Text>
          : 
          <Text style={styles.label}>Ingrese la fecha en la cual se instaló la bateria</Text>
        }

        <TouchableHighlight 
          style ={styles.button}
          onPress={() => setShow3(!showDatePickerThree)}
        >
          <Text style={styles.appButtonText}> {date3 ? 'Actualizar' : 'Agendar'} </Text>

        </TouchableHighlight> 

        {showDatePickerThree ? 
          <DateTimePicker
            testID="dateTimePicker"
            value={date3 ? date3 : new Date()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange3}
          />
          : null 
        }

        <TouchableHighlight 
          style ={[styles.button, styles.save]}
          onPress={handleRegister}
        >
          <Text style={styles.appButtonText}>GUARDAR</Text>
        </TouchableHighlight> 

        {/* <AwesomeAlert
          show={true}
          title="Agenda"
          message={message}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Aceptar"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            setShowAlert(false);
          }}
        /> */}

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },
  button: {
    backgroundColor: 'black',
    width: '40%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 40
  },
  appButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    position: 'relative',
    top: -2,
    textTransform: 'uppercase'
  },
  label: {
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 20
  },
  picker: {
    marginBottom: 30,
    color: 'white'
  },
  save: {
    width: '70%',
    marginTop: 0
  },
  data: {
    color: 'yellow'
  }

})