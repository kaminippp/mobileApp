import { StyleSheet } from 'react-native';

import Colors from './colors';
import Fonts from '../config/fonts';

export default StyleSheet.create({
  Container: {
    backgroundColor: Colors.defaultBackground,
  },
  TextStyle: {
    color: Colors.DefaultBlue,
    fontSize: 12,
    fontFamily: Fonts.mainFont.fontFamily,
  },
  TabBarLabel: {
    fontSize: 12,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 7,
  },
  TabBarLabelActive: {
    color: Colors.DefaultBlue,
  },
  TabBar: {
    height: 56,
    // backgroundColor: Colors.DefaultBlue,
    borderTopColor: Colors.defaultBackground,
    shadowColor: Colors.cardShadowColor,
    shadowRadius: 8,
    shadowOpacity: 1,

  },
  TabItem: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    // shadowColor: Colors.cardShadowColor,
    // shadowRadius: 8,
    // shadowOpacity: 1,
    // borderWidth:.5,
    // borderColor:Colors.defaultBackground,

  },
  TabBarIcon: {
    width: 30,
    height: 30,
  },
  StatusIconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    // borderColor: Colors.borderImageColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DoneStatusIconWrapper: {
    backgroundColor: Colors.doneIconBg,
    borderWidth: 0,
  },
  ActiveStatusIconWrapper: {
    backgroundColor: Colors.activeIconBg,
    borderWidth: 0,
  },
});

export const EditProductFormStyles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  FormContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  Indicator: {
    backgroundColor: Colors.activeIconBg,
  },
  TabBar: {
    backgroundColor: Colors.defaultBackground,
    height: 60,
    justifyContent: 'center',
  },
  TabTitle: {
    backgroundColor: Colors.editProductsTabIconBg,
    overflow: 'hidden',
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabTitleText: {
    color: Colors.activeIconBg,
    fontSize: 12,
    lineHeight: 12,
  },
  ProductQuantityRow: {
    flexDirection: 'row',
  },
  ProductQuantityLeft: {
    flex: 0.5,
    paddingRight: 10,
  },
  ProductQuantityRight: {
    flex: 0.5,
    paddingLeft: 10,
  },
  AdditiveLeft: {
    flex: 0.5,
    marginTop: 20,
    marginBottom: 20,
  },
  AdditiveRight: {
    flex: 0.5,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  RequestedProductRow: {
    flexDirection: 'row',
    backgroundColor: Colors.requestedProductRowColor,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  RequestedProductName: {
    flex: 0.6,
  },
  RequestedProductQuantity: {
    flex: 0.4,
  },
  FieldTitle: {
    fontSize: 14,
    paddingBottom: 10,
    color: Colors.requestedProductTextColor,
  },
  RequestedProductValue: {
    fontWeight: 'bold',
    color: Colors.requestedProductTextColor,
  },
  TankCell: {
    flex: 0.3,
  },
  ProductCategoryCell: {
    flex: 0.4,
  },
  DelimeterWrapper: {
    backgroundColor: Colors.requestedProductRowColor,
    paddingRight: 15,
    paddingLeft: 15,
  },
  Delimeter: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: Colors.fieldLabelColor,
  },
  productUnavailableCheckbox: {
    paddingTop: 20,
  },
});
