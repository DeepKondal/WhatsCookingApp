import {React} from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState,useEffect } from "react";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({navigation}) => {

    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();
    

    const filterResultsByPrice = (price) => {
        // price === '$'|| '$$' || '$$$'    
        if (results) {
            return results.filter(result => {
                return result.price === price;
            });
        } else {
            return []; // Return an empty array if results is undefined
        }
    };


    return <>
        <Text style={{marginLeft:15,marginTop:5}}> Find your favourite Montreal resturant here</Text>
        <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit = {() => searchApi(term)}
        />
        {errorMessage ? <Text> {errorMessage} </Text>:null}
        <ScrollView>    
        <ResultList results ={filterResultsByPrice('$')} title="Cheap & Affordable"/>
        <ResultList results ={filterResultsByPrice('$$')} title="Value for Money"/>
        <ResultList results ={filterResultsByPrice('$$$')} title="High-End & Expensive"/>
        </ScrollView>

    </>
};


export default SearchScreen;