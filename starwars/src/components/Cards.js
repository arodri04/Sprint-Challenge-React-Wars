import React from 'react';

import styled from "styled-components";

const CharCard = styled.div`
    padding: 25px;
    background-color: antiquewhite;
    margin:5px auto;
    width:20%;
    justify-items: center;
    border-radius: 15px;
`;

const Cards = props => {
    return (
        <CharCard>
            {props.char.name}
        </CharCard>
    )
}





export default Cards;