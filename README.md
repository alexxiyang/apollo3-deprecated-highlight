# apollo3-deprecated-highlight
Highlight the apollo graphql deprecated fields.

We know that even you mark a field in apollo-server as `@deprecated` the client-side won't be able to know it until execute introspection queries. This package is for showing the deprecations in the response so that the engineers can know which fields are deprecated when they are developing.

> **_NOTE:_**  This package is only for [apollo 3](https://www.npmjs.com/package/apollo-server). If you are using apollo 4 please use [apollo-deprecated-highlight](https://www.npmjs.com/package/apollo-deprecated-highlight)

## How to use

```
import { ApolloDeprecatedHighlight } from 'apollo-deprecated-highlight';

// add ApolloDeprecatedHighlight() as plugin
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloDeprecatedHighlight()],
    ...
});
```
Then it will add `deprecations` to `extensions` of graphql respons. The response format will be

```
{
    "data": {...},
    "extensions": {
        "deprecations": [
            <deprecation1>,
            <deprecation2>,
            ...
        ]
    }
}
```
## Example
```
"data": {...},
"extensions":
    {
        "deprecations":
        [
            {
                "field": "timerange",
                "reason": "timerange is retired. Please use timerangeInSecond"
            },
            {
                "field": "height",
                "reason": "height is retired. Please use heightInCM"
            },
        ]
    }
```
