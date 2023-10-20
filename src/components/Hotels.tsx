import {View, Text, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Hotels = props => {
  const restaurant = props.restaurant;
  console.log(restaurant);

  return (
    <View>
      <View style={{margin: 10}}>
        <Image
          style={{
            width: '100%',
            aspectRatio: 6 / 4,
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
          source={{uri: restaurant.featured_image}}
        />
        <View
          style={{
            padding: 8,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 17, fontWeight: '600', color: 'black'}}>
              {restaurant.name}
            </Text>
            <Text style={{fontSize: 15, color: 'gray'}}>
              {restaurant.cuisines}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#17B169',
              padding: 7,
              borderRadius: 6,
            }}>
            <Text style={{fontWeight: 'bold', paddingRight: 5, color: 'white', fontSize: 16}}>
              {restaurant.aggregate_rating}
            </Text>
            <AntDesign name="star" size={18} color="white" />
          </View>
        </View>
        <Text style={{}}/>
      </View>
    </View>
  );
};

export default Hotels;
