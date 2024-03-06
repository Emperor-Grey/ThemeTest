/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import {Card, Text, useTheme} from 'react-native-paper';

const data = [
  {
    id: '1',
    title: 'Maths Class Test CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '2',
    title: 'COA Class Test CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '3',
    title: 'DBMS Class Test CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '4',
    title: 'Maths Semester CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '5',
    title: 'FLAT Class Test CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '6',
    title: 'MongoDB Semester CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '7',
    title: 'MongoDB Class Test CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '8',
    title: 'Web Technologies Semester CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '9',
    title: 'SE Class Test CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '10',
    title: 'Chemistry Semester CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '11',
    title: 'Python Class Test CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
  {
    id: '12',
    title: 'Physics Semester CheatSheet',
    image: '',
    INR: '₹',
    price: '10',
  },
];

const Owned = () => {
  const theme = useTheme();

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 5,
          width: '100%',
          flex: 1,
          flexWrap: 'nowrap',
        }}>
        <Card
          mode="contained"
          style={{
            minHeight: 130,
            minWidth: '96%',
            padding: 20,
          }}
        />
        {/* Render your card content here, using data from the item object */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}>
          <Text numberOfLines={1} ellipsizeMode="tail" variant="labelLarge">
            {item.title.length > 8
              ? `${item.title.substring(0, 15)}...`
              : item.title}
          </Text>
          <Text variant="labelLarge">
            <Text variant="titleMedium" style={{color: theme.colors.tertiary}}>
              {item.INR}
            </Text>
            {item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{padding: 2, paddingVertical: 4}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{gap: 0}}
        contentContainerStyle={{gap: 0}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Owned;
