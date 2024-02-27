import {React} from "react";
import { View,Text,StyleSheet,FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";
import { useState,useEffect } from "react";


const ResultList = (props) =>{
    return <View>
        <Text style={styles.title}> {props.title}</Text>
        <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        data ={props.results}
        keyExtractor={(result => result.id)}
        renderItem={({item}) => {
            return (
                <TouchableOpacity props={props} onPress={()=> {props.navigation.navigate("Results",{id:item.id})}}>

                    <ResultDetail result={item}/>
                </TouchableOpacity>)
        }}/>
    </View>
};

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        marginLeft : 10,
        fontWeight : 'bold',
        fontFamily : 'Avenir'
    }
});

export default withNavigation(ResultList);