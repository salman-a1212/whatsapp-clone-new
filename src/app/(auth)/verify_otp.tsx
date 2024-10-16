import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import imagesPath from '@/src/constants/imagesPath'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '@/src/components/ButtonComp'

const VerifyOtp = ({ phoneNumber }: any) => {
    return (
        <View style={styles.container_main}>
            <View style={styles.header}>
                <Image source={imagesPath.back_arrow} resizeMode='contain' style={styles.back_icon} />
                <Text style={styles.enter_text}>Enter OTP Code</Text>
            </View>
            <View style={styles.container_mid}>
                <View style={styles.body}>
                    <Text style={styles.info_text}>Code has been send to {phoneNumber}</Text>
                    <View style={styles.inputcode_container}>
                        {[1, 2, 3, 4].map((item, index) =>
                            <View key={index}>
                                <TextInput keyboardType='numeric' maxLength={1} style={styles.input_code} />
                            </View>)}
                    </View>
                    <Text style={styles.resend_text}>Resend Code in <Text style={styles.seconds_text}>56</Text> s</Text>
                </View>
                <View style={styles.footer}>
                    <ButtonComp title="Verify" style={styles.verify_btn} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_main: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        gap: moderateScale(232),
        width: "100%"
    },
    container_mid: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: verticalScale(40),
    },
    body: {
        paddingHorizontal: moderateScale(10),
        alignItems: "center",
    },
    footer: {
        alignItems: "center",
    },
    back_icon: {
        width: scale(24),
        marginHorizontal: moderateScale(10),
    },
    enter_text: {
        fontSize: moderateScale(24),
        fontFamily: "Roboto_400Regular",
    },
    info_text: {
        marginBottom: moderateScale(57),
    },
    verify_btn: {
        width: scale(300),
        backgroundColor: "#000",
        borderRadius: moderateScale(25),
        paddingVertical: moderateScale(15),
        marginBottom: moderateScale(15),
    },
    input_code: {
        borderBlockColor: "#000",
        height: verticalScale(68),
        borderWidth: 1,
        padding: moderateScale(10),
        width: scale(65),
        fontSize: moderateScale(30),
        textAlign: "center",
        borderRadius: moderateScale(20),
        marginHorizontal: moderateScale(6),
    },
    inputcode_container: {
        flexDirection: "row",
    },
    resend_text: {
        marginTop: moderateScale(57),
    },
    seconds_text: {
        color: "#00A884"
    }
})

export default VerifyOtp