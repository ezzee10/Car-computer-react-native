import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { useDispatch } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker';
import {convertDate} from '../../helpers/convertDate';
import { clienteAxios } from '../../config/config';
import { loadNote } from '../../actions/notes';

export const ScheduleScreen = () => {

  const dispatch = useDispatch();

  const [message, setMessage] = useState({ msg:'', type:'' });

  const [date, setDate1] = useState(null);

  const [date2, setDate2] = useState(null)

  const [date3, setDate3] = useState(null)

  const [showDatePicker1, setShow1] = useState(false);

  const [showDatePickerTwo, setShow2] = useState(false);

  const [showDatePickerThree, setShow3] = useState(false);

  useEffect(() => {
    
    let note = getNote();

    console.log(note);

    // dispatch(loadNote(note));
    
  }, [getNote])

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

  const saveNote = async ( note ) => {

    try {
      await clienteAxios.post('/api/notes', note);
      setMessage({ type: 'success', msg:'Datos guardados correctamente' });
    } catch (error) {
      console.log(error);  
    }

  }

  const getNote = async () => {

    try {
      const notes = await clienteAxios.get('/api/notes');
      console.log(notes.data.note[0]);
    } catch (error) {
      console.log(error);  
    }

    return notes.data.note;
  }

  const handleRegister = async () => {

    const note = {
      vtv: date,
      fireExtinguisher: date2,
      battery: date3,
    }

    saveNote( note );
  }
  
  return (
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

        <Text style={styles.label}>La rotación de cubiertas deberá realizarse dentro de <Text style={styles.data}>100000 km</Text></Text>

        <Text style={styles.label}>El chequeo de transmisión deberá realizarse dentro de <Text style={styles.data}>15000 km</Text></Text>

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

    </View>
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
    marginTop: 50
  },
  data: {
    color: 'yellow'
  }

})