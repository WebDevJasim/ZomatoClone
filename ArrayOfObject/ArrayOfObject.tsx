import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';

const ArrayOfObject = () => {
  const array_object = [
    {
      id: 1,
      name: 'jasim',
    },
    {
      id: 2,
      name: 'wasim',
    },
  ];

  array_object.map((obj, index) => {
    if (obj.id == 1) {
      obj.name = 'jasim khan';
    }
  });

  return (
    <View>
      <Text style={{color: 'black', fontSize: 25, textAlign: 'center'}}>
        Array of Object
      </Text>
      {array_object.map((obj, index) => (
        <View key={index} style={styles.objectView}>
          <Text style={styles.objectTxt}>{obj.id}</Text>
          <Text style={styles.objectTxt}>{obj.name}</Text>
        </View>
      ))}
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtButton}>Change Name</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View>
    //   {array_object.map((obj, index) => {
    //     if (obj.id == 1) {
    //       obj.name = 'jasim khan value change';
    //     } else obj;
    //     console.log(obj, index);
    //   })}
    // </View>
  );
};

export default ArrayOfObject;

const styles = StyleSheet.create({
  objectView: {
    padding: 10,
    flexDirection: 'row',
  },
  objectTxt: {
    paddingLeft: 10,
    color: 'black',
  },
  buttonView: {
    alignItems: 'center',
  },
  btn: {
    borderWidth: 1,
    width: 150,
    padding: 10,
    backgroundColor: 'green',
    margin: 20,
    borderRadius: 50,
  },
  txtButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
