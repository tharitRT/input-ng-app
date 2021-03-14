import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-col',
  templateUrl: './three-col.component.html',
  styleUrls: ['./three-col.component.css']
})
export class ThreeColComponent implements OnInit {
  input : number = 0
  typeSelect:string = 'prime'
  result: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  isFloat(n:number) {
    return n === +n && n !== (n|0);
  }

  isInteger(n:number) {
      return n === +n && n === (n|0);
  }

  isSquare(n:number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }

  isFibonacci (n:number) {
    if (this.isSquare(5*(n*n)-4) || this.isSquare(5*(n*n)+4)) {
       return true;
    } else { return false; }
  } 

  isPrime(n:number) {
    for(let i = 2; i < n; i++)
      if(n % i === 0) return false;
    return n > 1;
  }

  onSubmitNumber(event:any){
    if(event.target.value != '' && event.target.value != null){
      let number = parseFloat(event.target.value)
      if(number>=0){
        if(this.isFloat(number)){
          let round =  Math.round(number)
          event.target.value = round
        } 
      }else{
        event.target.value = 1
      }
    }

    this.input = event.target.value 
    this.checkResult()  
  }

  onTypeChange(event:any){
    console.log(event.target.value)
    let type = event.target.value.toString()
    this.typeSelect = type
    this.checkResult()  
  }

  checkResult(){
    if(this.typeSelect === 'prime'){
      if(this.isPrime(this.input)){
        console.log(this.input, 'is prime')
        this.result = 'true'
      }else{
        this.result = 'false'
      }
    }
    if(this.typeSelect === 'fibonacci'){
      if(this.isFibonacci(this.input)){
        console.log(this.input, 'is fibonacci')
        this.result = 'true'
      }else{
        this.result = 'false'
      }
    }
  }

}
