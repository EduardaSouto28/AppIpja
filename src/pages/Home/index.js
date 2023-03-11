import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';

export default function Home () {
  return (
    <ScrollView style={styles.container}>

      <Image
        style={styles.img}
        source={{
          uri: 'https://m.media-amazon.com/images/G/32/SellerUniversity/SU2020/SellerApp/Selldot/833_f21_banner-grid2_01_1500x1025._SL1280_FMjpg_.jpg',
        }}/>
      <Text style={styles.text}>Clique para ver looks para inverno</Text>

      <Image
        style={styles.img}
        source={{
          uri: 'https://img.freepik.com/fotos-premium/ferias-de-verao-viagem-conceito-plana-leigos-acessorios-de-praia_72402-550.jpg?w=2000',
        }}/>
      <Text style={styles.text}>Clique para ver looks para verão</Text>

      <Image
        style={styles.img}
        source={{
          uri: 'https://img.freepik.com/fotos-premium/outono-ainda-vida-folhas-amarelas-abobora-velas-sueter-tricotado-em-uma-vista-superior-branca_251908-17.jpg',
        }}/>
      <Text style={styles.text}>Clique para ver looks para outono</Text>

      <Image
        style={styles.img}
        source={{
          uri: 'https://www.interlagos.com.br/blog/wp-content/uploads/2021/04/Home-Blog-Looks-B%C3%A1sicos-1140x853.jpeg',
        }}/>
      <Text style={styles.text}>Clique para ver looks para primavera</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  img: {
    width: 340,
    height: 200,  
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    color: 'black',
    padding: 8,
    marginBottom: 15,
    backgroundColor: '#FFF5EE',
    borderRadius: 4,
  },
});
