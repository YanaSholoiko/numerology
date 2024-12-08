// Словник перекладів
const translations = {
    uk: {
		language: "Обрати мову",
        title: "Нумерологія Таро",
        description: "Введіть свою дату народження:",
        calculateButton: "Розрахувати",
        tab1: "6 золотих позицій",
        tab2: "Стратегія Успіху та Неуспіху",
        tab3: "Лабіринти в даті народження",
        tab4: "Кармічний портрет",
		tab1Title: "6 золотих позицій",
        position1Label: "Ресурс",
        position2Label: "Урок",
        position3Label: "Результат",
        position4Label: "Точка Болі",
        position5Label: "Точка Сили",
        position6Label: "Пастка/т.Росту",
		additionalTitle: "З додатковими позиціями дати народження",
        extraPosition1Label: "Ресурс",
        extraPosition2Label: "Урок",
        extraPosition3Label: "Результат",
        extraPosition10Label: "Сфера реалізації",
        extraPosition7Label: "Внутрішня дитина",
        extraPosition8Label: "Потреба душі",
        extraPosition4Label: "Точка Болі",
        extraPosition5Label: "Точка Сили",
        extraPosition11Label: "Темний Ангел",
        extraPosition9Label: "Унікальні якості",
        extraPosition12Label: "Світлий Ангел",
        extraPosition6Label: "Паска / т.Росту",
		karmicTitle: "Кармічні граблі",
        karmicResultLabel: "Кармічні граблі",
        equalSign: "=",
        resultLabel1: "Я справжній/я",
        plusSign: "+",
        resultLabel2: "Я хороший/а",
		strategyTitle: "Стратегія Успіху/Неуспіху",
        successLabel: "Успіх",
        resourceLabel: "Ресурс",
        decisionTerritoryLabel: "Територія Прийняття Рішення",
        lessonLabel: "Урок",
        failureLabel: "Неуспіх",
		labyrinthTitle: "Лабіринти в даті народження",
        successLabel: "Успіх",
        realizationLabel: "Реалізація",
        resourceLabel: "Ресурс",
        decisionTerritoryLabel: "Територія Прийняття Рішення",
        lessonLabel: "Урок",
        psychologicalGrowthLabel: "Психолог. Дорослішання",
        resultLabel: "Результат",
        failureLabel: "Неуспіх",
        trueGoalLabel: "Істина ціль",
		fearPointTitle: "Точка Страху",
        failureLabel: "Неуспіх",
        fearPointLabel: "Точка Страху",
        painPointLabel: "Точка Болі",
        trapLabel: "Пастка",
        soulSecretsTitle: "Таємниці Душі",
        strengthPointLabel: "Психолог. Дорослішання",
        shadowLabel: "Тінь",
        fearTraumaLabel: "Страх/Травма",
        trueGoalLabel: "Істина Ціль",
        painStrengthTitle: "Біль та Сила",
        pastLivesLabel: "Ким був(була)",
        resourceLabel: "Ресурс",
        lessonLabel: "Урок",
        resultLabel: "Результат",
        pastMistakeLabel: "Помилка минулих втілень",
		karmicPortraitTitle: "Кармічний портрет",
        karmaLabel: "Карма",
        fateLabel: "Доля"
    },
    ru: {
		language: "Выбрать язык",
        title: "Нумерология Таро",
        description: "Введите свою дату рождения:",
        calculateButton: "Рассчитать",
        tab1: "6 золотых позиций",
        tab2: "Стратегия Успеха и Неуспеха",
        tab3: "Лабиринты в дате рождения",
        tab4: "Кармический портрет",
		tab1Title: "6 золотых позиций",
        position1Label: "Ресурс",
        position2Label: "Урок",
        position3Label: "Результат",
        position4Label: "Точка Боли",
        position5Label: "Точка Силы",
        position6Label: "Ловушка/т. Роста",
		additionalTitle: "С дополнительными позициями даты рождения",
        extraPosition1Label: "Ресурс",
        extraPosition2Label: "Урок",
        extraPosition3Label: "Результат",
        extraPosition10Label: "Сфера реализации",
        extraPosition7Label: "Внутренний ребенок",
        extraPosition8Label: "Потребность души",
        extraPosition4Label: "Точка Боли",
        extraPosition5Label: "Точка Силы",
        extraPosition11Label: "Темный Ангел",
        extraPosition9Label: "Уникальные качества",
        extraPosition12Label: "Светлый Ангел",
        extraPosition6Label: "Ловушка / т.Роста",
		karmicTitle: "Кармические грабли",
        karmicResultLabel: "Кармические грабли",
        equalSign: "=",
        resultLabel1: "Я настоящий/ая",
        plusSign: "+",
        resultLabel2: "Я хороший/ая",
		strategyTitle: "Стратегия Успеха/Неуспеха",
        successLabel: "Успех",
        resourceLabel: "Ресурс",
        decisionTerritoryLabel: "Територия Принятия Решения",
        lessonLabel: "Урок",
        failureLabel: "Неуспех",
		labyrinthTitle: "Лабиринты в дате рождения",
        successLabel: "Успех",
        realizationLabel: "Реализация",
        resourceLabel: "Ресурс",
        decisionTerritoryLabel: "Територия Принятия Решения",
        lessonLabel: "Урок",
        psychologicalGrowthLabel: "Психолог. Взросление",
        resultLabel: "Результат",
        failureLabel: "Неуспех",
        trueGoalLabel: "Истинна цель",
		fearPointTitle: "Точка Страха",
        failureLabel: "Неуспех",
        fearPointLabel: "Точка Страха",
        painPointLabel: "Точка Боли",
        trapLabel: "Ловушка",
        soulSecretsTitle: "Таймны Души",
        strengthPointLabel: "Психолог. Взросление",
        shadowLabel: "Тень",
        fearTraumaLabel: "Страх/Травма",
        trueGoalLabel: "Истинна Цель",
        painStrengthTitle: "Боль и Сила",
        pastLivesLabel: "Кем был(была)",
        resourceLabel: "Ресурс",
        lessonLabel: "Урок",
        resultLabel: "Результат",
        pastMistakeLabel: "Ошибка прошлых воплощений",
		karmicPortraitTitle: "Кармический портрет",
        karmaLabel: "Карма",
        fateLabel: "Судьба"
    },
    en: {
		language: "Select language",
        title: "Tarot Numerology",
        description: "Enter your birthdate:",
        calculateButton: "Calculate",
        tab1: "6 Golden Positions",
        tab2: "Strategy for Success and Failure",
        tab3: "Labyrinths in the Birthdate",
        tab4: "Karmic Portrait",
		tab1Title: "6 Golden Positions",
		position1Label: "Resource",
        position2Label: "Lesson",
        position3Label: "Result",
        position4Label: "Point of Pain",
        position5Label: "Point of Strength",
        position6Label: "Trap/Growth Point",
		additionalTitle: "With Additional Birthdate Positions",
        extraPosition1Label: "Resource",
        extraPosition2Label: "Lesson",
        extraPosition3Label: "Result",
        extraPosition10Label: "Field of Realization",
        extraPosition7Label: "Inner Child",
        extraPosition8Label: "Soul's Need",
        extraPosition4Label: "Point of Pain",
        extraPosition5Label: "Point of Strength",
        extraPosition11Label: "Dark Angel",
        extraPosition9Label: "Unique Qualities",
        extraPosition12Label: "Bright Angel",
        extraPosition6Label: "Trap / Growth Point",
		karmicTitle: "Karmic Mistakes",
        karmicResultLabel: "Karmic Mistakes",
        equalSign: "=",
        resultLabel1: "I am authentic",
        plusSign: "+",
        resultLabel2: "I am good",
		strategyTitle: "Success/Failure Strategy",
        successLabel: "Success",
        resourceLabel: "Resource",
        decisionTerritoryLabel: "Decision-Making Territory",
        lessonLabel: "Lesson",
        failureLabel: "Failure",
		labyrinthTitle: "Labyrinths in the Date of Birth",
        successLabel: "Success",
        realizationLabel: "Realization",
        resourceLabel: "Resource",
        decisionTerritoryLabel: "Decision-Making Territory",
        lessonLabel: "Lesson",
        psychologicalGrowthLabel: "Psychological Growth",
        resultLabel: "Result",
        failureLabel: "Failure",
        trueGoalLabel: "True Goal",
		fearPointTitle: "Point of Fear",
        failureLabel: "Failure",
        fearPointLabel: "Point of Fear",
        painPointLabel: "Point of Pain",
        trapLabel: "Trap",
        soulSecretsTitle: "Secrets of the Soul",
        strengthPointLabel: "Psychological Growth",
        shadowLabel: "Shadow",
        fearTraumaLabel: "Fear/Trauma",
        trueGoalLabel: "True Goal",
        painStrengthTitle: "Pain and Strength",
        pastLivesLabel: "Who They Were",
        resourceLabel: "Resource",
        lessonLabel: "Lesson",
        resultLabel: "Result",
        pastMistakeLabel: "Mistake of Past Incarnations",
		karmicPortraitTitle: "Karmic Portrait",
        karmaLabel: "Karma",
        fateLabel: "Fate"
    }
};


