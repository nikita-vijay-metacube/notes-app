import React, { useEffect, useState } from "react";
import { Alert, Button, Modal, StyleSheet, TextInput, View } from "react-native";

const NotesForm = (props:any) => {
    const [visible, setVisible] = useState(false);
    const [note, setNote] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    useEffect(() => {
        setVisible(props.showModal)
    },[])

    const getCurrentDate=()=>{
 
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        return date + '-' + month + '-' + year;//format: d-m-y;
    }

    const saveNote = async () => {
        const data = {
            'title':noteTitle,
            'description':note,
            'date':getCurrentDate()
        }
        const url = 'http://10.0.2.2:3000/notes';
        let result:any = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        result = await result.json();
        let msg = '';
        if(result) {
            msg = "Note Saved Successfully!"
        } else {
            msg = "Oopss..something error!"
        }
        props.closeOpenModal()
        setNote("");
        setNoteTitle("");
        Alert.alert(msg);
    }

    return (
        <Modal transparent={true} animationType="slide" visible={visible}>
            <View style={style.modalBox}>
                <View style={style.formView}>
                    <TextInput placeholder="Enter Title" style={style.titleBar} onChangeText={(text) => setNoteTitle(text)}/>
                    <TextInput
                    placeholder="Description...."
                    numberOfLines={1}
                    onChangeText={(text) => setNote(text)}
                    value={note} style={style.inputNotes}/>
                    <View style={{flexDirection:'row', justifyContent:"space-around", marginTop:10}}>
                        <Button title="Add Note" onPress={() => saveNote()}/>
                        <Button title="close" onPress={() => props.closeOpenModal()}/>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const style = StyleSheet.create({
    modalBox:{
        flex:1,
        maxHeight:800,
        alignContent:'center',
        justifyContent:'center',
    },
    formView:{
        backgroundColor:'#fff',
        padding:5,
        margin:10,
        shadowColor:'black',
        elevation:5,
    },
    inputNotes:{
        borderBottomWidth:1,
        fontSize:20,
    },
    titleBar:{
        borderBottomWidth:1,
        fontSize:20,
    }
})
export default NotesForm;