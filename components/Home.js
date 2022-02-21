import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';


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
            <ListaComics comicsIniciales={comicsIniciales}/>
            <View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
        height: '100%',
        width: '100%'
    }
})

export default Home;