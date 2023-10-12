import FirstLanding from "./components/MainContainerDiv/FirstContainer";
import ClassWork from "./insideClass/ClassWork";
import ClassRemote from "./remote/Remote";
import Television from "./television/Televison";
// import {StateManagement, stateManagement} from "./functionalComponent/FunctionalComponent";
import {UserDetailContain} from "./Forms/UserDetails.styles";
import {UserDetails} from "./Forms/UserDetails";
import {StatePlay} from "./learningStateManagement/StatePPlay";
import {Audio} from "./audio/Audio";



function App() {
  return (
    <div className="App">
      {/*<FirstLanding/>*/}
      {/*  <ClassWork/>*/}
      {/*<ClassRemote/>*/}
      {/*  <Television/>*/}
      {/*  <StateManagement/>*/}
      {/*  <UserDetails/>*/}
      {/*  <StatePlay/>*/}
        <Audio/>
    </div>
  );
}

export default App;
