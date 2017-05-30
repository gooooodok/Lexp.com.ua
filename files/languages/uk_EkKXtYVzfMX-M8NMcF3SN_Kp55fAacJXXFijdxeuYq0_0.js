Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Сталась помилка AJAX HTTP", "HTTP Result Code: !status":"HTTP код відповіді: !status", "An AJAX HTTP request terminated abnormally.":"Запит AJAX HTTP несподівано обірвався", "Debugging information follows.":"Інформація для відладки надається", "Path: !uri":"Шлях: !uri", "StatusText: !statusText":"Статус: !statusText", "ResponseText: !responseText":"Текст відповіді: !responseText", "ReadyState: !readyState":"Статус готовності: !readyState", "Upload":"Відвантажити", "Configure":"Налаштувати", "Show":"Показати", "Not published":"Не опубліковано", "Please wait...":"Зачекайте, будь ласка...", "Hide":"Сховати", "Loading":"Завантаження", "Only files with the following extensions are allowed: %files-allowed.":"Можна використовувати лише файли з наступними розширеннями: %files-allowed.", "By @name on @date":"@name, @date", "By @name":"@name", "New revision":"Нова редакція", "The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\u002Fem\u003E button is clicked.":"Зміни до нового розташування блоків не будуть збередені, доки Ви не натисните на кнопку \u003Cem\u003EЗберегти блоки\u003C\u002Fem\u003E.", "Show shortcuts":"Показати комбінації клавіш", "No revision":"Немає редакцій", "Not restricted":"Без обмежень", "(active tab)":"(активна вкладка)", "Not customizable":"Не персоналізується", "Restricted to certain pages":"Тільки для певних сторінок", "The block cannot be placed in this region.":"Блок не може бути розташований в цій області.", "Hide summary":"Сховати резюме", "Edit summary":"Редагувати резюме", "@title dialog":"@title діалог", "The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Неможливо передати вибраний файл %filename. Припустимими є лише файли з наступними розширеннями: %extensions.", "Autocomplete popup":"Спливаюче автозавершення", "Searching for matches...":"Пошук збігів...", "Hide shortcuts":"Сховати швидкі кнопки", "Remove group":"Видалити групу", "Apply (all displays)":"Застосувати (для всіх відображень)", "Revert to default":"Скинути до початкових значень", "Apply (this display)":"Застосувати (для цього відображення)", "Available tokens":"Доступні маркери", "Insert this token into your form":"Вставити цей замінник у вашу форму", "First click a text field to insert your tokens into.":"Щоб вставити маркер клацніть спочатку в текстовому полі.", "Loading token browser...":"Завантажується оглядач маркерів...", "Close":"Закрити", "Browse":"Огляд", "File Browser":"Оглядач файлів", "Log messages":"Повідомлення в журнал", "Please select a file.":"Будь-ласка виберіть файл.", "You are not allowed to operate on more than %num files.":"Вам не дозволено працювати більше ніж %num файлами.", "Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"Будь-ласка вкажіть розмір в дозволених межах від 1x1 до @dimensions.", "%filename is not an image.":"%filename не зображення.", "File browsing is disabled in directory %dir.":"Перегляд файлів заборонений для папки %dir.", "Do you want to refresh the current directory?":"Ви прагнете обновити поточну папку?", "Delete selected files?":"Вилучити обрані файли?", "Please select a thumbnail.":"Будь ласка виберіть перегляд.", "You must select at least %num files.":"Ви повинні вибрати хоча б %num файлів.", "Translatable":"Перекладається", "Editor name":"Назва редактора", "The preview is disabled due to previously inserted HTML code in the content. This aims to protect you from any potentially harmful code inserted by other editors or users. If you own the content, just preview an empty text to re-enable the preview.":"Попередній перегляд відключений у зв\u0027язку з раніше вставленим кодом HTML в зміст. Ця діяльність спрямована на захист від будь-якого потенційно шкідливого коду додане в редактором або іншим користувачем. Якщо у вас  є зміст, залиште порожніми текст перегляду, щоб знову включити preview.", "Preview requires \u003Ca href=\u0022http:\u002F\u002Fdrupal.org\u002Fproject\u002Fajax_markup\u0022\u003EAjax markup\u003C\u002Fa\u003E module with proper permissions set.":"Перегляд вимагає \u003Ca href=\u0022http:\u002F\u002Fdrupal.org\u002Fproject\u002Fajax_markup\u0022\u003EAjax markup\u003C\u002Fa\u003E модуля з включеними дозволами."}} };