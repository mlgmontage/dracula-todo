import styled from "@emotion/styled";
import { setTagFilter, Tag, tasksFilterSelector } from "entities/tasks";
import { useDispatch, useSelector } from "react-redux";
import { GreenDot, OrangeDot, PurpleDot, RedDot } from "shared/ui";

const TagRow = styled.div`
  cursor: pointer;
  height: 45px;
  border-radius: var(--rounded);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  margin-right: 10px;
  gap: 10px;

  &.active {
    outline: 1px solid var(--purple-500);
  }
`;

export const Tags = () => {
  const dispatch = useDispatch();
  const { byTag } = useSelector(tasksFilterSelector);

  // tag.byTag
  const toggle = (tag: Tag) => dispatch(setTagFilter(tag));

  return (
    <div style={{ marginLeft: "22px" }}>
      <div style={{ marginBlock: "20px" }}>Тэги</div>

      <TagRow
        className={byTag === "productivity" ? "active" : ""}
        onClick={() => toggle("productivity")}
      >
        <PurpleDot /> Продуктивность
      </TagRow>
      <TagRow
        className={byTag === "education" ? "active" : ""}
        onClick={() => toggle("education")}
      >
        <GreenDot /> Образование
      </TagRow>
      <TagRow
        className={byTag === "health" ? "active" : ""}
        onClick={() => toggle("health")}
      >
        <OrangeDot /> Здоровье
      </TagRow>
      <TagRow
        className={byTag === "critial" ? "active" : ""}
        onClick={() => toggle("critial")}
      >
        <RedDot /> Срочно
      </TagRow>
    </div>
  );
};
