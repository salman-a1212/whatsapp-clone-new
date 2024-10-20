import React, { useState } from 'react'
import { View, useWindowDimensions, StyleSheet, Text, Pressable, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Menu, MenuItem } from 'react-native-material-menu';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import imagesPath from '@/src/constants/imagesPath';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComp from '@/src/components/ButtonComp';


const Main = () => {

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: "center", justifyContent: "center", }}>
            <ImageBackground source={imagesPath.chat_bg} resizeMode="cover" style={styles.image}></ImageBackground>
            <Image source={imagesPath.nochatlogo} resizeMode='contain' style={styles.nochat_logo} />
            <Text style={styles.nochat_text}>You haven’t chat yet</Text>
            <ButtonComp title="Start Chatting" style={[styles.start_chatbtn, styles.chatbtn_text]} />
        </View>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: "center", justifyContent: "center", }}>
            <ImageBackground source={imagesPath.chat_bg} resizeMode="cover" style={styles.image}></ImageBackground>
            <Image source={imagesPath.nochatlogo} resizeMode='contain' style={styles.nochat_logo} />
            <Text style={styles.nochat_text}>You haven’t chat yet</Text>
            <ButtonComp title="Start Chatting" style={[styles.start_chatbtn, styles.chatbtn_text]} />
        </View>
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: "center", justifyContent: "center", }}>
            <ImageBackground source={imagesPath.chat_bg} resizeMode="cover" style={styles.image}></ImageBackground>
            <Image source={imagesPath.nochatlogo} resizeMode='contain' style={styles.nochat_logo} />
            <Text style={styles.nochat_text}>You haven’t chat yet</Text>
            <ButtonComp title="Start Chatting" style={[styles.start_chatbtn, styles.chatbtn_text]} />
        </View>
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
        <SafeAreaView style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tab_bar: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#008069',
        marginTop: moderateVerticalScale(25),
        paddingHorizontal: moderateScale(15),
        flex: 1,
    },
    tab_barcontainer: {
        backgroundColor: '#008069',
        height: verticalScale(125),
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
        justifyContent: 'center',
    },
    nochat_logo: {
        width: scale(100),
        marginVertical: moderateVerticalScale(40),
    },
    nochat_text: {
        fontSize: moderateScale(32),
        marginBottom: moderateScale(20),
    },
    start_chatbtn: {
        width: scale(180),
        backgroundColor: "#0CCC83",
        color: "#fff",
        borderRadius: moderateScale(30),
        paddingVertical: moderateVerticalScale(15),
        fontSize: moderateScale(20),
        fontWeight: "600",
        marginBottom: moderateScale(80),
    },
    chatbtn_text: {
        fontSize: moderateScale(20),
        fontWeight: "600",
    }
})

export default Main