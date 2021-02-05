import React, { useState, useEffect} from 'react'
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, TextInput, Button } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormScreen = () => {
    const [jobNumber, setJobNumber] = useState("");
    const [type20, setType20] = useState("");
    const [type40, setType40] = useState("");
    const [marketing, setMarketing] = useState("");
    const [tipeJob, setTipeJob] = useState("");
    const [pelayaran, setPelayaran] = useState("");
    const date = new Date()
    const [tanggal, setTanggal] = useState(date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear());

    getDataIndex = () => {
        return fetch('https://v1.nocodeapi.com/abcdefg/google_sheets/osDVmhrIkfwbLuOu?tabId=Sheet1')
        .then((response) => response.json())
        .then((json) => json.data)
    }

    getNumber = (data) => {
        return Number(data[data.length-1].No) + 1
    }
    
    postApi = async () => {
        const dataIndex = await getDataIndex()
        const no = await getNumber(dataIndex)
        return ([[
            no,
            jobNumber,
            tanggal,
            type20,
            type40,
            marketing,
            tipeJob,
            pelayaran,
        ]]);
    }

    const submit = async() => {

        if (jobNumber != ""){
            const data = await postApi()
            console.log("data before post: ",data);
            fetch("https://v1.nocodeapi.com/abcdefg/google_sheets/osDVmhrIkfwbLuOu?tabId=Sheet1", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
                setJobNumber("")
                setMarketing("")
                setPelayaran("")
                setTipeJob("")
                setType20("")
                setType40("")
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <View style={styles.form}>
            <TextInput placeholder="Job Number" value={jobNumber} onChangeText={(value) => setJobNumber(value)} style={styles.input} autoCapitalize="words" />
            <TextInput placeholder="Type 20" value={type20} onChangeText={(value) => setType20(value)} style={styles.input} autoCapitalize="words" />
            <TextInput placeholder="Type 40" value={type40} onChangeText={(value) => setType40(value)} style={styles.input} autoCapitalize="words" />
            <TextInput placeholder="Marketing" value={marketing} onChangeText={(value) => setMarketing(value)} style={styles.input}style={styles.input} autoCapitalize="words" />
            <TextInput placeholder="Tipe Job" value={tipeJob} onChangeText={(value) => setTipeJob(value)} style={styles.input} autoCapitalize="words" />
            <TextInput placeholder="Pelayaran" value={pelayaran} onChangeText={(value) => setPelayaran(value)} style={styles.input} autoCapitalize="words" />
            <TextInput placeholder="Tanggal" value={tanggal} onChangeText={(value) => setTanggal(value)} style={styles.input} autoCapitalize="words" />
            <Button title="SIMPAN" onPress={submit} />
        </View>
    )
}

export default FormScreen

const styles = StyleSheet.create({
    form: {
        padding: 4
    },
    input:{
        backgroundColor: "white",
        marginHorizontal: 22,
        paddingHorizontal: 20,
        marginVertical: 6,
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
    }
})