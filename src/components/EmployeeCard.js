import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

const EmployeeCard = (props) => (
    <TouchableOpacity onPress={props.onPress}  key={props.item.id} style={styles.container}>
        <Image source={{uri:props.item.profile_image}} style={styles.profile_image} />
        <View style={{marginLeft:8,flex:1}}>
            <Text numberOfLines={1} style={styles.name}>{props.item.name}</Text>
            <Text numberOfLines={1}>{props.item.company && props.item.company.name?props.item.company.name:""}</Text>
        </View>
    </TouchableOpacity>
    )
export default EmployeeCard;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:"#fff",
        marginTop:16,
        borderRadius:12,
        padding:8
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
    },
    profile_image:{
        width:50,
        height:50,
        borderRadius:100
    }
});