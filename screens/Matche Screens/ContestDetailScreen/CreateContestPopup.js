import React from 'react';
import { Modal, Pressable, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CreateContestPopup = ({ visible, onClose  }) => {
  const navigation = useNavigation();
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <View style={{ paddingTop: 20 }}>
                <View style={styles.inputContainer}>
                  <View style={{ width: '50%' }}>
                    <Text style={styles.inputLabel}>Enter Contest Code</Text>
                  </View>
                  <View style={styles.joinButtonContainer}>
                    <Pressable>
                      <Text style={styles.joinButtonText}>JOIN</Text>
                    </Pressable>
                  </View>
                </View>
              </View>

              <View style={styles.createContestContainer}>
                <View style={styles.createContestButton}>
                  <View style={{ width: '13%' }}>
                    <Feather name="plus-circle" size={24} color="white" />
                  </View>
                  <View>
                    <Pressable 
                      style={styles.createContestPressable}
                      onPress={() => {
                        onClose(); 
                        navigation.navigate('CreateContest');
                      }}
                    >
                      <Text style={styles.createContestText}>CREATE A CONTEST</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default CreateContestPopup;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    borderColor: '#808080',
  },
  inputLabel: {
    fontWeight: '700',
    color: '#4D4D4D'
  },
  joinButtonContainer: {
    width: '40%',
    backgroundColor: '#3E57C4',
    borderRadius: 7,
  },
  joinButtonText: {
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    padding: 8,
  },
  createContestContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  createContestButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#3E57C4',
    padding: 9,
    borderRadius: 6,
  },
  createContestPressable: {
    backgroundColor: '#3E57C4',
  },
  createContestText: {
    color: '#fff',
    fontWeight: '800',
  },
});
