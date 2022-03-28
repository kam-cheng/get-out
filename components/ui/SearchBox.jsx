import { TextInput, View } from "react-native";
import { ui, colors } from "../../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function SearchBox(props) {
  return (
    <View style={ui.searchBox}>
      <TextInput
        style={ui.basicInput}
        placeholder="What would you like to do"
        {...props}
        disableFullscreenUI={true}
        returnKeyLabel="search"
      />
      <MaterialIcons name="search" color={colors.light} size={24} />
    </View>
  );
}
