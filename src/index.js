class Student{
  constructor(name){
    this.name = name
  }
  getname(){
    return this.name
  }
}

let stu = new Student('fanfan')
alert(stu.getname())