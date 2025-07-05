import { View,Text,ScrollView,Image ,Button} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

const list=[
    {id:"01", img:require("./assets/img1.jpg")},
    {id:"02", img:require("./assets/img2.jpg")},
    {id:"03",img:require("./assets/img3.jpg")},
    {id:"04",img:require("./assets/img4.jpg")},
    {id:"05",img:require("./assets/img5.jpg")},
    {id:"06",img:require("./assets/img6.jpg")}
]
 const Tab=createBottomTabNavigator();
function Home(){
  
    <View>
       <View>
       <View style={{backgroundColor:"#ff00ff"}}>
            <Text style={{padding:5,margin:5,marginLeft:270,fontSize:25,fontWeight:"900"}}>Touch</Text>
        </View>
        <ScrollView horizontal>
         {list.map((item)=>(<Image source={item.img} style={{width:70,height:70,margin:5,padding:10,borderRadius:20}}/>
           ))}
      </ScrollView>  
    </View>
    <View>
         <ScrollView style={{paddingHorizontal:10}}> 
            <View style={{flexDirection:"row",marginTop:15}}>
                <Text style={{margin:5}}> Touch_scoller123</Text>
                <Button title="follow" color="#ff00ff" />
                <Image source={require("./assets/dp.jpg")} style={{width:35,height:35,borderRadius:40,marginLeft:110}}/>     
            </View>
            <Image source={require("./assets/profile4.jpg")} style={{width:400,height:400,alignSelf:"center",alignItems:"center",marginTop:10}}/>
        
          <View style={{flexDirection:"row",marginTop:15}}>
                <Text style={{margin:5}}> Always_scoller123</Text>
                <Button title="follow" color="#ff00ff" />
                <Image source={require("./assets/img1.jpg")} style={{width:35,height:35,borderRadius:40,marginLeft:110}}/>     
            </View>
            <Image source={require("./assets/profile1.jpg")} style={{width:400,height:400,alignSelf:"center",alignItems:"center",marginTop:10}}/>

        </ScrollView>
    </View>
    </View>
}

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator screenOptions={{ tabBarShowLabel:false,tabBarActiveTintColor:"black" ,tabBarStyle:{
         backgroundColor:"#ff00ff",height:50,position:"absolute"
       }}}>
          <Tab.Screen name="homescreen" component={Home} options={{tabBarIcons:()=><Ionicons name="home" size={20}  />}} />
          <Tab.Screen name="search" component={search}  options={{tabBarIcons:()=><Ionicons name="search" size={20} />
          <Tab.Screen name="homescreen" component={upload}  options={{tabBarIcons:()=><Ionicons name="upload" size={20} />
          <Tab.Screen name="homescreen" component={reels}  options={{tabBarIcons:()=><Ionicons name="video" size={20} />
          <Tab.Screen name="homescreen" component={profile}  options={{tabBarIcons:()=><Ionicons name="person" size={20} />
       </Tab.Navigator>
    </NavigationContainer>

  )
}
