import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

const Ribbon = styled.div`
  padding: 20px;
  border-block: 1px solid var(--gray-900);
`;

export const CategoryRibbon = () => {
  const { state } = useLocation();

  return <Ribbon>{state?.message}</Ribbon>;
};
