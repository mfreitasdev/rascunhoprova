import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TextInput } from 'react-native';

export default function App() {

const [nota1, setNota1]=useState(0);
const [nota2, setNota2]=useState(0);
const [nota3, setNota3]=useState(0);
const [resultado, setResultado]=useState(0);

const acao=()=>{
  return setResultado(((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3 ).toFixed(2))
}


  return (
    <SafeAreaView style={estilos.conteiner}>
        <View style={estilos.header}>

        </View>








      
      <View>
        <Text>Calcular sua nota!</Text>
        <TextInput
          style={estilos.display}
          value={nota1}
          onChangeText={setNota1}
          keyboardType='numeric'

        ></TextInput>

        <TextInput
          style={estilos.display}
          value={nota2}
          onChangeText={setNota2}
          keyboardType='numeric'

        ></TextInput>

        <TextInput
          style={estilos.display}
          value={nota3}
          onChangeText={setNota3}
          keyboardType='numeric'

        ></TextInput>

        <TextInput
          style={estilos.display}
          value={resultado}
          onChangeText={setResultado}
          keyboardType='numeric'

        ></TextInput>

        <TouchableHighlight style={estilos.btn}
          onPress={() => acao()}
        >
          <Text>Calcular</Text>
        </TouchableHighlight>
        </View>
      </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  conteiner:{
    padding:10
  },
  display:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
  },
  btn:{
    backgroundColor:'#aaa',
    padding:20,
  },
  txtBtn:{

  },
  header:{
    backgroundColor:'#101010',
    width:1000,
    height:40,
  }
});
