import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";


const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to camara roll is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    // console.log(pickerResult)

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Sharing, is not available on your plataform');
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Selecciona una imagen </Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
      >
        <Image
          source={{
            uri: 
            selectedImage !== null
              ? selectedImage.localUri
              : "https://picsum.photos/200/200",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      {selectedImage ? (
        <TouchableOpacity onPress={openShareDialog}>
          <Text style={styles.buttonText}> Comparte esta imagen </Text>
        </TouchableOpacity>
      ) : (
        "https://picsum.photos/200/200"
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 30,
    color: 'white'
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'deepskyblue',
    padding: 7,
    marginTop: 7
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});

export default App;