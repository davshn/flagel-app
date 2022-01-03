import styled from 'styled-components/native';
import ViewStyled from '../generic/ViewGen';
import { gql, useQuery } from '@apollo/client'
import AppLoading from 'expo-app-loading';
import { Text } from 'react-native';
import Post from '../components/PostCard';

export default function ThreadDetails({ route }) { 
    const ID = route.params.id;
    const THREAD_POST = gql`{thread(id:${ID}){title}postsThread(threadId:${ID}){body id}}`;
    const { data, loading } = useQuery(THREAD_POST);
    
    if (loading) { return <AppLoading /> }
    else {
        return (
            <ViewStyled>
                <Text>{data.thread.title}</Text>
                {data.postsThread?.map(post => <Post body={post.body} key={post.id } />)}
            </ViewStyled>
        )
    }
}