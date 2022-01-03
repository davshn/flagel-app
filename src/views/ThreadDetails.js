import styled from 'styled-components/native';
import ViewStyled from '../generic/ViewGen';
import { gql, useQuery } from '@apollo/client'
import AppLoading from 'expo-app-loading';
import Post from '../components/PostCard';
import { titleColor } from '../services/theme';
import ButtonGen from '../generic/ButtonGen';

const TitleStyled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: justify;
  color:${titleColor};
`;

export default function ThreadDetails({ route }) { 
    const ID = route.params.id;
    const THREAD_POST = gql`{thread(id:${ID}){title}postsThread(threadId:${ID}){body id}}`;
    const { data, loading } = useQuery(THREAD_POST);
    
    if (loading) { return <AppLoading /> }
    else {
        return (
            <ViewStyled>
                <TitleStyled>{data.thread.title}</TitleStyled>
                {data.postsThread?.map(post => <Post body={post.body} key={post.id} />)}
                <ButtonGen title="Nuevo"/>
            </ViewStyled>
        )
    }
}