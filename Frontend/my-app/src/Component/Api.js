// // import React, { Component } from 'react'
// // import axios from 'axios'

// // class Api extends Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       apidata: []
// //     }
// //     // console.log(this.state.data);
// //   }
// //   async componentDidMount() {
// //     await axios.get('http://localhost:4000/')
// //       .then((res) => {
// //         // const data = res.data
// //         console.log(res);
// //         console.log("-----data",res.data.datas);
// //         var ans = JSON.parse(res.data.datas.status.countries)
// //         console.log(ans);
// //         this.setState({ apidata: ans })
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       })
// //   }

// //   render() {
// //     console.log("render", this.state.apidata)
// //     const data = this.state.apidata
// //     console.log("---- check", typeof data)
// //     let array =[data]
// //     console.log(array)
// //     // console.log("data length",data.length)


// //     return (


// //     <div className="container">      
// //       <table  className='table table-stripped'>
// //         <tr>
// //           {/* <td>{data.ID}</td>
// //           <td>{data.Country}</td> */}
// //           {data.map((obj)=>
// //           <td>{obj.ID}</td>



// //           )}


// //           </tr>



// //       </table>





// //       </div>
// //     )
// //   }
// // }
// // export default Api





// import axios from 'axios'
// import React, { Component } from 'react'

// export default class Api extends Component {
//   constructor(){
//     super();
//     this.state={
//       apidata:[]

//     }
//   }
//  async componentDidMount(){
//     console.log("mount cycle")
// await axios.get("http://localhost:4000/")
// .then((res)=>{
//   console.log(res.data.status.Countries)
//   // .catch((err)=>{
//   //   console.log(err)
//   // })
//    this.setState({
//      apidata:res.data.status.Countries
//    })
//   //  alert(`${res.data.message}`)

// })
//   }
//   render() {
// // console.log("render",this.state.apidata)


//     return (
//       <div className='container'>
//         <table className='table'>
//           {/* {
//             this.state.apidata.map((data)=>{
//               <tr>
//               <td>{data.ID}</td>
//               </tr>
//             })
//           } */}
//           <thead className='head'>
//             <tr>
//               <td>
//                 Sr.No
//               </td>
//               <td>
//                 Country
//               </td>
//               <td>
//               CountryCode
//               </td>
//               <td>
//               Slug
//               </td>
//               <td>NewConfirmed</td>
//               <td>NewDeaths</td>
//               <td>NewRecovered</td>
//             </tr>
//           </thead>
//           <tbody className='tbody'>
//             {
//               this.state.apidata.map((obj)=>(
//                 <tr key={obj.ID}>
//                   <td>{((this.state.apidata.indexOf(obj))+1)}</td>
//                   <td>{obj.Country}</td>
//                   <td>{obj.CountryCode}</td>
//                   <td>{obj.Slug}</td>
//                   <td>{obj.NewConfirmed}</td>
//                   <td>{obj.NewDeaths}</td>
//                   <td>{obj.NewRecovered}</td>

//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }






// // // <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
// // // <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
// // // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
// // //     integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
// // // <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
// // // <div id="root"></div>
// // // <script s  rc="https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js"></script>

// // // <script type="text/babel">
// // //     class Product extends React.Component {
// // //         constructor() {
// // //             super();
// // //             console.log("const");
// // //             this.state = { count: 0, apidata: [] }
// // //         }
// // //         async componentDidMount() {
// // //             console.log('mount cycle', Math.random());
// // //             console.log(axios);
// // //             await axios.get("https://jsonplaceholder.typicode.com/users")
// // //                 .then((res) => {
// // //                     console.log(res.data);
// // //                     this.setState(
// // //                         { apidata: res.data }
// // //                     )
// // //                 })
// // //         }
// // //         render() {
// // //             console.log('render', this.state.apidata);
// // //             const API=this.state.apidata
// // //             const { count } = this.state;
// // //             return (
// // //                 <div className="container">
// // //                     <button onClick={() => { this.setState({ count: Math.random() }) }} >enter</button>
// // //                     <p>{count}</p>
// // //                     <table className="table table-striped">
// // //                         {
// // //                             API && API.map((obj)=>
// // //                             <tr>
// // //                                 <td>{obj.name}</td>
// // //                                 <td>{obj.phone}</td>
// // //                                 <td>{obj.address.city}</td>
// // //                                 </tr>)


// // //                         }
// // //                     </table>

// // //                 </div>
// // //             )
// // //         }
// // //     }
// // //     ReactDOM.render(<Product />, document.getElementById("root"))

// // // </script>


import React, { Component } from 'react'
import axios from "axios"


export default class Api extends Component {
  constructor() {
    super()
    this.state = {
      apidata: [],

    }
  }
  async componentDidMount() {
    await axios.get("http://localhost:4000/")
      .then((response) => {
        console.log(response.data.status.Countries)
        this.setState({
          apidata: response.data.status.Countries
        })
        //   this.setState({
        //     thead:response.data.status.Countries
        //  })
      })


  }

  render() {
    // console.log("render",this.state.apidata)
    return (
      <div className='table'>
        <thead className='head'>
          <tr>
            <td>
              Country
            </td>
          
          
            <td>
              CountryCode
            </td>
            <td>Date</td>
            
            <td>Slug</td>
            <td> ID</td>
            <td>NewConfirmed</td>
            <td>NewDeaths</td>
            <td>NewRecovered</td>
            <td>TotalConfirmed</td>
            <td>TotalDeaths </td>
            <td>TotalRecovered</td>
            

          </tr>

        </thead>

        <tbody className='tbody'>
          {this.state.apidata.map((obj) => (
            <tr key={obj.ID}>
              <td className='table-primary'>
                {obj.Country}
              </td>
              <td className='table-secondary'>{obj.CountryCode}</td>
            <td className='table-success'>{obj.Date}</td>

            <td className='table-danger'>{obj.Slug}</td>
            <td className='table-warning'>{obj.ID}</td>
            <td className='table-info'>{obj.NewConfirmed}</td>
            <td className='table-light'>{obj.NewDeaths}</td>
            <td className='table-primary'>{obj.NewRecovered}</td>
            <td  className='table-secondary'>{obj.TotalConfirmed}</td>
            <td className='table-success'>{obj.TotalDeaths}</td>
            <td className='table-danger'>{obj.TotalRecovered}</td>

          

            </tr>
          ))}
        </tbody>





      </div>
    )
  }
}




























