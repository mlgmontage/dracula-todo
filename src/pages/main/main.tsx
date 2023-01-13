import { CategoryRibbon } from "entities/tasks/ui/categoryribbon";
import { Sidebar } from "features/tasks";
import { Window } from "shared/ui";

const Main = () => {
  return (
    <Window>
      <Sidebar />
      <div>
        <CategoryRibbon />
      </div>
    </Window>
  );
};

export default Main;
