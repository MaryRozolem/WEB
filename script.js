function showCadastroEquipamento() {
    hideAll();
    document.getElementById('cadastroEquipamento').style.display = 'block';
}

function showListarEquipamentos() {
    hideAll();
    document.getElementById('listarEquipamentos').style.display = 'block';
}

function showCadastroUsuario() {
    hideAll();
    document.getElementById('cadastroUsuario').style.display = 'block';
}

function showListarUsuarios() {
    hideAll();
    document.getElementById('listarUsuarios').style.display = 'block';
}

function showFazerReserva() {
    hideAll();
    document.getElementById('fazerReserva').style.display = 'block';
}

function showListarReservas() {
    hideAll();
    document.getElementById('listarReservas').style.display = 'block';
}

function hideAll() {
    document.getElementById('cadastroEquipamento').style.display = 'none';
    document.getElementById('listarEquipamentos').style.display = 'none';
    document.getElementById('cadastroUsuario').style.display = 'none';
    document.getElementById('listarUsuarios').style.display = 'none';
    document.getElementById('fazerReserva').style.display = 'none';
    document.getElementById('listarReservas').style.display = 'none';
}
