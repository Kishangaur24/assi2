import { useRecoilValue } from 'recoil'
import {RecoilRightSection} from '../../RecoilState/RecoilRightSection'
import style from'./RightSection.module.css'

export default function RightSection() {
    const rightSecUserDetail = useRecoilValue(RecoilRightSection)
    console.log(rightSecUserDetail,"I am from recoil")
    return(
        <>
        <div>
            <div  className={style.main}>
             
                    
            
        
        <div className={style.profile}>
      
            <h1>Name:{rightSecUserDetail.Name}  </h1>  
            <h2>Email: {rightSecUserDetail.Email} </h2>
            
        <h1>Address:{rightSecUserDetail.Address} {rightSecUserDetail.address}</h1>
        
        <h2>Gender:{rightSecUserDetail.Gender} </h2>
        
        {/* <button>Edit</button> */}
        </div>

        
        </div>
        </div>
        
       
        
    
        </>
    )
}