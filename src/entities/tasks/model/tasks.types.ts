export type Tag = "productivity" | "education" | "health" | "critial";

export type TaskType = "important" | "completed" | "archived" | "basic";

export type Task = {
  text: string;
  tags: Tag[];
  date: string;
  type: TaskType;
};

export type Tasks = Task[];
