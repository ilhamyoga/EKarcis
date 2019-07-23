import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel'

const {width, height} = Dimensions.get('window')

class MyProfileScreen extends Component{
    //nama-, to tlp-, email-, alamat-, tgl lahir-, gender-, pekerjaan-, pprofil, points
    constructor(props){
        super(props)
        this.state = {
            isLogged:false,
        }
    }
    static navigationOptions = ({navigation}) =>{
        return{
            header:null
        }
    }
    render(){
        const {isLogged} = this.state
        return(
            <View style={{flex:1}}>
                {/* <LinearGradient style={{flex:1}} start={{x: 0, y: 0}} end={{x: 2, y: 2}} colors={['#60935C','#9effa6']}/> */}
                <Image style={{flex:1, width:'100%', height:'100%'}} source={require('../../assets/images/5.png')}/>
                {isLogged?
                <View style={{flex:2, backgroundColor:'#F2F6FE'}}>
                    <ScrollView>
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'center', padding:15, elevation:5, backgroundColor:'white', borderWidth:0.1, borderColor:'grey'}}>
                            <View style={{alignItems:'center', justifyContent:'center', width:45, height:45, borderRadius:30, backgroundColor:'#F0F0F0'}}><FontAwesome name="user" style={{fontSize:20,color:'#353535'}}/></View>
                            <View style={{flex:5, justifyContent:'center', marginLeft:20}}><Text style={{fontSize:20}}>Your Profile</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'center', padding:15, elevation:5, backgroundColor:'white', borderWidth:0.1, borderColor:'grey'}}>
                            <View style={{alignItems:'center', justifyContent:'center', width:45, height:45, borderRadius:30, backgroundColor:'#F0F0F0'}}><FontAwesome name="play-circle" style={{fontSize:20,color:'#353535'}}/></View>
                            <View style={{flex:5, justifyContent:'center', marginLeft:20}}><Text style={{fontSize:20}}>Preference</Text></View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                :
                <View style={{flex:2, backgroundColor:'#F2F6FE',alignItems:'center', justifyContent:'center', opacity:0.3}}>
                    <Image style={{width:250, height:250}} source={require('../../assets/images/6.png')}/>
                    <Text style={{color:'#575757', fontSize:20}}>Anda belum login</Text>
                </View>
                }
                <View style={{flex:1,position:'absolute', alignItems:'center', width:'100%'}}>
                {isLogged?
                    <Image style={{width:130, height:130, borderRadius:70, margin:25, borderWidth:5, borderColor:'white'}} source={{uri:'https://i0.wp.com/cultofdigital.com/wp-content/uploads/2018/01/wallpapers-whatsapp-cute-panda.jpg?resize=500%2C887'}} />
                :
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={{flex:1,backgroundColor:'green', padding:15, borderRadius:5, top:height/9, elevation:5}}>
                        <Text style={{color:'white', fontSize:20}}>Login</Text>
                    </TouchableOpacity>
                }
                </View>
                {isLogged&&<View style={{position:'absolute', left:'5%', top:'3%'}}>
                    <TouchableOpacity style={{padding:5}} onPress={()=>this.props.navigation.navigate('MyEditProfileScreen')}>
                        <FontAwesome name="pencil" style={{color:'white', fontSize:25, fontWeight:'bold'}}/>
                    </TouchableOpacity>
                </View>}
                {isLogged&&<View style={{position:'absolute', right:'5%', top:'3%'}}>
                    <TouchableOpacity style={{padding:5}}>
                        <FontAwesome name="cogs" style={{color:'white', fontSize:25, fontWeight:'bold'}}/>
                    </TouchableOpacity>
                </View>}
            </View>
        )
    }
}

export default MyProfileScreen