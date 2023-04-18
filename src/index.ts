import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

dotenv.config();

// MongoDB connection URL
const MONGO_URL = process.env.MONGO_URL || "";

/**
 * Apollo server instance
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/**
 * Mongoose connection
 */
try {
  mongoose.connect(MONGO_URL);

  console.log("MongoDB connection succesfull!");

  const serverListen = await server.listen({
    port: process.env.SERVER_PORT || 5000,
  });

  console.log(`Server running at ${serverListen.url}`);
} catch (error) {}
