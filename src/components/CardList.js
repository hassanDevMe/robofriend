import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        robots.map((item, i) => {
        return <Card key={i} id={item.id} name={item.name} email={item.email}></Card>
      })
    );
}

 
export default CardList;