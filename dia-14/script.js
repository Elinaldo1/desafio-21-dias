const quizz = {

    "questions": [
        {
          "number": 1,
          "question": "Dezoito milésimos, escritos como um decimal, é:",
          "answers": [
            "0.0018",
            "0.018",
            "0.18"
          ],
          "correct_answer": 0
        },
    ]
}

const header = document.createElement('header');

const titleQuizz = document.createTextNode(`${quizz.questions[0].question}`)
header.appendChild(titleQuizz);


const ul = document.createElement('ul');


quizz.questions[0].answers.map((option, id)=>{

  console.log(id)

  const li = document.createElement('li');
  const a = document.createElement('a');

  
  const optionResolve = document.createTextNode(`${option}`)
  a.appendChild(optionResolve)
  a.setAttribute('class', `${id}`)
  li.appendChild(a)
  
  li.setAttribute('class', `${id}`)
  li.setAttribute('onclick', `resolveQuizz(event)`)
  ul.appendChild(li)

})

const main = document.querySelector('main');
main.appendChild(header)
main.appendChild(ul);


function resolveQuizz(e) {


  if (parseInt(e.target.className) != parseInt(quizz.questions[0].correct_answer) ){
    e.target.style.backgroundColor = 'red'
  }else {
    e.target.style.backgroundColor = 'green'

  }

}

