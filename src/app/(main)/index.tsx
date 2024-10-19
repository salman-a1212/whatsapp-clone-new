import React, { useState } from 'react'
import { View, useWindowDimensions, StyleSheet, Text, Pressable, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Menu, MenuItem } from 'react-native-material-menu';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import imagesPath from '@/src/constants/imagesPath';


const Main = () => {

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    );


    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const renderTabBar = props => (
        <View style={styles.tab_barcontainer}>
            <View style={styles.tab_bar}>
                <Text style={styles.tab_title}>WhatsApp</Text>
                <View style={styles.icons_container}>
                    <Pressable>
                        <AntDesign name="search1" size={24} color="white" />
                    </Pressable>
                    <Menu
                        visible={visible}
                        anchor={<Pressable onPress={showMenu}>
                            <Entypo name="dots-three-vertical" size={24} color="white" style={{ paddingStart: moderateScale(15) }} />
                        </Pressable>}
                        onRequestClose={hideMenu}
                    >
                        <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
                        <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
                        <MenuItem onPress={hideMenu}>Menu item 3</MenuItem>
                    </Menu>
                </View>
            </View>
            <View style={styles.tabbar_wrapper}>
                <TouchableOpacity activeOpacity={0.8}>
                    <MaterialIcons name="camera-alt" size={24} color="white" style={{ paddingStart: moderateScale(10) }} />
                </TouchableOpacity>
                <View style={styles.tabbar}>
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: 'white' }}
                        style={{ backgroundColor: '#008069', elevation: 0 }}
                    />
                </View>
            </View>
        </View>
    );

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'CHATS' },
        { key: 'second', title: 'STATUS' },
        { key: 'third', title: 'CALLS' },
    ]);

    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
            <ImageBackground source={imagesPath.chat_bg} resizeMode="cover" style={styles.image}></ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    tab_bar: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#008069',
        marginTop: moderateVerticalScale(50),
        paddingHorizontal: moderateScale(15),
        flex: 1,
    },
    tab_barcontainer: {
        backgroundColor: '#008069',
        height: verticalScale(150),
    },
    icons_container: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    tab_title: {
        fontSize: moderateScale(20),
        color: "white",
        fontWeight: "700",
    },
    tabbar_wrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    tabbar: {
        width: scale(300),
        marginStart: moderateScale(13)
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
})

export default Main