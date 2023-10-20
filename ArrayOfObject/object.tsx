import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MyComponent = () => {
  const [myArray, setMyArray] = useState([
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Bob', age: 40},
  ]);

  const handleUpdateAge = () => {
    const updatedArray = myArray.map(obj => {
      if (obj.name === 'John') {
        // return {...obj, age: obj.age + 1};
        return {...obj, name: 'jasim', age: 20};
      } else {
        return obj;
      }
    });

    setMyArray(updatedArray);
  };

  return (
    <View>
      {myArray.map((obj, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.textContainer}>{obj.name}</Text>
          <Text style={styles.textContainer}>{obj.age}</Text>
        </View>
      ))}
      <Button title="Update John's Name Age" onPress={handleUpdateAge} />
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  textContainer: {
    paddingLeft: 10,
  },
});
