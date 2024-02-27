import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";


// Usage example

const SearchBar = (props) => {

    return <View style={styles.backgroundStyle}>
        
        <Image
                source={require("./search-icon.png")} 
                style={styles.iconStyle}
            />
        
        <TextInput 
        placeholder="Search" 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={props.term}
        onChangeText={newTerm => props.onTermChange(newTerm)}
        onEndEditing={props.onTermSubmit}/>
            </View>
};


const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor : '#F0EEEE',
        height : 30,
        borderRadius : 5,
        marginHorizontal: 15,
        marginTop : 10,
        marginBottom : 5,
        flexDirection :'row',
        alignItems: 'center',
    },
    inputStyle : {
        flex :1,
        fontSize : 18,
    },
    iconStyle:{
        width: 20, // Adjust width as needed
        height: 20, // Adjust height as needed
        marginRight: 10,
        marginLeft : 5
    }
});

export default SearchBar;