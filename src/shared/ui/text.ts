import styled from "@emotion/styled";
import { Tag } from "entities/tasks";

export const Date = styled.small`
  color: var(--gray-800);
`;

type BadgeProps = {
  type: Tag;
};

export const Badge = styled.small<BadgeProps>`
  font-weight: 600;
  margin-inline: 5px;
  border-radius: 50vh;
  padding: 3px 9px;

  ${(props) =>
    props.type === "productivity" &&
    `
      color: var(--green-500);
      background-color: var(--green-100);
    `}
`;
