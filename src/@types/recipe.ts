export type Recipe = {
  name: string;
  description: string;
  createdAt: string;
  thumbsUp: number;
  thumbsDown: number;
};

export type RecipeInput = {
  name: string;
  description: string;
};
