import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import bombaIcon from './src/image/bombaIcon.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAlcool: 0,
      inputGasolina: 0,
    }
  }

  calculaPreco(){
    
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.areaTitulo}>
          <Image
            style={styles.imageBomba}
            source={bombaIcon}
          />
          <Text style={styles.textTiulo}> Qual a opção mais econômica? </Text>
        </View>
        <View style={styles.areaInput}>
          <Text style={styles.textInput}> Álcool (preço por litro): </Text>
          <TextInput
            style={styles.input}
            value={this.state.inputGasolina}
            onChange={(text) => this.setState({ inputGasolina: text })}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
          />
          <Text style={styles.textInput}> Gasolina (preço por litro): </Text>
          <TextInput
            style={styles.input}
            value={this.state.inputAlcool}
            onChange={(text) => this.setState({ inputAlcool: text })}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
          />

          <TouchableOpacity style={styles.botaoCalcula} onPress={() => this.calculaPreco()}>
            <Text style={styles.textBotao}> Calcular </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaTitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%'
  },
  areaInput: {
    
  },
  imageBomba: {
    borderRadius: 15,
    alignSelf: 'center'
  },
  textTiulo: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 40,
  },
  textInput: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'baseline',
    marginRight: 15
  },
  input: {
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 350
  },
  botaoCalcula:{
    backgroundColor: '#f75145',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 200,
    alignSelf:'center',
  },
  textBotao:{
    fontSize: 20,
    color: 'white',
    marginRight: 15,
    alignSelf:'center'
  }
});
