import React, { useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput
} from "react-native";
import { Get_Employees_List } from '../actions/employees';
import EmployeeCard from '../components/EmployeeCard'

const EmployeeList = (props) => {
    const [Employees , setEmployees] = useState([]);
    const [Search_Text , setSearch_Text] = useState("");
    useEffect(()=>{
        Get_Employees_List((status,data)=>{
            if(status){
                setEmployees(data);
            }else{
                alert(data);
            }
        });
    },[]);
    const OnPressEmployeeCard = (employee)=>{
         props.navigation.navigate('EmployeeDetails',{employee});
    }
    const SearchComponet = ()=>{
        return(
            <View style={{marginTop:16,borderRadius:12,backgroundColor:"#fff"}}>
                <TextInput 
                    onChangeText={(text)=> setSearch_Text(text)}
                    value={Search_Text}
                    placeholder="Search..."
                />
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList 
                        data={Employees}
                        ListHeaderComponent={SearchComponet()}
                        renderItem={({item,index})=>{
                            const Card =  <EmployeeCard 
                                                item={item}
                                                onPress={() => OnPressEmployeeCard(item)}
                                            />
                            if(Search_Text){
                                let Name = item.name.includes(Search_Text);
                                let Email = item.email.includes(Search_Text);
                                if(Name || Email){
                                    return Card
                                }else{
                                    return <View />
                                }
                            }
                            return Card
                           
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                          }}
                        contentContainerStyle={{paddingHorizontal:16}}
                        ListFooterComponent={()=> <View style={{height:16}} />}
                       
                    />
        </View>
        )
} 
export default EmployeeList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});