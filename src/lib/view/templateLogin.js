import { loginGoogle, loginWithPasswordEmail } from "../utils/firebaseIndex.js";
/** Crear div que contiene template de login*/
export const login = () => {
  const divLogin = document.createElement("div");

  const viewLogin = `
  <div class="logo-login">
  <svg height="512pt" viewBox="0 0 512 512.001" width="512pt" xmlns="http://www.w3.org/2000/svg"><path class="logo" d="m385.058594 183.816406v-63.257812c0-10.621094-4.582032-20.191406-11.867188-26.84375v-38.386719c0-20.042969-16.304687-36.347656-36.347656-36.347656-6.746094 0-13.066406 1.855469-18.488281 5.074219-5.050781-14.011719-18.476563-24.054688-34.203125-24.054688-13.046875 0-24.503906 6.914062-30.917969 17.265625-6.074219-4.558594-13.613281-7.261719-21.773437-7.261719-15.414063 0-28.605469 9.644532-33.882813 23.214844-5.492187-3.335938-11.929687-5.257812-18.808594-5.257812-20.042969 0-36.347656 16.304687-36.347656 36.347656v57.992187.007813.019531 61.488281c0 34.34375 14.730469 66.4375 39.085937 89.011719v94.191406c-11.277343 4.097657-19.355468 14.921875-19.355468 27.597657 0 12.675781 8.078125 23.5 19.355468 27.597656v79.785156c0 5.523438 4.476563 10 10 10h125.648438c5.523438 0 10-4.476562 10-10v-19.0625c0-5.523438-4.476562-10-10-10-5.519531 0-10 4.476562-10 10v9.0625h-105.648438v-69.785156c8.15625-2.960938 14.636719-9.441406 17.597657-17.597656h7.628906c4.097656 11.277343 14.921875 19.355468 27.597656 19.355468s23.5-8.078125 27.597657-19.355468h7.628906c4.097656 11.277343 14.921875 19.355468 27.597656 19.355468 16.1875 0 29.355469-13.167968 29.355469-29.355468 0-12.675782-8.078125-23.5-19.355469-27.597657v-79.875c35.867188-22.03125 57.902344-61.085937 57.902344-103.328125zm-48.214844-144.835937c9.015625 0 16.347656 7.332031 16.347656 16.347656v29.171875c-1.46875-.183594-2.960937-.289062-4.476562-.289062h-28.214844v-28.882813c0-9.015625 7.332031-16.347656 16.34375-16.347656zm-52.691406-18.980469c9.011718 0 16.347656 7.332031 16.347656 16.347656v47.863282h-16.351562c-5.875 0-11.425782 1.414062-16.34375 3.898437v-41.742187c0-.007813 0-.015626 0-.019532 0-.015625 0-.027344 0-.039062v-9.960938c0-9.015625 7.332031-16.347656 16.347656-16.347656zm-69.035156 26.347656c0-9.011718 7.332031-16.34375 16.34375-16.34375 9.007812 0 16.332031 7.320313 16.34375 16.324219v74.230469.035156 26.875c0 9.011719-7.332032 16.34375-16.34375 16.34375-9.011719 0-16.34375-7.332031-16.34375-16.34375zm-36.347657 1.613282c9.011719 0 16.347657 7.332031 16.347657 16.347656v58c0 9.011718-7.335938 16.347656-16.347657 16.347656-9.007812 0-16.339843-7.328125-16.34375-16.335938v-58.011718c-.003906-9.015625 7.328125-16.347656 16.34375-16.347656zm-16.34375 135.855468v-29.0625c4.917969 2.488282 10.46875 3.902344 16.34375 3.902344 6.148438 0 11.9375-1.539062 17.019531-4.246094 3.050782 15.707032 16.242188 27.828125 32.464844 29.253906-.46875.769532-.933594 1.542969-1.382812 2.324219-2.742188 4.796875-1.078125 10.902344 3.71875 13.648438 1.566406.894531 3.269531 1.320312 4.953125 1.320312 3.46875 0 6.84375-1.8125 8.691406-5.039062 13.761719-24.0625 39.535156-39.011719 67.257813-39.011719h10.878906c5.519531 0 10-4.480469 10-10 0-5.523438-4.480469-10-10-10h-38.21875c-9.007813 0-16.335938-7.324219-16.347656-16.328125v-.019531c0-.003906 0-.003906 0-.007813.003906-9.011719 7.335937-16.335937 16.34375-16.335937h64.566406c3.246094 0 6.269531.960937 8.816406 2.601562.125.085938.253906.164063.378906.242188 4.3125 2.945312 7.148438 7.898437 7.148438 13.5v63.257812c0 36.941406-20.199219 70.972656-52.710938 88.808594-3.199218 1.757812-5.1875 5.117188-5.1875 8.769531v85.625c-8.15625 2.964844-14.636718 9.445313-17.597656 17.597657h-7.628906c-4.097656-11.277344-14.921875-19.355469-27.597656-19.355469-12.675782 0-23.5 8.078125-27.601563 19.355469h-7.625c-2.964844-8.152344-9.445313-14.632813-17.601563-17.597657v-79.15625c6.535157 3.929688 13.5 7.277344 20.832032 9.957031 5.1875 1.902344 10.929687-.769531 12.824218-5.957031 1.898438-5.183593-.769531-10.929687-5.957031-12.824219-11.488281-4.199218-21.894531-10.363281-30.886719-18.011718-.199218-.183594-.40625-.363282-.621093-.53125-21.90625-18.941406-35.273438-46.792969-35.273438-76.679688zm29.085938 220.15625c-5.160157 0-9.355469-4.195312-9.355469-9.355468 0-5.15625 4.191406-9.351563 9.34375-9.355469h.011719.007812c5.15625.003906 9.347657 4.199219 9.347657 9.355469-.003907 5.160156-4.199219 9.355468-9.355469 9.355468zm62.824219 0c-5.160157 0-9.355469-4.195312-9.355469-9.355468 0-5.15625 4.195312-9.355469 9.355469-9.355469 5.15625 0 9.355468 4.199219 9.355468 9.355469 0 5.160156-4.199218 9.355468-9.355468 9.355468zm62.824218 0c-5.15625 0-9.355468-4.195312-9.355468-9.355468 0-5.15625 4.191406-9.351563 9.347656-9.355469h.007812.011719c5.152344.003906 9.34375 4.199219 9.34375 9.355469 0 5.160156-4.199219 9.355468-9.355469 9.355468zm9.839844 50.027344c0 5.523438-4.476562 10-10 10s-10-4.476562-10-10 4.476562-10 10-10 10 4.476562 10 10zm0 0"/><path d="m225.492188 228.339844c5.523437 0 10-4.480469 10-10 0-5.523438-4.476563-10-10-10-5.523438 0-10 4.476562-10 10v.003906c0 5.519531 4.476562 9.996094 10 9.996094zm0 0"/><path class="logo" d="m149.378906 305.609375c0-14.429687-11.742187-26.171875-26.171875-26.171875-2.765625 0-5.429687.433594-7.9375 1.230469-3.789062-9.785157-13.296875-16.742188-24.40625-16.742188-9.261719 0-17.40625 4.835938-22.058593 12.109375-3.160157-1.355468-6.636719-2.109375-10.289063-2.109375-9.597656 0-18.003906 5.199219-22.558594 12.929688-3.023437-1.226563-6.324219-1.90625-9.785156-1.90625-14.429687 0-26.171875 11.742187-26.171875 26.171875v35.597656.007812.007813 37.75c0 21.582031 9.011719 41.792969 23.992188 56.292969v61.222656c0 5.523438 4.476562 10 10 10h77.132812c5.519531 0 9.996094-4.476562 9.996094-10v-51.964844c22.066406-14.410156 35.542968-39.007812 35.542968-65.550781v-38.832031c0-7.011719-2.777343-13.386719-7.285156-18.089844zm-26.171875-6.171875c3.347657 0 6.171875 2.828125 6.171875 6.171875v13.871094h-12.34375v-13.871094c0-3.34375 2.824219-6.171875 6.171875-6.171875zm-32.34375-15.511719c3.34375 0 6.171875 2.824219 6.171875 6.171875v29.382813h-6.175781c-2.125 0-4.191406.257812-6.171875.742187v-20.117187c0-.003907 0-.003907 0-.007813 0-.007812 0-.015625 0-.019531v-9.980469c0-3.347656 2.828125-6.171875 6.175781-6.171875zm-38.519531 16.171875c0-3.347656 2.828125-6.171875 6.171875-6.171875s6.167969 2.820313 6.171875 6.160157v45.566406.019531 16.5c0 3.34375-2.828125 6.171875-6.171875 6.171875s-6.171875-2.828125-6.171875-6.171875zm-26.171875 4.851563c3.347656 0 6.171875 2.828125 6.171875 6.171875v35.605468c0 3.34375-2.824219 6.171876-6.171875 6.171876-3.34375 0-6.167969-2.824219-6.171875-6.167969v-35.609375c0-3.34375 2.828125-6.171875 6.171875-6.171875zm110.492187 79.535156c0 21.265625-11.628906 40.855469-30.351562 51.125-3.199219 1.757813-5.1875 5.117187-5.1875 8.769531v47.621094h-57.132812v-37.152344c2.457031 1.203125 4.992187 2.289063 7.601562 3.242188 5.183594 1.894531 10.929688-.769532 12.824219-5.957032 1.898437-5.1875-.769531-10.929687-5.957031-12.828124-6.578126-2.40625-12.542969-5.925782-17.703126-10.296876-.167968-.15625-.347656-.308593-.527343-.453124-12.566407-10.90625-20.230469-26.90625-20.230469-44.070313v-12.328125c1.980469.480469 4.046875.742188 6.171875.742188 2.773437 0 5.449219-.441407 7.960937-1.242188 2.929688 7.507812 9.226563 13.339844 17.03125 15.628906-.640624 3.988282 1.183594 8.132813 4.898438 10.257813 1.566406.898437 3.273438 1.324219 4.957031 1.324219 3.46875 0 6.84375-1.8125 8.691407-5.039063 7.761718-13.574219 22.296874-22.003906 37.933593-22.003906h6.675781c5.523438 0 10-4.480469 10-10 0-5.523438-4.476562-10-10-10h-23.460937c-3.34375 0-6.164063-2.824219-6.171875-6.164063v-.007812c0-.003906 0-.003906 0-.003906.003906-3.347657 2.828125-6.167969 6.171875-6.167969h39.632813c3.347656 0 6.171874 2.824219 6.171874 6.171875zm0 0"/><path class="logo" d="m504.714844 327.5625v-21.953125c0-14.429687-11.742188-26.171875-26.171875-26.171875-2.765625 0-5.429688.433594-7.933594 1.230469-3.792969-9.785157-13.300781-16.742188-24.410156-16.742188-9.261719 0-17.40625 4.835938-22.058594 12.109375-3.160156-1.355468-6.636719-2.109375-10.289063-2.109375-9.601562 0-18.003906 5.199219-22.558593 12.929688-3.023438-1.226563-6.324219-1.90625-9.785157-1.90625-14.429687 0-26.171874 11.742187-26.171874 26.171875v73.363281c0 21.582031 9.011718 41.792969 23.992187 56.292969v61.222656c0 5.523438 4.480469 10 10 10h77.128906c5.523438 0 10-4.476562 10-10v-51.964844c22.066407-14.410156 35.542969-39.007812 35.542969-65.550781v-38.832031c0-7.015625-2.777344-13.386719-7.285156-18.089844zm-26.171875-28.125c3.347656 0 6.171875 2.828125 6.171875 6.171875v13.871094h-12.34375v-13.890625c.011718-3.335938 2.832031-6.152344 6.171875-6.152344zm-38.519531-9.339844c0-3.347656 2.828124-6.171875 6.175781-6.171875 3.34375 0 6.171875 2.824219 6.171875 6.171875v15.472656.039063.019531 13.851563h-6.175782c-2.125 0-4.191406.257812-6.171874.742187zm-32.339844 10c0-3.347656 2.824218-6.171875 6.171875-6.171875 3.34375 0 6.171875 2.824219 6.171875 6.171875v62.074219c0 3.34375-2.828125 6.171875-6.175782 6.171875-3.34375 0-6.167968-2.828125-6.167968-6.171875zm-32.347656 11.023438c0-3.34375 2.828124-6.171875 6.175781-6.171875 3.34375 0 6.171875 2.828125 6.171875 6.171875v35.605468c0 3.34375-2.828125 6.171876-6.171875 6.171876-3.347657 0-6.175781-2.828126-6.175781-6.171876zm116.664062 73.363281c0 21.261719-11.628906 40.855469-30.351562 51.125-3.199219 1.757813-5.1875 5.117187-5.1875 8.769531v47.621094h-57.132813v-37.152344c2.457031 1.203125 4.992187 2.289063 7.601563 3.242188 5.1875 1.894531 10.929687-.769532 12.824218-5.957032 1.898438-5.1875-.769531-10.929687-5.957031-12.828124-6.578125-2.40625-12.539063-5.925782-17.699219-10.296876-.171875-.15625-.351562-.308593-.53125-.453124-12.566406-10.90625-20.230468-26.90625-20.230468-44.070313v-12.328125c1.980468.480469 4.046874.742188 6.175781.742188 2.773437 0 5.445312-.4375 7.957031-1.242188 2.929688 7.507812 9.226562 13.339844 17.03125 15.628906-.636719 3.988282 1.1875 8.136719 4.898438 10.261719 1.566406.894531 3.273437 1.320313 4.957031 1.320313 3.46875 0 6.84375-1.8125 8.6875-5.039063 7.765625-13.570313 22.300781-22.003906 37.9375-22.003906h6.675781c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-23.460938c-3.34375 0-6.171874-2.828125-6.171874-6.171875 0-3.347656 2.828124-6.171875 6.171874-6.171875h39.632813c3.34375 0 6.171875 2.824219 6.171875 6.171875zm0 0"/></svg>
  </div>
    <div class="section-signin">    
     <div class="input-group">
      <input type="email" id="loginEmail" placeholder="E-mail">
      <input type="password" name="" id="loginPass" placeholder="Contraseña">
     </div>
     <button class="btn-register" id='loginEmailAndPass'> Login </button>
     <div class="line">
        <div class="line-one">
        </div>
        <p>o</p>
        <div class="line-two">
        </div>
     </div>
     <img src= "./images/logo-google.png" id='loginGoogle'></img>
        <div class="link-account">
         <p> ¿No tienes cuenta? </p><a href="#/signin">Registrate</a>
    </div>
     <h3 id='unverifiedEmail'></h3>
    </div> 
    `;
  divLogin.innerHTML = viewLogin;

  const btnGoogle = divLogin.querySelector("#loginGoogle");
  btnGoogle.addEventListener("click", () => {
    loginGoogle();
  });
  /** Este evento ejecuta el ingreso del usuario con correo y contraseña */
  const btnEmailAndPass = divLogin.querySelector("#loginEmailAndPass");
  btnEmailAndPass.addEventListener("click", () => {
    let userPassword = document.querySelector("#loginPass").value;
    let userEmail = document.querySelector("#loginEmail").value;
    let loginWithPassEmail = loginWithPasswordEmail(userEmail, userPassword)
      .then((res) => {
        /**res(response) hace referencia a la respuesta de la promesa */
        /**Si el email fue verificado el usuario ingresa a home */
        if (res.user.emailVerified) {
          window.location.hash = "#/home";
          console.log(res.user.emailVerified);
        } else {
          /**Si el email no es verificado se envia mensaje de aviso usuario para que verifique el correo */
          document.querySelector("#unverifiedEmail").innerHTML =
            "Verifica tu correo para poder ingresar";
        }
      })
      /**Objeto de errores de validación del login */
      .catch((error) => {
        const objectErrorLogin = {
          "auth/wrong-password": "Contraseña incorrecta",
          "auth/too-many-requests":
            "Has excedido el número de intentos permitidos",
          "auth/user-not-found": "El usuario no existe, verifica tu correo",
          "auth/invalid-email": "Por favor ingresa un correo válido",
          "auth/internal-error":
            "Ha ocurrido un error inesperado, por favor intenta nuevamente",
        };
        let errorCode = error.code;
        let errorMessage = error.message;
        /** Se valida el error segun el objeto y se envia mensaje al usuario */
        if (Object.keys(objectErrorLogin).includes(errorCode)) {
          document.querySelector("#unverifiedEmail").innerHTML =
            objectErrorLogin[errorCode];
        } else {
          /** Si no se encuentra el error en el objeto y se envia un mensaje por defecto */
          document.querySelector("#unverifiedEmail").innerHTML =
            objectErrorLogin["auth/internal-error"] + " " + errorCode;
        }
      });
  });
  return divLogin;
};