// Функція для оновлення текстів на сторінці
function updateLanguage(language) {
    if (translations[language]) {
        const texts = translations[language];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (texts[key]) {
                el.textContent = texts[key];
            }
        });
    } else {
        console.error("Мова не знайдена у словнику: ", language);
    }
}

// Перемикання мови
document.getElementById('language').addEventListener('change', function (e) {
    const selectedLanguage = e.target.value;
    updateLanguage(selectedLanguage);
});

// Встановити мову за замовчуванням
const defaultLanguage = 'uk';
document.getElementById('language').value = defaultLanguage; // Встановити випадаючий список
updateLanguage(defaultLanguage); // Оновити текст


document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.getElementById('intro');
    const mainContent = document.getElementById('mainContent');
    const dateInput = document.getElementById('birthdate');
    const errorMessage = document.getElementById('errorMessage');
    const calculateButton = document.getElementById('calculateButton');

    // Автоматичне форматування дати
    dateInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/[^0-9]/g, ''); // Залишаємо лише цифри

        // Додаємо крапки автоматично
        if (value.length > 2) {
            value = value.slice(0, 2) + '.' + value.slice(2);
        }
        if (value.length > 5) {
            value = value.slice(0, 5) + '.' + value.slice(5);
        }
        e.target.value = value.slice(0, 10); // Лімітуємо довжину
    });

    // Функція перевірки валідності дати
    function isValidDate(dateString) {
        const [day, month, year] = dateString.split('.').map(Number);
        const date = new Date(year, month - 1, day);
        return (
            date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day
        );
    }

    // Обробник кнопки "Розрахувати"
