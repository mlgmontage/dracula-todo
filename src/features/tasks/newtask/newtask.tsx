import { toggleTaskModal } from "entities/modals";
import { useDispatch } from "react-redux";
import { Button } from "shared/ui";

export const NewTask = () => {
  const dispatch = useDispatch();

  return (
    <Button
      style={{ margin: "20px" }}
      onClick={() => dispatch(toggleTaskModal())}
    >
      Новая задача
    </Button>
  );
};
