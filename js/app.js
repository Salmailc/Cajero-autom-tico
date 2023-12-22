const $buttonLogin = document.getElementById('login_btn');
const $login = document.getElementById("login"); 
const $email = document.getElementById("email");
const $password =document.getElementById("password");
const $aviso = document.getElementById("warnings");


//Objeto con base de datos de los usuarios
const users = {
    user1: {
        nombre: "Kitty",
        email: "kitty@ejemplo.com",
        password: "123456",
        saldo: "100",
    },
    user2: {
        nombre: "Apu",
        email: "apu@ejemplo.com",
        password: "123456-",
        saldo: "150",
    },
    user3: {
        nombre: "Florinda",
        email: "flori@ejemplo.com",
        password: "123456--",
        saldo: "200",
    }
}
//console.log(users);

//const getFormValues = (form) => Object.fromEntries(new FormData(form))

$login.addEventListener('submit', (event) => {
    event.preventDefault()
    const datos = {
        userEmail: $email.value,
        userPassword: $password.value,
    }
    
  //  const data = getFormValues($login);
    //console.log(data);
    //console.log(datos)

    if (datos.userEmail === users.user1.email && datos.userPassword === users.user1.password) {
        console.log("bien");
        window.location.href = "pages/user1.html";
    }
    else if ($email.value === users.user2.email && $password.value === users.user2.password) {
        console.log("bien apu")
        window.location.href = "pages/user2.html";
    }
    else if ($email.value === users.user3.email && $password.value === users.user3.password) {
        console.log("bien flori")
        window.location.href = "pages/user3.html";
    }
    else{
        mostrarAviso("Correo o contraseña incorrectos");
    }
});

function mostrarAviso(mensaje){
    $aviso.style.color = "#FF2020";
    $aviso.textContent = mensaje;
    $aviso.style.visibility;
}