calculateButton.addEventListener('click', function () {
    const dateValue = dateInput.value;

    // Перевірка на правильність введення дати
    if (!isValidDate(dateValue)) {
        errorMessage.style.display = 'block';
        return;
    }

    // Приховуємо помилку, якщо дата правильна
    errorMessage.style.display = 'none';

    // Виконуємо розрахунки
    calculateAll(dateValue);

    // Якщо активна четверта вкладка, примусово оновлюємо її
    if (currentTab === 4) {
        calculateFourthTabPositions(dateValue);
    }

    // Приховуємо вступну секцію і показуємо вкладки
    introSection.style.display = 'none';
    mainContent.style.display = 'block';
});



});

function calculateAll(dateValue) {
    // Виконуємо всі розрахунки для вкладок
    calculateFirstTabPositions(dateValue);
    calculateSecondTabPositions(dateValue);
    calculateThirdTabPositions(dateValue);
    calculateFourthTabPositions(dateValue);
}

function calculateAll() {
    const birthdate = document.getElementById('birthdate').value;

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        alert('Введіть дату у форматі дд.мм.рррр');
        return;
    }


    const [day, month, year] = birthdate.split('.').map(Number);

    // Обмеження до діапазону 1–22
function reduceToRange(value) {
    while (value > 22) {
        value -= 22;
    }
    if (value === 0) {
        return 22;
    }
    return value;
}


// Обчислення абсолютного значення з правилом для 0
function calculateAbsoluteDifference(value1, value2) {
    let result = Math.abs(value1 - value2);
    return result === 0 ? 22 : result;
}


    function showTab(tabIndex) {
	currentTab = tabIndex;
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tabs button');

    tabs.forEach((tab, index) => {
        tab.style.display = index === tabIndex - 1 ? 'block' : 'none';
    });

    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === tabIndex - 1);
    });
}

// Прив'язка подій до кнопок
document.getElementById('tab1').addEventListener('click', function() {
    showTab(1);
});

