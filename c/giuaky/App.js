import {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image , TextInput, TouchableOpacity, Item, FlatList} from 'react-native';


const doctor = [
  {
    name: 'dr. Olivia Wilson',
    major: 'Consultant - Physiotherapy',
    start: 'start3',
    image: require('./assets/dr1.png'),
  },
  {
    name: 'doctor2',
    major: 'major2',
    start: 'start2',
    image: require('./assets/dr2.png'),
  },
  {
    name: 'doctor3',
    major: 'major3',
    start: 'start3',
    image: require('./assets/snack-icon.png'),
  },
  {
    name: 'doctor4',
    major: 'major4',
    start: 'start4',
    image: require('./assets/snack-icon.png'),
  },
  {
    name: 'doctor5',
    major: 'major5',
    start: 'start5',
    image: require('./assets/snack-icon.png'),
  },
  {
    name: 'doctor6',
    major: 'major6',
    start: 'start6',
    image: require('./assets/snack-icon.png'),
  },

]

const category = [
  {
    name : 'Consulation',
    image : require('./assets/consul.png'),
  },
  {
    name : 'Dentist',
    image : require('./assets/dent.png')
  },
  {
    name : 'Cardiologist',
    image : require('./assets/card.png'),
  },
  {
    name : 'Hospital',
    image : require('./assets/hos.png'),
  },
  {
    name : 'Emergency',
    image : require('./assets/emer.png'),
  },
  {
    name : 'Labroratory',
    image : require('./assets/labro.png'),
  },

]

const doctorItem = ({data}) => {
  <View style={{alignItems: 'center'}}>
    <Image souce={data.image}/>
    <Text>{data.name}</Text>
  </View>
}

const cartegoryItem = ({data}) => {
  <View style={{flexDirection: 'row'}}>
    <Image souce={data.image}/>
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.name}</Text>
      <Text style={{fontSize: 18}}>{data.major}</Text>
      <Text style={{fontSize: 16}}>{data.start}</Text>
    </View>
  </View>
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style ={{flexDirection: 'row',}}>
          <Image style={styles.avatar} source={require('./assets/download.png')}/>
          <View style={{marginLeft: 10}}>
            <Text style ={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Welcome</Text>
            <Text style ={{fontSize: 18, color: 'white'}}>Dani Martines</Text>
          </View>
        </View>
        <View style ={{marginVertical: 30, flexDirection: 'row', backgroundColor: 'white', alignItems: 'center',borderRadius: 10, paddingHorizontal: 10}}>
          <TextInput
          style ={{ backgroundColor: 'white', height: 50,  padding: 10, fontSize: 18, color:'black', width: '90%'}}
          value = {searchQuery}
          onChangeText = {setSearchQuery}

          placeholder = 'Search doctor'
         
        />
        <Image style={{backgroundColor: 'white', height: 40, width: 40, resizeMode: 'strech'}} source={require('./assets/search.png') }/>     
        </View>
          
      </View>
      <View style = {styles.center}>
        <View style = {styles.categories}>
          <View style = {{flexDirection: 'row', width: '100%', justifyContent:'space-between'}}>
            <Text style = {{fontSize: 20, fontWeight:'bold' }}>Categories</Text>
            <Text style = {{fontSize: 20, fontWeight:'bold'}}>Show all</Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
            <View style={styles.catOption}>
              <Image souce={cartegoryItem.image}/>
              <Text>{category[0].name}</Text>
            </View>
            <View style={styles.catOption}>
              <Image souce={cartegoryItem.image}/>
              <Text>{category[1].name}</Text>
            </View>
            <View style={styles.catOption}>
              <Image souce={cartegoryItem.image}/>
              <Text>{category[2].name}</Text>
            </View>
            <View style={styles.catOption}>
              <Image souce={cartegoryItem.image}/>
              <Text>{category[0].name}</Text>
            </View>
            <View style={styles.catOption}>
              <Image souce={cartegoryItem.image}/>
              <Text>{category[0].name}</Text>
            </View>
            <View style={styles.catOption}>
              <Image souce={cartegoryItem.image}/>
              <Text>{category[0].name}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style = {styles.footer}>
        <TouchableOpacity style = {styles.footerButton}>
          <Image style = {styles.footerButtonImage} source={require('./assets/btn0.png')}/>
          <Text style = {styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.footerButton}>
          <Image style = {styles.footerButtonImage} source={require('./assets/btn1.png')}/>
          <Text style = {styles.footerButtonText}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.footerButton}>
          <Image style = {styles.footerButtonImage} source={require('./assets/btn2.png')}/>
          <Text style = {styles.footerButtonText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.footerButton}>
          <Image style = {styles.footerButtonImage} source={require('./assets/btn3.png')}/>
          <Text style = {styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    height: '25%',
    backgroundColor: '#0963a1',
    padding: 20,
    
    
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: 'strech',
  },

  center: {
    height: '65%',
    backgroundColor: 'gray',
  },
  categories:{
    height: '50%',
    backgroundColor: 'white',
    padding: 20,
  },
  catOption:{
    width: '30%',
    backgroundColor: 'gray'
  },
  footer:{
    height: '10%',
    width: '100%',
    backgroundColor: '#0963a1',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
  },
  footerButton:{
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonImage:{
    height: '50%', width: '50%', resizeMode: 'stretch'
  },
  footerButtonText: {
    color: 'white',

  },
});
