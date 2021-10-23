import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import InfoLabel from "../components/Infolabel";

const componentName = (props) => {

    const { employee } = props.route.params;
    return(
        <ScrollView style={styles.container} contentContainerStyle={{paddingHorizontal:16}}>
            <View style={styles.header_container}>
                <Image source={{uri:employee.profile_image}} style={styles.profile_image} />
                <Text numberOfLines={1} style={styles.name}>{employee.name}</Text>
                <Text numberOfLines={1}>{employee.company && employee.company.name?employee.company.name:""}</Text>
            </View>
            <View >
                <InfoLabel 
                    title="User name"
                    data={employee.username}
                />
                <InfoLabel 
                    title="Email address"
                    data={employee.email}
                />
                {employee.address?
                <InfoLabel 
                    title="Address"
                    data={[employee.address.street,employee.address.suite,employee.address.city,employee.address.zipcode]}
                    arr
                />:null}
                
                <InfoLabel 
                    title="Phone"
                    data={employee.phone}
                />
                <InfoLabel 
                    title="Website"
                    data={employee.website}
                />
                {employee.company?
                <InfoLabel 
                    title="Company"
                    data={[employee.company.name,employee.company.catchPhrase]}
                    arr
                />:null}
            </View>
        </ScrollView>
        )
}
export default componentName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    header_container:{
        alignItems:'center',
        marginTop:48
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:24
    },
    profile_image:{
        width:100,
        height:100,
        borderRadius:100
    }
});