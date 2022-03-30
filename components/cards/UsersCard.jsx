import React from "react";

export default function UsersCard ({avartarUrl, geohash, location,  name, rating, verified}) {
    return (
        <View>
            <Image
            source={{uri: `${avartarUrl}`}}
            />
            <Text>{geohash}</Text>
            <Text>{location}</Text>
            <Text>{name}</Text>
            <Text>{rating}</Text>
            <Text>{verified}</Text>
        </View>
    )
}
