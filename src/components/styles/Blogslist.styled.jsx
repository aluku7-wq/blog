import styled from "styled-components";

export const Blogcontainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: var(--max-width);
    width: 100%;
    gap: 32px;
    margin: 32px 64px;
    h1 {
      color: var(--secondary);
      font-size: 24px;
      margin-bottom: 32px;
    }
    a {
      color: #fff;
      text-decoration: none;
      margin-left: 32px;
      font-family: var(--aclonica);
    }
    a:hover {
      color: var(--secondary);
    }
  }
  @media screen and (max-width: 720px) {
    .wrapper {
      margin: 24px;
      a {
        margin-left: 12px;
      }
    }
  }
`;
