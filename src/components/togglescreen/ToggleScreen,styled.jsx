import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  .wrapper {
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    .navigation {
      padding: 32px;
      display: flex;
      justify-content: flex-end;
      font-size: 32px;
      color: var(--primary);
    }
    .body {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 64px;
      padding: 64px;
      align-items: center;
      .group {
        width: fit-content;
        a {
          color: var(--primary);
          text-decoration: none;
          font-size: 18px;
          font-family: var(--aclonica);
        }
      }
    }
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
