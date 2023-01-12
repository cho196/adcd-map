import styled from "styled-components";

const Cont = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 2px solid #26445e;
`;

const Button = styled.a`
  height: 3rem;
  font-size: 16pt;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  border: 3px solid #71b8e8;
  :hover {
    color: white;
    background-color: #71b8e8;
  }
`;

export default function Header() {
  return (
    <Cont>
      <h1>Vancouver's Expo Line</h1>
      <Button href="https://www.translink.ca/schedules-and-maps/skytrain?page=1#expo-line">
        Learn More
      </Button>
    </Cont>
  );
}
