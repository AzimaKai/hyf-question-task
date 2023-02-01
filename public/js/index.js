
const questionCards = document.querySelector('.cards');

const submitButton = document.querySelector('.question__submit');

const addQuestion = async () => {
  const questionText = document.getElementById('quest').value;
  const questionModule = document.getElementById('technology').value;
  const questionEmail = document.getElementById('email').value;
  console.log(questionText, questionModule, questionEmail);

  const data = {
   "data": {
     text: questionText,
     module: questionModule,
     email: questionEmail,
   }
  }

    const response = await fetch('http://localhost:1337/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

  const json = await response.json();


  const questData = json.data;

  const questionElement = document.createElement('div');
  questionElement.classList.add('question__element');
  questionElement.innerHTML = `
    <div class="question__text">
      <p>${questData.attributes.module}</p>
            <p>${questData.attributes.text}</p>
            <p>${questData.attributes.email}</p>
    </div>
  `;
  questionCards.appendChild(questionElement);
}



const getData = () => {
  fetch('http://localhost:1337/api/questions')
    .then(response => response.json())
    .then((data) => {
      data.data.forEach((question) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question__element');
        questionElement.innerHTML = `
          <div class="question__text">
            <p>${question.attributes.module}</p>
            <p>${question.attributes.email}</p>
            <p>${question.attributes.text}</p>
          </div>
        `;
        questionCards.appendChild(questionElement);
      });
    });
}

getData()


submitButton.addEventListener('click', addQuestion)
