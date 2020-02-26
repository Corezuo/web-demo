## graphiql 调试页面

> http://localhost:3000/graphql


**查询数据**

query

```
query {
  queryUser(id: 1) {
    name
  }
}
```

response

```
{
  "data": {
    "queryUser": {
      "name": "dazuo"
    }
  }
}
```

**新增数据**

query

```
mutation {
  createUser(input: {
    name: "dazuo",
    age: 22
  }) {
    name
    age
  }
}
```

response

```
{
  "data": {
    "createUser": {
      "name": "dazuo",
      "age": 22
    }
  }
}
```