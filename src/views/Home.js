import styled from 'styled-components/native';
import ViewStyled from '../generic/ViewGen';
import { gql, useQuery } from '@apollo/client'
import AppLoading from 'expo-app-loading';
import Thread from '../components/ThreadCard';
import { titleColor } from '../services/theme';
import ButtonGen from '../generic/ButtonGen';

const TitleStyled = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color:${titleColor};
`;

const ALL_THREADS = gql`{allThreads {id title}}`;

export default function Home() { 
    const { data, loading } = useQuery(ALL_THREADS);
    if (loading) { return <AppLoading /> }
    else {
        return (
            <ViewStyled>
                <TitleStyled>Temas activos</TitleStyled>
                {data.allThreads?.map(thread => <Thread title={thread.title} key={thread.id} id={thread.id} />)}
                <ButtonGen title="Nuevo"/>
            </ViewStyled>
        )
    }
}