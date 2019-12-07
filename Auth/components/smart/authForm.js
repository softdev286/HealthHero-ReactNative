import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import localStorage from 'react-native-local-storage';
import * as CommonConstant from '../../../Components/commonConstant';

const { width, height } = Dimensions.get('window');

const background = require('../../../Assets/background_auth.png');
const userIcon = require('../../../Assets/user.png');
const lockIcon = require('../../../Assets/lock.png');
const facebookIcon = require('../../../Assets/facebook.png');
const twitterIcon = require('../../../Assets/twitter.png');
const googleIcon = require('../../../Assets/google.png');
const linkedinIcon = require('../../../Assets/linkedin.png');
const arrow = require('../../../Assets/right_arrow.png');
const triangle = require('../../../Assets/triangle.png');


export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email : '',
      password : '',
      confirmPassword: '',
      selectedButton: 2,
    };
  }

  componentWillReceiveProps(newProps) {

    if (newProps.status == 'loginingIn') {

    } else if (newProps.status == 'loggedIn') {

    } else if (newProps.status == 'logIn failed') {

    }
  }

  onShowLogIn() {
    this.setState({ selectedButton: 2 });
    this.setState({ email : '' });
    this.setState({ password : '' });
    this.setState({ confirmPassword : '' });
  }

  onShowSignUp() {
    this.setState({ selectedButton: 1 });
    this.setState({ email : '' });
    this.setState({ password : '' });
    this.setState({ confirmPassword : '' });
  }

  onLogIn () {

    if (this.state.email == '') {
      Alert.alert('Please enter email address.');
      return;
    }

    if (this.state.password == '') {
      Alert.alert('Please enter password.');
      return;
    }

    // this.props.login(this.state.email, this.state.password);

    localStorage.get(CommonConstant.user_mode)
      .then((data) => {
        if ((data == CommonConstant.user_client) || (data == CommonConstant.user_trainer)) {
          Actions.Main({ user_mode: data });
          return;
        }
        
        Actions.WhoAreYou();
      });    
  }

  onSignUp() {
    Actions.WhoAreYou();
  }

  onForgotPassword() {
    Alert.alert('Clicked onForgotPassword');
  }

  onFacebook() {
    Alert.alert('Clicked onFacebook');
  }

  onTwitter() {
    Alert.alert('Clicked onTwitter');
  }

  onGoogle() {
    Alert.alert('Clicked onGoogle');
  }

  onLinkedIn () {
    Alert.alert('Clicked onLinkedIn');
  }

  get showSignUp () {

    return (
      <View style={ styles.mainContentContainer }>
        <View style={ styles.inputWrap }>
          <View style={ styles.iconWrap }>
            <Image source={ userIcon } style={ styles.icon } resizeMode="contain" />
          </View>
          <TextInput
            placeholder="Enter your Email"
            placeholderTextColor="#9e9e9e"
            color="#000"
            style={ styles.textInput }
            value={ this.state.email }
            onChangeText={ (text) => this.setState({ email: text }) }
          />
        </View>
        <View style={ styles.inputWrap }>
          <View style={ styles.iconWrap }>
            <Image source={ lockIcon } style={ styles.icon } resizeMode="contain" />
          </View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9e9e9e"
            color="#000"
            style={ styles.textInput }
            secureTextEntry
            value={ this.state.password }
            onChangeText={ (text) => this.setState({ password: text }) }
          />
        </View>
        <View style={ styles.inputWrap }>
          <View style={ styles.iconWrap }>
            <Image source={ lockIcon } style={ styles.icon } resizeMode="contain" />
          </View>
          <TextInput
            placeholder="Repeat Password"
            placeholderTextColor="#9e9e9e"
            color="#000"
            style={ styles.textInput }
            secureTextEntry
            value={ this.state.confirmPassword }
            onChangeText={ (text) => this.setState({ confirmPassword: text }) }
          />
        </View>
        <View style={ styles.arrowButtonContainer }>
          <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onSignUp() }>
            <View style={ styles.arrowButton }>
              <Image source={ arrow } style={ styles.imageArrow } />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  get showLogin () {

    return (
      <View style={ styles.mainContentContainer }>
        <View style={ styles.inputWrap }>
          <View style={ styles.iconWrap }>
            <Image source={ userIcon } style={ styles.icon } resizeMode="contain" />
          </View>
          <TextInput
            placeholder="Enter your Email"
            placeholderTextColor="#9e9e9e"
            color="#000"
            style={ styles.textInput }
            value={ this.state.email }
            onChangeText={ (text) => this.setState({ email: text }) }
          />
        </View>
        <View style={ styles.inputWrap }>
          <View style={ styles.iconWrap }>
            <Image source={ lockIcon } style={ styles.icon } resizeMode="contain" />
          </View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9e9e9e"
            color="#000"
            style={ styles.textInput }
            secureTextEntry
            value={ this.state.password }
            onChangeText={ (text) => this.setState({ password: text }) }
          />

          <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onForgotPassword() }>
            <Text style={ styles.forgotPasswordText }>Forgot?</Text>
          </TouchableOpacity>

        </View>
        <View style={ styles.arrowButtonContainer }>
          <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onLogIn() }>
            <View style={ styles.arrowButton }>
              <Image source={ arrow } style={ styles.imageArrow } />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={ styles.lineOR }>OR</Text>

        <View style={ styles.socialContainer }>
          <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onFacebook() }>
            <View style={ styles.socialButton }>
              <Image source={ facebookIcon } style={ styles.socialIcon } resizeMode="contain" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onTwitter() }>
            <View style={ styles.socialButton }>
              <Image source={ twitterIcon } style={ styles.socialIcon } resizeMode="contain" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onGoogle() }>
            <View style={ styles.socialButton }>
              <Image source={ googleIcon } style={ styles.socialIcon } resizeMode="contain" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onLinkedIn() }>
            <View style={ styles.socialButton }>
              <Image source={ linkedinIcon } style={ styles.socialIcon } resizeMode="contain" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  render() {
    const { status } = this.props;

    return (
      <View style={ styles.container }>
        <View style={ styles.topContainer }>
          <Image source={ background } style={ styles.background } resizeMode="cover">
            <View style={ styles.authContainer }>
              <View style={ styles.authButtonContainer }>
                <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onShowSignUp() }>
                  <View style={ styles.authButton }>
                    <Text style={ styles.buttonText }>SIGNUP</Text>
                    {
                      this.state.selectedButton == 1 ?
                        <Image source={ triangle } style={ styles.imageTriangle } />
                        :
                        <View style={ styles.buttonPaddingView } />
                    }
                  </View>
                </TouchableOpacity>
              </View>
              <View style={ styles.authButtonContainer }>
                <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onShowLogIn() }>
                  <View style={ styles.authButton }>
                    <Text style={ styles.buttonText }>LOGIN</Text>
                    {
                      this.state.selectedButton == 2 ?
                        <Image source={ triangle } style={ styles.imageTriangle } />
                        :
                        <View style={ styles.buttonPaddingView } />
                    }
                  </View>
                </TouchableOpacity>
              </View>

            </View>
         </Image>
        </View>
        <View style={ styles.bottomContainer }>

          {
            this.state.selectedButton == 1 ?
              this.showSignUp
              :
              this.showLogin
          }

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1.743,
  },
  bottomContainer: {
    flex: 1,
  },
  background: {
    width,
    height: height * 0.635,
  },
  authContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  authButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  authButton: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 50,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    paddingBottom: 5,
  },
  buttonPaddingView:{
    paddingBottom: 12,
  },
  imageTriangle: {
    width: 24,
    height: 12,
  },
  mainContentContainer: {
    flex: 1,
    marginVertical: 10,
  },
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 23,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  imageArrow: {
    width: 30,
    height: 24,
  },
  arrowButtonContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  arrowButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 50,
  },
  lineOR :{
    flex: 0.5,
    textAlign:'center',
    backgroundColor: 'transparent',
    color:'#4e4f4f',
    fontSize:12,
  },
  socialContainer: {
    flex: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    flexDirection:'row',
    marginHorizontal: 50,
    paddingVertical: 10,
  },
  socialButton: {
    backgroundColor: 'transparent',
  },
  socialIcon: {
    height:40,
    width:40,
  },
  forgotPasswordText: {
    color: '#7cd5fd',
    backgroundColor: 'transparent',
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
  },
});