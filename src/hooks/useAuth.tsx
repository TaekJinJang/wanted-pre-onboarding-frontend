import { useNavigate } from "react-router-dom";
import { AuthAPI } from "../types/AuthTypes";
import { useEffect, useState } from "react";

interface useAuthProps {
    api: AuthAPI;
    navigation : string;
    message : {
        success:string;
        error:string;
    }
}

const useAuth = ({api,navigation,message}:useAuthProps) => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
        email:{value:'', validator:(value:string) => value.includes('@'), isValid:false},
        password:{value:'',validator:(value:string) => value.length >= 8, isValid:false}
    });
    
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {id,value} = e.target;
        if(id === 'email' || id === 'password') {
            setForm({
                ...form,
                [id] : {...form[id], value,isValid : form[id].validator(value)}
            })
        }
    }
    
    const [isSignValid,setIsSignValid] = useState(false);
    
    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {
            email:{value:email},
            password:{value:password}
        } = form;

        try {
            const res = await api({email,password});
            if(res.status === 200 || res.status === 201) {
                if(res.status === 200) {
                    localStorage.setItem('accessToken',res.data.access_token);
                }
                alert(message.success);
                navigate(navigation)
            }
        } catch (error) {
            console.error(error);
            alert(message.error)
        }

        };
        useEffect(() => {
            setIsSignValid(Object.values(form).every(el=>el.isValid))
        },[form])


    return {form,onChange, onSubmit, isSignValid}
};

export default useAuth;
