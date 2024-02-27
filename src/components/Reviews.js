import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState(null);

  const getReviews = async (id) => {
    try {
      const response = await yelp.get(`/${id}/reviews`);
      setReviews(response.data.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    getReviews(id);
  }, [id]);

  return (
    <View style={styles.container}>
      {reviews && (
        <>
          <Text style={styles.reviewTitle}>Reviews:</Text>
          {reviews.map((review, index) => (
            <View key={index} style={styles.reviewContainer}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewUser}>{review.user.name}</Text>
                <Text style={styles.reviewRating}>Rating: {review.rating} Stars</Text>
              </View>
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewContainer: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewUser: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewRating: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  reviewText: {
    fontSize: 16,
  },
});

export default Reviews;
