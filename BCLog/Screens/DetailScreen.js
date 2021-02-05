import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const DetailScreen = ({route, navigation}) => {

    const baseUrl = 'https://v1.nocodeapi.com/abcdefg/google_sheets/osDVmhrIkfwbLuOu?tabId=Sheet1&row_id='
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { link } = route.params;
    const row_id = link;

    const deleteItem = () => {
        fetch(baseUrl + link, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(navigation.navigate('List Data'))
    }

    useEffect(() => {
        fetch(baseUrl + link)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => alert(new Error(error.message)))
        .finally(() => setLoading(false));
    }, []);

    return (
        <View>
            {isLoading ? 
            <Text>Loading</Text> : (
                <>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity 
                            style={styles.buttonEdit}
                            onPress={() => {navigation.navigate('Edit Data', {link:[data, row_id]})}}
                        >
                            <FontAwesome5 name="edit" color={"white"} size={18} />
                            <Text style={[styles.labelEdit, {marginLeft:4}]}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonDelete}
                            onPress={() => {deleteItem()}}
                        >
                            <FontAwesome5 name="trash" color={"#007DAB"} size={18} />
                            <Text style={[styles.labelDelete, {marginLeft:4}]}>Delete</Text>
                        </TouchableOpacity>
                    </View>

                    <SafeAreaView style={styles.container}>

                        <View style={styles.rowLeft}>
                            <View style={styles.row}>
                                <Text style={styles.label}>Tipe Job</Text>
                                <View style={[styles.box, data.TipeJob=="Export" ? styles.export : data.TipeJob=="Import" ? styles.import : styles.domestik]}>
                                    <Text style={[styles.job, data.TipeJob=="Export" ? styles.export : data.TipeJob=="Import" ? styles.import : styles.domestik]}>
                                        {data.TipeJob}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Pelayaran</Text>
                                <Text style={styles.pelayaran}>{data.Pelayaran}</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Job Number</Text>
                                <Text style={styles.jobNum}>{data.JobNumber}</Text>
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
                                        <Text style={styles.pelayaran}>{data.Type20}</Text>
                                    </View>
                                                
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.rowCenter}>
                                    <View style={styles.col}>
                                        <Text style={styles.labelMedium}>Type 40</Text>
                                    </View>
                                    <View style={styles.col}>
                                        <Text style={styles.pelayaran}>{data.Type40}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.info}>
                            <View style={styles.marketing}>
                                <FontAwesome5 name="user-tie" color={"#007DAB"} size={22}/>
                                <Text style={[styles.labelLarge,{marginLeft: 5}]}>{data.Marketing}</Text>
                            </View>
                            <Text style={styles.tanggal}>{data.Tanggal}</Text>
                        </View>
                    </SafeAreaView>
                </>
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
        borderColor: "#BABEC3",
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
    actionContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%",
        marginBottom: "4%",
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
        color: "#007DAB"
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
    },
    buttonEdit: {
        backgroundColor: "#007DAB",
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: "#007DAB",
        paddingHorizontal: 18,
        paddingVertical: 4,
        marginHorizontal: 5,
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    buttonDelete: {
        backgroundColor: "#f2f2f2",
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: "#007DAB",
        paddingHorizontal: 18,
        paddingVertical: 4,
        marginHorizontal: 5,
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    labelEdit: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    labelDelete: {
        color: "#007DAB",
        fontSize: 16,
    },
})
