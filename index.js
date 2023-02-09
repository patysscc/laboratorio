function validateLength(field, length) {
    if (field.value.length > length) {
      field.classList.add('valid');
      field.classList.remove('invalid');
      return true;
    }
    field.classList.add('invalid');
    field.classList.remove('valid');
    return false;
  }

  function setError(field, error) {
    document.querySelector(
      'span[data-input="' + field + '"]'
    ).textContent = error;
  }

  document
    .getElementById('nombre')
    .addEventListener('keyup', function () {
      if (!validateLength(this, 2)) {
        setError('nombre', 'Rellene este campo');
        return;
      }
      setError('nombre', '');
    });
  document.getElementById('email').addEventListener('keyup', function () {
    if (!validateLength(this, 5)) {
      setError('email', 'Rellene este campo');
      return;
    }
    setError('email', '');
  });
  document.getElementById('clave1')
    .addEventListener('keyup', function () {
      if (!validateLength(this, 2)) {
        setError('clave1', 'Rellene este campo');
        return;
      }
      setError('clave1', '');
    });
document.getElementById('clave2')
    .addEventListener('keyup', function () {
      if (!validateLength(this, 2)) {
        setError('clave2', 'Rellene este campo');
        return;
      }
      setError('clave2', '');
    });

  function comprobar(event) {
    event.preventDefault();
    var clave1 = document.getElementById('clave1');
    var clave2 = document.getElementById('clave2');
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var error = false;
    if (!validateLength(nombre, 2)) {
      setError('nombre', 'Rellene este campo');
      error = true;
    }
    if (!validateLength(email, 5)) {
      setError('email', 'Rellene este campo');
      error = true;
    } else {
      setError('email', '');
    }
    if (!validateLength(clave1, 2)) { 
      setError('clave1', 'Rellene este campo');
      error = true;
    } else {
      setError('clave1', '');
    }
    if (!validateLength(clave2, 2)) { 
      setError('clave2', 'Rellene este campo');
      error = true;
    } else {
      setError('clave2', '');
    }
    if (clave1.value !== clave2.value) {
      setError('clave2', 'Las contraseñas no coinciden');
      clave2.classList.add('invalid');
      clave2.classList.remove('valid');
      error = true;
    } else {
      setError('clave2', '');
      clave2.classList.add('valid');
      clave2.classList.remove('invalid');
    }
    if (!error) {
      alert('Todo correcto');
      console.log('Nombre:', nombre.value);
      console.log('Email:', email.value);
      console.log('Clave:', clave1.value);

    }
  }
  document.getElementById('formulario').addEventListener('submit', comprobar);
