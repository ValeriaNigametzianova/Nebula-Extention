# Небула

Расширение предназначено для маскировки неприемлемого контента в Интернете. Работает во всех браузерах на движке Chromium. Неприемлемым контентом может считаться все, что вам не нравится: спойлеры, новости и пр.

Расширение использует XPath для поиска ключевых слов на активных веб-страницах в браузере. Алгоритм поиска включает в себя создание стемм и транслитераций для добавленных слов. Поиск вхождений ключевых слов происходит с помощью XPath. Алгоритм обработки найденных текстов может работать с использованием нейросети и без нее. При отключенном использовании нейросети маскируются все найденные тексты, при включенном - тексты отправляются на обработку в нейросеть для получения контекста употребления ключевого слова. При таком подходе маскируются тексты, соответствующие категории слова.

Нейросеть подключается **самостоятельно**: на выбор дается ChatGPT и GigaChat, для каждой из них необходимо ввести ключ доступа. Ключ для ChatGPT можно получить в [личном кабинете OpenAI](https://platform.openai.com/api-keys), для GigaChat в [личном кабинете DevelopersSber](https://developers.sber.ru/docs/ru/gigachat/individuals-quickstart).

Все введенные данные находятся в синхронизируемом хранилище браузера локально на вашем компьютере.

Ниже даны инстуркции по установке и обновлению:

1. [Установка в Chrome и Opera](#порядок-установки-расширения-в-Chrome-и-Opera)
2. [Установка в Яндекс Браузер](#порядок-установки-расширения-в-Яндекс-Браузере)
3. [Обновление расширения](#порядок-обновления-расширения)

### Порядок установки расширения в Chrome и Opera:

1. Скачать и **разархивировать** билд Build-Nebula-Extension.zip из последнего [релиза](https://github.com/ValeriaNigametzianova/Nebula-Extension/releases/tag/Nebula-Extension-v1.2.0);
2. Перейти в "Управление расширениями" ("Manage extensions");

   ![image](https://github.com/ValeriaNigametzianova/Nebula-Extension/assets/71436617/528cf43c-ec5b-4589-b747-69f5f6692b10)

3. Включить режим разработчика ("Developer mode");

   ![image](https://github.com/ValeriaNigametzianova/Nebula-Extension/assets/71436617/38b4e00f-6893-40aa-a130-1dd9d2c6738b)

4. Нажать "Загрузить распакованное расширение" ("Load unpacked") и выбрать папку dist;

   ![image](https://github.com/ValeriaNigametzianova/Nebula-Extension/assets/71436617/d6d2e7e4-771b-4b50-a19c-d69f3431eb94)

5. После установки откроется видео-инструкция по использованию, изучите и пользуйтесь.


### Порядок установки расширения в Яндекс Браузере:

1. Скачать и **разархивировать** билд Build-Nebula-Extension.zip из последнего [релиза](https://github.com/ValeriaNigametzianova/Nebula-Extension/releases/tag/Nebula-Extension-v1.2.0);
2. Перейти в "Управление расширениями" ("Manage extensions");

   ![image](https://github.com/ValeriaNigametzianova/Nebula-Extension/assets/71436617/42bcd0b3-718b-4218-b707-84aa033f0df5)

3. Перейти в "Управление расширениями" ("Manage extensions") по адресу browser://extensions/ (ввести в адресную строку);

   ![image](https://github.com/ValeriaNigametzianova/Nebula-Extension/assets/71436617/fcbb742e-f63f-400e-9190-54d402145b7b)

4. Включить режим разработчика ("Developer mode");

   ![image](https://github.com/ValeriaNigametzianova/Nebula-Extension/assets/71436617/80be4d97-e0e7-4320-9c2e-ca1504c70748)

5. Нажать "Загрузить распакованное расширение" ("Load unpacked") и выбрать и выбрать папку dist;

   ![image](https://github.com/ValeriaNigametzianova/Nebula-Extension/assets/71436617/46b9e357-8039-4d3a-9242-720737363035)

6. После установки откроется видео-инструкция по использованию, изучите и пользуйтесь;


### Порядок обновления расширения:

1. Скачать и **разархивировать** билд Build-Nebula-Extension.zip из последнего релиза;
2. Найти папку, из которой устанавливалась предыдущая версия расширения;
3. Заменить файлы в старой папке на файлы из новой
