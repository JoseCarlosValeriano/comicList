import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Titulo = () => {

    return(
        <>
        <Text style={styles.headerTitle}>Lista de Comics</Text>
        </>
    )

}

const styles = StyleSheet.create({
    headerTitle:{
        color: 'white',
        paddingTop: 50,
        fontSize: 35,
        letterSpacing:1,
        fontStyle: 'italic',
    }
});

export default Titulo;