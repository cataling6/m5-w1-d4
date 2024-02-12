import MyNav from "./Components/MyNav/MyNav";
import MyFooter from "./Components/MyFooter/MyFooter"
import { Welcome } from "./Components/Welcome/Welcome";
import { Main } from "./Components/Main/Main";

 
function App() {
  return (
   <>
      <Welcome/>
      <MyNav link1="Home" link2="About" link3="Contact" Logo />
      <Main/>
      <MyFooter Logo/>
   </>
  );
}

export default App;
