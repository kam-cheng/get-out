import { Rating, AirbnbRating } from 'react-native-ratings';

// need to know here to require the star image from - ask Sam
//const STAR_IMAGE = require('./')

export default function Rating (rating) {
    
return ("Rating is '" + rating) (
    <>
    <AirbnbRating />

    <Rating 
    showRating
    onFinishRating={this.ratingCompleted}
    />
    </>
)

}



// ratingCompleted(rating) {
//     return ("Rating is: " + rating)
// }

{/* <AirbnbRating 
    count={5}
    reviews={["Terrible", "Bad", "Good", "Very Good", "Amazing"]}
    defaultRating={3}
    /> */}





