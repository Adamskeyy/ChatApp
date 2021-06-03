import React from 'react';
// react native
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
// utils
import { colors } from '../utils';

const RoomsNavigation = () => {
  return (
    <View style={styles.navigation}>
      <Text style={styles.header}>Rooms</Text>
      <View style={styles.icons}>
        <View style={styles.icon}>
          <SimpleLineIcons
            name="magnifier"
            size={25}
            color={colors.SECONDARY_COLOR}
          />
        </View>
        <View style={styles.icon}>
          <Ionicons name="people" size={25} color={colors.SECONDARY_COLOR} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 40,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: colors.PRIMARY_COLOR,
  },
  header: {
    fontSize: 30,
    flex: 1,
    color: colors.SECONDARY_COLOR,
    fontWeight: '700',
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: 20,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
});

export default RoomsNavigation;
