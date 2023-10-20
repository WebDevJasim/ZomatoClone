import {View, Text, Image} from 'react-native';
import React from 'react';

const ItemComponents = () => {
  return (
    <View>
      <Text
        style={{fontSize: 19, fontWeight: 'bold', padding: 4, color: 'black'}}>
        Eat What makes you happy
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{margin: 8}}>
          <Image
            style={{width: 70, height: 70, borderRadius: 36}}
            source={require('../assets/images/food.jpeg')}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'grey',
              margin: 10,
              textAlign: 'center',
            }}>
            Thalis
          </Text>
        </View>
        <View style={{margin: 7}}>
          <Image
            style={{width: 70, height: 70, borderRadius: 36}}
            source={require('../assets/images/food1.jpeg')}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'grey',
              margin: 10,
              textAlign: 'center',
            }}>
            Thalis
          </Text>
        </View>
        <View style={{margin: 7}}>
          <Image
            style={{width: 70, height: 70, borderRadius: 36}}
            source={require('../assets/images/food2.jpeg')}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'grey',
              margin: 10,
              textAlign: 'center',
            }}>
            Thalis
          </Text>
        </View>
        <View style={{margin: 8}}>
          <Image
            style={{width: 70, height: 70, borderRadius: 36}}
            source={require('../assets/images/food3.jpeg')}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'grey',
              margin: 10,
              textAlign: 'center',
            }}>
            Thalis
          </Text>
        </View>
        {/* <View style={{margin: 7}}>
          <Image
            style={{width: 70, height: 70, borderRadius: 36}}
            source={require('../assets/images/food4.jpeg')}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'grey',
              margin: 10,
              textAlign: 'center',
            }}>
            Thalis
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default ItemComponents;
