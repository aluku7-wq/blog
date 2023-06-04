import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  .icon {
    color: var(--secondary);
    font-size: 48px;
  }
  .box {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px var(--secondary) solid;
    border-bottom: 4px white solid;
  }
`;
