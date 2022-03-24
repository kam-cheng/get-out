export default function Activity({route}) {
    const {title} = route.params;

  return <Text>The {title} </Text>;
}
