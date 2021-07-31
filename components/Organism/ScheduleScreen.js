import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableHighlight, ScrollView, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {convertDate} from '../../helpers/convertDate';
import { updateNote } from '../../actions/notes';
import DialogInput from 'react-native-dialog-input';
import DateTimePicker from '@react-native-community/datetimepicker';
import { clienteAxios } from '../../config/config';

export const ScheduleScreen = () => {

  const dispatch = useDispatch();

  const { note  } = useSelector(state => state.note);

  const [date, setDate1] = useState(new Date(note.vtv));

  const [date2, setDate2] = useState(new Date(note.fireExtinguisher));

  const [rotation, setRotation] = useState(note.rotation);

  const [transmission, setTransmission] = useState(note.transmission);

  const [showDatePicker1, setShow1] = useState(false);

  const [showDatePickerTwo, setShow2] = useState(false);

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

  const showAlert = (msg) => {
    Alert.alert(  
      'Agenda',  
      `${msg}`,  
      [  
          {  
              text: 'Cancelar',   
              style: 'destructive',  
          },  
          {text: 'Aceptar'},  
      ]  
    );  
  }

  const handleRegister = async () => {

    const new_note = {
      vtv : date,
      fireExtinguisher: date2,
      battery: date3,
      rotation: rotation,
      transmission: transmission
    }

    try {
      await clienteAxios.put('/api/notes', new_note);
      dispatch(updateNote(new_note));
      showAlert('Agenda actualizada correctamente');
    } catch (error) {
      showAlert('Error al actualizar agenda');
      console.log(error);
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
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange1}
            minimumDate={new Date()}
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
            value={date2}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange2}
            style={{height: 600}}
            minimumDate={new Date()}
          />
          : null 
        }

        <TouchableHighlight 
          style ={styles.button}
          onPress={() => setShow2(!showDatePickerTwo)}
        >
          <Text style={styles.appButtonText}> {date2 ? 'Actualizar' : 'Agendar'}</Text>

        </TouchableHighlight> 

        <Text style={styles.label}>La rotación de cubiertas deberá realizarse dentro de <Text style={styles.data}>{rotation} km</Text></Text>

        <View style={{flexDirection: 'row'}}>

          <TouchableHighlight 
            style ={styles.button}
            onPress={() => setShowDialog1(true)}
          >
            <Text style={styles.appButtonText}> Modificar </Text>

          </TouchableHighlight> 

          <TouchableHighlight 
            style ={[styles.buttonRestart, styles.button]}
            onPress={() => setShowDialog1(true)}
          >
            <Text style={styles.appButtonText}> Reiniciar </Text>

          </TouchableHighlight> 

        </View>

        <DialogInput 
            isDialogVisible={showDialog1}
            title={"Rotación de cubiertas"}
            message={"Cantidad de kilómetros para rotación de cubiertas"}
            submitInput={ (inputText) => {setRotation(inputText), setShowDialog1(false)} }
            closeDialog={ () => setShowDialog1(false)}
            hintInput={rotation.toString()}
            hintTextColor={'white'}
            submitText={"Enviar"}
            cancelText={"Cancelar"}
            dialogStyle={{
              backgroundColor: 'purple'
              }
            }
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

        <TouchableHighlight 
          style ={[styles.button, styles.save]}
          onPress={handleRegister}
        >
          <Text style={styles.appButtonText}>GUARDAR</Text>
        </TouchableHighlight> 

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
  },
  buttonRestart: {
    marginLeft: 10
  }

})