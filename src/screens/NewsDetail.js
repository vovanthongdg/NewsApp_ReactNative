import React, { useState, useEffect,useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux'
import {setFont} from '../redux/actions'

import { getFocusedRouteNameFromRoute, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

import GetData from '../service/api/GetData';
import VerticalList from '../components/List/VerticalList';
import ActivityIndicator from '../components/Common/ActivityIndicator';
import Close from '../components/Common/Close';

const { width, height } = Dimensions.get('window');

const NewsDetail = ({navigation, route}) => {

  const {font} = useSelector(state => state.fontReducer);
  
  // const [range, setRange] = useState();
  // const routee = useRoute()
  const myScroll = useRef(null);
  const routeName = getFocusedRouteNameFromRoute(route)
  console.log(route)
  const [news, setNews] = useState({});
  const [relatedNews, setRelatedNews] = useState([]);
  const { idArticle: postId, idCategory: postCategory } = route.params.item;
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  // const navigation = useNavigation();

  const fetchPost = async id => {
    setLoading(true);
    const result = await GetData.getSingle(id);
    // console.log(result)
    setNews(result);
  };

  const fetchRelatedPosts = async category => {
    const result = await GetData.getByCategory(postCategory, 6);
    setRelatedNews(result.filter(item => item.idCategory !== postId));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    
  };

  // useEffect(()=>{
  //   navigation.addListener('focus',()=>{
  //     myScroll.current.scrollTo({
  //       y: 0,
  //       animated: true,
  //     });
  //   })
    
  // },[])
  useEffect(() => {
  //   const willFocus = navigation.addListener('focus', () => {
      
  //   });

      // return willFocus;
    // if(isFocused){
    //   fetchPost(postId)
    //   fetchRelatedPosts(postCategory)
    // }
    isFocused && fetchPost(postId); 
    fetchRelatedPosts(postCategory); 
    myScroll.current.scrollTo({
      y: 0,
      animated: true,
    });
    
  }, [isFocused]);

  const { title, content, urlImage } = news;
  return (
    <>
    {/* <SheetProvider> */}
      <ActivityIndicator visible={loading} />
      <ScrollView 
        style={styles.container}
        ref={myScroll}
        >
        <Image style={styles.image} source={{ uri: urlImage }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{
                fontSize: font,
                color: '#4e4d4d',
                }}>
                  {content}
            </Text>
        </View>
        <View style={styles.relatedPostContainer}>
          <VerticalList data={relatedNews} title='Related Posts' />
        </View>
      </ScrollView>
      {/* <Close onPress={() => navigation.popToTop()} /> */}
      {/* </SheetProvider> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 26,
    color: '#4e4d4d',
  },
  relatedPostContainer: {
    padding: 10,
  },
});

export default NewsDetail;
