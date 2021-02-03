import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function ListScreen({navigation}) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // Fetch API Spreadsheet
    useEffect(() => {
      fetch('https://sheet.best/api/sheets/479713d5-0b0d-4e54-98f3-c8471b3bfee6')
        .then((response) => response.json())
        .then((json) => setData(json)) 
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    console.log(data)
    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.input}>
                    <FontAwesome5 name="edit" color={"white"} size={18} />
                    <Text style={styles.inputText}>Input Data</Text>
                </View>
            </View>

            {/* List Data */}
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {navigation.navigate('Detail Data', {link: item.No})}}
                    >

                        {/* Card Box */}
                        <View style={styles.row}>
                            <View style={styles.colLeft}>
                                <Text style={styles.jobNumber}>{item.JobNumber}</Text>
                                <Text style={styles.tanggal}>{item.Tanggal}</Text>
                            </View>
                            <View style={styles.colCenter}>
                                <Text style={styles.typeSt}>Type 20</Text>
                                <Text style={styles.typeNum}>{item.Type20}</Text>
                            </View>
                            <View style={styles.colCenter}>
                                <Text style={styles.typeSt}>Type 40</Text>
                                <Text style={styles.typeNum}>{item.Type40}</Text>
                            </View>
                            <View style={styles.colCenter}>
                                <View style={[styles.box, item.TipeJob=="Export" ? styles.export : item.TipeJob=="Import" ? styles.import : styles.domestik]}>
                                    <Text style={[styles.job, item.TipeJob=="Export" ? styles.export : item.TipeJob=="Import" ? styles.import : styles.domestik]}>
                                        {item.TipeJob}
                                    </Text>
                                </View>
                                <Text style={styles.pelayaran}>{item.Pelayaran}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "stretch",
        backgroundColor: "white"
    },
    header: {
        backgroundColor: "white",
        marginBottom: "2%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },  
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    colLeft: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    colCenter: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    colRight: {
        flexDirection: "column",
        alignItems: "flex-end",
    },
    card: {
        marginHorizontal: "5%",
        marginVertical: "2%",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex:0
    },
    jobNumber:{
        fontSize: 11,
        color: "#A4A4A4",
        fontWeight: "200"
    },
    tanggal:{
        fontSize: 14,
        color: "#2A3D53",
        fontWeight: "200"
    },
    typeSt:{
        fontSize: 14,
        color: "#2A3D53",
        fontWeight: "200"
    },
    typeNum:{
        fontSize: 28,
        color: "#2A3D53",
        fontWeight: "bold"
    },
    job:{
        fontSize: 14,
        fontWeight: "400"
    },
    pelayaran:{
        fontSize: 18,
        color: "#2A3D53",
        fontWeight: "bold"
    },
    box:{
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5
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
    input: {
        marginHorizontal: "20%",
        marginVertical: "5%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#2A3D53",
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginHorizontal: 6 
    }
})