const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

// 定义Schema，查询和类型
const schema = buildSchema(`
    type Query {
        queryUser(id: Int): User
    }

    type User {
        name: String
        age: Int
    }

    type Mutation {
        createUser(input: UserInput): User
    }

    input UserInput {
        name: String
        age: Int
    }
`);

// 数据库
const fackDb = {};

// 定义查询对应的处理器
const root = {
    queryUser({id}) {
        const obj = {
            1: {
                name: "dazuo",
                age: 23
            },
            2: {
                name: "wang",
                age: 22
            }
        };
        return obj[id];
    },
    createUser({input}) {
        fackDb[input.name] = input;
        return fackDb[input.name];
    }
};

const app = express();

app.use('/graphql', graphqlHttp({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
console.log("服务器启动，访问地址：http://localhost:3000/graphql");
app.listen(3000);