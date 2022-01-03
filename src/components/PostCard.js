import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { cardBoxColor,textColor } from '../services/theme';

const CardStyled = styled.View`
    background-color:${cardBoxColor};
    width:100%;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    margin:2% 0;
`;

const TextStyled = styled.Text`
    padding:10%;
    color:${textColor};
    font-size:18px;
`;

export default function PostCard({ body }) {
    return (
        <CardStyled >
            <TextStyled>{body}</TextStyled>
        </CardStyled>
    )
}