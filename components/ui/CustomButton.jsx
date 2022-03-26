import { TouchableOpacity, Text, View } from "react-native";
import { colors, text, ui } from "../../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function CustomButton({ title, onPress, type }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        ui.buttonContainer,
        type === "primary" && {
          backgroundColor: colors.buttonPrimary,
          borderWidth: 0,
        },
      ]}
    >
      <View style={ui.buttonIconContainer}>
        <Text style={text.buttonLabel}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
