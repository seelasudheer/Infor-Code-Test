import React, { Component } from 'react'
import './Tree.css'
export class TreeHierachy extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             employeeDetails:props.records,
             salaryIndollers:0,
             show:'',
             count:0,
             store:'',
             store1:''
        }     
        this.call();
    }
    call(){
        for(let i=0;i<this.state.employeeDetails.length;i++){
            this.state.salaryIndollers=this.state.employeeDetails[i].salary+this.state.salaryIndollers;
        }
    }
    val(e){
        this.state.store=e;
      
        if(this.state.store===this.state.store1){
            if(this.state.count==0){
                this.state.show=true;
            }
            else{ 
                this.state.show=false;
            }
        }
        else{
             this.state.show=true;
            this.state.count=0; 
        }
        this.state.count++;
        this.state.store1=e;
        }
        

    render() {
        const {employeeDetails}=this.state;
        return (
            <React.Fragment>
                <br/>
            <div className="Tree">
            <h1 style={{textAlign:"center"}}>Employee Tree</h1>
                <h3>Test Case 1</h3>
                <h4>Employee Tree</h4>
                {                    
employeeDetails.sort((x,y)=> (x.empName.toLowerCase()>y.empName.toLowerCase())*2-1),
employeeDetails.map(empId => {return empId.managerId=== 0 ? 
    
    <ul key={empId.id} >
    <li style={{fontWeight:"Bold"}}>{empId.empName.toLowerCase()}
    <p>Employees of : {empId.empName.toLowerCase()}</p>
    <ul>
    {employeeDetails.map((s) => (s.managerId===empId.id ?
        <li type="square"  key={s.id}>{s.empName.toLowerCase()}
        {
              empId.managerId===s.id?<p>Employees of : {s.empName.toLowerCase()}</p>:<p></p>
        } 
        {employeeDetails.map((e) => (e.managerId===s.id  ?<div>
          {
               e.managerId===s.id?<p >{this.val(s.id)}</p>:<p></p>
          } 
          {
              this.state.show?<p >Employees of : {s.empName.toLowerCase()}</p>:<p></p>
          }
        <li key={e.id} type="disc"  style={{marginLeft:'120px'}}>{e.empName.toLowerCase()}
        </li></div>:""  
      ))} 
        </li>:""
      ))} 
    </ul>
    </li>
    </ul>:""
} )}

<br/> <h3>Test Case 2</h3>
     <span>
     <b>Total Salary : </b>${this.state.salaryIndollers}
            </span>  
</div>
</React.Fragment>
        )
    }
    
}

export default TreeHierachy
