import { useLocation } from "react-router-dom";

export const CategoryRibbon = () => {
  const { state } = useLocation();

  return <div>{state?.message}</div>;
};
