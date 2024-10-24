import { useRef } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #f28e1c;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d47413;
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const List = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
  width: 80%;
`;

const Image = styled.img`
  max-width: 600px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <Nav>
        <Button onClick={() => scrollToIndex(0)}>Cake-1</Button>
        <Button onClick={() => scrollToIndex(1)}>Cake-2</Button>
        <Button onClick={() => scrollToIndex(2)}>Cake-3</Button>
      </Nav>
      <ListContainer>
        <List ref={listRef}>
          <li>
            <Image
              src="https://caketalk.ae/wp-content/uploads/2024/02/Ribbon-Vintage-Cake-Birthday-Cake.jpeg"
              alt="Cake-1"
            />
          </li>
          <li>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJjr18IwpSuWEFGkImCZdLmIgonZ1cC0b97OABbje4dL_7Sb3goP2t-VHcQdOf5m8Klw&usqp=CAU"
              alt="Cake-2"
            />
          </li>
          <li>
            <Image
              src="https://i.pinimg.com/736x/4f/ab/65/4fab65674dbb4c212368210421c5e7ff.jpg"
              alt="Cake-3"
            />
          </li>
        </List>
      </ListContainer>
    </>
  );
}
