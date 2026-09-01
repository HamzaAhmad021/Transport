import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';
import {COLORS} from '../../../Assests/Themes';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../../Components/CustomInput';
import CircleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';
import CustomIconInput from '../../../Components/CustomIconInput';
import ImageCropPicker from 'react-native-image-crop-picker';
import UploadIcon from '../../../Assests/Svg/Upload.svg';

const OnBoarding = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [contact, setContact] = useState('');
  const [cnic, setCnic] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const renderInput = () => (
    <View style={styles.inputView}>
      <Text style={styles.inputText}>Name</Text>
      <CustomInput
        placeholder={'Enter driver name'}
        placeholderTextColor={COLORS.grey}
        additionalStyle={styles.inputExtra}
        value={name}
        onChangeText={setName}
        cursorColor={COLORS.grayScale}
      />
      <Text style={styles.emailText}>Email Address</Text>
      <CustomInput
        placeholder={'Enter email address'}
        placeholderTextColor={COLORS.grey}
        additionalStyle={styles.inputExtra}
        value={email}
        onChangeText={setEmail}
        cursorColor={COLORS.grayScale}
      />
      <Text style={styles.dateText}>Date of Birth</Text>
      <CustomIconInput
        placeholder={'Select date of birth'}
        placeholderTextColor={COLORS.grey}
        value={birth}
        onChangeText={setBirth}
        cursorColor={COLORS.grayScale}
        Calender={true}
        editable={false}
      />
    </View>
  );

  const renderGender = () => (
    <View>
      <Text style={styles.selectText}>Select Gender</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          paddingRight: 50
        }}>
        <TouchableOpacity
          onPress={() => setSelectedGender('Male')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <CircleIcon
            name={
              selectedGender === 'Male'
                ? 'adjust'
                : 'checkbox-blank-circle-outline'
            }
            size={25}
            color={selectedGender === 'Male' ? COLORS.grayScale : COLORS.grey}
          />
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedGender('Female')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <CircleIcon
            name={
              selectedGender === 'Female'
                ? 'adjust'
                : 'checkbox-blank-circle-outline'
            }
            size={25}
            color={selectedGender === 'Female' ? COLORS.grayScale : COLORS.grey}
          />
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedGender('Other')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <CircleIcon
            name={
              selectedGender === 'Other'
                ? 'adjust'
                : 'checkbox-blank-circle-outline'
            }
            size={25}
            color={selectedGender === 'Other' ? COLORS.grayScale : COLORS.grey}
          />
          <Text style={styles.genderText}>Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleSavePress = () => {
    navigation.navigate(NavigationRoutes.HomeScreen);
  };

  const handleImagePicker = () => {
    ImageCropPicker.openPicker({
      width: 350,
      height: 350,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        setHeight(image.height);
        setWidth(image.width);
        console.log(image);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.grayScale}
      />

      <View style={styles.header}>
        <View style={styles.subHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon name="arrowleft" size={30} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.title}>OnBoarding</Text>
        </View>
        <TouchableOpacity onPress={handleSavePress}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <View style={styles.lineGroup}>
          <View style={styles.lineView} />
          <Text style={styles.lineText}>BASIC DETAILS</Text>
          <View style={styles.lineView} />
        </View>
        {renderInput()}
        {renderGender()}
        <Text style={styles.emergencyText}>Emergency Contact Number</Text>
        <CustomInput
          placeholder={'Enter number'}
          placeholderTextColor={COLORS.grey}
          additionalStyle={styles.inputExtra}
          value={contact}
          onChangeText={setContact}
          cursorColor={COLORS.grayScale}
        />
        <View style={styles.line}>
          <View style={styles.lineView} />
          <Text style={styles.lineText}>IDENTIFICATION</Text>
          <View style={styles.lineView} />
        </View>
        <Text style={styles.cnicText}>CNIC/PAN Number</Text>
        <CustomInput
          placeholder={'Enter CNIC/PAN number'}
          placeholderTextColor={COLORS.grey}
          additionalStyle={styles.inputExtra}
          value={cnic}
          onChangeText={setCnic}
          cursorColor={COLORS.grayScale}
        />
        <TouchableOpacity style={styles.imageView} onPress={handleImagePicker}>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage}}
              style={styles.selectedImage}
              resizeMode="cover"
            />
          ) : (
            <>
              <View style={styles.svg}>
                <UploadIcon />
              </View>
              <Text style={styles.picText}>Click to Upload CNIC/Pan Card</Text>
              <Text style={styles.sizeText}>(Max. File size: 25 MB)</Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default OnBoarding;
