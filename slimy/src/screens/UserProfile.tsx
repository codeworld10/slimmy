/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-easy-icon';
import BottomNav from '../Components/Navigation/BottomNav';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const UserProfile = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.Icons_Horizontal}>
          <Icon
            type="ionicon"
            name="notifications-outline"
            size={34}
            color="#212122"
          />
           <Image
            style={styles.Profile_Image}
            source={require('../../assets/images/julie.jpg')}
          />
          <Icon type="antdesign" name="setting" color="#212122" size={34} />
        </View>
        <View>
          <Text style={styles.User_Name}>Julia Smith</Text>
        </View>
        <View style={styles.Card}>
          <View style={styles.Weight_Icon}>
            <Text style={styles.Weight_Text}>WEIGHT</Text>
            <Icon type="ionicon" name="woman-outline" color="white" size={28} />
          </View>
          <View style={styles.Progress_Bar_View}>
          <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.8}
          color="#C9F24D"
          />
          </View>
          <View style={styles.Kg_View}>
            <View>
              <Text style={styles.Kg_Title}>start</Text>
              <Text style={styles.Kg_Text}>68kg</Text>
            </View>

            <View>
              <Text style={styles.Kg_Title}>Current</Text>
              <Text style={styles.Kg_Text}>56kg</Text>
            </View>

            <View>
              <Text style={styles.Kg_Title}>Target</Text>
              <Text style={styles.Kg_Text}>52kg</Text>
            </View>
          </View>
        </View>

        {/* Log weight button */}
        <View style={styles.Log_Btn_View}>
          <TouchableOpacity style={styles.Log_Btn_Touch}>
            <Text style={styles.Log_Btn_Text}>Log weight</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Menu is started from here */}
        <View style={styles.Menu_View}>
          <View style={styles.Menu_Child_View}>
            <Icon
              style={styles.Menu_Icons}
              type="antdesign"
              name="user"
              color="#212122"
              size={18}
            />
            <Text style={styles.Menu_Text}>Edit profile</Text>
          </View>
          <View>
            <Icon
              style={styles.Menu_Icons}
              type="simple-line-icon"
              name="arrow-right"
              color="#212122"
              size={17}
            />
          </View>
        </View>

        <View style={styles.Menu_View}>
          <View style={styles.Menu_Child_View}>
            <Icon
              style={styles.Menu_Icons}
              type="feather"
              name="bookmark"
              color="#212122"
              size={18}
            />
            <Text style={styles.Menu_Text}>Saved workouts</Text>
          </View>
          <View>
            <Icon
              style={styles.Menu_Icons}
              type="simple-line-icon"
              name="arrow-right"
              color="#212122"
              size={17}
            />
          </View>
        </View>
        <View style={styles.Menu_Padding_Bottom}>
          <View style={styles.Menu_View}>
            <View style={styles.Menu_Child_View}>
              <Icon
                style={styles.Menu_Icons}
                type="material-community"
                name="history"
                color="#212122"
                size={18}
              />
              <Text style={styles.Menu_Text}>History</Text>
            </View>
            <View>
              <Icon
                style={styles.Menu_Icons}
                type="simple-line-icon"
                name="arrow-right"
                color="#212122"
                size={17}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.Bottom}>
        <BottomNav />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  Icons_Horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Profile_Image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  User_Name: {
    textAlign: 'center',
    fontSize: 20,
    color: '#212122',
    paddingVertical: 5,
  },
  Card: {
    backgroundColor: '#212122',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
  },
  Progress_Bar_View:{
 paddingHorizontal: 20,
  },

  Weight_Icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Weight_Text: {
    color: 'white',
    fontSize: 20,
  },
  Kg_View: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Kg_Title: {
    color: 'grey',
    fontSize: 15,
  },
  Kg_Text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 5,
  },
  Log_Btn_View: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Log_Btn_Touch: {
    backgroundColor: '#212122',
    borderRadius: 30,
  },
  Log_Btn_Text: {
    textAlign: 'center',
    paddingVertical: 15,
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },

  Menu_View: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#eeeeee',
    borderRadius: 30,
    marginTop: 10,
  },

  Menu_Child_View: {
    display: 'flex',
    flexDirection: 'row',
  },

  Menu_Text: {
    color: '#212122',
    fontSize: 15,
    fontWeight: '600',
  },

  Menu_Icons: {
    paddingHorizontal: 10,
  },
  Menu_Padding_Bottom: {
    paddingBottom: 80,
  },
});

export default UserProfile;
