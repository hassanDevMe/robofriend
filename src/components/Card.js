import React from 'react';


const Card = ({id ,name, email}) => {
    return (
        <div className='bg-light-green d-inline-block br3 pa3 ma8 grow bw2 shadow-5  text-center'>
            <img src={`https://robohash.org/${id}?200*200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;