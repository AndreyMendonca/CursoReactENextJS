import { SignUpForm } from "@/types/SignUpForm";
import { useController, UseControllerProps } from "react-hook-form"

export const Input = (props: UseControllerProps<SignUpForm>) =>{
    const {field, fieldState} = useController(props);
    return (
        <div className="my-3">
            <input type="text" 
                {...field}
                placeholder={props.name}
                className={`border ${fieldState.invalid ? 'border-red': 'border-black'} p-3`}
            />
            {fieldState.error?.type === 'required' && <p>Campo obrigatório</p> }
            {fieldState.error?.type === 'min' && <p>Campo tem idade minima</p> }
        </div>
    )
}