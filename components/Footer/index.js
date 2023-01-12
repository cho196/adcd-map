import styled from "styled-components";

const Cont = styled.div`
  width: 100%;
  height: 100px;
  background: #71b8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export default function Header() {
  return (
    <Cont>
      <p>Created by Cheryl Ho, January 2023.</p>
    </Cont>
  );
}
