import styled from "@emotion/styled";

export const Window = styled.div`
  display: flex;
  width: 1200px;
  min-height: 500px;
  margin-inline: auto;
  margin-top: 80px;

  background-color: var(--bg);

  border: 1px solid var(--gray-900);
  border-radius: var(--rounded-lg);
`;

export const SidebarContainer = styled.div`
  width: 200px;
  border-right: 1px solid var(--gray-900);
`;
