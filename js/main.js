const navBar = () => {
  const navBar = `
<nav class="navbar navbar-expand-lg ">
          <div class="container-fluid ">
            <a class="navbar-brand" href="#">
              <img class="logo" src="./images/nuevoLogo.png" alt="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample05">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link text-light" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="calendario.html">Calendario</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="graficos.html">Gráfico</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="informacion.html">Información</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="suscribete.html">Suscríbete</a>
                </li>

              </ul>

            </div>
          </div>

        </nav>
`;
  document.getElementById("navBar").innerHTML = navBar;
};

navBar();
