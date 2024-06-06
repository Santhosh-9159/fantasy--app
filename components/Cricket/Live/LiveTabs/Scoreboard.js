import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Scoreboard = () => {
  const [Drop, setDrop] = useState(false)
  const [Captain, setCaptain] = useState(true)



  return (
    <ScrollView>

<View style={{width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",paddingTop:10}}>
      
      <Pressable onPress={()=>{setDrop(!Drop)}} style={{width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",borderWidth:1.5,borderRadius:5,borderColor:"#cccccc"}}>
                <View style={{width:"95%",flexDirection:"row",display:"flex",justifyContent:"space-between",padding:10}}>
                       <Text  style={{fontWeight:"bold"}}>Chennai Super Kings</Text>
                       <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
                       <Text style={{fontWeight:"bold"}}>179/9 (20)</Text>
                       <Pressable onPress={()=>{setDrop(!Drop)}}>
                        {
                          Drop ? <AntDesign name="up" size={18} color="black" />:<AntDesign name="down" size={18} color="black" />
                        }
                       </Pressable>
                      
                       </View>
                </View>
                {
        Drop && <View style={{width:"100%",flexDirection:"column",display:"flex",alignItems:"center",gap:15,paddingBottom:5}}>
        <View style={{width:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <View style={{width:"100%",flexDirection:"row",paddingLeft:5,paddingRight:5}}>
                <View style={{width:"50%"}}>
                   <Text style={{fontSize:12}}>Batter</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>R</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>B</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>4s</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>6s</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>SR</Text>
                </View> 
                
        </View>

        <View style={{width:"100%",flexDirection:"row",paddingTop:5,display:"flex",alignItems:"center",borderBottomWidth:1.5,borderColor:"#979797",paddingLeft:5,paddingRight:5}}>
                <View style={{width:"50%",flexDirection:"row",gap:5}}>
                    <View >
                       <Image source={require('../../../../assets/players/ravindra jadeja.png')} style={{height:50,width:50}}/> 
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flexDirection:"row",gap:3}}>
                      <Text style={{fontWeight:"bold"}}>R Gaikward</Text>
                      {
                          Captain && <Text style={{fontWeight:"bold"}}>(C)</Text>
                      }
                      </View>
                      <View>
                        <Text style={{fontSize:12}}>b M Siraj</Text>
                      </View>

                    </View>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>40</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>24</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>3</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>2</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>180</Text>
                </View> 
                
        </View>
        </View>
        
        <View style={{width:"95%",flexDirection:"row",paddingTop:5,display:"flex",alignItems:"center"}}>
              <View style={{width:"50%"}}>
               <Text style={{fontWeight:"bold"}}>Extras</Text>
              </View>
              <View style={{width:"15%"}}>
              <Text style={{fontWeight:"bold"}}>11</Text>
              </View>
              <View style={{width:"35%"}}>
              <Text style={{fontSize:12}}>B 4, LB 2, W 5, NB 0, P 0</Text>
              </View>
        </View>

        <View style={{width:"95%",flexDirection:"row",paddingTop:5,display:"flex",alignItems:"center"}}>
            <View style={{width:"50%"}}>
                  <Text style={{fontWeight:"bold"}}>Total</Text>
            </View>
            <View style={{width:"50%",flexDirection:"row",display:"flex",justifyContent:"flex-end",gap:5}}>
            <Text style={{fontWeight:"bold"}}>175/9</Text>
              <Text style={{fontWeight:"bold"}}>(20)</Text>
            </View>
        </View>

        <View style={{width:"100%",flexDirection:"column",paddingTop:5,display:"flex",alignItems:"center",borderBottomWidth:1.5,borderColor:"#979797"}}>
        <View style={{width:"95%",flexDirection:"row",paddingTop:5,display:"flex",alignItems:"center"}}>
          <Text style={{fontWeight:"bold",fontSize:14}}>Yet to bat</Text>
        </View>

        <View style={{width:"100%",flexDirection:"column",paddingTop:5,display:"flex"}}>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                  <View>
                       <Image source={require('../../../../assets/players/ravindra jadeja.png')} style={{height:50,width:50}}/> 
                    </View>
                    
                      <View >
                      <Text style={{fontWeight:"bold"}}>R Gaikward</Text>
                      </View>
                  </View>
        </View>
        </View>

       <View style={{width:"95%",flexDirection:"column",gap:5}}>
       <View style={{width:"100%",flexDirection:"row"}}>
                <View style={{width:"50%"}}>
                   <Text>Bowler</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>O</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>M</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>R</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>W</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>ER</Text>
                </View> 
                
        </View>
        <View style={{width:"100%",flexDirection:"row"}}>
                <View style={{width:"50%"}}>
                <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                  <View>
                       <Image source={require('../../../../assets/players/ravindra jadeja.png')} style={{height:50,width:50}}/> 
                    </View>
                    
                      <View >
                      <Text style={{fontWeight:"bold"}}>R Gaikward</Text>
                      </View>
                  </View>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>4</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>0</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>24</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>2</Text>
                </View>
                <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                <Text>6</Text>
                </View> 
                
        </View>
       </View>

        <View style={{width:"95%",flexDirection:"column"}}>
        <View style={{width:"100%",flexDirection:"row",paddingTop:5,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#eeeeee"}}>
           <View style={{width:"64%"}}>
                <Text style={{fontWeight:"400"}}>Fall of Wickets</Text>
           </View>
           <View style={{width:"36%",flexDirection:"row",display:"flex",justifyContent:"flex-end"}}>
             <View style={{width:"65%"}}>
                <Text style={{fontWeight:"400"}}>Score</Text>
             </View>
             <View style={{width:"35%",flexDirection:"row",display:"flex",justifyContent:"center"}}>
             <Text style={{fontWeight:"400"}}>Over</Text>
             </View>
           </View>
        </View>
        <View style={{width:"100%",flexDirection:"row",paddingTop:5,display:"flex",alignItems:"center",justifyContent:"center"}}>
           <View style={{width:"64%"}}>
                <Text style={{fontWeight:"500"}}>R Ravindra</Text>
           </View>
           <View style={{width:"36%",flexDirection:"row",display:"flex",justifyContent:"flex-end"}}>
             <View style={{width:"65%"}}>
                <Text style={{fontWeight:"500"}}>64/1</Text>
             </View>
             <View style={{width:"35%",flexDirection:"row",display:"flex",justifyContent:"center"}}>
             <Text style={{fontWeight:"500"}}>6.3</Text>
             </View>
           </View>
        </View>
        </View>
       </View>
   
      }
      </Pressable>
     

    </View>
    </ScrollView>
  )
}

export default Scoreboard

const styles = StyleSheet.create({})