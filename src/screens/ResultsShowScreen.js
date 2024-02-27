import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import yelp from "../api/yelp";
import Reviews from "../components/Reviews";

const ResultsShowScreen = (props) => {
  const [result, setResult] = useState(null);
  const id = props.navigation.getParam('id');

  const getRestaurantDetails = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  if (!result) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const formatDay = (dayIndex) => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysOfWeek[dayIndex];
  };
  
  const formatTime = (time) => {
    const hour = time.slice(0, 2);
    const minute = time.slice(2);
    return `${hour}:${minute}`;
  };
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.photo} />
        )}
      />
      <Text style={styles.rating}>Rating: {result.rating} Stars</Text>
      <Text style={styles.reviewCount}>Number of Reviews: {result.review_count}</Text>
      <Text style={styles.city}>Location: {result.location.city}, {result.location.state}, {result.location.country}</Text> 
      {result.hours && (
  <>
    <Text style={styles.hoursTitle}>Hours:</Text>
    {result.hours[0].open.map((day, index) => (
      <View key={index}>
        <Text style={styles.day}>
          {formatDay(day.day)}: {formatTime(day.start)} - {formatTime(day.end)}
        </Text>
      </View>
    ))}
  </>
)}
      {result.reviews && (
        <>
          <Text style={styles.reviewTitle}>Reviews:</Text>
          {result.reviews.map((review, index) => (
            <View key={index} style={styles.reviewContainer}>
              <Text style={styles.reviewUser}>{review.user.name}</Text>
              <Text style={styles.reviewText}>{review.text}</Text>
              <Text style={styles.reviewRating}>Rating: {review.rating} Stars</Text>
            </View>
          ))}
        </>
      )}
      <Reviews id={id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photo: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  rating: {
    fontSize: 18,
    marginBottom: 10,
  },
  reviewCount: {
    fontSize: 16,
    marginBottom: 10,
  },
  city: {
    fontSize: 16,
    marginBottom: 10,
  },
  hoursTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  day: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hour: {
    marginLeft: 10,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  reviewContainer: {
    marginBottom: 10,
  },
  reviewUser: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewText: {
    marginBottom: 5,
  },
  reviewRating: {
    fontStyle: 'italic',
  },
});

export default ResultsShowScreen;
