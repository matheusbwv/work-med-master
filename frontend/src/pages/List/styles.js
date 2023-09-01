import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.div`
  h2 {
    font-size: 28px;
    padding-bottom: 5px;
  }

  span {
    font-size: 14px;
    color: #A4A4A4;
    opacity: 0.8;
  }
`;
export const Ficture = styled.div`
  img {
    width: 35%;
    margin: 0 0 10% 55%;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-around;

  form {
    background: #2A2A2B;
    box-shadow: 0px 3px 60px -2px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    color: #FFF;
    font-size: 16px;
    width: 20%;
    height: 220px;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 18px;
      align-self: flex-start;
      padding: 15px 0 0px 15px;
    }

    strong {
      font-size: 12px;
      color: #A4A4A4;
      align-self: flex-start;
      padding: 0px 0 0px 15px;
    }

    img {
      padding-top: 25px;
      width: 70%;
    }

    a {
      text-decoration: none;
      align-self: stretch;


      button {
        width: 100%;
        border-radius: 0 0 14px 14px;
        border: 0;
        padding: 10px 10px;
        background: green;
        color: #fff;
      }
    }

  }
`;
