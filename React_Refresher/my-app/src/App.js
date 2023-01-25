import {React,useState} from "react";
import GoalList from "./components/GoalsList/GoalList";
import Input from "./components/Input/Input";

const App = ()=>{
  
  const [goalList, setGoalList] = useState([
    {id: Math.random().toString(), text:"Eat"},
    {id: Math.random().toString(), text:"Sleep"},
    {id: Math.random().toString(), text:"Repeat"}
  ]);

   const setGoal = (newGoal) =>{
      // setGoalList(goalList.concat(newGoal));
      setGoalList(prevGoalList =>{
        return prevGoalList.concat(newGoal);
      });
   };

  return (
    <div className="goals">
      <h1 className="title">Course Goals</h1>
      <Input setGoal={setGoal}/>
      <GoalList goalList={goalList} />
    </div>
  )
}

export default App;