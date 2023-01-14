import {
  Category,
  CategoryRibbon,
  filteredTasksSelector,
  setCategoryFilter,
  TaskItem,
} from "entities/tasks";
import { Sidebar } from "features/tasks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { TaskRow, Window } from "shared/ui";

const Main = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(filteredTasksSelector);
  const location = useLocation();
  const category = location.pathname.replace("/", "");

  // Setting category from url params
  useEffect(() => {
    if (category.length > 0) {
      dispatch(setCategoryFilter(category as Category));
    } else {
      dispatch(setCategoryFilter(undefined));
    }
  }, [category]);

  return (
    <Window className="flex-window">
      <Sidebar />
      <div className="w-full">
        <CategoryRibbon />
        {tasks?.map((task, i) => {
          return (
            <TaskRow key={i}>
              <TaskItem task={task} />
            </TaskRow>
          );
        })}
      </div>
    </Window>
  );
};

export default Main;
