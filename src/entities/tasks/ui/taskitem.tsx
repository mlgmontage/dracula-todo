import { Date } from "shared/ui";
import { Task } from "../model/tasks.types";

type Props = {
  task: Task;
};

export const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div className="flex-tasks w-full">
      <div style={{ flex: "1" }}>{task.text}</div>
      <div>
        {task.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
      <Date>{task.date}</Date>
    </div>
  );
};
