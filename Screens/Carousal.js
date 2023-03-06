import React, { useCallback, memo, useRef, useState } from "react";
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const subtitledata = [`Choose your cloths By using this app you can select your clothes for laundry in a very simple manner.`, `Get top wash facilities Get top wash services from your nearby laundry shop at very reasonable cost.`, `Get on time delivery Shopes delivery services provides you a better way of delivering`]
const titledata = [`Choose Your Clothes`, `Get Top Wash Facilities`, `Get On Time Delivery`]
const slideList = Array.from({ length: 3, title: "vedant" }).map((_, i) => {

    return {
        id: i,
        image: '/Users/apple/Desktop/Laundry/Laundry/assets/Images/image1.jpg',
        image2: '/Users/apple/Desktop/Laundry/Laundry/assets/Images/5.jpg',
        title: titledata[i],
        subtitle: subtitledata[i],
    };
});

const Slide = memo(function Slide({ data }) {
    return (
        <View style={styles.slide}>
            <Image source={require("../assets/Images/image1.jpg")} style={styles.slideImage}></Image>
            <Text style={styles.slideTitle}>{data.title}</Text>
            <View style={styles.titleview}>
                <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
            </View>
            <Image source={require("../assets/Images/4.jpg")} style={styles.slideImage1}></Image>
        </View>
    );
});

function Pagination({ index }) {
    return (
        <View style={styles.pagination} pointerEvents="none">
            {slideList.map((_, i) => {
                return (
                    <View
                        key={i}
                        style={[
                            styles.paginationDot,
                            index === i
                                ? styles.paginationDotActive
                                : styles.paginationDotInactive,
                        ]}
                    />
                );
            })}
        </View>
    );
}

const Carousel = ({ naviation }) => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        const distance = Math.abs(roundIndex - index);

        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    const renderItem = useCallback(function renderItem({ item }) {
        return <Slide data={item} />;

    }, []);

    return (
        <>
            <FlatList
                data={slideList}
                style={styles.carousel}
                renderItem={renderItem}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
            />
            {/* <Paginatio index={index}></Paginatio> */}
            <Pagination index={index}></Pagination>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginBtn}>
                <Text style={styles.loginText}>Skip</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    slide: {
        height: windowHeight * 0.8,
        width: windowWidth,
        alignItems: "center",
        backgroundColor: "#fafafa"
    },
    // titleview:{width:400,backgroundColor:"red"},
    slideImage: { width: windowWidth, height: "32%", top: 32, },
    slideImage1: { width: windowWidth, height: "50%", top: 215, backgroundColor: 'white' },
    slideTitle: { fontSize: 23, top: 40, color: "#323232", fontWeight: '400', alignContent: "center", },
    slideSubtitle: { top: 40, fontSize: 15, color: "#323232", width: Dimensions.get('window').width * 0.96, left: 10 },

    pagination: {
        position: "absolute",
        bottom: 410,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        color: '#1273db',

    },

    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
        color: '#1273db',

    },
    loginBtn: {
        width: "15%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        bottom: 10,
        borderColor: "white",
        position: "absolute",
        alignSelf: "center",

    },
    paginationDotActive: { backgroundColor: "red" },
    paginationDotInactive: { backgroundColor: "gray" },
    carousel: { flex: 1 },
    loginText: { color: '#1273db', fontSize: 23, backgroundColor: '#fafafa' }
});


export default Carousel;