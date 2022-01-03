import styled from 'styled-components/native';
import { useContext} from 'react';
import { NavigationContext } from '@react-navigation/core';
import { cardBoxColor,textColor } from '../services/theme';

const CardStyled = styled.View`
    background-color:${cardBoxColor};
    width:100%;
    height:10%;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    margin:2% 0;
`;
const TextStyled = styled.Text`
    padding:10%;
    font-weight: bold;
    color:${textColor};
    font-size:18px;
`;


export default function Thread({ title,id }) {
    const navigation = useContext(NavigationContext);
    return (
        <CardStyled >
            <TextStyled onPress={() => navigation.navigate('ThreadDetails',{id:id})}>{title}</TextStyled>
        </CardStyled>
    )
}