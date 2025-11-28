import { Ionicons } from '@expo/vector-icons';
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const todoData = [
      {
        id: 1,
        title: "Todo 1",
        completed: false,
      },
      {
        id: 2,
        title: "Todo 2",
        completed: false,
      },
      {
        id: 3,
        title: "Todo 3",
        completed: false,
      },
      {
        id: 4,
        title: "Todo 4",
        completed: false,
      },
      {
        id: 5,
        title: "Todo 5",
        completed: false,
      },
      {
        id: 6,
        title: "Todo 6",
        completed: false,
      },  
    ];

  return (
    
  
    <SafeAreaView
      style={styles.container}
    >
      <View style = {styles.header}>
        <Ionicons name="menu" size={24} color='#333' />
        <Image 
          source = {{uri: 'https://xsgames.co/randomusers/avatar.php?g=male'}} 
          style = {{width: 40, height: 40, borderRadius: 20}} />
      </View>
      <FlatList data={todoData} keyExtractor={item => item.id.toString()} 
      renderItem={({ item }) => (
      <View><Text>{item.title}</Text>
      </View>
    )} 
    />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  }
});
