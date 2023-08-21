const express = require('express')
const cors   = require('cors')
const session = require('express-session')
const cookies  = require('cookie-parser')
const bodyParser = require('body-parser')
const mysql  = require('mysql')
const jwt    = require('jsonwebtoken')

const app  = express()
// const db   = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'book_a_doc'
// })

const db   = mysql.createPool({
    host:'bypopnusemkxar0vqkti-mysql.services.clever-cloud.com',
    user:'uwnq6nr5jl5gb74v',
    password:'EUcdyJcxXENLz5eNVVSi',
    database:'bypopnusemkxar0vqkti'
})

app.use(express.static('build'))

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
//     })

// app.use(cors({
//     origin:['https://warm-sorbet-3369b0.netlify.app'],
//     methods:["GET","POST"],
//     credentials:true
// }))
// app.use(cors({
//     origin:['https://sn-book-a-doc-01.onrender.com'],
//     methods:["GET","POST"],
//     credentials:true
// }))

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
  
  
app.get('/api/home',verifyUser,(req,res)=>{
     return res.json({Status:"Success",name:req.name})
  })

  
app.get('/api/loginout',(req,res)=>{
    res.clearCookie("token")
    return res.json({Status:"Success"})
})

app.get('/api/test',(req,res)=>{
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
// app.get('/api/home',(req,res)=>{
//     if(req.session.user){
//         return res.json({valid:true,user:req.session.user})
//     }
//     else{
//         return res.json({valid:false})
//     }
// })


app.post('/api/register',(req,res)=>{
    const userName = req.body.userName
    const password = req.body.password
    console.log(userName,password)
    const sqlInsert = "INSERT INTO login (UserName,Password) VALUES (?,?);"
    //const sql = "INSERT INTO login (UserName,Password) VALUES (?,?);"
    
    db.query(sqlInsert,[userName,password],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
            //console.log(result)
        }
    })

})



app.post('/api/login',(req,res)=>{
    const userName = req.body.userName
    const password = req.body.password
    console.log(userName,password)
    const sqlSelect = "SELECT UserName,Password FROM login WHERE UserName = ? AND  Password = ?;"
    //const sql = "INSERT INTO login (UserName,Password) VALUES (?,?);"
    
    db.query(sqlSelect,[userName,password],(err,data)=>{
        if(err){
            return res.json(err)
        }
        //console.log(data.length)
        else{
            if(data.length>0){
                // req.session.user = data[0].UserName
                // console.log(req.session.user)
                // return res.json("Success")
                //console.log(result)
                const name = data[0].UserName
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

//to check time slot and insert appointment
app.post('/api/appointment',(req,res)=>{
    
    const doctor = req.body.doctor
    const date = req.body.date
    const timeSlot = req.body.timeSlot
    //const id = ''
    //console.log(doctor)
    const sqlCheck = "SELECT Doctor,Date,Time FROM Appointment WHERE Doctor = ? AND Date = ? AND Time = ? ;"
    const sqlInsertAppointment = "INSERT INTO Appointment (Doctor,Date,Time) VALUES (?,?,?) ;"
    const sqlGetId = "SELECT ID FROM Appointment WHERE Doctor = ? AND Date = ? AND Time = ? ;"

    db.query(sqlCheck,[doctor,date,timeSlot],(err,result1)=>{
        if(err){
            console.log(err)
        }
        else{
            //console.log(result1)
            if(result1.length===0){
                db.query(sqlInsertAppointment,[doctor,date,timeSlot],(err,result2)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                       //console.log(result1.Doctor)
                       //app.get('/api/appointmentID',(req,res)=>{
    
                            db.query(sqlGetId,[doctor,date,timeSlot],(err,result3)=>{
                                if(err){
                                    console.log(err)
                                }
                                else{
                                    if(result3.length===1){
                                    //console.log('Sha')
                                    const userID = result3[0].ID
                                    console.log(userID)
                                    return res.json({Status:'Success',id:userID})
                                    }
                                }
                            })
                        //})
                        //return res.json({Status:'Success'})
                    }
                })
                
            }
            else{
                return res.json({Status:'Not Success'})
            }
        }
    })
})

app.get('/api/gotoappointment',verifyUser,(req,res)=>{
  return res.json({Status:'Success',user:req.name})
})


app.post('/api/doctor',(req,res)=>{
    
    const toggleNumber = req.body.toggle
    console.log(toggleNumber)
    const sqlGetDoctor = 'SELECT * FROM Doctor WHERE DptID = ? '

    db.query(sqlGetDoctor,[toggleNumber],(err,result)=>{
        if(err){
            console.log(err)
            return res.json(err)
        }
        else{
            let doctor = []
            doctor = result

            // result.map((doctor)=>(
            //     console.log(doctor.DoctorID)
            // ))

            //console.log(result)
            return res.json({Result:result,Status:'Success'})
        }
    })

})


app.post('/api/department',(req,res)=>{
    
    const toggleNumber = req.body.toggle
    //console.log(toggleNumber)
    const sqlGetDoctor = 'SELECT * FROM Department WHERE DepartmentID = ? '

    db.query(sqlGetDoctor,[toggleNumber],(err,result)=>{
        if(err){
            console.log(err)
            return res.json(err)
        }
        else{
           if(result.length>0){
              let department = []
              department = result

              // result.map((department)=>(
              //     console.log(department.DepartmentID)
              // ))

              const sqlGetFunction = 'SELECT * FROM DptFunction WHERE DptID = ?'

              db.query(sqlGetFunction,[toggleNumber],(error,rsl)=>{
                if(error){
                    console.log(err)
                }
                else{
                    //console.log(rsl)
                    return res.json({Result:result,Status:'Success',rsl:rsl})
                }
              })

              //console.log(result)
              //return res.json({Result:result,Status:'Success'})
           }
        }
    })

})

app.post('/api/appointment-doctor',(req,res)=>{
    const id = req.body.id
    let departmentID = ''
    console.log(id)
    const sqlGetDoctor = 'SELECT DoctorName,DptID FROM Doctor WHERE DoctorID = ?'

    db.query(sqlGetDoctor,[id],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result[0].DoctorName)
            departmentID = result[0].DptID
            console.log(departmentID)
           
            if(result.length==1){
                const sqlGetDepartment = 'SELECT DepartName FROM Department WHERE DepartmentID = ?'
                db.query(sqlGetDepartment,[departmentID],(err2,result2)=>{
                   if(err2){
                      console.log(err2)
                   } 
                   else{
                      console.log(result2)
                      return res.json({Doctor:result[0].DoctorName,Department:result2[0].DepartName})
                   }
                })
            }
        }
    })
})


app.listen('3008',()=>{
    console.log("Server running 3008 port")
})