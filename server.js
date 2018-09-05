const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql:true
}));
app.listen(4000, () => {
    console.log('port 400 is listening');
});