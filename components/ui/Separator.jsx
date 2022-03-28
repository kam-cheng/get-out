import { ui } from "../../theme";
import { View } from "react-native";

export default function Separator(props) {
  return <View style={ui.separator} {...props} />;
}
