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
      <Item to="/">
        <Envelope /> Мои задачи
      </Item>
      <Item to="/important">
        <Star /> Важные
      </Item>
      <Item to="/completed">
        <Checkmark /> Выполненные
      </Item>
      <Item to="/deleted">
        <Trash /> Удаленные
      </Item>
    </Menu>
  );
};
