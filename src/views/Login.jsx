import styled from 'styled-components/native';
import { titleColor,textColor } from '../services/theme';
import ButtonGen from '../generic/ButtonGen';
import SecButtonGen from '../generic/SecButtonGen';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import TextStyled from '../generic/TextGen';
import ViewStyled from '../generic/ViewGen';
import DarkModeButton from '../generic/DarkModeButton';

const TitleStyled = styled.Text`
  padding:15% 0 0 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color:${titleColor};
`;

const InputStyled = styled.TextInput`
  width:80%;
  color:${textColor};
`;

const FormStyled = styled.View`
  border-bottom-width:1px;
  border-bottom-color:#999999;
  margin:5% 0;
  width:100%;
  display:flex;
  flex-direction: row;
  align-items:center;
`;

const SectionStyled = styled.View`
  margin:15% 0;
  align-items:center;
`

export default function Login({navigation}) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <ViewStyled>
      <TitleStyled style={{ fontFamily: 'Deutch' }}>Flagelante Feliz Club</TitleStyled>
      <DarkModeButton/>
      <FormStyled>
        <AntDesign name="user" size={24} color="gray"/>
        <InputStyled value={user} onChangeText={setUser} placeholder="Usuario" placeholderTextColor='gray' />
      </FormStyled>
      <FormStyled>
        <AntDesign name="lock" size={24} color="gray" />
        <InputStyled value={password} onChangeText={setPassword} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
      </FormStyled>
      <SectionStyled>
        <ButtonGen title="Acceder" onPress={() => navigation.navigate('Home')} />
        <TextStyled style={{ color: "red" }} onPress={() => navigation.navigate('ForgotPassword')}>Olvidaste tu contraseña</TextStyled>
      </SectionStyled>
      <SectionStyled>
        <TextStyled style={{ color: "#999999" }}>¿No tienes una cuenta?</TextStyled>
        <SecButtonGen title="Registrate" onPress={() => navigation.navigate('CreateAccount') }/>
      </SectionStyled>
    </ViewStyled>
  );
}