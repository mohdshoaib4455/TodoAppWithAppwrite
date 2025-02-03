import { useContext } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import AuthContext from "./store/Context";
import { Outlet } from "react-router-dom";
import Loading from "./Components/Loading";

function App() {
  const { loading } = useContext(AuthContext);
  
  return (
    <>
      <Header />
      <Container>{loading ? <Loading /> : <Outlet />}</Container>
    </>
  );
}

export default App;
