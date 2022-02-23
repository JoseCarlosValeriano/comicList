import React from 'react';
import {FlatList} from 'react-native';


import Comic from './Comic';

const ListaComics = ({listaComics,handleEdit}) => {
    return(
        <>
        <FlatList data={listaComics} renderItem={ itemData => (
          <Comic
            itemData={itemData}
            handleEdit={handleEdit}
          />
        )}
        extraData={listaComics}/>
        </>
    )
}



export default ListaComics;