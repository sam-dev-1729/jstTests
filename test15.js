console.log("hello");
console.log("========== test15 ==========");
 
const person = {
  fname: "ali",
  lname: "mohamodi",
  get fullName() {
    return `${person.fname} ${person.lname}`;
  },
  set fullName(value) {
    if(typeof value !== 'string')
        throw new Error('value is not String');
    const parts = value.split(" ");
    this.fname = parts[0];
    this.lname = parts[1];
  },
};
try{
person.fullName=true;

}catch(e){
//console.log(e);
alert(e);

}
