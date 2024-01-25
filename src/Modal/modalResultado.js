import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import React, { Component } from 'react';

export default class ModalResultado extends Component {

    render() {
        return (
            <View style={styles.modal}>
                <Text style={styles.texto}>  Compensa usar {this.props.calculaPreco} </Text>
                <Button style={styles.botao} title="Fechar" onPress={this.props.fechar} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: '#2b2727',
        width: '100%', 
        height: '100%', 
        margin: 50,
        alignSelf:'center',
        marginTop:'50%',
        borderRadius: 15
    },
    texto: {
        color: '#FFF', 
        fontSize: 32,
        textAlign:'center',
        marginBottom: '90%',
        marginTop:15
    },
    botao:{
        width:70,
        height:70,
        borderRadius: 15
    }
})

