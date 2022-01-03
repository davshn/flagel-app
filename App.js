import { Provider } from 'react-redux';
import {store} from './src/stateManagement/store'; 
import Root from './src/Root';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flagel-api.herokuapp.com/',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Root />
        </ApolloProvider>
      </Provider>
    </>
  );
}