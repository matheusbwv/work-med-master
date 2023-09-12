import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 70px 0 70px;

  overflow-y:auto;
  overflow-x: hidden;
  height:auto;
  width: 100%;
  max-height: 100vh;

  color: #FFF;


  img {
    width: 20px;
    border-radius: 50%;
    margin: 5px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #FFF;

    p {
      padding-top: 20px;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UniqGrafic = styled.div`
  width: 100%;
  background: #2b2b2b;
  color: #FFF;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  margin: 10px 5px 10px 0;
  border-radius: 5px;
  /* box-shadow: 5px; */

  background: #2b2b2b;
  color: #FFF;
`;
