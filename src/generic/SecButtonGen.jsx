import styled from 'styled-components/native';
import { secButtColor,secbuttextColor } from '../services/theme';

const ButtonStyled = styled.TouchableOpacity`
  background-color:${secButtColor};
  width: 84px;
  height: 34px;
  border-radius: 9px;
  elevation: 2;
  margin:5%;
`;
const TextStyled = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: ${secbuttextColor};
  padding:8%;
`;

export default function SecButtonGen({ title }) {
  return (
      <ButtonStyled>
          <TextStyled>{title}</TextStyled>
      </ButtonStyled>
  );
}
