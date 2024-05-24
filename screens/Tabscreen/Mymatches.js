import { useEffect } from "react";
import { useSport } from "../../components/SportContext";
import { Text, View } from "react-native";

const MyMatches = () => {
  const { sport } = useSport();

  useEffect(() => {
    
  }, [sport]);

  return (
    <View>
      
      <Text>{`Showing matches for ${sport}`}</Text>
    </View>
  );
};
export default MyMatches
