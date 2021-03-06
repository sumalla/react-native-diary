// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image, SectionList, TouchableOpacity } from 'react-native';
// Common
import { Navigation, ThirdPicker, DateManager, Toast } from '../../common/index';
// Utils
import { ScreenWidth, ScreenHeight, StreamColor } from '../../utils/index';
import { LineColor } from '../../utils/UIUtils';
import Line from '../../common/Line/Line';

class SectionFooter extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Line color={LineColor} left={12}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
});

export default SectionFooter;