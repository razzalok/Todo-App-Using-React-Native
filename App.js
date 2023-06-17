import { StyleSheet, Text, View,FlatList,Button } from 'react-native';
import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  
  const [courseGoals,setCourseGoals]=useState([]); 
  const [modalIsVisible,setModalIsVisible]=useState(false); 

 function startAddGoalHandler(){
  setModalIsVisible(true)
 }
 function addGoalHandler(enteredGoalText){
  // console.log(enteredGoalText);
  // Two way to add existing state recommanded way is 2nd
  // setCourseGoals([...courseGoals,enteredGoalText]);
  setCourseGoals((currentCourseGoals)=>[...currentCourseGoals,{text:enteredGoalText,id:Math.random().toString()}]);
 }

 function deleteGoalhandler(id){
  console.log("Delete");
  setCourseGoals((currentCourseGoals)=>{
    return currentCourseGoals.filter((goal)=> goal.id !==id)
  });
 }

  return (
    <View  style={styles.appContainer}>
      <Button title='Add New Goal' color="#841584" onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalText}>List of goals...</Text>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return(
            //  key={itemData.index}
            <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalhandler}/>
          )
        }} alwaysBounceVertical={true} keyExtractor={(item,index)=>{return item.id}}/>
          
        
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:50,
    paddingHorizontal:16,
    flex:1
  },
  goalsContainer:{
    flex:5
  },
  goalText:{
    textAlign:'center',
    borderRadius:6,
    borderColor:'red',
    borderWidth:1,
    padding:8,
  },
});
