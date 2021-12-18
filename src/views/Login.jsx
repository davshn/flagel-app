import styled from 'styled-components/native';
import { backgroundColor } from '../services/theme';
import ButtonGen from '../generic/ButtonGen';

const ViewStyled = styled.View`
  background-color:${backgroundColor};
  height:100%;
  padding:20%;
`
export default function Login() {
  return (
    <ViewStyled>
      <ButtonGen title="Acceder"/>
    </ViewStyled>
  );
}