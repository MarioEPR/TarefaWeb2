let cadastro = {};

//addStudent
function addCadastro(
  id,
  data,
  horaInicio,
  horaTermino,
  evento,
  descricao,
  status
) {
  cadastro[id] = { data, horaInicio, horaTermino, evento, descricao, status };
}

//findStudent
function findCadastro(id) {
  if (cadastro[id]) {
    return cadastro[id];
  } else {
    return null;
  }
}

function updateCadastro(
  id,
  data,
  horaInicio,
  horaTermino,
  evento,
  descricao,
  status
) {
  if (cadastro[id]) {
    cadastro[id] = {
      data,
      horaInicio,
      horaTermino,
      evento,
      descricao,
      status,
    };
  } else {
    return null;
  }
}

function removeCadastro(id) {
  if (cadastro[id]) {
    delete cadastro[id];
    return true;
  }
  return false;
}

//cadastrados 4 parametors
addCadastro(
  "1",
  "01jan22",
  "10:01",
  "12:01",
  "torcar lampada",
  "conforme pop 1",
  "concluido"
);
addCadastro(
  "2",
  "02jan22",
  "10:02",
  "12:02",
  "trocar pneu",
  "conforme pop 2",
  "concluido"
);
addCadastro(
  "3",
  "03jan22",
  "10:03",
  "12:03",
  "comprar leite",
  "conforme pop 3",
  "nao concluido"
);
addCadastro(
  "4",
  "04jan22",
  "10:04",
  "12:04",
  "fazer tarefa",
  "pop inexistente",
  "nao concluido"
);

//altera dados da id
updateCadastro(
  "2",
  "9jan22",
  "10:09",
  "12:09",
  "trocar pneu",
  "conforme pop 9",
  "concluido"
);

//pesquisou um id
const id = "1";
const found = findCadastro(id);

//removeStudent("kenji");

//impressao
if (found) {
  console.log(`id: ${id} was found with content:`);
  console.log(found);
} else {
  console.log(`id: ${id} was not found`);
}

console.log(cadastro);

function getAllCadastro() {
  return cadastro;
}

//cadastro[id] = { data, horaInicio, horaTermino, evento, descricao, status };
function returnValues() {
  const id = $("#id").val();
  const data = $("#data").val();
  const horaInicio = $("#horaInicio").val();
  const horaTermino = $("#horaTermino").val();
  const evento = $("#evento").val();
  const descricao = $("#descricao").val();
  const status = $("#status").val();
  return {
    id,
    data,
    horaInicio,
    horaTermino,
    evento,
    descricao,
    status,
  };
}

$("#add").on("click", function () {
  const returnedValues = returnValues();
  addCadastro(
    returnedValues.id,
    returnedValues.data,
    returnedValues.horaInicio,
    returnValues.horaTermino,
    returnValues.evento,
    returnedValues.descricao,
    returnValues.status
  );
  const allCadastro = getAllCadastro();
  $("#result").html(JSON.stringify(allCadastro));
  //console.log(allStudents);
});

$("#update").on("click", function () {
  const returnedValues = returnValues();
  updateCadastro(
    returnedValues.id,
    returnedValues.data,
    returnedValues.horaInicio,
    returnValues.horaTermino,
    returnValues.evento,
    returnedValues.descricao,
    returnValues.status
  );
  const allCadastro = getAllCadastro();
  $("#result").html(JSON.stringify(allCadastro));
});

$("#remove").on("click", function () {
  console.log("removed button was clicked!");
  const returnedValues = returnValues();
  removeCadastro(returnedValues.id);
  const allCadastro = getAllCadastro();
  $("#result").html(JSON.stringify(allCadastro));
});
