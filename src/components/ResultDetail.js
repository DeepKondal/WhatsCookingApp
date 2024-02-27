import React from "react";
import { View,Image,Text,StyleSheet } from "react-native";


const ResultDetail = (props) => {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: props.result.image_url }} style={styles.image} />
          <Text style={styles.name}>{props.result.name}</Text>
          <Text>
          '{props.result.price}' {props.result.rating} Stars, {props.result.review_count} Reviews 
          </Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
      marginLeft : 13,
    },
    innerContainer: {
      borderBottomWidth: 2,
      borderBottomColor: 'gray',
    
    },
    image: {
      width: 250,
      height: 150,
      borderRadius: 4,
    },
    name: {
      fontWeight: 'bold',
    },
  });

export default ResultDetail;