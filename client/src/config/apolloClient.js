import ApolloClient, { createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4200/graphql'
});

const client = new ApolloClient({ networkInterface });

export default client;