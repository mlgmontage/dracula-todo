import { SidebarContainer } from "shared/ui";
import { NewTask } from "../newtask/newtask";
import { CategoryBar } from "../categories/categorybar";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <NewTask />
      <CategoryBar />
    </SidebarContainer>
  );
};
