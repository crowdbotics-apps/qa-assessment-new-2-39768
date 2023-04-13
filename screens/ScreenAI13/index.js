import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const MyOffersScreen = () => {
  const data = [{
    id: '1',
    title: '50% off on all products',
    image: require('../assets/offer1.jpg'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt malesuada, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.'
  }, {
    id: '2',
    title: 'Free shipping on orders over $50',
    image: require('../assets/offer2.jpg'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt malesuada, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.'
  }, {
    id: '3',
    title: 'Buy one get one free on all products',
    image: require('../assets/offer3.jpg'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt malesuada, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.'
  }];

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={{
      uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
    }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>;

  return <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20
  },
  itemTextContainer: {
    flex: 1
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  itemDescription: {
    fontSize: 16
  }
});
export default MyOffersScreen;