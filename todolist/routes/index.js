var express = require('express');
var Task = require("../model/Tasks")
var TaskSchema = require("../validators/TaskValidator")
const Joi = require("joi")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (Task.list().length == 0) {
    Task.new("Tarefa 1");
    Task.new("Tarefa 2");
  }

  let obj = Task.getElementById(req.query.tid);
  res.render('index', { tasks: Task.list(), task: obj });
});

router.post("/tarefas", function (req, res){
    const {error, value} = TaskSchema.validate(req.body);
    if (error) {
      res.render('index', { tasks: Task.list(), erro: "Dados incompletos" });
      return;
    }
    
    const {id, nome} = value
    if (id === undefined) {
      //Inserir
      Task.new(nome);
    } else {
      //Alterar
      Task.update(id, nome);
    }
    
    res.redirect("/");
})

router.get("/tarefas/del/:id", function(req, res){
  const {id} = req.params;
  const {error, value} = Joi.number().integer().greater(0).validate(id)

  if (error || !Task.delete(value)) {
    res.send("Falha ao excluir uma tarefa");
    return;
  }
  res.redirect("/");
})

// Rota para listar tarefas em ordem alfabética
router.get('/tasks', function(req, res, next) {
  if (Task.list().length == 0) {
    Task.new("Tarefa 1");
    Task.new("Tarefa 2");
  }

  const sortedTasks = Task.list().sort((a, b) => a.name.localeCompare(b.name));

  res.render('tasks', { sortedTasks });
});

// Rota para finalizar uma tarefa
router.get("/tarefas/done/:id", function(req, res) {
    const { id } = req.params;
    const { error, value } = Joi.number().integer().greater(0).validate(id);

    if (error) {
        res.send("ID inválido");
        return;
    }

    const taskId = value;

    // Marque a tarefa como finalizada (você pode usar uma função Task.markAsDone(id) se existir)
    Task.update(taskId, { done: true });

    res.redirect('/tasks'); // Redirecione de volta para a lista de tarefas em ordem alfabética
});

module.exports = router;