document.getElementById('tab2').addEventListener('click', function() {
    showTab(2);
});

document.getElementById('tab3').addEventListener('click', function() {
    showTab(3);
});

document.getElementById('tab4').addEventListener('click', function() {
    showTab(4);
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const activeTab = document.querySelector('.tab.active');
        if (activeTab) {
            activeTab.classList.remove('active');
            document.querySelector('#' + activeTab.getAttribute('data-tab')).style.display = 'none';
        }
        
        tab.classList.add('active');
        const targetTab = document.querySelector('#' + tab.getAttribute('data-tab'));
        targetTab.style.display = 'block';
    });
});


    // Основні розрахунки для позицій
    const position1 = reduceToRange(day);
    const position2 = reduceToRange(month);
    const position3 = reduceToRange(year.toString().split('').reduce((a, b) => a + +b, 0));
    const position4 = reduceToRange(position1 + position2);
    const position5 = reduceToRange(position2 + position3);
    const position6 = reduceToRange(position4 + position5);
    const position7 = reduceToRange(position1 + position4);
    const position8 = reduceToRange(position2 + position5);
    const position9 = reduceToRange(position2 + position6);
    const position10 = reduceToRange(position1 + position2 + position3);
    const position11 = reduceToRange(position4 + position6);
    const position12 = reduceToRange(position6 + position5);
 
    // Відображення основних позицій
    document.getElementById('position1').querySelector('.position-value').textContent = position1;
    document.getElementById('position2').querySelector('.position-value').textContent = position2;
    document.getElementById('position3').querySelector('.position-value').textContent = position3;
    document.getElementById('position4').querySelector('.position-value').textContent = position4;
    document.getElementById('position5').querySelector('.position-value').textContent = position5;
    document.getElementById('position6').querySelector('.position-value').textContent = position6;
    document.getElementById('extra_position1').querySelector('.position-value').textContent = position1;
    document.getElementById('extra_position2').querySelector('.position-value').textContent = position2;
    document.getElementById('extra_position3').querySelector('.position-value').textContent = position3;
    document.getElementById('extra_position4').querySelector('.position-value').textContent = position4;
    document.getElementById('extra_position5').querySelector('.position-value').textContent = position5;
    document.getElementById('extra_position6').querySelector('.position-value').textContent = position6;
    document.getElementById('extra_position7').querySelector('.position-value').textContent = position7;
    document.getElementById('extra_position8').querySelector('.position-value').textContent = position8;
    document.getElementById('extra_position9').querySelector('.position-value').textContent = position9;
    document.getElementById('extra_position10').querySelector('.position-value').textContent = position10;
    document.getElementById('extra_position11').querySelector('.position-value').textContent = position11;
    document.getElementById('extra_position12').querySelector('.position-value').textContent = position12;

    // Додаткові розрахунки для "Кармічних грабель"
    const result1 = reduceToRange(position1 + position4);
    const result2 = reduceToRange(position5 + position3);
    const finalKarmic = reduceToRange(result1 + result2);

    // Відображення результатів у HTML
    document.getElementById('karmic-position1').querySelector('.position-value').textContent = position1;
    document.getElementById('karmic-position4').querySelector('.position-value').textContent = position4;
    document.getElementById('karmic-position5').querySelector('.position-value').textContent = position5;
    document.getElementById('karmic-position3').querySelector('.position-value').textContent = position3;
    document.getElementById('result1').textContent = result1;
    document.getElementById('result2').textContent = result2;
    document.getElementById('final-karmic').textContent = finalKarmic;



