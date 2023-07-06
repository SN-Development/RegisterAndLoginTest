const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const cookies = require('cookie-parser')
const jwt = require('jsonwebtoken')
const app = express()
const mysql = require("mysql")

// const db   = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'cruddb'
// })

const db = mysql.createPool({
    host:'bdp8dkgd9zsnalqvs13y-mysql.services.clever-cloud.com',
    user:'ulj0efupmv2ddrxr',
    password:'UARshKhnQOH3jP0BKYW5',
    database:'bdp8dkgd9zsnalqvs13y'
})
//console.log(db)
// db.getConnection((error, connection) => {
//     if (error) {
//       console.error('Error acquiring connection:', error);
//       return;
//     }
//     connection.query('SELECT * FROM login', (error, results) => {
//         connection.release(); // Release the connection back to the pool
    
//         if (error) {
//           console.error('Error executing query:', error);
//           return;
//         }
    
//         console.log('Query results:', results);
//       });
// })
// app.use(cors({
//     origin:['https://dulcet-paletas-080049.netlify.app'],
//     methods:["GET","POST"],
//     credentials:true
// }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cheerful-dieffenbachia-1c946f.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookies())
// app.use(session({
//     secret:'secret',// a secret key used to encrypt the session cookie
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         secure:false,
//         maxAge: 1000 * 60 * 60 * 24
//     } // set the session cookie properties
// }))

// app.get('/api/home',(req,res)=>{
//   if(req.session.userName){
//     return res.json({valid:true, user:req.session.userName})
//   }
//   else{
//     return res.json({valid:false})
//   }
// })

const verifyUser = (req,res,next)=>{
  const token = req.cookies.token
  if(!token){
    return res.json({Message:"Please Provide cookie"})
  }
  else{
    jwt.verify(token,"our-jsonwebtoken-secret-key",(err,decoded)=>{
        if(err){
            return res.json({Message:"Authentication error"})
        }
        else{
            req.name = decoded.name;
            next()
        }
    })
  }
}

app.get('/api/test',(rq,res)=>{
    const sqlSelect = "Select * From login"
    db.query(sqlSelect,(err,result)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(result)
        }
    })
})

app.get('/api/home',verifyUser,(req,res)=>{
   return res.json({Status:"Success",name:req.name})
})

app.get('/api/logout',(req,res)=>{
    res.clearCookie("token")
    console.log("logout")
    return res.json({Status:"Success"})
})

app.post('/api/insert',(req,res)=>{
    const userName = req.body.userName
    const password = req.body.password
    const sqlInsert = "INSERT INTO login (UserName,Password) VALUES (?,?);"
    db.query(sqlInsert,[userName,password],(err,result)=>{
        console.log(result)
        if(err){
            return res.json({Status:'not success',error:err})
        }
        else{
            return res.json({Status:'success',rslt:result})
        }
    })
})


app.post('/api/login',(req,res)=>{
    const userName = req.body.userName
    const password  = req.body.password
    console.log(userName)
    console.log(password)
    const sqlInsert = "SELECT UserName,Password FROM login WHERE UserName = ? AND Password = ? ;"
    db.query(sqlInsert,[userName,password],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
             if(result.length>0){
                console.log("Success")
                // req.session.userName = result[0].UserName
                // console.log(req.session.userName)
                // return res.json("Success")
                const name = result[0].UserName
                const token = jwt.sign({name},"our-jsonwebtoken-secret-key",{expiresIn:'1d'})
                res.cookie("token",token)
                return res.json({Status:'Success'})
             }
             else{
                return res.json({message:"The record does not include in db"})
             }
        }
    })

})

// app.post('/api/login', (req, res) => {
//     //const { name, email } = req.body;
//     const userName = req.body.userName
//     const password = req.body.password
//     console.log(userName)
//     const query = 'INSERT INTO login (UserName, Password) VALUES (?, ?)';
//     const values = [userName, password];
  
//     // db.getConnection((error, connection) => {
//     //   if (error) {
//     //     console.error('Error acquiring connection:', error);
//     //     return res.status(500).json({ error: 'Internal server error' });
//     //   }
  
//       db.query(query, values, (error, results) => {
//         //connection.release();
  
//         if (error) {
//           console.error('Error inserting data:', error);
//           return res.status(500).json({ error: 'Internal server error' });
//         }
  
//         return res.status(200).json({ message: 'Data inserted successfully' });
//       });
//     });
  //});
  
  // 

app.post('/api/appointment',(req,res)=>{
    const date = req.body.date
    console.log(date)
    const timeSlot = req.body.timeSlot
    console.log(timeSlot)
    const sqlCheckSchedule = "SELECT ID FROM Schedule WHERE Date = ? AND TimeSlot = ? ;"
    const sqlInsertSchedule = "INSERT INTO Schedule (Date,TimeSlot) VALUES (?,?);"
    db.query(sqlCheckSchedule, [date,timeSlot],(err,result)=>{
        if(err){
            console.log(err)
            //return res.json({Status:"non-success",Err:err})
        }
        else{
            if(result.length>0){
                return res.json({Status:"not-success",Message01:"This time slot is already appointed"})
            }
            else{
                db.query(sqlInsertSchedule,[date,timeSlot],(err,result)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("Success")
                        return res.json({Message02:"Appointment submission is successful !"})
                    }
                })
            }

        }
    })
})


app.get('/api/appoint',(req,res)=>{
    let user = ''
    const sqlSelect = "SELECT Id FROM login Where UserName='Chamika';" 
    db.query(sqlSelect,(err,result)=>{
       //return res.json({r:result})
       user = result[0].Id 
       console.log(result)
       console.log(user)
       return res.json(result[0].Id)
    })
    //res.send("Hello world!")
     
})

app.listen(3007,()=>{
    console.log("Server runing on 3007port")
})