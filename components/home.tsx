import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import NotesForm from "./notesForm";

const Home = () => {
    const [openAddNote, setOpenAddNote] = useState(false);
    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
        const url = 'http://10.0.2.2:3000/notes';
        let result:any = await fetch(url)
        result = await result.json();
        setNotes(result);
    }
    useEffect(() => {
        getNotes()
    },[openAddNote])
    return (
        <>
            <View style={style.searchBox}>
                <TextInput style={style.searchBoxInput} placeholder="Search note..." />
            </View>
            <ScrollView>
                <View style={style.homePage}>
                    {
                        notes
                        ?
                        notes.sort().reverse().map((item) => <View style={style.cardBox}>
                        <View style={style.cardHeading}>
                            <Text style={style.text_light}>Self</Text>
                        </View>
                        <View style={style.cardSubHeading}>
                            <Text style={style.text_light}>{item.date}</Text>
                        </View>
                        <View style={style.cardMiddleHeading}>
                            <Text style={[style.middleHeading, style.text_light]}>{item.title}</Text>
                        </View>
                        <View>
                            <Text style={[style.mainContent, style.text_light]}>
                            {item.description}
                            </Text>
                        </View>
                    </View>)
                        :
                        ""
                    }
                </View>
            </ScrollView>
            <TouchableOpacity style={style.touchableOpacity} onPress={()=>setOpenAddNote(true)}>
                <Image style={style.floatingButton} source={require('../assets/img/components_buttons.png')} />
            </TouchableOpacity>
            {
                openAddNote ? <NotesForm showModal={openAddNote} closeOpenModal={() => setOpenAddNote(false)}/>:''
            }
        </>
    );
}

const style = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
    },
    searchBoxInput: {
        fontSize: 20,
        paddingLeft: 10,
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30,
    },
    homePage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    cardBox: {
        width: '48%',
        padding: 20,
        height: 200,
        marginVertical: 2,
        borderRadius: 20,
        alignItems: 'stretch',
        backgroundColor: '#D1B000'
    },
    cardHeading: {
        flexDirection: 'row'
    },
    cardSubHeading: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    cardMiddleHeading: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    middleHeading: {
        fontSize: 20,
        paddingBottom: 5,
        color: '#fff',
    },
    mainContent: {
        textAlign: 'left',
    },
    text_light: {
        color: '#fff',
    },
    touchableOpacity: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30
    },
    floatingButton: {
        resizeMode: 'contain',
        width: 50,
        height: 50
    }
})

export default Home;