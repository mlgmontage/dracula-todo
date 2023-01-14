import styled from "@emotion/styled";

type ButtonProps = {
  outlined?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  padding: 10px 20px;

  color: white;
  border: none;
  border-radius: var(--rounded);

  background-color: var(--purple-500);

  ${(props) =>
    props.outlined &&
    `
      color: var(--purple-500);
      background-color: transparent;
      border: 1px solid var(--purple-500);
  `}
`;
