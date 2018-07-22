import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor() { }
  compute(number){
    if(number<0)
    return 0;
    else
    return number%4;
  }
  equality(number){
    return number;
  }
  concat(string){
    return 'welcome'+string;
  }
  contain(string)
  {
    return string;
  }
  sorting(arr){
    return arr;
  }
  repeat(arr)
  {
    var a = arr.split(",").sort();
            var resultString="", count = 0,i,j,t,u;
            for(i=0;i<a.length-1;i++)
            {
                count = 0;
                t = parseInt(a[i]);
                for(j=i+1;j<a.length;j++)
                {
                    u = parseInt(a[j])
                    if(t == u)
                        count++;
                    else 
                        break;
                }
                if(count>0)
                {
                    resultString = resultString+ " " + t ;
                }
            }
    return resultString; 
  }
  looping(number)
  {
    var grade = number; 
  switch(grade) { 
   case 0: { 
      return "Excellent"; 
      break; 
   } 
   case 1: { 
      return "Good"; 
      break;
   } 
   case 2: {
      return "Fair"; 
      break;    
   } 
   case 3: { 
      return "Poor"; 
      break; 
   }  
   default: { 
      return "Invalid choice"; 
      break;              
   } 
}
  }

  
}
