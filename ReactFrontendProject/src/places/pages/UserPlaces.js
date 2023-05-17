import React from 'react';
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Victoria Memorial',
        description:'Elegant, domed, white marble museum, opened in 1921, housing displays on the history of Kolkata.',
        imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2OnJX7tCZKOmmPUY5tvd2X6sd0qoWGpiCs_DA-og9r3rcVQp0vzdQMX_e3vySuJiCwk&usqp=CAU',
        address:'Victoria Memorial Hall, 1, Queens Way, Maidan, Kolkata, West Bengal 700071',
        location:{
            lat:22.5448082,
            lng:88.3403691
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Victoria Memorial',
        description:'Elegant, domed, white marble museum, opened in 1921, housing displays on the history of Kolkata.',
        imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2OnJX7tCZKOmmPUY5tvd2X6sd0qoWGpiCs_DA-og9r3rcVQp0vzdQMX_e3vySuJiCwk&usqp=CAU',
        address:'Victoria Memorial Hall, 1, Queens Way, Maidan, Kolkata, West Bengal 700071',
        location:{
            lat:22.5448082,
            lng:88.3403691
        },
        creator:'u2'
    },
]

const UserPlaces = props => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place)=>{
    return place.creator === userId;
  });
  return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;