import { StyleSheet, Text, View,Button, TextInput,ScrollView,FlatList } from 'react-native';
import {useState} from 'react';


export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);

 function goalInputHandler(enteredText){
  setEnteredGoalText(enteredText);
 }
 function addGoalHandler(){
  // console.log(enteredGoalText);
  // Two way to add existing state recommanded way is 2nd
  // setCourseGoals([...courseGoals,enteredGoalText]);
  setCourseGoals((currentCourseGoals)=>[...currentCourseGoals,{text:enteredGoalText,key:Math.random().toString()}]);

  
 }
  return (
    <View  style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button  color="#841584" title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalText}>List of goals...</Text>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return(
            <View style={styles.goalItem}>
              <Text style={{color:'#fff'}}>{itemData.item.text}</Text>
            </View>
          )
        }} alwaysBounceVertical={true}/>
          
        
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
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    // borderStyle:'solid',
    marginRight:8,
    padding:8,
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
  goalItem:{
    marginTop:12,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    color:'white',
  }
});
