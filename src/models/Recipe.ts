import { model, Schema } from "mongoose";

const recipeScheme = new Schema({
  name: String,
  description: String,
  createdAt: String,
  thumbsUp: Number,
  thumbsDown: Number,
});

export default model("Recipe", recipeScheme);
