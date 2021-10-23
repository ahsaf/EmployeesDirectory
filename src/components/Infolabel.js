import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const InfoLabel = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {props.arr?props.data.map(item =>{
            return(
                <Text key={item} style={styles.data}>{item?item:"-"}</Text>
            )
        })
        :<Text style={styles.data}>{props.data?props.data:"-"}</Text>}
        
    </View>
    )
export default InfoLabel;

const styles = StyleSheet.create({
    container: {
        marginTop:16
    },
    data:{
        fontSize:16,
        color:"black",
        fontWeight:"500"
    },
    title:{

    }
});