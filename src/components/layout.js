import styled from "@emotion/styled";

export const Container = styled.main`
  height: calc(100vh - 40px);
  /* width: 100%; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  @media (min-width: 1024px) {
    width: 1000px;
    padding: 1rem;
  }
`;

export const Layout = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  @media (min-width: 1000px) {
    font-size: 2rem;
  }
`;

export const Card = styled.div`
  min-height: 300px;
  width: 600px;
  max-width: 100%;
  background-color: #fff;
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.color ? props.color : "#fff")};
  transition: all 0.3s ease;
  .quote-marks {
    font-size: 4rem;
    line-height: 1;
    font-family: "Coustard", serif;
  }

  .author {
    margin-top: 10px;
  }

  h2 {
    font-size: 2.5rem;
  }
  .author {
    font-size: 1.2rem;
    margin-top: 2rem;
    color: #000;
  }
  hr {
    height: 5px;
    width: 30%;
    margin: 1rem auto 0 auto;
    background-color: #ddd;
    border-radius: 2rem;
    border: none;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  color: #fff;
  margin-top: 40px;
`;

export const CardFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 44px;
  margin-top: 1rem;

  button {
    padding: 1rem;
    border-radius: 2rem;
    border-color: ${(props) => (props.color ? props.color : "#000")};
    color: ${(props) => (props.color ? props.color : "#000")};
    width: 120px;
    outline: none;
    background-color: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
    :hover {
      background-color: ${(props) => (props.color ? props.color : "#000")};
      color: #fff;
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : "#000")};
  }
  span {
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const CircularCard = styled.div`
  min-height: 300px;
  width: 300px;

  background-color: #fff;
  border-radius: 50%;
  padding: 0rem;
  transition: all 0.3s ease;
  overflow: hidden;

  > div > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform-origin: center center;
    span {
      position: absolute;
      font-size: 2rem;
    }
    svg {
      height: 100%;
      width: 100%;
    }
  }
`;
