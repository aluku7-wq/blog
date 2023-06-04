import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  color: var(--secondary);
  justify-content: center;
  box-shadow: #9082f514 0px 1px 2px 0px;
  .wrapper {
    padding: 16px 32px;
    max-width: var(--max-width);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 32px;
      display: flex;
      align-items: center;
      a {
        color: var(--secondary);
        text-decoration: none;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .links {
      display: flex;
      align-items: center;

      .navlinks {
        display: none;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        a {
          color: var(--secondary);
          text-decoration: none;
          font-family: var(--aclonica);
        }
      }
      .mobile_menu {
        display: flex;
        .icon {
          display: flex;
          width: 32px;
          flex-direction: column;
          height: 16px;
          align-items: center;
          justify-content: space-between;
          .bar1,
          .bar2 {
            background: var(--secondary);
            width: 80%;
            height: 3px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 767px) {
    .wrapper {
      .links {
        flex-basis: 60%;
        .navlinks {
          display: flex;
        }
        .mobile_menu {
          display: none;
        }
      }
    }
  }
`;
