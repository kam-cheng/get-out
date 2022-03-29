import React, {useContext, useState} from "react";
import { Text, View} from "react-native";
import UserContext from "../context/User";
import { ui, text } from "../theme";
import CustomButton from "../components/ui/CustomButton";

export default function RatingScreen ({id}) {
    const { user } = useContext(UserContext);
    const [review, setReview] = useState([])
    const [rating, setRating] = useState([])
    const [loading, setLoading] = useState(false);


    let submitButton;
  if (loading) {
    submitButton = (
      <CustomButton
        title="Submitting..."
        accessibilityLabel="Submiting review"
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

  function submitReview() {
    setLoading(true);
    addReview({
        id,
        username: user.name,
        rating, 
        review,
    })
      .then((msg) => {
        setLoading(false);
        completionAlert(msg);
        navigation.navigate("Activity");
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
                keyboardType='numeric'
                onChangeText={setRating}
                maxLength={1} 
                />
                {submitButton}
        </View>
    )
}