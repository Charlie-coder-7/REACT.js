import React from 'react'
import Upper from './Upper';
import Lower from './Lower';

const Card = ({cardData}) => {
    console.log(cardData.username);
    
  return (
    <>
    <Upper/>
    <Lower/>
    </>
  );
}

export default Card