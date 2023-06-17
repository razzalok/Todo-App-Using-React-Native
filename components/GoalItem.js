import { StyleSheet,Text, View, Pressable} from 'react-native';

const GoalItem = (props) => {
    
  return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color:'#000000'}} onPress={props.onDeleteItem.bind(this,props.id) } style={({pressed})=> pressed && styles.pressedItem}>
                <Text style={{color:'#fff',padding:8}}>{props.text}</Text>
            </Pressable>
        </View>
    
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
      marginTop:12,
      borderRadius:6,
      backgroundColor:'#5e0acc',
      color:'white',
    },
    pressedItem:{
        opacity:0.5
    }
  });
  