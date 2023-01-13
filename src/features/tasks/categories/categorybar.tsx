import styled from "@emotion/styled";
import { Link, LinkProps, NavLink } from "react-router-dom";
import { Checkmark, Envelope, Star, Trash } from "shared/ui";

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ItemStyled = styled(NavLink)`
  display: block;
  display: flex;
  align-items: center;
  gap: 12px;

  padding-left: 20px;
  height: 40px;
  text-decoration: none;
  color: var(--gray-500);

  &.active {
    color: var(--purple-500);
    padding-left: 17px;
    border-left: 3px solid var(--purple-500);
  }
`;

const Item: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <ItemStyled
      {...props}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {children}
    </ItemStyled>
  );
};

export const CategoryBar = () => {
  return (
    <Menu>
      <Item to="/" state={{ message: "Мои задачи" }}>
        <Envelope /> Мои задачи
      </Item>
      <Item to="/important" state={{ message: "Важные" }}>
        <Star /> Важные
      </Item>
      <Item to="/completed" state={{ message: "Выполненные" }}>
        <Checkmark /> Выполненные
      </Item>
      <Item to="/deleted" state={{ message: "Удаленные" }}>
        <Trash /> Удаленные
      </Item>
    </Menu>
  );
};
