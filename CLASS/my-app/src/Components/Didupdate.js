import axios from 'axios'
import React, { Component } from 'react'


export default class Didupdate extends Component {
constructor(){
    super()
    this.state={
        api:[],
        categoryData:"",
    }
    this.x1= React.createRef()

    this.myfunc=this.myfunc.bind(this)

    

}

componentDidMount(){
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        console.log(res)
        this.setState({api:res.data})
    })
}


componentDidUpdate(){
    console.log("DID update")
    console.log(this.state.categoryData);
    axios.get(`https://fakestoreapi.com/products/category/${this.state.categoryData}`)
    .then((res)=>{
        console.log(res);
        this.setState({api:res.data})
    })
}
myfunc(){
 var Value=this.x1.current.value;
 console.log(Value);
 this.setState({categoryData:Value})
}

  render() {
    //   console.log('CAT',this.state.categoryData)
      const VALUE=this.state.api;
    return (
      <div className='container'>
      

          
          <input type="text" ref={this.x1}/>
          <button onClick={this.myfunc}>Click</button>

          <div className='row'>
    {
        VALUE&&VALUE.map(obj=>
            <div className='col-xl-3'>
            <h1>{obj.price}</h1>,
            <p>{obj.title}</p>
            </div>
            
    
            
        )
    }
        </div>

      </div>
    )
  }
}
