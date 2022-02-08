const dbo= require("../db/conn");

let projectCollection;
 projectCollection = dbo.getDb().collection("projects");
// setTimeout(() => {
// }, 2000);

const getAllProjects = (res) => {
    
    projectCollection.find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const getProjectByID = (id, res) => {
    //const projectCollection = dbo.getDb().collection("projects");
    console.log(id);
    projectCollection.find({ projectID: id }).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const insertProject = (project, res) => {
    //const projectCollection = dbo.getDb().collection("projects");
    projectCollection.insertOne(project, (err, result) => {
        if (err) throw err;
        res.send({ result: 204 });
    });
}

module.exports=(
    getAllProjects,
    getProjectByID,
    insertProject
)
