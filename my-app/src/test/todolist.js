import React, { Component } from 'react'
import {Input,Table} from "@hi-ui/hiui"
export default class todolist extends Component {
  constructor(props){
    super(props);
    this.state={
      columnsOne:[{
        title:"待办事项",dataIndex:"things",key:'1'
      }],
      columnsTwo:[{
        title:"已完成事项",dataIndex:"things",key:'1'
      }],
      dataOne:[],
      dataTwo:[],
      value:'',
      selectedRowKeys: []
    }
  }
  // put(e){
  //   if(e&&e.keyCode===13){
  //     console.log(123);
  //     console.log(e.target.value);
      
      
  //     this.state.dataOne.push({"things":e.target.value});
  //   }
  // }
  render() {
    const { selectedRowKeys} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys,rows)=>{
        console.log('onchange',selectedRowKeys,rows)
        let newData=Object.assign(this.state.dataTwo,rows);
        let showData=this.state.dataOne.filter((item)=>{ 
          console.log("item",item);
          console.log("rows",rows);
          
          return item.key!==rows.key
        })
        console.log("showData",showData);      
        this.setState({
          selectedRowKeys:rows.key,
          dataTwo:newData,
          dataOne:showData
        },()=>{
          console.log("this.state.dataOne",this.state.dataOne);          
        })
      },
      // dataName:'age'
    }
    return (
      <div>
      <Input placeholder='请输入待办事项' 
        id="customId"
        onKeyDown={this.put=(e)=>{
          if(e&&e.keyCode===13){
            let newData=Object.assign(this.state.dataOne,[{key:e.target.value,'things':e.target.value}])
            this.setState({dataOne:newData},()=>{
              // console.log(this.state.dataOne);              
            })
          }
        }} 
        value={this.state.value} 
        type="text"
        style={{width: '250px'}}
      />
      <Table columns={this.state.columnsOne} data={this.state.dataOne} rowSelection={rowSelection}/>
      <Table columns={this.state.columnsTwo} data={this.state.dataTwo} />
      </div>
    )
  }
}
