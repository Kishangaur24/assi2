import { atom } from "recoil";
import ImageAvatar from '../atom/ImageAvatar/ImageAvatar'

export const UserListData = atom({
  key : "updatedListUser" ,
  default : [
    {
        id : 0,
        Img :<ImageAvatar/> ,
        Name : "Rishab" ,
        Address : "Nagpur, Maharashtra" ,
        Email : "rishab@gmail.com",
        Gender:"Male",
    },
    {
        id:1,
        Img : <ImageAvatar/>,
        Name : "Harshad" ,
        Email : "Harshad@gmail.com",
        Address : " Pune, Maharashtra",
        Gender:"Male",
    },
    {
        id:2,
        Img : <ImageAvatar />,
        Name : "Ankit" ,
        Email : "ankit@gmail.com",
        Address : "kanpur, UP",
       
    }
    ,
    {
        id:3,
        Img : <ImageAvatar />,
        Name : "Gautam" ,
        Email : "gautam@gmail.com",
        Address : "Jabalpur, MP",  
         
    },
    {
        id:4,
        Img : <ImageAvatar />,
        Name : "Harshad" ,
        Email : "Harshad@gmail.com",
        Address : " Pune, Maharashtra",
        Gender:"Male",
    },
    {
        id:5,
        Img : <ImageAvatar/>,
        Name : "Ankit" ,
        Email : "ankit@gmail.com",
        Address : "kanpur, UP",
        Gender:"Male",
    }
    
]
})