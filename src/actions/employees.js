

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";

export const Check_internet = (cb) => {
    NetInfo.fetch().then(state => {
      cb(state.isConnected);
    }).catch(e =>{
        cb(false);
    });
  }

export const Get_Employees_List = (cb)=>{
    const Get_Data_from_server = ()=>{
        Check_internet((internet_status)=>{
            if(internet_status){
                axios.get("http://www.mocky.io/v2/5d565297300000680030a986").then(res => {
                    AsyncStorage.setItem('Employees' , JSON.stringify(res.data));
                    cb(true, res.data);
                  }).catch(function (error) {
                      cb(false, "Something went wrong please try again later");
                  });
            }else{
                cb(false,"Your not connected to the internet")
            }
        });
    }
    AsyncStorage.getItem('Employees').then(data => {
            if(data){
                const employees_list = JSON.parse(data)
                if(employees_list && employees_list.length){
                    cb(true,employees_list);
                }
            }else{
                 Get_Data_from_server();
            }
    }).catch(e => {
        Get_Data_from_server();
    })
}


