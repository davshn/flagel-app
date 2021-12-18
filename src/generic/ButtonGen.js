import styled from 'styled-components/native';
import { buttonColor,buttonShadowColor,buttontextColor } from '../services/theme';

const ButtonStyled = styled.TouchableOpacity`
  background-color:${buttonColor};
  width: 84px;
  height: 34px;
  border-radius: 9px;
  box-shadow: 0px 2px 6px ${buttonShadowColor};
`;
const TextStyled = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: ${buttontextColor};
  padding:10%;
`;

export default function ButtonGen({ title }) {
  return (
      <ButtonStyled>
          <TextStyled>{title}</TextStyled>
      </ButtonStyled>
  );
}
