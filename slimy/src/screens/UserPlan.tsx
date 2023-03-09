/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-easy-icon';

const UserPlan = () => {
  return (
    <View style={styles.Background}>
      <ScrollView>
        <StatusBar backgroundColor="#ffffff" />
        <View style={styles.Container}>
          <View style={styles.Container_Children}>
            <View>
              <Image
                style={styles.User_Img}
                source={require('../../assets/images/julie.jpg')}
              />
            </View>
            <View>
              <Text style={styles.User_Greeting}>Welcome back Julie</Text>
            </View>
          </View>
          <View>
            <Icon
              type="ionicon"
              name="notifications-outline"
              size={34}
              color="#212122"
            />
          </View>
        </View>
        <View style={styles.Statistics}>
          <View style={styles.Statistics_Card}>
            <View style={styles.Statistics_Children}>
              <Text style={styles.Statistics_Top_Text}>Completed {'\n'} exercises</Text>
              <Icon
                type="material-community"
                name="weight-lifter"
                color="black"
                size={34}
              />
            </View>
            <Text style={styles.Statistics_Bottom_Text}>2/ 4</Text>
          </View>
          <View style={styles.Statistics_Card}>
            <View style={styles.Statistics_Children}>
              <Text style={styles.Statistics_Top_Text}>Burned {'\n'} kcal</Text>
              <Icon
                type="material-community"
                name="weight-lifter"
                color="black"
                size={34}
              />
            </View>
            <Text style={styles.Statistics_Bottom_Text}>346</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Background: {
    backgroundColor: 'white',
  },
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  Statistics_Card: {
    backgroundColor: '#C9F24D',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width:150,
  },
  Container_Children: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  User_Img: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  User_Greeting: {
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#212122',
  },
  Statistics: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Statistics_Children: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Statistics_Top_Text:{
    fontSize: 17,
  },
  Statistics_Bottom_Text:{
  fontSize: 18,
  },
});

export default UserPlan;
