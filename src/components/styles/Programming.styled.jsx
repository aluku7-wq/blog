import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: var(--max-width);
    padding: 64px 32px;
    gap: 32px;
    h1 {
      color: var(--secondary);
    }
    h3 {
      color: var(--secondary);

      font-size: 18px;
      span {
        color: #fff;
        font-family: var(--comfortaa);
      }
    }
    p {
      color: #ffffff65;
      font-size: 18px;
    }
    .grid {
      display: flex;
      margin-top: 64px;
      gap: 64px;
      flex-direction: column;
      .card {
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;

        img {
          width: 250px;
          height: auto;
        }
        .specs {
          display: flex;
          flex-direction: column;
          gap: 24px;

          h4 {
            font-family: var(--aclonica);
            color: var(--secondary);
          }
          .specs_grid {
            display: flex;
            flex-direction: column;
            .specs_card {
              display: flex;
              flex-direction: column;
              p {
                span {
                  color: #fff;
                  font-weight: 700;
                }
              }
            }
            .deals {
              margin-top: 40px;
              a {
                background: var(--secondary);
                color: #fff;
                text-decoration: none;
                padding: 8px 16px;
                border-radius: var(--border-radius);
              }
            }
            .reason {
              padding-top: 40px;
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  }
`;
