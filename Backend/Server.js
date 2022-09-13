
// const axios =require("axios")
// const express = require("express")
// const app = express()
// app.use(express.json());
// var cors = require('cors')

 
// app.use(cors())

// // const myfunc =async ()=>{

// //   //     // console.log(data)
      

// //   app.get('/',async(req,res)=>{
// //    const data =  await axios.get('https://api.covid19api.com/summary')
// //     const datas = JSON.stringify(data.data)
// //    res.json({
// //      datas:datas
// //    })
   

// //   })
// // }
// //   myfunc()



// app.get('/',async (req,res)=>{
//   try{
//     const response = await axios.get('https://api.covid19api.com/summary')
//   res.status(200).send({
//     message: "successfully get the data",
//     count: 0,
//     status: response.data
//   })
//   } catch(error){
//     res.status(400).send({
//       message: error.message,
//       count: 0,
//       status: "failed to get the message"
//     })
//   }
// })

// app.listen(4000,()=>{
//   console.log('server start');
// })




// //   http.createServer( async function (req,res){
// //     var data= await axios.get('https://api.covid19api.com/summary')
// //     // consoale.log(data)
    
// //   app.get('/a',(req,res)=>{
// //     res.send('fssfsd')
// //   })
// // }).listen(4001)


const express =require("express")
const app = express()
const axios= require("axios")
const cors = require("cors")


app.use(cors())

app.get('/',(req,res)=>{
   try{
    axios.get("https://api.covid19api.com/summary")
    .then((data)=>{
      console.log(data)
      res.status(200).send({
        message: "success",
       status: data
      })
      // .catch((err)=>{
      //   console.log(err)
      //   res.status(400).send({
      //     message: "failed",
      //  status: err.message
      //   })
      // })
    })
   }catch(error){
        res.status(400).send({
          message: "failed",
       status: error.message
        })
   }

})


app.listen(4000,()=>{
  console.log("Server started")
})