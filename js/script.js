var test = {

  createTitle: function () {
    var mainTitle = document.createElement('h2');
    mainTitle.innerHTML = title;
    document.body.appendChild(mainTitle);
  },

  createQuestionList: function () { //cоздание упорядоченного списка
    var questionList = document.createElement('ol');
    document.body.appendChild(questionList);

      for (var i = 0; i < questions.length; i++) { //cоздание элементов упорядоченного списка (с вопросами)
        var questionItem = document.createElement('li');
        var questionTitle = document.createElement('h4');
        var answerList = document.createElement('ul');

        answerList.className = 'answer_list';
        questionTitle.innerHTML = questions[i];

        questionItem.appendChild(questionTitle);
        questionList.appendChild(questionItem);
        questionItem.appendChild(answerList);

          for (var j = 0; j < answersSize; j++) { //cоздание элементов неупорядоченного списка (с вариантами ответов)
            var answerItem = document.createElement('li');
            var labelItem = document.createElement('label');
            var inputItem = document.createElement('input');
            var text = answers[i];
            var answerText = document.createTextNode(text[j]);

            answerItem.className = 'answer_item';
            inputItem.setAttribute('type', 'checkbox');

            answerList.appendChild(answerItem);
            answerItem.appendChild(labelItem);
            labelItem.appendChild(inputItem);
            labelItem.appendChild(answerText);
          }
      }
  },

  createButton: function () { //cоздание кнопки проверки результатов
    var button = document.createElement('button');
    document.body.appendChild(button);
    button.innerHTML = testCheck;
  },
};

/*Переменные страницы*/
var title = 'Тест по программированию';
var questions = ['Вопрос №1', 'Вопрос №2','Вопрос №3'];

var answers = { 
    0: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'], 
    1: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'], 
    2: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'], 
};

var testCheck = 'Проверить мои результаты';
var answersSize = Object.keys(answers).length;

/*Вывод DOM-объектов */
test.createTitle();
test.createQuestionList();
test.createButton();