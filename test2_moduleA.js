const fs = require('fs');     
var Student = [];



exports.init = () => {
    return new Promise ((resolve, reject) => {
        fs.readFile('./data/students.json', (err,data) => {
            if (err) 
                reject ('Sorry! Cannot Read The student file');
            
                Student = JSON.parse(data);
                resolve();  
            
        });

        exports.getBSD=()=>{
            return new Promise ((resolve, reject) => {
                var BSD = [];
        
                for(var i=0;i<Student.length;i++)

                {
                     if(Student[i].program=="BSD")
                    BSD.push(Student[i]);
                    
                }
                if (BSD.length == 0) {
                    reject('no results returned');
                }
                resolve(BSD);
            })

        }
            
        exports.getAllStudents = () => {
            return new Promise ((resolve,reject) => {
                
                if (Student.length == 0) 
                    reject('no results returned');
               
                    resolve(Student);
            })
        };
        exports.highGPA=()=>{
            return new Promise ((resolve, reject) => {
                var getgPA =4;
                var gpa=[]
                
                for(var i=0;i<Student.length;i++)
                { 
                    if(getgPA==Student[i].gpa)
                   { 
                    gpa.push(Student[i]);
            }
                }
                if (gpa.length == 0) {
                    reject("Failed finding the student with the highest GPA");
                }
                resolve(gpa);
            })
        }

    })};