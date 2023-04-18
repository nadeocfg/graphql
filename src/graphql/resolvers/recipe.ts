import Recipe from "../../models/Recipe";
import { RecipeInput } from "../../@types/recipe";

export default {
  Query: {
    async recipe(_: undefined, { ID }: { ID: string }) {
      return await Recipe.findById(ID);
    },
    async getRecipes(_: undefined, { amount }: { amount: number }) {
      return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createRecipe(
      _: undefined,
      { recipeInput: { name, description } }: { recipeInput: RecipeInput }
    ) {
      const createdRecipe = new Recipe({
        name,
        description,
        createdAt: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0,
      });

      const res = await createdRecipe.save();

      return {
        id: res.id,
      };
    },

    async deleteRecipe(_: undefined, { ID }: { ID: string }): Promise<boolean> {
      const deleted = await Recipe.deleteOne({
        _id: ID,
      });

      return deleted.deletedCount === 1;
    },

    async editRecipe(
      _: undefined,
      {
        ID,
        recipeInput: { name, description },
      }: { ID: string; recipeInput: RecipeInput }
    ): Promise<boolean> {
      const edited = await Recipe.updateOne(
        {
          _id: ID,
        },
        {
          name,
          description,
        }
      );

      return edited.modifiedCount === 1;
    },
  },
};
