# Angular Forms Test

### Стек
- Angular 18
- TaigaUI 3
- Maskito
- NX CLI

### Блок 1 (Данные клиента)
- Имя (обязательное поле, минимум 2 символа, максимум 50 символов);
- Фамилия (обязательное поле, минимум 2 символа, максимум 50 символов);
- Отчество (необязательное поле, если заполнено, то минимум 2 символа, максимум 50 символов);
- Пол (выбор из выпадающего списка: "Мужской", "Женский");
- Дата рождения (обязательное поле, возраст должен быть не менее 18 лет);
- Email (обязательное поле, должно соответствовать формату email). - Телефон (обязательное поле, формат `+7 (XXX) XXX-XX-XX`).
- Серия и номер паспорта (обязательное поле, формат XXXX XXXXXX, где X — цифры).
### Блок 2 (Адрес регистрации)
- Страна (выбор из выпадающего списка, обязательное поле);
- Регион (текстовое поле, обязательное поле, минимум 3 символа);
- Город (текстовое поле, обязательное поле, минимум 3 символа);
- Улица (текстовое поле, обязательное поле, минимум 3 символа);
- Дом (текстовое поле, обязательное поле, минимум 1 символ);
- Квартира (необязательное поле, только цифры);
- Индекс (обязательное поле, только цифры, длина 6 символов).
### Блок 3 (Банковские реквизиты)
- Номер счета (обязательное поле, только цифры, длина 20 символов);
- БИК банка (обязательное поле, только цифры, длина 9 символов);
- Наименование банка (обязательное поле, минимум 3 символа);
- Корреспондентский счет (обязательное поле, только цифры, длина 20 символов).
### Блок 4 (Информация о транзакции)
- Тип транзакции (выбор из выпадающего списка: "Перевод", "Оплата", "Пополнение");
- Сумма транзакции (обязательное поле, число больше 0);
- Валюта (выбор из выпадающего списка: "RUB", "USD", "EUR");
- Комментарий (необязательное поле, максимум 200 символов). 
### Блок 5 (Дополнительные документы )
- Пользователь может добавлять несколько документов;
- Для каждого документа необходимо указать:
    - Тип документа (выбор из выпадающего списка: "Паспорт", "СНИЛС", "ИНН");
    - Номер документа (обязательное поле, только цифры, длина зависит от типа документа);
    - Дата выдачи (обязательное поле, формат даты);
- Возможность добавлять и удалять документы.




