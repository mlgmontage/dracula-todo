import { SidebarContainer } from "shared/ui";
import { NewTask } from "../newtask/newtask";
import { CategoryBar } from "../categories/categorybar";
import { Tags } from "..";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <NewTask />
      <CategoryBar />
      <Tags />
    </SidebarContainer>
  );
};
