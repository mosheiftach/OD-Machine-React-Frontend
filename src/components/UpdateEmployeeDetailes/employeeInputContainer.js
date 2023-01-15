import React , {useState,useEffect}   from "react"
import '../../style/editEmployeeInputContainer.css'
export const EmployeeInputContainer =(props)=>{
    //Setting a component variable to the state from editEmployeePage in favor to change freely the variable and setting back
    //the state from editEmployeePage with the right data
    let infoHolder = props.currInfo
    const [inputValue,setInputValue]= useState('')

    useEffect(()=>{
        if(props.cancelClicked)
        {
            setInputValue('')
            props.setCancelClicked(false)
        }
    },[props.cancelClicked])

    //Setting the data on change input field
    const setData = (e) =>{
        infoHolder[props.category]= e.target.value;
        props.setInfo(infoHolder);
        setInputValue(e.target.value);
    }

    return(
        <div className='employee-input-container'>
            <div className='category-input'>{props.category}</div>
            <input value={inputValue} onChange={setData} className='employee-data-input' type='text'/>
        </div>
    )
}