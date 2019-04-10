# idaproject 

Несколько из перечисленных пунктов не доделаны (см. ТЗ).

Шаг #1:

Сверстать статическую страницу на основе макета с учетом нижеуказанных требований.

Браузеры:
IE 9+, Chrome 40+, Firefox 40+, Safari 7+.

Стандарты:
HTML5/CSS3.

HTML код:
Структурный, комментируемый код (обозначается начало и конец крупных блоков). Семантичность. Грамотное использование тегов.

CSS код:
Комментариями обозначены начало/конец наборов стилей. Для оформления теней, скругленных углов и тд предпочтительно использовать CSS3- свойства. 

Обязательным условием является использование препроцессоров scss/sass/less/postcss, предпочтительно scss.

JavaScript:
Код должен выполняться без ошибок (проверить каждую страницу с помощью панели DevTools или аналогичной утилиты). Обязательным условием является использование jQuery.

Нестандартные шрифты:
Подключаются через @font-face.

Концепция независимых блоков (БЭМ):
Необходимо использовать концепцию независимых блоков (БЭМ).

Обязательными условиями являются:

- Организовать сборку файлов стилей, скриптов и изображений средствами Webpack.
- Работу над заданием вести через Git, к репозиторию приложить инструкцию по развороту.

Плюсом будет:

- При работе в Git репозитории, модели разрабатывать на различных ветках, и слить их в итоге в master.

Шаг #2:

Средствами CSS (@media-query) реализовать адаптивность в диапазоне ширины рабочей области от 720 до 1000 пикселей.

Должно быть проработано как минимум 3 состояния: 1000 (как на макете), от 1000 до 720, и 720 до 320.

Макетов для уменьшенных состояний нет: внешний вид страницы при ширине меньше 1000px реализуется на усмотрение исполнителя тестового задания.

Шаг #3:

Внедрить на страницу JS-валидацию и стилизовать выпадающие списки.

Условия валидации:

- Все поля обязательны для заполнения;
- Держатель карты только латинскими буквами, минимальная длина 4 символа;
- Номер карты — в каждом поле 4 цифры; CVV-код — только 3 цифры.
- Некорректно заполненные поля обводятся красной рамкой. Форма не отправляется пока не будет корректно заполнена.
