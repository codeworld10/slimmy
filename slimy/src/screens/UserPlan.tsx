/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-easy-icon';
import BottomNav from '../Components/Navigation/BottomNav';

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
              <Text style={styles.Statistics_Top_Text}>
                Completed {'\n'} exercises
              </Text>
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
        <View style={styles.Steps_View}>
          <View style={styles.Steps_View_Children}>
            <Text style={styles.Steps_Count}>7 765</Text>
            <Text style={styles.Steps_Text}>steps</Text>
          </View>
          <Icon type="ionicon" name="ios-walk" size={34} color="white" />
        </View>
        <View>
          <Text style={styles.Activity}>Today's Activity</Text>
        </View>

        {/* Images including text horizontal scroll */}

        <View style={styles.Activity_Image_View}>
          <ImageBackground
            source={require('../../assets/images/julie.jpg')}
            style={styles.Activity_Image}>
            <View style={styles.Activity_Space}>

              <View style={styles.Activity_Image_Save_Icon}>
                <Icon type="feather" name="bookmark" color="white" size={25} />
              </View>

              <View style={styles.Activity_Image_Text_Container}>
                <Text style={styles.Activity_Heading_Text}>
                  Full Body Workout
                </Text>
                <View style={styles.Activity_Child_Text}>

                  <View style={styles.Activity_Children_Text}>
                  <Icon style={styles.Activity_Icons} type="simple-line-icon" name="fire" color="white" size={25} />
                    <Text style={styles.Activity_Icon_Text}>346 kcal</Text>
                  </View>

                  <View style={styles.Activity_Children_Text}>
                  <Icon style={styles.Activity_Icons} type="antdesign" name="clockcircleo" color="white" size={25} />
                    <Text style={styles.Activity_Icon_Text}>20 min</Text>
                  </View>

                </View>
                <View />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
      <View>
        {/* Log weight button */}
        <BottomNav />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Background: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
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
    paddingVertical: 20,
    width: 150,
    borderRadius: 20,
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

  Statistics_Top_Text: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 15,
    color: '#212122',
  },

  Statistics_Bottom_Text: {
    fontSize: 18,
    fontWeight: '800',
    color: '#212122',
    paddingHorizontal: 5,
  },

  Steps_View: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#212122',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  Steps_View_Children: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  Steps_Count: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 5,
    fontWeight: '800',
  },

  Steps_Text: {
    color: 'white',
    fontSize: 12,
  },

  Activity: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },

  Activity_Image_View: {
    paddingHorizontal: 40,
    paddingBottom: 20,
    display: 'flex',
  },

  Activity_Image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    height: 250,
  },

  Activity_Space: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  Activity_Image_Save_Icon: {
    backgroundColor: 'rgba(155,155,155,0.50)',
    borderRadius: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: 'flex',
    alignSelf: 'flex-end',
  },

  Activity_Image_Text_Container: {
    marginBottom: 5,
  },

  Activity_Heading_Text: {
    fontSize: 21,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    alignSelf: 'flex-start',
    paddingVertical:10,
  },

  Activity_Child_Text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  Activity_Children_Text: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical:10,
    alignItems:'center',
    backgroundColor: 'rgba(240, 244, 250, 0.4)',
    borderRadius:20,
    paddingHorizontal:10,
  },
  Activity_Icons:{
paddingHorizontal:5,

  },
  Activity_Icon_Text:{
    color:'white',
    fontSize:13,
    fontWeight: '700',
  },
});

export default UserPlan;
