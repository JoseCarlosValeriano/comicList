import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';


import Titulo from './Titulo'
import ListaComics from './ListaComics'
import ModalAdd from './ModalAdd'
import ModalEdit from './ModalEdit'

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

    const [listaComics, setListaComics] = useState(comicsIniciales);
    const [inputTextComic, setInputTextComic] = useState("");
    const [inputTextPercentage, setInputTextPercentage] = useState("");
    const [handleKey, setHandleKey] = useState("")
    const [addModalVisibility, setAddModalVisibility] = useState(false);
    const [editModalVisibility, setEditModalVisibility] = useState(false);
    const [comicAEditar, setComicAEditar] = useState([]);

    const handleAddComic = (comic) => {
        const todoComic = [...listaComics, comic];
        setListaComics(todoComic);
        setAddModalVisibility(false);
    }
    
    const handleEdit = (comicEditar) => {
        setEditModalVisibility(true);
        setInputTextComic(comicEditar.title);
        setInputTextPercentage(comicEditar.percentage);
        setHandleKey(comicEditar.key) 
        
        
    }

    const handleFinished = () => {
        const todosComics = [...listaComics];
        const comicIndex = listaComics.findIndex((comic) => comic.key === handleKey);
        todosComics.splice(comicIndex,1,{title: inputTextComic,
            percentage:inputTextPercentage,
            key: Math.random.toString()
           });
        setListaComics(todosComics);
        setEditModalVisibility(false);
        setInputTextComic("");
        setInputTextPercentage("");
        setHandleKey("");
    }



    return(
        <View style={styles.container}>
            <Titulo />
            <ModalAdd 
                inputTextComic={inputTextComic}
                setInputTextComic={setInputTextComic}
                inputTextPercentage={inputTextPercentage}
                setInputTextPercentage={setInputTextPercentage}
                addModalVisibility={addModalVisibility}
                setAddModalVisibility={setAddModalVisibility}
                handleAddComic={handleAddComic}
            />
            <ModalEdit 
                inputTextComic={inputTextComic}
                setInputTextComic={setInputTextComic}
                inputTextPercentage={inputTextPercentage}
                setInputTextPercentage={setInputTextPercentage}
                editModalVisibility={editModalVisibility}
                setEditModalVisibility={setEditModalVisibility}
                comicAEditar={comicAEditar}
                setComicAEditar={setComicAEditar}
                handleFinished={handleFinished}
                
            />
            <ListaComics
             listaComics={listaComics}
             handleEdit={handleEdit}
             
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
        height: '100%',
        width: '100%'
    },
    buttonText:{
        
        alignItems:'center',
        color:'black',
        backgroundColor: 'white',
        borderRadius: 2500,
        marginLeft: 120,
        width: 120,
        height: 20
    }
})

export default Home;