// друга вкладка Стратегія Успіху та Неуспіху

    const secondPosition1 = position1;
    const secondPosition2 = position2;
    const secondPosition4 = position4;
    const secondPosition7 = reduceToRange(position1 + position4);
    const secondPosition13 = reduceToRange(position4 + position2);

    // Відображення результатів другої вкладки
    document.getElementById('second-position1').querySelector('.position-value').textContent = secondPosition1;
    document.getElementById('second-position2').querySelector('.position-value').textContent = secondPosition2;
    document.getElementById('second-position4').querySelector('.position-value').textContent = secondPosition4;
    document.getElementById('second-position7').querySelector('.position-value').textContent = secondPosition7;
    document.getElementById('second-position13').querySelector('.position-value').textContent = secondPosition13;

    // calculateThirdTab(birthdate);
	// лабіринти в даті народження
	
	
	const thirdPosition1 = reduceToRange(day);
    const thirdPosition2 = reduceToRange(month);
    const thirdPosition3 = reduceToRange(year.toString().split('').reduce((a, b) => a + +b, 0));
    const thirdPosition4 = reduceToRange(position1 + position2);
    const thirdPosition5 = reduceToRange(position2 + position3);
	const thirdPosition6 = reduceToRange(position4 + position5);
    const thirdPosition7 = reduceToRange(position1 + position4);
    const thirdPosition8 = reduceToRange(position2 + position5);
	const thirdPosition13 = reduceToRange(position4 + position2);
    const thirdPosition14 = reduceToRange(position5 + position3);
    const thirdPosition17 = reduceToRange(position7 + position4 + position6);
    const thirdPosition18 = reduceToRange(position4 + position8);

    // Відображення результатів третьої вкладки
    document.getElementById('third-position1').querySelector('.position-value').textContent = position1;
    document.getElementById('third-position2').querySelector('.position-value').textContent = position2;
    document.getElementById('third-position3').querySelector('.position-value').textContent = position3;
    document.getElementById('third-position4').querySelector('.position-value').textContent = position4;
    document.getElementById('third-position5').querySelector('.position-value').textContent = position5;
    document.getElementById('third-position6').querySelector('.position-value').textContent = position6;
    document.getElementById('third-position7').querySelector('.position-value').textContent = position7;
    document.getElementById('third-position8').querySelector('.position-value').textContent = position8;
    document.getElementById('third-position13').querySelector('.position-value').textContent = thirdPosition13;
    document.getElementById('third-position14').querySelector('.position-value').textContent = thirdPosition14;
    document.getElementById('third-position17').querySelector('.position-value').textContent = thirdPosition17;
    document.getElementById('third-position18').querySelector('.position-value').textContent = thirdPosition18;
	
	// Точка Страху
    const fearPosition4 = position4;
    const fearPosition7 = position7;

    // Таємниці Душі
    const soulPosition4 = position4;
    const soulPosition5 = position5;
    const soulPosition13 = thirdPosition13;
    const soulPosition8 = position8;
	
	// Точка Страху
    document.getElementById('fear-position4').querySelector('.position-value').textContent = fearPosition4;
    document.getElementById('fear-position7').querySelector('.position-value').textContent = fearPosition7;

    // Таємниці Душі
    document.getElementById('soul-position4').querySelector('.position-value').textContent = soulPosition4;
    document.getElementById('soul-position5').querySelector('.position-value').textContent = soulPosition5;
    document.getElementById('soul-position13').querySelector('.position-value').textContent = soulPosition13;
    document.getElementById('soul-position8').querySelector('.position-value').textContent = soulPosition8;

// Розрахунки для секції "Біль та Сила"
// Біль та Сила
    const painPosition1 = position1;
    const painPosition2 = position2;
    const painPosition3 = position3;
    const painPosition4 = position4;
    const painPosition5 = position5;

    // Позиції 15 і 16 з урахуванням абсолютного значення і заміни 0 на 22
function calculatePainPosition(pos1, pos2) {
    let result = Math.abs(pos1 - pos2);
    return result === 0 ? 22 : result;
}

let painPosition15 = calculatePainPosition(position1, position2);
let painPosition16 = calculatePainPosition(position2, position3);



// Біль та Сила
    document.getElementById('pain-position1').querySelector('.position-value').textContent = painPosition1;
    document.getElementById('pain-position2').querySelector('.position-value').textContent = painPosition2;
    document.getElementById('pain-position3').querySelector('.position-value').textContent = painPosition3;
    document.getElementById('pain-position4').querySelector('.position-value').textContent = painPosition4;
    document.getElementById('pain-position5').querySelector('.position-value').textContent = painPosition5;
    document.getElementById('pain-position15').querySelector('.position-value').textContent = painPosition15;
    document.getElementById('pain-position16').querySelector('.position-value').textContent = painPosition16;

    // calculateFourthTab(birthdate);
	

	// Позиція 16
function calculatePosition16(position2, position3) {
    return calculateAbsoluteDifference(position2, position3);
}

// Позиція 19
function calculatePosition19(position1, position2) {
    return calculateAbsoluteDifference(position1, position2);
}

