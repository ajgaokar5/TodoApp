import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import TodoItems from './components/TodoItems';
import TodoInput from './components/TodoInput';

export default function App() {


  const [todoList, setTodolist] = useState([]);
  const [isaddModal, setisaddModal] = useState(false);
  
  const addTodo = (txt) => { 
    
    setTodolist(x => [...x,{id: Math.random().toString(), value: txt}]);
    setisaddModal(false);
  };

  const removeTodo = (todoId) =>{
      setTodolist(x => {
          return todoList.filter((goal) => goal.id  !== todoId)
      })

  }

  const cancelHandler = () => {
    setisaddModal(false);
    }

  return (
    <View style={styles.mainContainer}>
        <Text style={styles.logoTxt}>My Todo App</Text> 
        <TodoInput visible={isaddModal} onaddTodo={addTodo} onCancel={cancelHandler}/>

        <FlatList style={styles.flatList} keyExtractor={(item, index) => item.id}
        data={todoList} renderItem={itemData => (<TodoItems id={itemData.item.id} onDelete={removeTodo} title={itemData.item.value}/>)}
        />
        
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={()=> setisaddModal(true)} style={styles.btn}>
            <View style={styles.btnInner}>
              <Text style={styles.btnTxt}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical:30,
    paddingHorizontal:50,
    flex:1,
    alignItems:"center",
    backgroundColor:'#4285F4',
  },

  logoTxt:{
    color:"#fff",
    fontSize:18, 
    marginBottom:20
   
  },
  btnInner:{
    width:75,
    height:75,
    backgroundColor:"#fff",
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center"

  },
  btnTxt: {
    fontSize:45,
    color:"#ccc"
 },
 btnWrapper:{ marginTop:20}

});
