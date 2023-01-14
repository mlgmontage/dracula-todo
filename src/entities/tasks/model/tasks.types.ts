export type Tag = "productivity" | "education" | "health" | "critial";

export type Category = "important" | "completed" | "deleted" | "basic";

export type Task = {
  text: string;
  tags: Tag[];
  date: string;
  category: Category;
};

export type Tasks = Task[];

export type TaskFilter = {
  byCategory?: Category;
  byTag?: Tag;
};
