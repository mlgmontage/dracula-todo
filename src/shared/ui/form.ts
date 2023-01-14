import styled from "@emotion/styled";
import { Field } from "formik";

export const Input = styled(Field)`
  display: block;
  background-color: transparent;
  padding: 9px 12px;

  border: 1px solid var(--gray-900);
  border-radius: var(--rounded);

  margin-top: 8px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: var(--purple-500);
  }
`;

export const Textarea = styled(Field)`
  display: block;
  background-color: transparent;
  padding: 9px 12px;

  border: 1px solid var(--gray-900);
  border-radius: var(--rounded);

  margin-top: 8px;
  width: 100%;
  height: 150px;

  &:focus {
    outline: none;
    border-color: var(--purple-500);
    color: var(--purple-500);
  }
`;
