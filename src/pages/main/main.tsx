import { CategoryRibbon, TaskItem, tasksSelector } from "entities/tasks";
import { Sidebar } from "features/tasks";
import { useSelector } from "react-redux";
import { TaskRow, Window } from "shared/ui";

const Main = () => {
  const tasks = useSelector(tasksSelector);

  return (
    <Window className="flex-window">
      <Sidebar />
      <div className="w-full">
        <CategoryRibbon />
        {tasks.map((task) => {
          return (
            <TaskRow>
              <TaskItem task={task} />
            </TaskRow>
          );
        })}
      </div>
    </Window>
  );
};

export default Main;
