import React, { useState, useEffect} from 'react'
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, TextInput, Button } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const EditScreen = ({route, navigation}) => {
    const { link } = route.params;
    const [jobNumber, setJobNumber] = useState(link[0].JobNumber);
    const [type20, setType20] = useState(link[0].Type20);
    const [type40, setType40] = useState(link[0].Type40);
    const [marketing, setMarketing] = useState(link[0].Marketing);
    const [tipeJob, setTipeJob] = useState(link[0].TipeJob);
    const [pelayaran, setPelayaran] = useState(link[0].Pelayaran);
    const [tanggal, setTanggal] = useState(link[0].Tanggal);
    console.log(link)
    
    const submit = () => {

        if (jobNumber != ""){
            const data = ({
                "row_id": link[1],
                "No": link[0].No,
                "JobNumber": jobNumber,
                "Tanggal": tanggal,
                "Type20": type20,
                "Type40": type40,
                "Marketing": marketing,
                "TipeJob": tipeJob,
                "Pelayaran": pelayaran
            });
            console.log("data before put: ",data);
            fetch("https://v1.nocodeapi.com/abcdefg/google_sheets/osDVmhrIkfwbLuOu?tabId=Sheet1", {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((r) => r.json())
            .then(navigation.navigate("List Data"))
            .catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <View>
            <TextInput placeholder="Job Number" value={jobNumber} onChangeText={(value) => setJobNumber(value)} />
            <TextInput placeholder="Type 20" value={type20} onChangeText={(value) => setType20(value)} />
            <TextInput placeholder="Type 40" value={type40} onChangeText={(value) => setType40(value)} />
            <TextInput placeholder="Marketing" value={marketing} onChangeText={(value) => setMarketing(value)} />
            <TextInput placeholder="Tipe Job" value={tipeJob} onChangeText={(value) => setTipeJob(value)} />
            <TextInput placeholder="Pelayaran" value={pelayaran} onChangeText={(value) => setPelayaran(value)} />
            <TextInput placeholder="Tanggal" value={tanggal} onChangeText={(value) => setTanggal(value)} />
            <Button title="SIMPAN" onPress={submit} />
        </View>
    )
}

export default EditScreen
