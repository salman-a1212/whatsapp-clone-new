import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import imagesPath from '@/src/constants/imagesPath'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '@/src/components/ButtonComp'
import { router } from 'expo-router'
import { useToast } from "react-native-toast-notifications";

const VerifyOtp = () => {

    const [time, setTime] = useState(60);
    const timerRef = useRef(time);

    useEffect(() => {
        const timerId = setInterval(() => {
            timerRef.current -= 1;
            if (timerRef.current < 0) {
                clearInterval(timerId);
            } else {
                setTime(timerRef.current);
            }
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const navigateLogin = () => {
        router.push("/(auth)/login")
    }

    const [resendCode, setResendCode] = useState(60)
    const resendRef = useRef(resendCode);

    const [showResend, setShowResend] = useState(false)

    const [showTime, setShowTime] = useState(true)

    const resendCodeAgain = () => {
        const timerResend = setInterval(() => {
            resendRef.current -= 1;
            if (resendRef.current < 0) {
                clearInterval(timerResend);
            } else {
                setResendCode(resendRef.current);
            }
        }, 1000);
        return () => {
            clearInterval(timerResend);
        };
    }

    // useEffect(() => {
    //     resendCodeAgain()
    // }, [])

    const [verifyBtnStyle, setVerifyBtnStyle] = useState("rgba(0,0,0,0.44)")

    const [OtpText, setOtpText] = useState("")

    // toast
    const toast = useToast();
    let TestOtpCode = "4789"

    const showToast = () => {
        if (OtpText !== TestOtpCode && OtpText !== "") {
            toast.show("Invalid password", {
                type: "danger",
                placement: "bottom",
                animationType: "slide-in",
            });
        } else {
            console.log(OtpText !== TestOtpCode)
            toast.hideAll();
        }
    }
    console.log(OtpText !== TestOtpCode)




    return (
        <View style={styles.container_main}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.8} onPress={navigateLogin}>
                    <Image source={imagesPath.back_arrow} resizeMode='contain' style={styles.back_icon} />
                </TouchableOpacity>
                <Text style={styles.enter_text}>Enter OTP Code</Text>
            </View>
            <View style={styles.container_mid}>
                <View style={styles.body}>
                    <Text style={styles.info_text}>Code has been send to +91 11******44</Text>
                    <View style={styles.inputcode_container}>
                        {[1, 2, 3, 4].map((item, index) =>
                            <View key={index}>
                                <TextInput keyboardType='numeric' maxLength={1} style={styles.input_code} onChangeText={(e) => { setVerifyBtnStyle("#000"); setOtpText(e) }} />
                            </View>)}
                    </View>
                    {showTime && time > 0 ?
                        <Text style={styles.resend_text}>Resend Code in <Text style={styles.seconds_text}>{time}</Text> s</Text>
                        :
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { resendCodeAgain(); setShowResend(true); setShowTime(false) }}>
                            {showResend && resendCode > 0 ?
                                <Text style={styles.resend_text}>Resend Code in <Text style={styles.seconds_text}>{resendCode}</Text> s</Text>
                                : <Text style={styles.resend_again}>Resend Code</Text>
                            }
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.footer}>
                    <ButtonComp title="Verify" style={[OtpText === "" ? styles.disable_verifybtn : styles.verify_btn]} onPress={showToast} />
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
    disable_verifybtn: {
        width: scale(300),
        backgroundColor: "rgba(0,0,0,0.44)",
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
    },
    resend_again: {
        marginTop: moderateScale(57),
        color: "#00A884",
    },
})

export default VerifyOtp