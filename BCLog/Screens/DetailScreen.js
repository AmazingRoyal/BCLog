import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function DetailScreen({route}) {

    const baseUrl = 'https://sheet.best/api/sheets/479713d5-0b0d-4e54-98f3-c8471b3bfee6/No/'
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { link } = route.params;

    useEffect(() => {
        fetch(baseUrl + link)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => alert(new Error(error.message)))
        .finally(() => setLoading(false));
    }, []);
    console.log(data.JobNumber)

    return (
        <View>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={(item , index) => index}
                    renderItem={({item}) => (
                        <SafeAreaView style={styles.container}>
                            <View style={styles.rowLeft}>
                                <View style={styles.row}>
                                    <Text style={styles.label}>Tipe Job</Text>
                                    <View style={[styles.box, item.TipeJob=="Export" ? styles.export : item.TipeJob=="Import" ? styles.import : styles.domestik]}>
                                        <Text style={[styles.job, item.TipeJob=="Export" ? styles.export : item.TipeJob=="Import" ? styles.import : styles.domestik]}>
                                            {item.TipeJob}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.label}>Pelayaran</Text>
                                    <Text style={styles.pelayaran}>{item.Pelayaran}</Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.label}>Job Number</Text>
                                    <Text style={styles.jobNum}>{item.JobNumber}</Text>
                                </View>
                            </View>

                            <View style={styles.colKontainer}>
                                <Text style={styles.labelLarge}>Jumlah Kontainer</Text>
                                <View style={styles.row}>
                                    <View style={styles.rowCenter}>
                                        <View style={styles.col}>
                                            <Text style={styles.labelMedium}>Type 20</Text>
                                        </View>
                                        <View style={styles.col}>
                                            <Text style={styles.pelayaran}>{item.Type20}</Text>
                                        </View>
                                            
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={styles.rowCenter}>
                                        <View style={styles.col}>
                                            <Text style={styles.labelMedium}>Type 40</Text>
                                        </View>
                                        <View style={styles.col}>
                                            <Text style={styles.pelayaran}>{item.Type40}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.info}>
                                <View style={styles.marketing}>
                                    <FontAwesome5 name="user" color={"#2A3D53"} size={24}/>
                                    <Text style={[styles.labelLarge,{marginLeft: 5}]}>{item.Marketing}</Text>
                                </View>
                                <Text style={styles.tanggal}>{item.Tanggal}</Text>
                            </View>
                        </SafeAreaView>
                    )}
                />
            )}
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: "white",
        padding: 20,
    },
    info: {
        flexDirection: "column",
        alignItems:"center",
        justifyContent: "center"
    },
    row: {
        marginVertical: 6,
    },
    rowLeft: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 0.8,
        borderColor: "#BABEC3"
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        alignItems: "center",
    },
    col: {
        flexDirection: "column",
        
    },
    colKontainer: {
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 0.8,
        borderColor: "#BABEC3",
    },
    label: {
        fontSize: 12,
        color: "#BABEC3"
    },
    labelMedium: {
        fontSize: 16,
        color: "#BABEC3"
    },
    labelLarge: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2A3D53"
    },
    job: {
        fontSize: 16,
        fontWeight: "bold"
    },
    jobNum: {
        fontSize: 16,
        fontWeight: "400"
    },
    pelayaran: {
        fontSize: 22,
        fontWeight: "bold"
    },
    box: {
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5
    },
    export: {
        borderColor: "#228BE6",
        color: "#228BE6"
    },
    import: {
        borderColor: "#43A047",
        color: "#43A047"
    },
    domestik: {
        borderColor: "#FF6C37",
        color: "#FF6C37"
    },
    marketing: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 5
    },
    tanggal: {
        fontSize: 16
    }
})
