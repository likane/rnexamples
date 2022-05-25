import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation)
  return <View>
      <Text style={styles.text}>HomeShip</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go To Components"/>
      <Button 
        title='Go To List'
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title='Go To Image'
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title='Go To Counter'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title='Go To Color'
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title='Go To Square'
        onPress={() => navigation.navigate('Square')}
      />
      <Button 
        title='Go To Text'
        onPress={() => navigation.navigate('Text')}
      />
      <Button 
        title='Go To Box'
        onPress={() => navigation.navigate('Box')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go To List</Text>
      </TouchableOpacity> */}
  </View> ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
