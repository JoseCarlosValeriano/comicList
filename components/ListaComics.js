import React from 'react';
import {FlatList} from 'react-native';


import Comic from './Comic';

const ListaComics = ({comicsIniciales}) => {
    return(
        <>
        <FlatList data={comicsIniciales} renderItem={ itemData => (
          <Comic
            itemData={itemData}
          />
        )}/>
        </>
    )
}



export default ListaComics;