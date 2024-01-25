import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, Button } from 'react-native';
import React, { Component } from 'react';
import bombaIcon from './src/image/bombaIcon.png';
import bombaIconResult from './src/image/resultImage.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAlcool: '',
      inputGasolina: '',
      modalVisible: false,
      resultado: '',
    }

    this.entrar = this.entrar.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  entrar() {
    this.setState({ modalVisible: true })
    this.setState({ resultado: (this.state.inputAlcool / this.state.inputGasolina > 0.7 ? 'Álcool' : 'Gasolina') })
  }

  fechar(visible) {
    this.setState({ modalVisible: visible })
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
          <Text style={styles.textInput}> Gasolina (preço por litro): </Text>
          <TextInput
            style={styles.input}
            value={this.state.inputGasolina}
            onChangeText={(number) => this.setState({ inputGasolina: number })}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
          />
          <Text style={styles.textInput}> Álcool (preço por litro): </Text>
          <TextInput
            style={styles.input}
            value={this.state.inputAlcool}
            onChangeText={(number) => this.setState({ inputAlcool: number })}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
          />

          <TouchableOpacity style={styles.botaoCalcula}
            onPress={() => this.entrar()}>
            <Text style={styles.textBotao}> Calcular </Text>
          </TouchableOpacity>

          <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
            <View style={styles.modal}>
              <Image
                style={styles.imageResult}
                source={bombaIconResult}
              />
              <Text style={styles.textoModal}>  Compensa usar {this.state.resultado} </Text>
              <Text style={styles.textResult}> Com os Preços</Text>
              <Text style={styles.textInputResult}> Gasolina: R$ {this.state.inputGasolina}</Text>
              <Text style={styles.textInputResult}> Álcool: R$ {this.state.inputAlcool}</Text>
              <TouchableOpacity style={styles.botaoModal}
                onPress={() => this.fechar(false)}>
                <Text style={styles.textBotaoResultado}> Calcular Novamente </Text>
              </TouchableOpacity>
            </View>
          </Modal>

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
  imageBomba: {
    borderRadius: 15,
    alignSelf: 'center'
  },
  imageResult: {
    marginTop: 20,
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
  textResult: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 40
  },
  textInputResult: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',

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
  botaoCalcula: {
    backgroundColor: '#f75145',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 200,
    alignSelf: 'center',
  },
  textBotao: {
    fontSize: 20,
    color: 'white',
    marginRight: 15,
    alignSelf: 'center'
  },
  textBotaoResultado:{
    marginTop: 10,
    fontSize: 20,
    color: 'orange',
    marginRight: 15,
    alignSelf: 'center',
  },
  modal: {
    backgroundColor: '#2b2727',
    width: '100%',
    height: '100%',
    margin: 50,
    alignSelf: 'center',
    borderRadius: 15
  },
  textoModal: {
    marginTop: 30,
    color: '#18ed26',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 40
  },
  botaoModal: {
    marginTop: 40,
    width: 230,
    height: 50,
    borderRadius: 15,
    borderColor: 'orange',
    borderWidth: 2,
    alignSelf:'center'
  }
});
