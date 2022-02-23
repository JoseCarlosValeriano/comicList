import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Comic = ({ itemData, handleEdit }) => {
  return (
    <View style={styles.viewContainer}>
      <Image
        style={styles.img}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text style={styles.texto}>Título: {itemData.item.title}</Text>
      <Text style={styles.texto}>Leído: {itemData.item.percentage}</Text>
      <View style={styles.rowButton}>
        <TouchableOpacity onPress={() => handleEdit(itemData.item)}>
          <AntDesign name="edit" size={30} color="white" style={styles.touchbttn}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <AntDesign name="delete" size={30} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowButton: {
    flexDirection: "row",
    marginTop: 8,
  },
  touchbttn: {
    alignItems: "center",
    marginRight: 10,
  },
  viewContainer: {
    backgroundColor: "grey",
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  img: {
    marginTop: 20,
    width: 150,
    height: 150,
  },
  texto: {
    borderRadius: 30,
    paddingTop: 10,
    color: "#FFF",
    fontSize: 20,
  },
});
export default Comic;
