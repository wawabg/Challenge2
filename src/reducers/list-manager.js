
import { Mylist } from "../services/user-list"
import { login } from "../services/user.service"
import { useNavigate } from "react-router-dom"

//initiallist=Mylist


const  listManager=(initiallist=[],actions)=>{
    switch(actions.type){
        case "add" :
            console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere")
            let newitemlist=[...initiallist]
            console.log(actions)
            let x=login(actions.text1,actions.text2)
            if(x.loggedIn){
            localStorage.setItem('nom', x.lastName);
            localStorage.setItem('prenom', x.firstName);
            
        }else{
            console.log("ome")
        }
            /*
            newitemlist.push(actions.text)
            console.log(newitemlist)
            return newitemlist
            */
            //return {    }
            //return [... initiallist,initiallist.push(actions.text) ] 
        case "delete" :
            //console.log(Mylist)  
            console.log(actions)
        //return Mylist.splice(Mylist.length-1, 1)
            let newlist=initiallist.splice(1,initiallist.length-1)
            return newlist

        default:
            return initiallist
    }
}


export default listManager