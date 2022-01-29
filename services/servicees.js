const db = require("./../database_connection");
const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}....`);
});

const  getAll= ()=>{
    try{
        app.get('/',async (req,res)=>{
            const response = await db.main("SELECT * FROM tasks;");            
            res.status(200).json(response)
            
        })
    }catch(err){
        res.status(400).send("bad request 400")
        console.error(err);
    };
};

const get =()=>{
    app.get(`/tasks/:id`,async(req,res)=>{
        try{
            const arg = req.params.id;
            const rslt = await db.main(`SELECT * FROM tasks WHERE id = ${arg} ;`);
            if (!rslt){
                res.status(204).send("204 no content")
            }else{
                res.status(200).json(rslt);
            }
            
        }catch(err){
            res.status(400).send("bad request 400")
            console.error(err);
        };
    });
};

const update =()=>{
    try {
        app.put (`/tasks/:id/:col/:val`,async (req,res)=>{
            const col = req.params.col
            const val = req.params.val
            const id = req.params.id;
            const update = await db.main(`UPDATE tasks SET ${col}='${val}'WHERE id=${id};`);
            const rslt = await db.main(`SELECT * FROM tasks WHERE id= ${id} ;`)
            res.status(200).json(rslt)

        })
    }catch(err){
        res.status(400).send('Bad Request')
        console.error(err);}
    
};


const create = ()=>{
    try {
        app.post('/:value1/:value2/:value3/:value4/:value5/:value6',async (req,res)=>{
            
            await db.main(`INSERT INTO tasks 
                        VALUES (${req.params.value1},'${req.params.value2}','${req.params.value3}',${req.params.value4},'${req.params.value5}','${req.params.value6}'); `)
            const rslt = await db.main(`SELECT * FROM tasks;`)
            res.status(200).json(rslt)
        }
        )
    }catch (err){
        res.status(400).send('400 Bad Request')
        console.error(err)
    }
}
const del=()=>{
    app.delete('/:column/:condition',async (req,res)=>{
        try{
            await db.main(`DELETE FROM tasks WHERE ${req.params.column}='${req.params.condition}';`)
            const rslt = await db.main(`SELECT * FROM tasks;`)
            res.status(200).json(rslt)
        }catch(err){
            res.status(400).send('400 Bad Request')
            console.error(err)
        }
    })

};


module.exports.getAll = getAll;
module.exports.get = get;
module.exports.update = update;
module.exports.del = del;
module.exports.create = create;
// module.exports.router=app;