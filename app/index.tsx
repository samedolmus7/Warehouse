import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function Index() {
  const [isScannerVisible, setScannerVisible] = useState(false);

  const handleScannerToggle = () => {
    setScannerVisible(!isScannerVisible);
  };

  const handleScanResult = (event: { data: string }) => {
    Alert.alert('Scanned Data', event.data ?? 'No data found');
    setScannerVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Scan QR Code" onPress={handleScannerToggle} />
      {isScannerVisible && (
        <QRCodeScanner
          onRead={handleScanResult}
          topContent={
            <Text style={styles.centerText}>
              Scan a QR code
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable} onPress={handleScannerToggle}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});