import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-top: #705ef513 1px solid;
  margin-top: 24px;
  .wrapper {
    max-width: var(--max-width);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 32px;
    gap: 32px;

    .links {
      display: flex;
      flex-direction: column;
      gap: 24px;
      a {
        color: var(--secondary);
        text-decoration: none;
        font-family: var(--aclonica);
      }
    }
    .social {
      font-size: 24px;
      display: flex;
      gap: 64px;
      a {
        color: var(--secondary);
        text-decoration: none;
      }
    }
  }
  @media (min-width: 767px) {
    .wrapper {
      .links {
        flex-direction: row;
      }
    }
  }
  @media (min-width: 900px) {
    .wrapper {
      flex-direction: row;
      justify-content: space-between;
      .links {
        flex-direction: row;
      }
    }
  }
`;
