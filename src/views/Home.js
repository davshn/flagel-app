import styled from 'styled-components/native';
import ViewStyled from '../generic/ViewGen';
import { gql, useQuery } from '@apollo/client'
import AppLoading from 'expo-app-loading';
import Thread from '../components/ThreadCard';

const ALL_THREADS = gql`
{allThreads {
  id
  title
}}
`;

export default function Home() { 
    const { data, loading } = useQuery(ALL_THREADS);
    if (loading) { return <AppLoading /> }
    else {
        return (
            <ViewStyled>
                {(data.allThreads).map(thread => <Thread title={thread.title} key={thread.id }/>)}
            </ViewStyled>
        )
    }
}