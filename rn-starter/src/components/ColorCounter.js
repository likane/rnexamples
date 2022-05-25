import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

const SquareCounter = ({color}) => {
    return <View>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`}/>
        <Button title={`Decrease ${color}`}/>
    </View>>
};

const styles = StyleSheet.create({});

export default SquareCounter;