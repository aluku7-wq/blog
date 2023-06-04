import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: url("/images/hero.jpg");
  height: 80vh;

  background-size: cover;
  .overlay {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--tertiary);
    .wrapper {
      max-width: var(--max-width);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      padding: 64px;

      .text {
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 24px;
        .site_name {
          color: var(--secondary);
          text-transform: capitalize;
          font-size: 32px;
          text-align: left;
        }
        .title {
          color: #fff;
          font-size: 16px;
          text-align: left;
        }
      }
      .image_wrapper {
        padding: 32px;
        display: flex;
        width: 50%;
        height: 100%;
        align-items: center;
        justify-content: right;

        img {
          width: 200px;
          height: auto;
          margin-right: 10%;
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    height: 60vh;
    min-height: 400px;
    .overlay {
      .wrapper {
        padding: 64px 32px;
        flex-direction: column;
        .text {
          flex-basis: 100%;
          align-items: center;
          .site_name {
            font-size: 24px;
            text-align: center;
          }
          .title {
            text-align: center;
          }
        }
        .image_wrapper {
          align-items: center;
          width: 100%;
          justify-content: center;
          img {
            width: 70%;
            margin: 0;
            max-width: 200px;
          }
        }
      }
    }
  }
`;
