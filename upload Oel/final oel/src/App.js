import React , {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import Card from './Components/Card';



function App() {
  
  const [task, setTask] = useState('');
  const [role, setRole] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');
  const [salary, setSalary]= useState('');

  const [employee, setEmployee] = useState([]);

  useEffect(()=> {
    Axios.get("http://localhost:8001/read").then((response) => {
      setEmployee(response.data);
    });
  }, []);



  const submitTask = () => {
    Axios.post("http://localhost:8001/insert",{
        task:task,
        role:role,
        age:age,
        phone:phone,
        address:address,
        gender:gender,
        language:language,
        salary:salary
      });
  };


  return (
    <div className="App">
      <div className='container'>
        <div className='Left'>
            <h1>Add Employees's</h1>
            <input type={'text'}  onChange={(e) => {setTask(e.target.value)}} value = {task} placeholder = {'Add Name'}/>
            <input type={'text'}  onChange={(e) => {setRole(e.target.value)}} value = {role} placeholder = {'Add Role'}/>
            <input type={'text'}  onChange={(e) => {setAge(e.target.value)}} value = {age} placeholder = {'Add Age'}/>
            <input type={'text'}  onChange={(e) => {setPhone(e.target.value)}} value = {phone} placeholder = {'Add Phone'}/>
            <input type={'text'}  onChange={(e) => {setAddress(e.target.value)}} value = {address} placeholder = {'Add Address'}/>
            <input type={'text'}  onChange={(e) => {setLanguage(e.target.value)}} value = {language} placeholder = {'Add Language'}/>
            <input type={'text'}  onChange={(e) => {setSalary(e.target.value)}} value = {salary} placeholder = {'Add Salary'}/>
            <input type={'text'}  onChange={(e) => {setGender(e.target.value)}} value = {gender} placeholder = {'Add Gender'}/>
           
            <div className='but' style={{marginTop:'20px'}}><button onClick = {submitTask} style={{marginTop:'20x' , width:'800px', height:'30px'}}>Add Employee</button></div>
            <div className = "con" style={{marginTop:'20px', marginBottom:'20px'}}>
            <p>Confirmation : {task} </p>
            </div>
        </div>
        <h3>List</h3>
        <div className='right'>
          
           
            {employee.map((value, key) => {
              return( <>
                
                <Card key={key} name = {value.task} role={value.role} age = {value.age} phone= {value.phone} address = {value.address} language = {value.language} salary = {value.salary} gender = {value.gender}/>
                </>)
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
