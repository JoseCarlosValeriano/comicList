import React from 'react';
import {Image, Text,View,StyleSheet, TouchableOpacity} from 'react-native';

const Comic = ({itemData}) => {
    return(
        <View style={styles.viewContainer}>
                <Image style={styles.img} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}/>
                <Text style={styles.texto}>Título: {itemData.item.title}</Text>
                <Text style={styles.texto}>Leído: {itemData.item.percentage}</Text>
                <View style={styles.rowButton}>
                <TouchableOpacity>
                    <Text style={styles.touchbttn}>Editar</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.touchbttn}>Eliminar</Text>
                </TouchableOpacity>
                </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    touchbttn:{
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 200,
        color:'black',
        alignItems: 'center'
    },
    viewContainer:{
        backgroundColor: 'grey',
        borderRadius:30,
        alignItems: 'center',
        marginTop: 20,
    },
    img:{
        marginTop: 20,
        width : 150,
        height : 150,
    },
    texto:{
        paddingTop:10,
        color: '#FFF',
        fontSize:20,
    }
})
export default Comic;