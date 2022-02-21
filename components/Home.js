import React from 'react';
import {StyleSheet, View} from 'react-native';


import Titulo from './Titulo'


const Home = () => {


    



    return(
        <View style={styles.container}>
            <Titulo />
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