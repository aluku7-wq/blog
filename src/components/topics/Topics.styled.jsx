import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  .wrapper {
    width: 100%;
    padding: 64px 32px;
    display: flex;
    color: var(--secondary);
    max-width: var(--max-width);
    flex-direction: column;
    gap: 32px;
    align-items: center;
    .flex_container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 128px;

      .cad {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 32px;
        gap: 32px;
        padding: 32px;
        justify-content: center;
        background: linear-gradient(
          to right,
          rgb(35, 33, 46),
          #9082f539,
          rgb(35, 33, 46)
        );
        .header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h3 {
            font-size: 18px;
            color: #fff;
          }
        }
        p {
          color: #ffffffbe;
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
`;
