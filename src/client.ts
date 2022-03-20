import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
  link: new HttpLink({
    uri: "https://api-us-east-1.graphcms.com/v2/cl0zfz1k64xi101xv8wi7adad/master",
  }),
});
