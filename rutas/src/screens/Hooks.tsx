import { View, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Hooks';

const Hooks = () => {
    const [name, setName] = useState('');
    const [mensajeInicial, setMensajeInicial] = useState('');

    useEffect(() => {
        if (name) {
            setMensajeInicial(`Bienvenido, ${name}!`);
        } else {
            setMensajeInicial('');
        }
    }, [name]);

    const LimpiarNombre = () => {
        setName('');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/CeutecLogo.jpg')}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={{ padding: 20 }}>
                <Text>Ingrese su nombre:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, padding: 5 }}
                    onChangeText={setName}
                    value={name}
                />
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={styles.button} onPress={LimpiarNombre}>
                        <Text style={styles.buttonText}>Limpiar</Text>
                    </TouchableOpacity>
                </View>
                {mensajeInicial ? <Text style={{ marginTop: 20 }}>{mensajeInicial}</Text> : null}
            </View>
        </View>
    );
};

export default Hooks;
