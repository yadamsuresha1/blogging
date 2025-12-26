import { Container, Stack } from "react-bootstrap";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import Body from "./components/Body";

const App = () => {
  const posts = [
    {
      id: 1,
      text: "Hello, world!",
      timestamp: "a minute ago",
      author: {
        username: "susan",
      },
    },
    {
      id: 2,
      text: "Second post",
      timestamp: "an hour ago",
      author: {
        username: "john",
      },
    },
  ];

  return (
    <Container fluid className="App">
      <Header />
      <Body sidebar>
        <Posts />
      </Body>
    </Container>
  );
};

export default App;
