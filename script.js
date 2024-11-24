























AOS.init({
    duration: 1000,
    once: true
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



function addQuizQuestion(containerId, questionData) {
    const container = document.getElementById(containerId);


    const section = document.createElement('div');
    section.classList.add('quiz-section');

  
    const question = document.createElement('div');
    question.classList.add('quiz-question');
    question.textContent = questionData.question;
    section.appendChild(question);


    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('quiz-options');

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('quiz-option');
        optionElement.textContent = option;


        optionElement.addEventListener('click', () => checkAnswer(optionElement, option, questionData.correct));
        optionsContainer.appendChild(optionElement);
    });

    section.appendChild(optionsContainer);
    container.appendChild(section);
}


function checkAnswer(element, selected, correct) {
    const options = element.parentElement.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.classList.remove('correct', 'wrong');
    });

    if (selected === correct) {
        element.classList.add('correct');
        setTimeout(() => {
            alert("Правильно!");
        }, 500);
    } else {
        element.classList.add('wrong');
        const correctOption = Array.from(options).find(opt => opt.textContent === String(correct));
        correctOption.classList.add('correct');
    }
}


const question1 = {
    question: "В каком году был создан первый программируемый робот?",
    options: [1954, 1961, 1969, 1975],
    correct: 1961
};

const question2 = {
    question: "Кто изобрел первого промышленного робота?",
    options: ["Джордж Девол", "Никола Тесла", "Илон Маск", "Леонардо да Винчи"],
    correct: "Джордж Девол"
};

const question3 = {
    question: "Какой робот стал первым коммерчески успешным?",
    options: ["Unimate", "Roomba", "Sophia", "ASIMO"],
    correct: "Unimate"
};
const question4 = {
    question: "Какой из следующих роботов был первым автономным мобильным роботом?",
    options: ["Roomba", "Unimate", "Shakey", "Pepper"],
    correct: "Shakey"
};

const question5 = {
    question: "Какой компонент отвечает за обработку информации в роботах?",
    options: ["Сенсоры", "Процессор", "Приводы", "Механизм"],
    correct: "Процессор"
};

const question6 = {
    question: "Какой тип робота часто используется в автомобильной промышленности?",
    options: ["Гуманоидный", "Коллаборативный", "Промышленный", "Сервисный"],
    correct: "Промышленный"
};

const question7 = {
    question: "Какая страна выпустила первого робота-гуманоида, способного ходить и взаимодействовать?",
    options: ["США", "Япония", "Германия", "Китай"],
    correct: "Япония"
};

const question8 = {
    question: "Какой датчик используется для обнаружения препятствий в автономных автомобилях?",
    options: ["Камера", "LIDAR", "Сонар", "Гироскоп"],
    correct: "LIDAR"
};

const question9 = {
    question: "Какой из этих терминов описывает способность ИИ учиться на опыте?",
    options: ["Обучение с учителем", "Машинное обучение", "Обучение без учителя", "Глубокое обучение"],
    correct: "Машинное обучение"
};

const question10 = {
    question: "Кто ввёл термин 'робот' в современном понимании",
    options: ["Леонардо да Винчи", "Джордж Девол", "Алан Тьюринг", "Карел Чапек"],
    correct: "Карел Чапек"
};

const question11 = {
    question: "Какая технология лежит в основе роботов-пылесосов?",
    options: ["Ультразвук", "Вакуумная очистка", "Обнаружение препятствий", "Все вышеперечисленное"],
    correct: "Все вышеперечисленное"
};

const question12 = {
    question: "Какая компания создала первого успешного робота для сборочной линии?",
    options: ["Tesla", "General Motors", "Honda", "Ford"],
    correct: "General Motors"
};

addQuizQuestion("section1", question1);
addQuizQuestion("section2", question2);
addQuizQuestion("section3", question3);

addQuizQuestion("section4", question4);
addQuizQuestion("section5", question5);
addQuizQuestion("section6", question6);

addQuizQuestion("section7", question7);
addQuizQuestion("section8", question8);
addQuizQuestion("section9", question9);

addQuizQuestion("section10", question10);
addQuizQuestion("section11", question11);
addQuizQuestion("section12", question12);

  
  


    
