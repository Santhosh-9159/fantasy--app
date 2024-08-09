import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image ,Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function TermsAndCondition(){
    const navigation = useNavigation();
 
    return (
        <View style={styles.container}>
          <LinearGradient
            colors={['#CED7FF','#DDE4FF',"#FDFDFF"]}
            style={styles.gradient}
          >
            <View style={styles.header}>
              <View style={styles.backButton}>
              <Pressable onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={22} color="black" />
                </Pressable>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>TERMS AND CONDITIONS</Text>
              </View>
            </View>
    
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.section}>
              <Text style={styles.sectionText}>
                 Last Updated: [Date]
              </Text>
                <Text style={styles.sectionText}>
                Welcome to Impact11! By accessing or using our app, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree with these Terms, you must not use our App.
                </Text>
              </View>
    
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Acceptance of Terms</Text>
                
                <Text style={styles.sectionText}>
                By registering, accessing, or using our App, you accept and agree to be bound by these Terms, our Privacy Policy, and any other rules or policies we may publish.
                </Text>
              </View>
    
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Eligibility</Text>         
                <Text style={styles.sectionText}>
                You must be at least 18 years old to use our App. By using the App, you represent and warrant that you meet these eligibility requirements.
 
                 </Text>
                
              </View>
    
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account Registration</Text>     
                <Text style={styles.sectionText}>
                         To participate in fantasy betting, you must create an account. You agree to:
                </Text>
                  <Text style={styles.sectionOne}>
                        - Provide accurate, current, and complete information during the registration process.
                  </Text>
                  <Text style={styles.sectionOne}>
                        - Maintain and promptly update your account information.
                  </Text>
                  <Text style={styles.sectionOne}>
                        - Maintain the security of your account and accept all risks of unauthorized access.
                  </Text>

              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Use of the App</Text>                
                <Text style={styles.sectionText}>
                You agree to use the App in accordance with these Terms and all applicable laws and regulations. You will not:
                </Text>
                  <Text style={styles.sectionOne}>
                  - Use the App for any illegal or unauthorized purpose.
                  </Text>
                  <Text style={styles.sectionOne}>
                   - Violate any applicable laws, regulations, or third-party rights.
                  </Text>
                  <Text style={styles.sectionOne}>
                    - Interface with or disrupt the App or Servers.
                  </Text>

              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Betting and Fantasy Contests</Text>              
                  <Text style={styles.sectionText}>
                  - All bets and fantasy contests are subject to our rules and regulations.
                  </Text>
                  <Text style={styles.sectionOne}>
                   - The outcomes of all contests are determined by objective criteria.
                  </Text>
                  <Text style={styles.sectionOne}>
                    - We reserve the right to cancel,suspend or modify any contest or bet at any time.
                  </Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Fees and Payments</Text>   
                  <Text style={styles.sectionText}>
                  - Entry fees for contestnand other charges will be clearly stated.
                  </Text>
                  <Text style={styles.sectionOne}>
                   - You agree to pay all applicable fees associated with your participation.
                  </Text>
                  <Text style={styles.sectionOne}>
                    - We may use third-party payment processors. Your use of such services is subject to their terms and conditions.
                  </Text>
              </View>
              
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Withdrawals</Text>
                
                  <Text style={styles.sectionText}>
                  -Withdrawals of winnings are subject to our verification procedures.
                  </Text>
                  <Text style={styles.sectionOne}>
                   - We reserve the right to delay or deny any withdrawal request if fraud, suspicious activity, or any other breach of these Terms is suspected.
                  </Text>
              </View>
              
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Responsible Gaming</Text>               
                  <Text style={styles.sectionText}>
                  - We are committed to promoting Responsible gaming.
                  </Text>
                  <Text style={styles.sectionOne}>
                  - You may set deposit, betting, and time limits.
                  </Text>
                  <Text style={styles.sectionOne}>
                  - If you need help, we provide resources and support for managing gambling behavior.
                  </Text>
              </View>
              

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Intellectual Property</Text>               
                  <Text style={styles.sectionText}>
                  - All content and materials on the App are owned by us or our licensors.
                  </Text>
                  <Text style={styles.sectionOne}>
                  - You may not use any of our trademarks, logos, or other propriretary information without our consent.
                  </Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Termination</Text>              
                  <Text style={styles.sectionText}>
                  - We reserve the right to terminate or suspend your account at any time for any reason, including breach of these Terms.
                  </Text>
                  <Text style={styles.sectionOne}>
                  - Upon termination, your right to use the App will cause immediately.
                  </Text>
              </View>
              
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Limitation of Liability</Text>      
                  <Text style={styles.sectionText}>
                  - To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.
                  </Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Indemnification</Text>      
                  <Text style={styles.sectionText}>
                  - You agree to indemnify and hold us harmless from any claims, damages, liabilities, and expense arising out of your use of the App or violation of these Terms.
                  </Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Governing Law</Text>      
                  <Text style={styles.sectionText}>
                  - These Terms are governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in [Jurisdiction].
                  </Text>
              </View>


              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Changing to Terms</Text>        
                  <Text style={styles.sectionText}>
                  - We made modify these Terms at any time.We will notify you of any changes by posting the new Terms on the App.Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
                  </Text>
              </View>
            </ScrollView>
          </LinearGradient>
        </View>
      );
    }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      gradient: {
        flex: 1,
      },
      header: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 55,
        paddingLeft: 13,
        paddingBottom:10
      },
      backButton: {
        width: wp('20%'),
      },
      titleContainer: {
        width: wp('50%'),
        justifyContent: 'center',
        alignItems: 'center',
        // height:hp(5)
      },
      title: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        // height:hp(4)
      },
      scrollViewContent: {
        paddingBottom: 20, // Adjust padding as needed
      },
      section: {
        padding: 20,
        paddingTop:5,
        width: wp('100%'),
      },
      sectionTitle: {
        color: '#2B2D33',
        fontSize: hp(2),
        fontWeight: '800',
        paddingTop: 2,
      },
      sectionText: {
        color: '#2D2E33',
        lineHeight: 20,
        fontSize: 13,
        paddingTop: 10,
      },
      sectionOne: {
        color: '#2D2E33',
        lineHeight: 20,
        fontSize: 13,
        // paddingTop: 10,
      }
    });







    