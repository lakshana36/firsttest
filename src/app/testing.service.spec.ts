import { TestBed, inject } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('TestingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    });
  });

  it('should be created', inject([TestingService], (service: TestingService) => {
    expect(service).toBeTruthy();
  }));
  it('should return 0 if input is negative',inject([TestingService], (service: TestingService) =>{
    const result= service.compute(-1);
    expect(result).toBe(0);
  }));
  it('should return value if input is positive',inject([TestingService], (service: TestingService) =>{
    const result= service.compute(7);
    expect(result).toBe(3);
  }));
  it('should be equal',inject([TestingService], (service: TestingService) =>{
    const result= service.equality(5);
    expect(result).toEqual(5);
  }));
  it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });
  it('should return welcome to virtusa',inject([TestingService], (service: TestingService) =>{
    expect(service.concat(' To Virtusa')).toBe('welcome To Virtusa');
  }));
  it('should contain testing as substring',inject([TestingService], (service: TestingService) =>{
    expect(service.concat('unit testing')).toContain('testing');
  }));
  it('should not contain testing as substring',inject([TestingService], (service: TestingService) =>{
    expect(service.concat('infomatica')).not.toContain('testing');
  }));
  it("Example of toMatch()",inject([TestingService], (service: TestingService)=>{ 
    expect("Jasmine tutorial in tutorials.com").toMatch(/com/);
 })); 
  it("Example of toBeCloseTo()",inject([TestingService], (service: TestingService) =>{ 
      expect(12.34).toBeCloseTo(12.3, 1);    
   })); 
   it('Should return array',inject([TestingService], (service: TestingService)=>{
    expect(service.sorting("1,2,3,4")).toBe("1,2,3,4");
   }));
   it('Should match with array elements',inject([TestingService], (service: TestingService)=>{
    expect(service.sorting("1,2,3,4")).toMatch("3,4");
   }));
   it('Should return repated elements',inject([TestingService], (service: TestingService)=>{
    expect(service.repeat("1,2,3,4,1,2")).toBe(' 1 2');
   }));
   it('should return exact result for switch',inject([TestingService], (service: TestingService)=>
  {
    expect(service.looping(1)).toBe("Good");
  }));
});


