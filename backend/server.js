const express = require('express')
const cors   = require('cors')
const session = require('express-session')
const cookies  = require('cookie-parser')
const bodyParser = require('body-parser')
const mysql  = require('mysql')
const jwt    = require('jsonwebtoken')

const app  = express()
const db   = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'sn_care'
})

app.use(cors({
    origin:['http://localhost:3000'],
    methods:["GET","POST"],
    credentials:true
}))
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
                                    console.log('Sha')
                                    const userID = result3[0].ID
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

// app.get('/api/appointmentID',(req,res)=>{
    
//     const doctor = req.body.doctor
//     const date = req.body.date
//     const timeSlot = req.body.timeSlot
//     const sqlGetId = "SELECT ID FROM Appointment WHERE Doctor = 'Shashindu';"
//     db.query(sqlGetId,(err,result3)=>{
//         if(err){
//             console.log(err)
//         }
//         else{

//             console.log(result3[0].ID)
//             //return res.json({Result:result3})
//         }
//     })
// })

app.get('/api/gotoappointment',verifyUser,(req,res)=>{
  return res.json({Status:'Success',user:req.name})
})

app.listen('3008',()=>{
    console.log("Server running 3008 port")
})