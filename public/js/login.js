const uname = document.querySelector('#uname').value
const actBtn = document.getElementById('login')

const password = document.querySelector('#psw').value

const login = async (identifier, password) => {
  try {
    const res = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"identifier": identifier, "password": password}),
    })

    const data = await res.json()
    console.log('fete')
    const { jwt } = data;
    localStorage.setItem('jwt', jwt);


    return data.user
  } catch (error) {
    console.log(error);
  }
}

document.querySelector('#btn').addEventListener('click', async (e) => {
  e.preventDefault()

  const data = await login(uname, password)

  actBtn.innerHTML = 'Logout'

  if (data) {
    window.location.href = '/'
  }
})



