import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

export default function Header() {
    return (
        <View style={styles.row}>
          <Image
          style={styles.logo}
          source={{
            uri: 'https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg',
          }}/>
          <View style={styles.header_text}>
            <Text style={[styles.text, styles.text_primary]}>Maria Eduarda</Text>
            <Text style={styles.text}>As melhores roupas para cada estação do ano você encontra aqui</Text>
          </View>          
        </View>
    )
}

const styles = StyleSheet.create ({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF5EE',
      padding: 10,
      marginTop: 50,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    logo: {
      width: 100,
      height: 100,
      borderRadius: 100,
    },
    header_text: {
      width: 230,
    },
    text: {
      fontSize: 14,
      paddingTop: 0,
      padding: 8,
      marginLeft: 8,
    },
    text_primary: {
        fontSize: 18,
        fontWeight: 600,
      },
})
