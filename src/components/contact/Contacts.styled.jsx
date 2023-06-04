const { default: styled } = require("styled-components");

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: url("/images/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  .overlay {
    background-color: var(--tertiary);
    width: 100%;
    display: flex;
    justify-content: center;
    .wrapper {
      max-width: var(--max-width);
      padding: 64px 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      width: 100%;
      h3 {
        font-family: var(--aclonica);
        color: #fff;
        font-size: 18px;
        span {
          color: var(--secondary);
        }
      }
      .contacts {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 32px 0;
        .group {
          display: flex;
          align-items: center;
          gap: 32px;

          .icon {
            color: var(--secondary);
            font-size: 24px;
          }
          p {
            font-family: var(--poppins);
          }
        }
      }
      p {
        color: #ffffffc5;
        font-family: var(--aclonica);
      }
      .form {
        justify-content: center;
        width: 100%;
        height: 320px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        background-color: #ffffff22;
        padding: 32px;
        border-radius: var(--border-radius);
        gap: 24px;
        align-items: center;
        .warning {
          color: #e05555;
        }
        input,
        button {
          padding: 8px;
          display: flex;
          align-items: center;
          border-radius: var(--border-radius);
          background-color: #ffffff6e;
          border: none;
          width: 100%;
          outline: none;
        }
        input {
          color: #ffff;
          font-size: 18px;
        }
        input::placeholder {
          color: #ffffff7b;
          padding: 8px;
        }
        button {
          width: 200px;
          display: flex;
          justify-content: center;
          background: var(--secondary);
          font-weight: 700;
          font-size: 18px;
          color: var(--primary);
        }
      }
    }
  }
`;
