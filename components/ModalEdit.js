import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import { AntDesign } from '@expo/vector-icons'; 

const ModalAdd = ({inputTextComic,
                   setInputTextComic,
                   inputTextPercentage,
                   setInputTextPercentage,
                   editModalVisibility,
                   setEditModalVisibility,
                   handleFinished,
                   
                }) => {

    const handleClose = ()=>{
        setEditModalVisibility(false);
    }


  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisibility}
        onRequestClose={() => handleClose()}
      >
        <View style={styles.containerModal}>
          <View style={styles.backgroundModal}>
            <View>
              <Text style={styles.textTile}> Editar un comic</Text>
              <TextInput 
                    placeholder="Escribe un comic"
                    style={styles.textInput}
                    value={inputTextComic}
                    onChangeText={(text) => setInputTextComic(text)}
                    onSubmitingEditing={handleFinished}
                    autoFocus={true}
                    />
              <TextInput 
                    placeholder="Escribe procentaje de lectura"
                    style={styles.textInput}
                    value={inputTextPercentage}
                    onChangeText={(text) => setInputTextPercentage(text)}
                    onSubmitingEditing={handleFinished}
                    />
            </View>

            <View style={styles.containerButton}>
              <TouchableOpacity onPress={() => handleFinished() }>
                    <AntDesign name="checkcircleo" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableBtn} onPress={() => handleClose()}>
                <AntDesign name="closecircleo" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  touchableBtn:{
      paddingLeft: 30,
  },
  textInput:{
      backgroundColor:'white',
      borderRadius: 6,
      padding: 6,
      marginTop: 5,
  },
  textTile:{
      paddingBottom: 20,
      fontSize: 28,
      color: 'white',
      fontWeight: 'bold',
      fontStyle:'italic',
      letterSpacing: 1,
  },
  backgroundModal:{
    paddingTop: 50,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 30,
    backgroundColor:'#544545',
    borderRadius: 30
  },
  containerButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 50,
    paddingTop: 15,
  },
  containerModal: {
    paddingTop: "20%",
    alignItems: "center",
  },
  container: {
    paddingLeft: "40%",
    paddingRight: "50%",
  },
  radius: {
    backgroundColor: "white",
  },
  buttonText: {
    borderRadius: 5,
    alignItems: "center",
    color: "black",
    width: 120,
    height: 20,
  },
});

export default ModalAdd;
