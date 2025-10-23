describe ('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () { //Проверка на позитивный кейс авторизации (1)
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввести верный логин
        cy.get('#pass').type('qa_one_love1') // Ввести верный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверка, что после авторизации ползователю виден нужный текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть кнопка крестика и он виден пользователю
     })


   it('Восстановление пароля', function () { //Проверка логики восстановления пароля (2)
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки восстановить пароль

        cy.get('#forgotEmailButton').click(); //Нажать «Забыли пароль»
        cy.get('#mailForgot').type('german@dolikov.ru'); //Ввести любой имейл
        cy.get('#restoreEmailButton').click(); //Нажать отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверка, что пользователю виден нужный текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть кнопка крестика и он виден пользователю
     })


   it('Верный логин и НЕверный пароль', function () { //Проверка на негативный кейс авторизации (3)
        cy.visit('https://login.qa.studio'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввести верный логин
        cy.get('#pass').type('iLoveqastudio2'); // Ввести НЕверный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').should('be.visible'); //Проверка, что пользователю виден нужный текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть кнопка крестика и он виден пользователю
     })


   it('НЕверный логин и верный пароль', function () { //Проверка на негативный кейс авторизации (4)
        cy.visit('https://login.qa.studio'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки восстановить пароль

        cy.get('#mail').type('germannn@dolnikov.ru'); // Ввести НЕверный логин
        cy.get('#pass').type('qa_one_love1'); // Ввести верный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').should('be.visible'); //Проверка, что пользователю виден нужный текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть кнопка крестика и он виден пользователю
     })


   it('Валидация на наличие @', function () { //Проверка на негативный кейс авторизации (5)
        cy.visit('https://login.qa.studio'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
        cy.get('#pass').type('qa_one_love1'); // Ввести верный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').should('be.visible'); //Проверка, что пользователю виден нужный текст
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть кнопка крестика и он виден пользователю
     })


   it('Валидация строчных букв в логине', function () { //Проверка на приведение к строчным буквам в логине (6) БАГ - Тест ДОЛЖЕН УПАСТЬ — и это ок
        cy.visit('https://login.qa.studio'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести верный логин, но с заглавными буквами
        cy.get('#pass').type('qa_one_love1'); // Ввести верный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверка, что после авторизации пользователю виден нужный текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть кнопка крестика и он виден пользователю
     })
})

//Запустить командой npx cypress open