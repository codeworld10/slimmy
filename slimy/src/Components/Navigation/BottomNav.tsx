/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-easy-icon';
import { useNavigation } from '@react-navigation/native';


const BottomNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Bottom_Nav}>
      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('UserPlan')}
        >
          <Icon
            type="foundation"
            name="clipboard-notes"
            color="grey"
            size={34}
          />
          <Text>Plan</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Icon
            type="material-community"
            name="weight-lifter"
            color="grey"
            size={34}
          />
          <Text>Workouts</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Icon
            type="ionicon"
            name="bar-chart-outline"
            color="grey"
            size={34}
          />
          <Text>Progress</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('UserProfile')}
        >
          <Icon type="antdesign" name="user" color="grey" size={34} />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Bottom_Nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

export default BottomNav;
