const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/job", async (req, res) => {
  try {
    const { jobcategory } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO jobcategory (jobcategory) VALUES($1) RETURNING *",
      [jobcategory]
    );

    res.json(newTodo.rows[0]);
    
  } catch (err) {
    console.error(err.message);

    
  
  }
});

//experience post

app.post("/experience", async (req, res) => {
  try {
    const { experience } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO experience (nbrexperience) VALUES($1) RETURNING *",
      [experience]
    );

    res.json(newTodo.rows[0]);
    
  } catch (err) {
    console.error(err.message);

    
  
  }
});

//degree post

app.post("/degree", async (req, res) => {
  try {
    const { degree, niveau } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO degree (degree,niveau) VALUES($1,$2) RETURNING *",
      [degree, niveau]
    );

    res.json(newTodo.rows[0]);
    
  } catch (err) {
    console.error(err.message);

    
  
  }
});

//disponibilité post

app.post("/dispo", async (req, res) => {
  try {
    const { disponibilite } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO disponibilite (disponibilite) VALUES($1) RETURNING *",
      [disponibilite]
    );

    res.json(newTodo.rows[0]);
    
  } catch (err) {
    console.error(err.message);

    
  
  }
});

//get all todos

app.get("/job", async (req, res) => {
  try {
    const allJobs = await pool.query("SELECT * FROM jobcategory");
    res.json(allJobs.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/experience", async (req, res) => {
  try {
    const allExp = await pool.query("SELECT * FROM experience");
    res.json(allExp.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/degree", async (req, res) => {
  try {
    const allDegree = await pool.query("SELECT * FROM degree");
    res.json(allDegree.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/dispo", async (req, res) => {
  try {
    const allDispo = await pool.query("SELECT * FROM disponibilite");
    res.json(allDispo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/job/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM jobcategory WHERE id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { jobcategory } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET jobcategory = $1 WHERE todo_id = $2",
      [jobcategory, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
