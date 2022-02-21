import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


import Titulo from './Titulo'
import ListaComics from './ListaComics'


const Home = () => {

    const comicsIniciales =[{
        title: 'Batman',
        percentage: '20%',
        key: Math.random().toString()
    },{
        title: 'Bob Esponja',
        percentage: '30%',
        key: Math.random().toString()
    },{
        title: 'Superman',
        percentage: '40%',
        key: Math.random().toString()
    }];

    const [listaComics, setListaComics] = useState(comicsIniciales)

    const handleAddComic = (comic) => {
        const todoComic = [...listaComics, comic];
        setListaComics(todoComic);
      }
    



    return(
        <View style={styles.container}>
            <Titulo />
            <View>
                <TouchableOpacity styles={styles.addButton}>
                    <Text style={styles.buttonText}> Añadir nuevo comic </Text>
                </TouchableOpacity>
            </View>
            <ListaComics comicsIniciales={comicsIniciales}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
        height: '100%',
        width: '100%'
    },
    addButton:{
        width: 60,
        height: 60,
    },
    buttonText:{
        color:'black',
        backgroundColor: 'white',
        borderRadius: 30,
        marginLeft: 120,
        width: '36%'
    }
})

export default Home;