import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal} from 'react-native';

const TodoInput = props => {

const [addedTodo, setAddedTodo] = useState('');
const onTextChange = txt => { setAddedTodo(txt)};

const addTodoHandler = () => {


  if(addedTodo.trim().length > 0){
  props.onaddTodo(addedTodo);
  }
 
  setAddedTodo('');
}

const cancelHandler = () =>{
  props.onCancel();
  setAddedTodo('');
}

return(
  <Modal visible={props.visible} animationType="slide">
    <View style={styles.middleAligner}>
        <Text style={styles.mainTitle}>Enter Todo Item</Text>
        <TextInput style={styles.mainInput} onChangeText={onTextChange} value={addedTodo}/>      


        <View style={styles.btnHolder}>
          <TouchableOpacity onPress={addTodoHandler} style={styles.btn}>
            <View style={styles.btnInner}>
              <Text style = {styles.btnTxt}>
              Add
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={cancelHandler} style={styles.btn}>
          <View style={styles.btnInner}>
              <Text style = {styles.btnTxt}>
              Cancel
              </Text>
            </View>
          </TouchableOpacity>
         </View>


    </View>
    </Modal>

);
}

export default TodoInput;
const styles = StyleSheet.create({
      middleAligner:{
        flex:1,
        padding:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#4285F4'
      },
      mainTitle:{
        color:"#ffffff",
        fontSize:30,
        marginBottom:30
      },
      mainInput:{
        borderWidth:1,
        borderColor:"#fefefe",
        padding:10,
        width:300,
        color:"#000",
        borderRadius:5,
        backgroundColor:"#ffffff"
    
      },
      btnHolder:{
        flexDirection:"row",
        alignItems:"stretch",
        justifyContent:"space-between"

      },
      btn:{
        marginVertical:20, 
        marginHorizontal:10
      },
      btnInner:{
        backgroundColor:"#000",
        borderRadius:7,
        paddingHorizontal:20, 
        paddingVertical:10
    
      },
      btnTxt: {
        fontSize:17,
        color:"#ccc"
     }
  });
