import React, { useContext, useState } from "react";
import { Text, View, TextInput, Alert } from "react-native";
import UserContext from "../context/User";
import { ui, text } from "../theme";
import CustomButton from "../components/ui/CustomButton";
import addReview from "../api/addReview";

export default function RatingScreen({ id, setReviews, setRatings }) {
  const { user } = useContext(UserContext);
  const [review, setReview] = useState([]);
  const [rating, setRating] = useState([]);
  const [loading, setLoading] = useState(false);

  let submitButton;
  if (loading) {
    submitButton = (
      <CustomButton
        title="Submitting..."
        accessibilityLabel="Submitting review"
        type="inactive"
        disabled
      />
    );
  } else {
    submitButton = (
      <CustomButton
        title="Submit"
        accessibilityLabel="Submit review"
        type="primary"
        onPress={submitReview}
      />
    );
  }
  const completionAlert = (message) =>
    Alert.alert("Submit Review", message, [{ text: "OK" }]);

  function submitReview() {
    setLoading(true);
    addReview({
      id,
      user: user.name,
      rating: Number(rating),
      review,
    })
      .then((msg) => {
        setLoading(false);
        completionAlert(msg);
        setReviews(true);
        setRatings((currentRatings) => [
          ...currentRatings,
          { user: user.name, rating: Number(rating), review },
        ]);
      })
      .catch((err) => {
        setLoading(false);
        completionAlert("Unable to submit form - please try again");
      });
  }

  return (
    <View>
      <Text style={text.inputLabel}>Review</Text>
      <TextInput
        style={ui.input}
        onChangeText={setReview}
        multiline
        placeholder="Review"
      />
      <Text style={text.inputLabel}>Rating</Text>
      <TextInput
        style={ui.input}
        keyboardType="numeric"
        onChangeText={setRating}
        maxLength={1}
      />
      {submitButton}
    </View>
  );
}
