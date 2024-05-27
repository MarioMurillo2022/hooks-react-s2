import { View, Text, Button, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

const Hooks = () => {
    const [name, setName] = useState('');
    const [mensageInicial, setmensageInicial] = useState('');

    useEffect(() => {
        if (name) {
            setmensageInicial(`Bienvenido, ${name}!`);
        } else {
            setmensageInicial('');
        }
    }, [name]);

    const LimpiarNombre = () => {
        setName('');
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>Ingrese su nombre:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, padding: 5 }}
                onChangeText={setName}
                value={name}
            />
            <View style={{ marginTop: 10 }}>
                <Button title="Limpiar" onPress={LimpiarNombre} />
            </View>
            {mensageInicial ? <Text style={{ marginTop: 20 }}>{mensageInicial}</Text> : null}
        </View>
    )
}

export default Hooks;
