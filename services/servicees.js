const db = require("./../database_connection");
const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}....`);
});

const  getall= ()=>{
    try{
        app.get('/',(req,res)=>{
            const response = db.main("SELECT * FROM tasks;");
            res.status(200).json(response)
        })
    }catch(err){
        console.error(err);
    };
};

// const get =(arg)=>{
//     app.get(`/tasks/:id`,(req,res)=>{
//         try{
//             const arg = req.params.id;
//             const response = db.main(`SELECT FROM tasks WHERE id=${arg};`);
//             res.status(200).send(response);
//         }catch(err){
//             console.error(err);
//         };
//     });
// };

// const update =(updatedColoumn,value)=>{
//     try {
//         app.put (`/tasks/:id`,(req,res)=>{
//             const task = tasks.find(t => t.id === parseInt(req.params.id));
//             if (!course) res.status(404).send('Task with given ID not found')
//             const id = req.params.id;
//             const update = db.main(`UPDATE tasks
//                                     SET ${updatedColoumn}=${value}
//                                     WHERE id=${id};`);
//             task.name=req.body.name;
//         })
//     }catch(err){console.error(err);}
    
// };


// const create = (value1,value2,value3,value4,value6)=>{
//     db.main(`INSERT INTO tasks 
//                 VALUES (${value1},${value2},${value3},${value4},${value5},${value6}); `)
// };
// const del=(column,condition)=>{
//     db.main(`DELETE FROM tasks WHERE ${column}=${condition};`)
// };


module.exports.getall = getall;
// module.exports.get = get;
// module.exports.update = update;
// module.exports.del = del;
// module.exports.create = create;
// module.exports.router=app;