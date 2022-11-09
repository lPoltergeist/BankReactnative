import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {MotiView, AnimatePresence, MotiText} from 'moti';

export default function Movements({date, label, value, type}) {
    const [showValue, setShowValue] = useState(false);
 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
    <Text style={styles.date}>{date}</Text>

    <View style={styles.content}>
    <Text style={styles.label}>{label}</Text>
        {showValue ? (
           <AnimatePresence exitBeforeEnter>
            <MotiText
            from={{translateX: 100}}
            animate={{ translateX: 0}}
            transition={{
                type: 'timing',
                duration: 500,
            }}
            style={type === 0 ? styles.value : styles.expenses}>
                {type === 0 ? `R$ ${value}` : `R$ -${value}`}
                </MotiText>
                </AnimatePresence>
         ) : (
                   <AnimatePresence exitBeforeEnter>
                     <MotiView style={styles.skeleton}
                    from={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{type: 'timing'}}
                    >
                    </MotiView>
                   </AnimatePresence>
        )}
    </View>
   </TouchableOpacity>
  );
}

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 2,

    },
    date: {
        color: '#9C9C9C',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,

    },
    value: {
        fontSize: 16,
        color: '#16B83E',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: '#e74e'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#dadada",
        borderRadius: 8,
    }
})