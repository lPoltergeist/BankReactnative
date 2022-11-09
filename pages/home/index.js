import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../src/components/Header';
import Balance from '../../src/components/balance';
import Movements from '../../src/components/Moviments';
import Actions from '../../src/components/Actions';

const list = [
    {
        id: 1,
        label: "Xbox Series X",
        value: "4.000,00",
        date: '20/10/2022',
        type: 1 // despessas
    },
    {
        id: 2,
        label: "RTX 4090",
        value: "10.000,00",
        date: '23/10/2022',
        type: 1 // despessas
    },
    {
        id: 3,
        label: "Olha o pix",
        value: "3.000,00",
        date: '05/11/2022',
        type: 0 // entrada
    },
    {
        id: 4,
        label: "Salário",
        value: "5.000,00",
        date: '05/11/2022',
        type: 0,
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Gabriel"/>
        <Balance gastos="-14.000,00" saldo="1.100.00"/>

        <Actions/>
      
        <Text style={styles.title}>últimas movimentações</Text>

        <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements type={item.type} date={item.date} label={item.label} value={item.value} key={item.id}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,

    }
})

