import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 25px 0 0 40px;
  flex: 1;

  h2 {
    font-size: 26px;
    padding-bottom: 5px;
  }

  span {
    font-size: 12px;
    color: #A4A4A4;
    opacity: 0.8;
  }

  a {
    color:  #308ECC;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 65%;
  margin: 30px auto;
  overflow-y:auto;
  overflow-x:hidden ;
  height:auto;
  max-height: 75vh;


  a {
    button {
    background: #16A085;
    border: 0;
    padding: 10px 30px;
    border-radius: 10px;
    color: #FFF;
    margin-bottom: 15px;
  }
  }
`;

export const List = styled.div`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin: 0px 20px 0 20px;

      button {
        background: none;
        border: 0;
      }

      img {
        width: 15px;
        margin-right: 15px;
      }
    }
  }
`;

export const Infor = styled.ul`
  background: #242424;
  padding: 15px;
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
`;

export const MoreInfor = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: -5px;

  h3 {
    padding: 10px 0 5px 0;
    color: #FFF;
    font-size: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 50%);
  gap: 10px;
  padding: 0 25px 25px 0px;
`;

export const Part = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    padding: 10px 0 10px 0;
    color: #1ABC9C;
    font-size: 14px;
  }
`;

export const Badge = styled.div``;

export const Visible = styled.div`
  background: #242424;
  border-radius: 0 0 10px 10px;
  margin: 0px 0px 15px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

`;
