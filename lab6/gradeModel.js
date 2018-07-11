class Grade{
    constructor(id,name,course,grade){
        this.id= Math.ceil(Math.random()*100);
        this.name = name;
        this.course=course;
        this.grade=grade;
    }

    getRecord(){
        return {id:this.id,name:this.name,course:this.course,grade:this.grade}
    }

    updateRecord(g){
        this.id = g.id;
        this.name = g.name;
        this.course=g.course;
        this.grade=g.grade;
    }

    
}
module.exports = Grade;