import { StyleSheet, View,Button, TextInput,Modal,Image } from 'react-native';
import {useState} from 'react';
const GoalInput = (props) => {
    const [enteredGoalText,setEnteredGoalText]=useState('');
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
  return (
    <Modal visible={props.visible} animationType='fade' >
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.png')} style={styles.image}/>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel}/>
                </View>
                <View style={styles.button}>
                   <Button  color="#841584" title='Add Goal' onPress={addGoalHandler} />
                </View>
                
            </View>
        </View>
    </Modal>
    
  )
}

export default GoalInput



const styles = StyleSheet.create({
    inputContainer:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      
      backgroundColor:'#311b6b'
    },
    textInput:{
      borderWidth:1,
      borderColor:'#cccccc',
      width:'70%',
      backgroundColor:'#fff',
      color:'#120438',
      borderRadius:6,
      // borderStyle:'solid',
      padding:16,
    },
    buttonContainer:{
        marginTop:16,
        flexDirection:'row',
        
    },
    button:{
        width:100,
        marginHorizontal:8
    },
    image:{
        width:100,
        height:100,
        margin:20,
        
    }
})