import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: var(--max-width);
    padding: 64px 32px;
    gap: 32px;
    h1 {
      color: var(--secondary);
    }
    h2 {
      color: #fff;
    }
    h3 {
      color: var(--secondary);
      display: flex;
      font-size: 18px;
      min-width: 200px;
      gap: 8px;
      span {
        color: #fff;
        font-family: var(--comfortaa);
      }
      .first {
        color: var(--secondary);
      }
    }
    p {
      color: #ffffffae;
      font-size: 18px;

      span {
        color: var(--secondary);
        margin: 0 12px;
      }
    }
    .grid {
      display: flex;
      flex-direction: column;
      gap: 32px;
      .card {
        display: flex;
        flex-direction: column;
        gap: 24px;
        background: linear-gradient(
          to right,
          rgb(35, 33, 46),
          #9082f539,
          rgb(35, 33, 46)
        );
        padding: 32px 0;
        border-radius: 8px;
        h4 {
          color: #fff;
        }
        .card_container {
          display: flex;
          gap: 32px;
          align-items: flex-start;
          .image {
            width: 100%;
            max-width: 400px;
            background-color: #ffffff21;
            display: flex;
            justify-content: center;
            border-radius: 16px;
            padding: 32px;
            height: fit-content;
            img {
              width: 80%;
              height: auto;
            }
          }
          .text {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-top: 64px;
            a {
              background: var(--secondary);
              font-size: 14px;
              padding: 8px 16px;
              border-radius: 4px;
              text-decoration: none;
              color: #fff;
              width: fit-content;
              font-style: bold;
            }
            h4 {
              margin-top: 32px;
            }
            p {
              display: flex;
              span {
                color: #ffffffae;
                margin: 8;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    .body {
      .grid {
        .card {
          .card_container {
            flex-direction: column;
            .image {
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
