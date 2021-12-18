import styled from 'styled-components/native';
import { backgroundColor } from '../services/theme';

const StyledView = styled.View`
  background-color:${backgroundColor};
`
const StyledText = styled.Text`
  color: black;
`
export default function Login() {
  return (
    <StyledView>
    </StyledView>
  );
}