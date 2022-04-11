import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TouchableOpacity ,TextInput } from 'react-native';

export default function App() {

const [nota1, setNota1]=useState('');
const [nota2, setNota2]=useState('');
const [nota3, setNota3]=useState('');
const [resultado, setResultado]=useState(0);

/*const acao=()=>{
  return setResultado(((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3 ).toFixed(2))
}
*/
function acaodobotao(){
  const calcular = (((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3 ).toFixed(2));
  
  if(calcular >= 7 ){
    alert('Você está aprovado!');
  } else if(calcular >= 5 && calcular < 7){
    alert('Você está na prova final!');
  } else if(calcular < 5){
    alert('Você está reprovado!');
  }

}




  return (
    <SafeAreaView style={estilos.conteiner}>








      
      <View>
        <Text>Calcular sua nota!</Text>
        <TextInput
          style={estilos.display}
          value={nota1}
          onChangeText={(nota1) => setNota1(nota1)}
          placeholder="Digite a primeira nota"
          keyboardType='numeric'

        ></TextInput>

        <TextInput
          style={estilos.display}
          value={nota2}
          onChangeText={(nota2) => setNota2(nota2)}
          placeholder="Digite a segunda nota"
          keyboardType='numeric'

        ></TextInput>

        <TextInput
          style={estilos.display}
          value={nota3}
          onChangeText={(nota3) => setNota3(nota3)}
          placeholder="Digite a terceira nota"
          keyboardType='numeric'

        ></TextInput>

        <TouchableOpacity 
          style={estilos.button}
          onPress={acaodobotao}
        >
          <Text style={estilos.buttonText}>Calcular</Text>
        </TouchableOpacity>
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
  button:{
    backgroundColor:'#aaa',
    padding:15,
    justifyContent: 'center',
    alignItems:'center',
    margin: 15,
    
  },
  buttonText:{
    color:'#FFF',
    fontSize:25,

  },
  header:{
    backgroundColor:'#101010',
    width:1000,
    height:40,
  }
});
