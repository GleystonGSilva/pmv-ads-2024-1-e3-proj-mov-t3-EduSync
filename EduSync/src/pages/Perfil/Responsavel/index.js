import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState,useLayoutEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomHeader from '../../../components/CustomHeader';

const Responsavel = () => {

  const [userNome, setUserNome] = useState('');
  const [userPerfil, setUserPerfil] = useState('');
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const nome = await AsyncStorage.getItem('userName');
        const perfil = await AsyncStorage.getItem('userPerfil');
        const token = await AsyncStorage.getItem('userToken');
        setUserNome(nome);
        setUserPerfil(perfil);
        setUserToken(token);

      } catch (error) {
        console.error('Failed to fetch user data from AsyncStorage:', error);
      }
    };
    fetchUserData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <CustomHeader escolaNome="Escola - ED. Infantil" />,
    });
  }, [navigation]); 

  const navigation = useNavigation();

  const PerfilUser = () => {
    navigation.navigate(PerfilUser);
  };

  const Mural = () => {
    navigation.navigate(Mural);
  };

  const Mensagens = () => {
    navigation.navigate(Mensagens);
  };

  const Calendario = () => {
    navigation.navigate(Calendario);
  };  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}>Aréa do Responsável</Text>
      </View>
      <View style={styles.grid}>

        <TouchableOpacity style={styles.button} onPress={Mural}>
          <Text>MURAL</Text>
          <Ionicons style={styles.icon} name="exclamationcircleo" color={"#a9a9a9"} size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Mensagens}>
          <Text>MENSAGENS</Text>
          <Ionicons style={styles.icon} name="mail" color={"#a9a9a9"} size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Calendario}>
          <Text>CALENDÁRIO</Text>
          <Ionicons style={styles.icon} name="calendar" color={"#a9a9a9"} size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={PerfilUser}>
          <Text>PERFIL</Text>
          <Ionicons style={styles.icon} name="user" color={"#a9a9a9"} size={25} />
        </TouchableOpacity>      

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#00aaff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  BellsIcon: {
    marginLeft: '80%',
    marginBottom: '20%',
  },

  welcome: {
    fontSize: 24,
    marginBottom: '15%',
    color: '#fff',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  button: {
    width: '40%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },

  icon: {
    marginTop: '5%',
  }

});

export default Responsavel;