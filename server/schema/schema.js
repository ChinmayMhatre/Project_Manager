const { buildSchema, GraphQLObjectType, GraphQLString,GraphQLID, GraphQLSchema } = require("graphql");

const { projects, clients } = require("../sampleData");

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: {
                id: {
                    type: GraphQLID
                },
                resolve: (parent, args) => {
                    return clients.find(client => client.id === args.id);
                }
            }
        },

    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
});