// Позиція 20
function calculatePosition20(position3, position1) {
    return calculateAbsoluteDifference(position3, position1);
}

// Позиція 21
function calculatePosition21(position20, position19) {
    return calculateAbsoluteDifference(position20, position19);
}

// Позиція 22
function calculatePosition22(position19, position20, position21, position16) {
    return reduceToRange(position19 + position20 + position21 + position16);
}

// Позиція 23
function calculatePosition23(position1, position3) {
    return reduceToRange(position1 + position3);
}

// Позиція 24
function calculatePosition24(position4, position23) {
    return reduceToRange(position4 + position23);
}

// Позиція 25
function calculatePosition25(position4, position23, position24, position5) {
    return reduceToRange(position4 + position23 + position24 + position5);
}

// Позиція 26
function calculatePosition26(position22, position25) {
    return calculateAbsoluteDifference(position22, position25);
}

// Позиція 27
function calculatePosition27(position22, position25) {
    return reduceToRange(position22 + position25);
}
// Функція для заповнення результатів четвертої вкладки
function calculateFourthTabPositions(day, month, year) {
    // Розрахунок позицій
    const position1 = reduceToRange(day); // Позиція 1
    const position2 = month; // Позиція 2
    const position3 = reduceToRange(year.toString().split('').reduce((a, b) => a + +b, 0)); // Позиція 3

    const position4 = reduceToRange(position1 + position2); // Позиція 4
    const position5 = reduceToRange(position2 + position3); // Позиція 5
    const position10 = reduceToRange(position1 + position2 + position3); // Позиція 10
    const position13 = reduceToRange(position4 + position2); // Позиція 13

    const position16 = calculatePainPoint(position2, position3); // Позиція 16
    const position19 = calculatePainPoint(position1, position2); // Позиція 19
    const position20 = calculatePainPoint(position3, position1); // Позиція 20
    const position21 = calculatePainPoint(position20, position19); // Позиція 21
    const position22 = reduceToRange(position16 + position19 + position20 + position21); // Позиція 22

    const position23 = reduceToRange(position1 + position3); // Позиція 23
    const position24 = reduceToRange(position4 + position23); // Позиція 24
    const position25 = reduceToRange(position4 + position23 + position24 + position5); // Позиція 25

    const position26 = calculatePainPoint(position22, position25); // Позиція 26
    const position27 = reduceToRange(position22 + position25); // Позиція 27

    // Запис результатів у HTML
	document.querySelector('.row-first .position:nth-child(1)').textContent = position10;
    document.querySelector('.row-first .position:nth-child(2)').textContent = position13;
    document.querySelector('.row-first .position:nth-child(3)').textContent = position1;
    document.querySelector('.row-first .position:nth-child(4)').textContent = position2;
    document.querySelector('.row-first .position:nth-child(5)').textContent = position3;
    

    document.querySelector('.row-second .position:nth-child(1)').textContent = position22;
	document.querySelector('.row-second .position:nth-child(2)').textContent = position16;
    document.querySelector('.row-second .position:nth-child(3)').textContent = position19;
    document.querySelector('.row-second .position:nth-child(4)').textContent = position20;
    document.querySelector('.row-second .position:nth-child(5)').textContent = position21;
    document.querySelector('.row-second .position:nth-child(6)').textContent = position26;

    document.querySelector('.row-third .position:nth-child(1)').textContent = position25;
	document.querySelector('.row-third .position:nth-child(2)').textContent = position5;
    document.querySelector('.row-third .position:nth-child(3)').textContent = position4;
    document.querySelector('.row-third .position:nth-child(4)').textContent = position23;
    document.querySelector('.row-third .position:nth-child(5)').textContent = position24;
    document.querySelector('.row-third .position:nth-child(6)').textContent = position27;
	

}

// Визначення точки болю
function calculatePainPoint(value1, value2) {
    let result = Math.abs(value1 - value2);
    return result === 0 ? 22 : result;
}

// Визначення зменшення до діапазону
// Функція зменшення значення до діапазону від 1 до 22



// Виклик при переході до вкладки
document.getElementById('tab4').addEventListener('click', function () {
    showTab(4);
    calculateFourthTabPositions(day, month, year); // Виклик функції з розрахунками
});


  }
