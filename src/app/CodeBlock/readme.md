npm install highlight.js

https://highlightjs.org/

```graphql
query BreadcrumbQuery($contextItem: String!, $language: String!) {
  # path can be an item tree path or GUID-based id
  item(path: $contextItem, language: $language) {
    ...on CodeBlock{
      code{
        value
      }
    }
  }
}
``
```
