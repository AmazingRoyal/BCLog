import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

function HomeScreen() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
            data: [20, 45, 28, 80, 99, 43],
            color: () => "#007DAB", // optional
            strokeWidth: 2,
            // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };

    const dataPie = [
        {
            name: "Export",
            population: 21500000,
            color: "#147AD6",
            legendFontColor: "#7F7F7F",
            legendFontSize: 16
        },
        {
            name: "Import",
            population: 2800000,
            color: "#79D2DE",
            legendFontColor: "#7F7F7F",
            legendFontSize: 16
        },
        {
            name: "Domestik",
            population: 5276120,
            color: "#EC6666",
            legendFontColor: "#7F7F7F",
            legendFontSize: 16
        }
    ];

    const chartConfig = {
        backgroundColor: "#white",
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: () => "#007DAB",
        withInnerLines: false,
        labelColor: () => "#007DAB",
        style: {
            borderRadius: 16
        }
    };
    

    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={data}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={chartConfig}
                withInnerLines= {false}
            />
            <PieChart
                data={dataPie}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                // center={[10, 50]}
                absolute
            />
        </View>
    )
}

export default HomeScreen
