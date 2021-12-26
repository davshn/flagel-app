import flame from '../../assets/images/flame.png';
import { useDispatch, useSelector } from "react-redux";
import { setDarkModeOn } from "../stateManagement/actions/darkModeActions";
import { setDarkModeOff } from "../stateManagement/actions/darkModeActions";
import styled from 'styled-components/native';

const TochableImage = styled.TouchableOpacity`
  margin:10%;

`;

const ImageStyled = styled.Image`
`;
export default function DarkModeButton(){
    const dispatch = useDispatch();
    const mode = useSelector(state => state.darkModeReducer.darkMode);   
    
    function darkModeSet() {                                         
        if(mode===false){dispatch (setDarkModeOn());}
        else{dispatch (setDarkModeOff());}
    }
    return (
      <TochableImage onPress={darkModeSet}>
          <ImageStyled source={flame} resizeMode='contain'/>
      </TochableImage>
    )

}