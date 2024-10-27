import React, { useState } from 'react'
import { View, useWindowDimensions, StyleSheet, Text, Pressable, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Menu, MenuItem } from 'react-native-material-menu';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import imagesPath from '@/src/constants/imagesPath';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComp from '@/src/components/ButtonComp';


const ChatList = () => {

    const chatData = [
        {
            id: "1",
            img: imagesPath.chat_person1,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
            time: "5:27 am",
            unread_items: "4",

        },
        {
            id: "2",
            img: imagesPath.chat_person2,
            person: "Abelson",
            msg: "Curabitur finibus dictum nisl, ac sagitt...",
            time: "Yesterday",
            unread_items: "4",

        },
        {
            id: "3",
            img: imagesPath.chat_person3,
            person: "Cathor",
            msg: "Photo",
            time: "5:27 am",
            unread_items: "4",

        },
        {
            id: "4",
            img: imagesPath.chat_person4,
            person: "Steven",
            msg: "Document.pdf (1 page)",
            time: "23/06/2022",
            unread_items: "4",

        },
        {
            id: "5",
            img: imagesPath.chat_person5,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
            time: "5:27 am",
            unread_items: "4",

        },
        {
            id: "6",
            img: imagesPath.chat_person6,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
            time: "5:27 am",
            unread_items: "4",

        },
        {
            id: "7",
            img: imagesPath.chat_person7,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
            time: "5:27 am",
            unread_items: "4",

        },
        {
            id: "8",
            img: imagesPath.chat_person8,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
            time: "5:27 am",
            unread_items: "4",

        },
        {
            id: "9",
            img: imagesPath.accountholder_status,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
            time: "5:27 am",
            unread_items: "4",

        },
    ]

    const statusData = [
        {
            id: "1",
            img: imagesPath.chat_person1,
            person: "My status",
            msg: "Tap to add status update",
        },
        {
            id: "2",
            img: imagesPath.chat_person2,
            person: "Abelson",
            msg: "Curabitur finibus dictum nisl, ac sagitt...",
        },
        {
            id: "3",
            img: imagesPath.chat_person3,
            person: "Cathor",
            msg: "Photo",
        },
        {
            id: "4",
            img: imagesPath.chat_person4,
            person: "Steven",
            msg: "Document.pdf (1 page)",
        },
        {
            id: "5",
            img: imagesPath.chat_person5,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
        },
        {
            id: "6",
            img: imagesPath.chat_person6,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
        },
        {
            id: "7",
            img: imagesPath.chat_person7,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
        },
        {
            id: "8",
            img: imagesPath.chat_person8,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
        },
        {
            id: "9",
            img: imagesPath.accountholder_status,
            person: "Aron",
            msg: "Lorem ipsum dolor sit",
        },
    ]

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: "flex-start", justifyContent: "flex-start" }}>
            <FlatList
                data={chatData}
                renderItem={({ item }) => <View style={styles.chatlist_container}>
                    <View style={styles.chatimg_container}>
                        <Image source={item.img} resizeMode='contain' style={{ marginEnd: moderateScale(10) }} />
                        <View style={styles.chattext_container}>
                            <Text>{item.person}</Text>
                            <View style={styles.msg_container}>
                                <Image source={imagesPath.blue_tick} resizeMode='contain' style={{ paddingStart: moderateScale(10) }} />
                                <Text>{item.msg}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.chattime_container}>
                        <Text style={{ paddingEnd: moderateScale(50) }}>{item.time}</Text>
                        <View style={{
                            backgroundColor: "#036A01",
                            width: moderateScale(22),
                            height: moderateScale(22),
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: moderateScale(22),
                        }}>
                            <Text style={{ color: "#000" }}>
                                {item.unread_items}
                            </Text>
                        </View>
                    </View>
                </View>}
                keyExtractor={item => item.id}
            />
        </View>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
                <FlatList
                    data={statusData}
                    renderItem={({ item }) => <View style={{ flex: 1, flexDirection: "column" }}>
                        <View style={styles.chatlist_container}>
                            <View style={styles.chatimg_container}>
                                <Image source={item.img} resizeMode='contain' style={{ marginEnd: moderateScale(10) }} />
                                {item.id === "1" ? <View style={styles.addstatus_icon}>
                                    <AntDesign name="pluscircle" size={24} color="#008069" />
                                </View>
                                    :
                                    ""
                                }
                                <View style={styles.chattext_container}>
                                    <Text>{item.person}</Text>
                                    <View style={styles.msg_container}>
                                        {item.id === "1" ? ""
                                            : <Image source={imagesPath.blue_tick} resizeMode='contain' style={{ paddingStart: moderateScale(10) }} />

                                        }
                                        <Text>{item.msg}</Text>
                                        {
                                            item.id === "1" ?
                                                <View style={{ marginVertical: moderateVerticalScale(20), display: "flex", flexDirection: "column" }}>
                                                    <Text>Recent Updates</Text>
                                                </View> : item.id === "4" ?
                                                    <View style={{ marginVertical: moderateVerticalScale(20), display: "flex", flexDirection: "column" }}>
                                                        <Text>Viewed Updates</Text>
                                                    </View> : ""

                                        }
                                    </View>
                                </View>

                            </View>
                        </View>

                    </View>}
                    keyExtractor={item => item.id}
                />

            </View>
        </View>
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: "flex-start", justifyContent: "flex-start" }}>
            <FlatList
                data={chatData}
                renderItem={({ item }) => <View style={styles.chatlist_container}>
                    <View style={styles.chatimg_container}>
                        <Image source={item.img} resizeMode='contain' style={{ marginEnd: moderateScale(10) }} />
                        <View style={styles.chattext_container}>
                            <Text>{item.person}</Text>
                            <View style={styles.msg_container}>
                                <Image source={imagesPath.blue_tick} resizeMode='contain' style={{ paddingStart: moderateScale(10) }} />
                                <Text>{item.msg}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.chattime_container}>
                        <Text style={{ paddingEnd: moderateScale(50) }}>{item.time}</Text>
                        <View style={{
                            backgroundColor: "#036A01",
                            width: moderateScale(22),
                            height: moderateScale(22),
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: moderateScale(22),
                        }}>
                            <Text style={{ color: "#000" }}>
                                {item.unread_items}
                            </Text>
                        </View>
                    </View>
                </View>}
                keyExtractor={item => item.id}
            />
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
                        renderIcon={({ route, focused, color, }) => (
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <MaterialIcons
                                        name={route.title === "CHATS" ? 'mark-chat-unread' : ""}
                                        color={color}
                                    />
                                </View>
                                <View>
                                    <Entypo name={route.title === "STATUS" ? 'dot-single' : ""}
                                        color={color}
                                    />
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'first',
            title: 'CHATS',
            icon: 'mark-chat-unread'

        },
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
                style={styles.tabview}
            />
            <View style={styles.newchat_container}>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image source={imagesPath.newchat_icon} resizeMode='contain' />
                </TouchableOpacity>
            </View>
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
        paddingHorizontal: moderateScale(5),
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
        marginStart: moderateScale(13),
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
    },
    chatlist_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(5),
        marginBottom: moderateScale(20)
    },
    chattext_container: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    chattime_container: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    chatimg_container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: moderateVerticalScale(15),
        position: "relative",
    },
    msg_container: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingEnd: moderateScale(10),
    },
    tabview: {
    },
    newchat_container: {
        backgroundColor: "#fff",
        justifyContent: "flex-end",
        position: "absolute",
        top: "93%",
        left: "77%",
    },
    addstatus_icon: {
        position: "absolute",
        top: "90%",
        left: "15%",
        zIndex: 1,
    }

})



export default ChatList