import "./App.css";
import Counter1 from "./components/Counter1";
import ProfileUpdater from "./components/ProfileUpdater";
import ScoreKeeper from "./components/ScoreKeeper";
import ShowHideText from "./components/ShowHideText";
import TaskManager from "./components/TaskManager";
import TextInput1 from "./components/TextInput1";
import ToggleMessage1 from "./components/ToggleMessage1";
import UserInfo1 from "./components/UserInfo1";
import UsernameInput from "./components/UsernameInput";
import ItemList1 from "./components/ItemList1";

function App() {
  return (
    <>
      Uncomment to get particular component
      <h1>problem 1</h1>
      <Counter1 />
      <ScoreKeeper />
      <h2>problem 2</h2>
      <TextInput1 />
      <UsernameInput />
      <h2>problem 3</h2>
        <ToggleMessage1 />
         <ShowHideText />

     <h2>problem 4</h2>
     <UserInfo1 />
      <ProfileUpdater />
     <h1>problem 5</h1>
         <ItemList1 />
     
      <TaskManager />
     
    
    
  
    </>
  );
}

export default App;
