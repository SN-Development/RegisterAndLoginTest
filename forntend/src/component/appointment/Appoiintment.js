import React, { useState } from 'react'
import './Appointment.css'
//import appointmentLogoImg from './images/logo.png'
//import appointmentDocImg from './images/d2.png'
import axios from 'axios';

export default function Appoiintment() {
//const [department, setDepartment] = useState('');
// const [schedule, setSchedule] = useState({
//   date:'',
//   timeSlot:''
// })
useState(()=>{
  axios.get('http://localhost:3007/api/appoint').then(res=>{
    console.log(res.data)
    //console.log(result)
  })
})
// const handleSubmit = ()=>{
//    alert("Submitted")
//    axios.post('http://localhost:3007/api/appointment',{
//       date: schedule.date,
//       timeSlot :schedule.timeSlot
//    }).then(response=>{
//        if(response.data.Status ==="not-success"){
//           //console.log(response.data.Err.sqlMessage)
//           alert(response.data.Message01)
//        }
//        else{
//         alert(response.data.Message02)
//         //setSchedule('')
//         schedule.timeSlot =""
//         schedule.date = ""
//        }
//    })
// }
  return (
    // <div className='container'>
    //   <div className='appointment-box'>
    //     <div className='appointment-left'>
    //          <div className='logo-for-appointmnet'>
    //             <img src={appointmentLogoImg} alt='logo' style={{position:'relative',top:'-15vh',left:'0',width:'50%',height:'45vh'}}></img>
    //          </div>
    //          <div className='doctor-box'>
    //             <img src={appointmentDocImg}  style={{position:'absolute',top:'-15vh',left:'-2vw',width:'35vw',height:'83vh'}}></img>
    //          </div>
    //     </div>

    //     <div className='appointment-right'>

    //          <div className='form-heading'>
    //                  Let's protect youself and those arround you
    //          </div>

    //          <div className='appointment-form'>


    //              <div className='paitent-input'>
    //                <label>I am registering for </label>
    //                <div className='choose-patient'>
    //                  <div className='patinet-type'>
    //                    <input type="radio" id="myself" name="patinet-type" value="myself"/>
    //                    <label for="mtself">Myself</label>
    //                  </div>
    //                  <div className='patinet-type'>
    //                    <input type="radio" id="other" name="patinet-type" value="other"/>
    //                    <label for="other">Other</label>
    //                  </div>
    //                </div>
    //              </div>

    //              <div className='paitent-input'>
    //                <label>Patient's Full Name</label>
    //                <input type='text' className='p-intput' id='fullname'></input>
    //              </div>

    //              <div className='paitent-input'>
    //                <label>Patient's Contact Number</label>
    //                <input type='text'></input>
    //              </div>

    //              <div className='paitent-input'  >
    //                <label>Patinet ID Number</label>
    //                <div className='patient-id'>
    //                  <div className='select-id-container'>
    //                    <select >
    //                      <option>ID Type</option>
    //                      <option>NIC</option>
    //                      <option>Passport</option>
    //                      <option>Licence</option>
    //                    </select>
    //                  </div>
    //                  <input type='text'></input>
    //                </div>
    //              </div>

    //              <div className='paitent-input'  >
    //                <label>Select Department & Doctor</label>
    //                <div className='choose-department'>
    //                <select className='select-department' onChange={(e)=>{
    //                   //alert(e.target.value);
    //                   setDepartment(e.target.value)
    //                }}>
    //                    <option selected disabled hidden>Department</option>
    //                    <option value="Neurology">Neurology</option>
    //                    <option value="Dentist">Dentist</option>
    //                    <option value="Ophthalmology">Ophthalmology</option>
    //                    <option value="Cardiology">Cardiology</option>
    //                    <option value="Surgery">Surgery</option>
    //                 </select>

    //                  {department ==='Neurology'?
    //                  (<select className='select-department'>
    //                    <option selected disabled hidden>Doctor</option>
    //                    <option value='Shashindu'>Shashindu</option>
    //                    <option value='Chamika'>Chamika</option>
    //                    <option value='Nisansala'>Nisansala</option>
    //                  </select>):
    //                  (<></>)}

    //                 {department ==='Dentist'?
    //                  (<select className='select-department'>
    //                    <option selected disabled hidden>Doctor</option>
    //                    <option value='Sathira'>Sathira</option>
    //                    <option value='Nimni'>Nimni</option>
    //                    {/* <option value='Nisansala'>Nisansala</option> */}
    //                  </select>):
    //                  (<></>)}

    //                 {department ==='Ophthalmology'?
    //                  (<select className='select-department'>
    //                    <option selected disabled hidden>Doctor</option>
    //                    <option value='Priyanth'>Priyantha</option>
    //                    <option value='Champika'>Champika</option>
    //                    {/* <option value='Nisansala'>Nisansala</option> */}
    //                  </select>):
    //                  (<></>)}

    //                </div>
    //              </div>

    //              <div className='paitent-input-date-time'>
    //                <div className='choose-date'>
    //                   <label>Chooce A Date</label>
    //                   <input type='date' onChange={(e)=>{
    //                     schedule.date = e.target.value
    //                     //alert(schedule.date)
    //                   }} ></input>
    //                </div>
    //                <div className='choose-time'>
    //                   <label>Chooce Time Slot</label><br></br>
    //                   <select className='select-time-slot'onChange={(e)=>{
    //                     schedule.timeSlot = e.target.value;
    //                     //alert(schedule.timeSlot)
    //                   }} >
    //                    <option selected disabled hidden>Time slots</option>
    //                    <option value='8.30 -  9.00'> 8.30 -  9.00</option>
    //                    <option value='9.00 -  9.30'> 9.00 -  9.30</option>
    //                    <option> 9.30 - 10.00</option>
    //                    <option>10.30 - 11.00</option>
    //                    <option>11.00 - 11.30</option>
    //                    <option></option>
    //                  </select>
    //                </div>
    //              </div>

    //              <div className='paitent-input'>
    //                <input type='submit' onClick={handleSubmit}></input>
    //              </div>

    //          </div>
    //     </div>

    //   </div>
    // </div>
    <div>

    </div>
  )
}
