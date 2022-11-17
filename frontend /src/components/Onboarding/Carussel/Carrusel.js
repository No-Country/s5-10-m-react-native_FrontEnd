import React from 'react';
import { Animated, View, Image, ScrollView } from 'react-native';
import fonts from "../../../utils/fonts";
import colors from "../../../utils/colors";
import styles from "./style";

import { useDimensions } from "../../../hooks/useDimensions";
import MyText from '../../Generics/MyText';
import MyButton from '../../Generics/MyButton/index'

const { widthScreen } = useDimensions();



const images = [
    require('../../../../assets/onboarding01.png'),
    require('../../../../assets/onboarding02.png'),
    require('../../../../assets/onboarding03.png')
];


const Carrusel = () => {
    const FIXED_BAR_WIDTH = 100;
    const BAR_SPACE = 10;

    numItems = images.length;
    itemWidth = (FIXED_BAR_WIDTH / numItems) - ((numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)


    let imageArray = [];
    let barArray = [];

    images.forEach((image, i) => {

        const thisImage = (
            <Image
                key={`image${i}`}
                source={image}
                style={styles.carrusel}
            />
        );

        imageArray.push(thisImage);

        const scrollBarVal = animVal.interpolate({
            inputRange: [widthScreen * (i - 1), widthScreen * (i + 1)],
            outputRange: [itemWidth, itemWidth],
            extrapolate: 'clamp',
        });

        const thisBar = (
            <View
                key={`bar${i}`}
                style={[
                    styles.track,
                    {
                        width: itemWidth,
                        marginLeft: i === 0 ? 0 : BAR_SPACE,
                    },
                ]}
            >
                <Animated.View

                    style={[
                        styles.bar,
                        {
                            width: itemWidth,
                            transform: [
                                { translateX: scrollBarVal },
                            ],
                        },
                    ]}
                />
            </View>
        );

        barArray.push(thisBar);
    })


    return (
        <View
            style={styles.container}

        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={10}
                pagingEnabled
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { x: animVal } } }]
                    )
                }
            >
                {imageArray}
            </ScrollView>
            <View style={styles.textContainer}>
                <MyText
                    align={"center"}
                    value={`Crear tu CV desde cero`}
                    color={colors.primary500}
                    size={fonts.h2.fontSize}
                    weight={fonts.h2.fontWeight} />

                <MyText
                    align={"center"}
                    value={`Te ayudamos ofreciendote guías, ayudas y ejemplos`}
                    color={colors.primary500}
                    size={fonts.labelRegular.fontSize}
                    weight={fonts.labelRegular.fontWeight}
                />
            </View>

            <View style={styles.barContainer} >
                {barArray}
            </View>

            <View style={styles.buttonContainer}>
                <MyButton
                    text="Registrarme"
                    bgcolor={colors.primary300}
                    color={colors.neutro100}
                    width={"85%"}
                    padding={12}
                    onPress={() => console.log("create")}
                />

                <MyButton
                    text="Ingresar"
                    bgcolor={colors.neutro100}
                    color={colors.primary300}
                    width={"85%"}
                    padding={12}
                    onPress={() => console.log("home")}
                />

            </View>

        </View>
    )

}

export default Carrusel;
