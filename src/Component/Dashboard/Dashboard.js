import { useEffect, useState } from 'react';
import Helper from '../../Api/Helper';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ()=> {

    const [patient, setPatient] = useState([]);

    const columns = [{
        dataField: 'code',
        text: 'Patient code'
    }, {
        dataField: 'name',
        text: 'Name'
    }, {
        dataField: 'dob',
        text: 'Date of Birth'
    }, {
        dataField: "mobile",
        text: "Mobile No"
    }];

    const fetchData = async () => {
        
        const {data:patient} = await Helper.get({
            url: "https://myphysio.digitaldarwin.in/api/get-patient/?id=1",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Cookie": "csrftoken=q0FqcIRO1do5fs8c7A5xOA0tq9PwYicn24k7Ajv7AX0oVn9FUgUwI7WLtUwXxVXE, sessionid=wjtbes2w68vagjm123nj7jreughzpzhf, jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.bdfW8B6lG7RhPmHCtO6rPgf3IYlDwAJc7LUKtfTE2eU, tran=satmis1000003"
                },  
        });
        setPatient(patient);
      }
    
      useEffect(() => {
        fetchData();
      },[]);
  
    return (
        <div>
           <BootstrapTable keyField='id' data={ patient } columns={ columns } /> 
        </div>
    );
}

export default Dashboard;