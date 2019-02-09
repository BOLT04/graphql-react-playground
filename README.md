# graphql-react-playground
In this project I play around with these technologies in order to learn more

Essentially GraphQL is a query language that we can use to build an API. In fact, it is a specification by Facebook (I believe) and anyone can implement it in each language or platform. In this project I used the server library GraphQL.js which is a module in npm. In order to do this
we have to:
 * Define our **schema** -  type system representing our data model to use when validating and executing a query.
 * Define **root queries** - the top level type that represents all possible entry points into the GraphQL API from any client on the front end.
 * Define **relationships between types** - this allows us to query more data associated with a type that we are already querying. For example on this project I can query a certain book and also ask for its author, having access to any piece of data of that author. This is a great **advantage** of GraphQL compared to a RESTful API, where to achieve the same I have to make 2 requests instead of one simple query. I'd have to make a request to a endpoint to get the book, then another request to get the information of the author associated with that book.
 
 ## GraphQL query example
 ```graphql
 {
   author(id: 1) { # This is the selection set with an argument
     name,         # In here are the fields
     age
   }
 }
 ```
 
  ## GraphQL cool features
   * Typed: Helps checking if the query is valid. We can have various types including Enums
   * Alias field names (used when querying)
   * Fragment: Removes redundancy in queries
   * Introspection
   * Resolvers: One schema is composed of essentially resolver functions that handle the fetching process of data, meaning it can come from any datasource (database, cache, services, etc), which is very useful to create a facade.
 
 
 I also interacted with GraphiQL, using it to test out the code that I was doing and explore what is possible as far as queries go. This tool also allows me to easily check the docs on the GraphQL server that is being used. This way I have quick access to all the information I need.

Comparing GraphQL and a RESTful approach is still foreign to me at this stage, but for now it seems like GraphQL fits best when the client application needs to show some particular data and if we had a RESTfulL API in order to build a web page and display that data it'd require a lot of HTTP requests, since we can only make the second request after receiving the id or url info that comes in the response of the first request, when i could be easily solver with one GraphQL query. An example for the type of client that fits this scenario is a mobile client that can have a slow connection.

RESTful APIs are based on resources and follow very well the specification of the HTTP protocol in my opinion, so that makes it more based on the server side rather than the client.
