import React, { useState} from 'react'
import { View, Text, Button } from 'react';

export const Contador = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={{
            flex: 1,
            background: 'yellow',
            justifyContent: 'center'
        }}>
            <Text>
                Contador: { contador }
            </Text>
            <Button
                title="Agregar"
                onPress={ () => setContador( contador + 1)}
            
            />
        </View>
    )
}

