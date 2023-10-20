import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Categories from '../components/Categories';
import ItemComponents from '../components/ItemComponents';
import hotels from '../data/hotels';
import Hotels from '../components/Hotels';

const Home = () => {
  const data = hotels;
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        <View style={{margin: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#d9d9d9',
              padding: 6,
              margin: 0,
              borderRadius: 7,
            }}>
            <AntDesign name="search1" size={20} color="#b94646" />
            <TextInput
              placeholder="Restaurant name, cuisines, or a dish"
              style={{padding: 0, margin: 0, paddingLeft: 7}}
            />
          </View>
          <Categories />
          <Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 150, height: 100, margin: 10, borderRadius: 7}}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
                }}
              />
              <Image
                style={{width: 150, height: 100, margin: 10, borderRadius: 7}}
                source={{
                  uri: 'https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg',
                }}
              />
            </View>
          </Pressable>
          <ItemComponents />
          {data.map(item => (
            <Hotels restaurant={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
