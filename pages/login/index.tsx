import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Typography from "../../components/shared/Typography";
import Table from "../../components/shared/Table";
import Button from "../../components/shared/Button";
const LoginAccount = () => {
    // const [example, setExample]= useState({variable1:"", variable2:''});
    // setExample({...example,variable1:"123"});
    const [childValue, setChildValue] = useState('');
    const [tableHeader, setTableHeader] = useState([{header: 'Header 1'}, {header: 'Header 2'}]);
    const [tableData, setTableData] = useState([{label: 'data 1'}, {label: 'data 2'}]);
    const [buttonClicked, setButtonClicked] = useState('');
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });
    const formOptions = { mode: 'onChange', resolver: yupResolver(validationSchema), };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const onSubmit = (data: any) => {
        // display form data on success
        setButtonClicked('From Form button')
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;  
    }



    const emailChange = (e: any) => {
        setChildValue(e?.target.value)
    }

    const buttonMessage = (e: any) =>{
        console.log(e);
        
        setButtonClicked(e);
    }

    return (
        <div>
            <Typography parentData={buttonClicked}/>
            <Table header={tableHeader} data={tableData} tableSubmit={buttonMessage}>
                <label>
                    This is the table
                </label>
            </Table>
            <form>
                <div className="form-group col">
                    <label>Email</label>
                    <input name="email" type="text" {...register('email')} onChange={e => emailChange(e)}className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="form-group col">
                    <label>Password</label>
                    <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <Button label="Login" type='submit' disabled={!formState.isValid} handleClick={handleSubmit(onSubmit)} />
                    {/* <button type="submit" className="btn btn-primary mr-1">Login</button> */}
                    {/* <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button> */}
                </div>
            </form>
        </div>
    )

}

export default LoginAccount;