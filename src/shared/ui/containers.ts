import styled from "@emotion/styled";

export const Window = styled.div`
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

export const TaskRow = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid var(--gray-900);
  padding-inline: 20px;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--overlay);
`;
