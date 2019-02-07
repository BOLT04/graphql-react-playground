# graphql-react-playground
In this project I play around with these technologies in order to learn more

Essentially GraphQL is a query language that we can use to build an API. In order to do this
we have to:
 * Define our **schema** -  type system representing our data model to use when validating and executing a query.
 * Define **root queries** - the top level type that represents all possible entry points into the GraphQL API from any client on the front end.
 * Define **relationships between types** - this allows us to query more data associated with a type that we are already querying. For example on this project I can query a certain book and also ask for its author, having access to any piece of data of that author. This is a great **advantage** of GraphQL compared to a RESTful API, where to achieve the same I have to make 2 requests instead of one simple query. I'd have to make a request to a endpoint to get the book, then another request to get the information of the author associated with that book.
 
 I also interacted with GraphiQL, using it to test out the code that I was doing and explore what is possible as far as queries go. This tool also allows me to easily check the docs on the GraphQL server that is being used. This way I have quick access to all the information I need.
