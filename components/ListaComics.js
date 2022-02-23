import React from 'react';
import {FlatList} from 'react-native';


import Comic from './Comic';

const ListaComics = ({listaComics,handleEdit,handleDelete}) => {
    return(
        <>
        <FlatList data={listaComics} renderItem={ itemData => (
          <Comic
            itemData={itemData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
        extraData={listaComics}/>
        </>
    )
}



export default ListaComics;