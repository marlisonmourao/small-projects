import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  value: number
}

export function ProgressBar({ value }: Props) {
  return(
    <View style={styles.container}>
      <Text style={styles.value}>
        {value.toFixed(0)}%
      </Text>

      <View style={styles.tracker}>
        <View style={[styles.progress, { width: `${value}%` }]} />
      </View>
    </View>
  )
}