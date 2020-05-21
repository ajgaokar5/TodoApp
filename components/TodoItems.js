import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoItems = props => {

    return(
        <TouchableOpacity>
        <View style={styles.listItemholder}>
            <Text style={styles.listItem}>{props.title}</Text>
            <View style={styles.btnHolder}>
                <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} style={styles.btn}>
                <View style={styles.btnInner}>
                <Text style = {styles.btnTxt}>
                ❌
                </Text>
                </View>
                </TouchableOpacity>
            </View>

        </View>
        </TouchableOpacity>
    );

}

export default TodoItems; 

const styles = StyleSheet.create({
    listItemholder:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:5,
        padding:10,
        borderWidth:1,
        marginBottom:1,
        borderColor:"#9fc2f9",
        borderRadius:5,
        fontSize:12,
        width:250,
        backgroundColor:"#d9e6fc"
    },
    listItem:{
        color:"#333",
        width:150,
        paddingHorizontal:2
    
    },
    btnTxt:{
        fontSize:13,
        marginLeft:10
    },
  });