import { StyleSheet,Text, View } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
        <Text style={{color:'#fff'}}>{props.text}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
      marginTop:12,
      padding:8,
      borderRadius:6,
      backgroundColor:'#5e0acc',
      color:'white',
    }
  });
  