import { React, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ApiPractise = () => {
  const [userData, setUserData] = useState();

  const apiData = async () => {
    try {
      const response = await fetch(
        "http://phpstack-722834-2406701.cloudwaysapps.com/admin/api/login?ankit@samyotech.com=123456",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Content_Type: "application/json",
          },
        }
      );
      const userData = response.json();
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <View>
      <FlatList
        data={userData}
        renderItem={({ item, index }) => {
          console.log(item.txt);
          return;
        }}
      />
    </View>
  );
};

export default ApiPractise;

const Api = async () => {
  try {
    const res = await fetch(
      "http://phpstack-722834-2406701.cloudwaysapps.com/admin/api/login?ankit@samyotech.com=123456",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
        },
        body: JSON.stringify({
          email: "",
          password: "",
        }),
      }
    );
    const myData = res.json();
    console.log(myData);
  } catch (error) {
    console.log(error);
  }
};

// useEffect(() => {
//     Api();
// }, []);

// onSubmit = { Api }

// const apiData=async()=>{

// try{
//     const res = await fetch("http://phpstack-722834-2406701.cloudwaysapps.com/admin/api/login?ankit@samyotech.com=123456",
//     {
//         method:'POST',
//         headers:{
//             'Accept':'application/json',
//             'Content_Type':'application/json'
//         },
//         body:JSON.stringify({
//             email:'',
//             password:''
//         })

//     }
//     );
//     const myData=res.json();
//     console.log(myData);
// }
// catch(error){
//     console.log(error);
// }

// }

// useEffect(()=>{
//     apiData();
// },[]);

// const userData= async()=>{

// try{

// const res=await
// fetch('https://',
// {
//     method:'POST',
//     headers:{
//         'Accept':'application/json',
//         'Content_Type':'application/json'
//     },
//     body:JSON.stringify({
//         email:'',
//         password:''
//     })

// }
// );
// const myData=res.json();
// console.log(myData);
// }
// catch(error){
//     console.log(error);
// }
// };

// useEffect(()=>{
//     userData();
// },[]);

// const getUserData = async () => {
//     try {
//         const response = await fetch("http://phpstack-722834-2406701.cloudwaysapps.com/admin/api/login?ankit@samyotech.com=123456",
//             {

//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content_Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: '',
//                     password: ''

//                 })
//             }
//         );
//         const myData = await response.json();
//         console.log(myData);

//     }
//     catch (error) {
//         console.log(error);
//     }

// };

// useEffect(() => {
//     getUserData();
// }, []);

// const getUserData= async()=>{
// try{
//     const response = await
//     fetch("http://phpstack-722834-2406701.cloudwaysapps.com/admin/api/login?ankit@samyotech.com=123456",{
// method:'POST',
// headers:{
//     'Accept':'application/json',
//     'Content_Type':'application.json'
// },
// body:JSON.stringify(
//     {
//         email:'',
//         password:'',

//     }
// )}
// );
// const myData=await response.json();
// console.log(myData);

// }

// catch(error){
//     console.log(error);
// }

// };

// useEffect(()=>{
//     getUserData();
// },[]);

// return(

// <View>
//     onSubmit={getUserData}
// </View>

// )

//     const getUserData=async ()=>{

// try{
//     const response = await fetch("http://phpstack-722834-2406701.cloudwaysapps.com/admin/api/login?ankit@samyotech.com=123456",
//     {

//     method:'POST',
//     headers:{
//     'Accept':'application/json',
//   },
//     body:JSON.stringify({
//     email:'',
//     password:'',

// })
//   }
//   );
//   const myData=await response.json();
//   console.log(myData);

// }
// catch(error){
//     console.log(error);
// }

//     };

//     useEffect(()=>{
//         getUserData();
//     },[]);
