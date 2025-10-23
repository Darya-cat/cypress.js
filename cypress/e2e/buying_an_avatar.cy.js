describe('Проверка покупки нового аватара', function () {                 // Название набора тестов

    it('e2e тест на покупку нового аватара для тренера', function () {   // Название теста
         cy.visit('https://pokemonbattle.ru/');                          // Перейти на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('USER_LOGIN');                   // Ввести свой логин вместо USER_LOGIN
         cy.get('input[id="k_password"]').type('USER_PASSWORD');               // Ввести свой пароль вместо USER_PASSWORD
         cy.get('button[type="submit"]').click();                // Нажать кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click();            // Клик в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // Нажать на кнопку Смена аватара
         cy.get('.available > button').first().click();   // Клик на Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // Ввести номер карты
         cy.get('.card_csv').type('125');                             // Ввести CVV карты
         cy.get('.card_date').type('1226');                           // Ввести срок действия карты
         cy.get('.card_name').type('Darya');                           // Ввести имя владельца карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // Нажать на кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // Ввести код подтверждения из СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // Нажать на кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // Проверить  наличие и видимость сообщения об успешной покупке
     });
 });

 //Запустить командой npx cypress open