import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const AnimatedDonutChart = () => {
    const initialData = [50, 10, 40, 95, 85];
    // Color palette including #3a86ff and other colors that fit the desired palette
    const colorPalette = [
        '#3a86ff', // Your specified color
        '#ffbe0b', // Complementary colors and variations
        '#73a942',
        '#fb5607',
        '#ff006e',
        '#8338ec',
        '#3a86ff',
        '#0077b6',
        '#0096c7',
        '#00b4d8',
        '#48cae4',
        '#90e0ef',
        '#ade8f4',
        '#caf0f8',
        '#0077b6' // Repeated some to ensure we have 14 colors
    ];

    useEffect(() => {
        // No need to set colors in state, as we're using a fixed palette now

        // Function to gradually update opacity for each segment
        const gradualUpdateOpacity = (index, targetOpacity = 1, step = 0.2, interval = 15) => {
            const update = () => {
                setOpacities(currentOpacities =>
                    currentOpacities.map((opacity, i) =>
                        i === index ? Math.min(opacity + step, targetOpacity) : opacity,
                    ),
                );
            };

            const timer = setInterval(update, interval);
            setTimeout(() => clearInterval(timer), (targetOpacity / step) * interval);
        };

        // Sequentially and gradually update opacities with delays
        initialData.forEach((_, index) => {
            setTimeout(() => gradualUpdateOpacity(index), index * 250);
        });
    }, []);

    const [opacities, setOpacities] = useState(initialData.map(() => 0));

    const pieData = initialData
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: colorPalette[index % colorPalette.length], // Use colors from the palette
                opacity: opacities[index],
            },
            key: `pie-${index}`,
        }));

    const screenWidth = Dimensions.get('window').width;

    return (
        <View>
            <PieChart
                style={{ height: 400, width: screenWidth - 40 }}
                data={pieData}
                innerRadius="40%"
                outerRadius="80%"
            />
        </View>
    );
};

export default AnimatedDonutChart;