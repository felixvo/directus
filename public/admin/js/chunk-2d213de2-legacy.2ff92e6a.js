(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213de2"],{af07:function(e){e.exports=JSON.parse('{"about_directus":"Про Directus","activity":"Активність","activity_log":"Журнал активності","activity_outside_directus":"Елемент створено не в Directus","add_field_filter":"Добавити фільтр поля","add_new":"Створити","add_note":"Додайте інформативну нотатку для користувачів...","additional_info":"Додаткова інформація","admin_email":"Email адміністратора","admin_password":"Пароль адміністратора","admin_settings":"Налаштування адміністратора","advanced_options":"Розширені налаштування","all":"Все","allowed_status_options":"Дозволені варіанти статусу","all_set":"Все готово!","api_installed":"API успішно встановлено","api_url":"API URL","asc":"зростання","auto_generate":"Автоматично згенеровано","auto_generated":"Автоматично згенеровано...","back":"Назад","batch":"Група","batch_delete":"Видалення групи","batch_delete_confirm":"Жодних елементів не вибрано | Ви впевнені, що хочете видалити цей елемент? Цю дію не можна скасувати. | Ви впевнені, що ви хочете видалити ці {count} елементи? Цю дію неможливо скасувати.","batch_edit":"Редагування групи елементів: {collection}","batch_edit_field":"Редагування групи елементів","between":"Між","bookmark_global":"Глобальне: Збереження для всіх користувачів","bookmark_personal":"Особистий: зберегти для мене","bookmark_role":"Роль: Зберегти для \'{role}\'","bookmarks":"Закладки","both":"Обидва","cancel":"Скасувати","cant_disable_primary":"Ви не можете відключити первинний ключ у наявному полі. Видалити це поле.","cant_sort_by_this_field":"Ви не можете сортувати за цим полем","change_project":"Змінити проект","choose_one":"Оберіть один","choose_project":"Оберіть проект","create_project":"Створити проект","clear":"Очистити","clear_value":"Очистити значення","click_to_toggle_all_none":"Клацніть, щоб увімкнути / вимкнути всю колонку","collection":"Колекція | Колекції","collection_count":"Немає колекцій | Одна колекція | {count} колекцій","collection_contains_items":"Елементів у колекції {collection}: {count}","collection_invalid_name":"Неправильна назва колекції","collection_names_cannot_be_changed":"Назву колекції не можна відредагувати зараз.","collection_removed":"Колекцію видалено","collection_updated":"Колекцію оновлено","collections_and_fields":"Колекції та поля","collections":{"directus_activity":"Активність","directus_files":"Файли","directus_users":"Користувачі"},"fields":{"directus_activity":{"action":"Action","collection":"Колекція","item":"Item Primary Key","action_by":"Action By","action_on":"Action On","edited_on":"Змінено","comment_deleted_on":"Коментар видалено","ip":"IP адреса","user_agent":"Ідентифікатор браузера","comment":"Коментар"},"directus_files":{"title":"Title","tags":"Tags","location":"Розташування","description":"Опис","filename_download":"Filename Download","filename_disk":"Filename Disk","private_hash":"Приватний хеш","checksum":"Контрольна сума","uploaded_on":"Завантажено","uploaded_by":"Uploaded By","width":"Ширина","height":"Height","duration":"Тривалість","filesize":"Розмір файлу","metadata":"Метадані"},"directus_users":{"status":"Статус","first_name":"Ім\'я","last_name":"Прізвище","email":"Email","email_notifications":"Сповіщення електронною поштою","password":"Пароль","role":"Роль","company":"Компанія","title":"Title","timezone":"Часовий пояс","locale":"Локаль","avatar":"Avatar","theme":"Тема","2fa_secret":"Двофакторна автентифікація"}},"modules":{},"comfortable":"Комфортна","coming_soon":"Незабаром","comment":"Коментар","comments":"Коментарі","compact":"Компактна","config_error":"Немає конфігурації","config_error_copy":"Переконайся, що ти створив конфігураційний файл додатку","confirm":"Підтвердити","connection":"З\'єднання","contains":"Містить","continue":"Далі","continue_as":"<b>{name}</b> is already authenticated for this project. If you recognize this account, please press continue.","cozy":"Зручна","create":"Створити","create_collection":"Створити колекцію","create_field":"Створити поле","create_role":"Створити роль","created_by":"Автор","owner":"Owner","created_on":"Створено","create_new_project":"Створити новий проект","create_new_project_copy":"Make sure you have your database information handy, then enter your API\'s Super-Admin password to continue.","creating_item":"Створення елементу","creating_item_page_title":"Створення елементу: {collection}","creating_role":"Створення ролі","currently_selected":"Зараз вибрано: {thing}","database_connection":"Підключення до бази даних","database_connection_copy":"Далі, нам треба знати як приєднатися до бази даних з проектом, яким буде здійснюватися управління.","datatype":"Тип даних","datatypes":{"mysql":{"BIGINT":"Ціле число. Коли зі знаком (дозволяє відємні значення) максимальне значення з діапазону від -9e18, до 9e18. В іншому випадку максимальне значення 18e18.","BOOLEAN":"Дійсне чи хиба. Зберігається як 1 або 0 відповідно.","CHAR":"Недвійкова стрічка, з пробілами, фіксованої довжини. Дожина від 0 до 255 знаків.","DATE":"Дата. Діапазон від `1000-01-01` до `9999-12-31`.","DATETIME":"Дата та час. Діапазон від `1000-01-01 00:00:00` до `9999-12-31 23:59:59`.","DECIMAL":"Точне число (наприклад: валюта) з довжиною від 1 до 65 цифр (L) та від 0 до 30 десяткових (D). Формат довжини: `L,D`","DOUBLE":"Орієнтовний бінарний номер, 8 байт із плаваючою десятковою крапкою.","FLOAT":"Орієнтовано бінарний номер, 4 байти з плаваючою десятковою крапкою.","INT":"Цільова ціла. Коли знак (дозволяє відмітити) довжина -2,147,483,648 до 2,147,483647, інакше максимум 4,294,967,295.","LONGTEXT":"Рядок з максимальною довжиною 4,294,967,295 символів.","MEDIUMINT":"Ціле число. Коли зі знаком (дозволяє відємні значення) максимальне значення з діапазону від -8,388,608,, 607, до 16,777,215., 8,388,807. В іншому випадку максимальне значення.","MEDIUMTEXT":"Рядок з максимальною довжиною 16,777,215 символів.","SMALLINT":"Ціле число. Коли зі знаком (дозволяє відємні значення) максимальне значення з діапазону від -8,388,608,, 607, до 16,777,215., 8,388,807. В іншому випадку максимальне значення.","TEXT":"Рядок з максимальною довжиною 65,535 символів.","TIME":"Час. Дозволяє `-838:59:59:59` до `838:59:59`.","TIMESTAMP":"Дата та час. Дозволяє `1970-01-01-0:00:01` UTC за`2038-01-19 03:14:07` UTC.","TINYINT":"Ціле число. Коли зі знаком (дозволяє відємні значення) максимальне значення з діапазону від -8,388,608,, 607, до 16,777,215., 8,388,807. В іншому випадку максимальне значення.","TINYTEXT":"Рядок з максимальною довжиною 255 символів.","VARCHAR":"Не бінарний рядок змінної довжини. Довжина може бути від 0 до 65 555 символів (MySQL 5.0.3+).","YEAR":"Рік. Дозволяє `1901` до` 2155` або `0000`"}},"date_and_time":"Дата і час","db_column_name":"Назва стовбця у базі даних...","db_datatype":"Тип даних {db}","db_name":"Назва бази даних","db_password":"Пароль користувача","db_type":"Тип бази данних","db_update_failed":"Неможливо оновити базу даних.","db_updated":"Базу даних успішно оновлено","db_user":"Користувач","default":"За замовчуванням","default_value":"Значення за замовчуванням","delete":"Видалити","delete_are_you_sure":"Ви впевнені, що хочете видалити цей елемент? Цю дію не можливо скасувати.","delete_bookmark":"Видалити закладку","delete_bookmark_body":"Ви впевнені, що хочете видалити цю закладку? Цю дію не можливо скасувати.","delete_collection_are_you_sure":"Ви впевнені, що хочете видалити цю колекцію? Цю дію не можливо скасувати.","delete_confirmation":"Підтвердження видалення","delete_field_are_you_sure":"Ви впевнені, що хочете видалити поле \\"{field}\\"? Цю дію не можливо скасувати.","delete_role_are_you_sure":"Ви впевнені, що хочете видалити поле \\"{name}\\"? Цю дію не можливо скасувати.","desc":"спадання","description":"Опис","deselect":"Зняти виділення","dialog_beginning":"Початок діалогового вікна.","discard_changes":"Скасувати зміни","display_name":"Відображувана назва","directus_version":"Версія Directus","done":"Готово","dont_manage":"Не керуйте","dont_manage_copy":"Привілеї, налаштування та налаштування колекції будуть назавжди видалені з системи! Ви впевнені?","dont_show":"Не показувати","drop_files":"Неможливо видалити файли | Завантажте файл сюди... | Завантажте файли сюди...","duplicate":"Дублювати","duplicating_field":"Дублювання поля","editing":"Елемент редагування: {collection}","editing_item":"Редагувати елемент","editing_items":"Пакетне редагування {count} елементів","editing_my_profile":"Редагування мого профілю","editing_single":"Редагування {collection}","email":"Email","email_address":"Адреса електронної пошти","embed":"Вбудувати","embed_placeholder":"YouTube, Vimeo чи інше посилання","empty_collection":"Порожня колекція","empty_collection_body":"У цій колекції наразі немає елементів","enable_manual_sorting":"Увімкнути ручне сортування","enter_collection_name":"Введіть назву колекції...","enter_otp":"Будь ласка, введіть код підтвердження з вашого додатка для автентифікації.","enter_role_name":"Введіть назву ролі...","enter_value":"Введіть значення","environment":"Середовище","equal_to":"Дорівнює","error_unknown":"Невідома помилка. Будь ласка, спробуйте ще раз.","errors":{"11":"Неможливо під\'єднатися до бази даних","100":"Неправильний Email або пароль","101":"Вийшло із системи через неактивність","102":"Вийшло із системи через неактивність","103":"Заморожений користувач","106":"Неправильний Email або пароль","107":"Користувача не знайдено","111":"Введіть одноразовий пароль","112":"Неправильний одноразовий пароль","114":"Неправильний Email або пароль","115":"SSO не дозволяється, коли увімкнено 2FA (двохфакторна авторизація)","-1":"Не вдалося приєднатися до API"},"esc_cancel":"Escape скасує і закриє вікно.","event_count":"Немає подій | Одна подія | {count} події","existing":"Існуючий","extension_error":"Сталася помилка при завантаженні розширення {ext}.","extensions_missing":"Розширень не знайдено","extensions_missing_copy":"Переконайтеся, що ви встановили системні розширення.","fetching_data":"Отримання даних","field":"Поле | Поля","field_already_exists":"Поле вже існує: {field}","field_created":"Поле створено","field_removed":"Поле видалено","field_setup_interface":"What type of field are you creating?","field_setup_schema":"How should it store content in the database?","field_setup_relation":"How is the relationship\'s data stored?","field_setup_options":"All set! Just review these interface options...","field_type":"Тип поля","field_updated":"Поле оновлено","field_width":"Ширина поля","field_width_half":"Половина ширини (обгортки)","field_width_left":"Половина ширини (лише зліва)","field_width_right":"Половина ширини (лише праворуч)","field_width_full":"Повна ширина","field_width_fill":"По ширині сторінки","field_width_note":"Ширина цього поля в макеті форми.\\nОбертання на половину ширини базується на інших полях та порядку їх сортування.","fields_are_saved_instantly":"Зміни в полях зберігаються миттєво","fieldtypes":{"alias":"Поля, які не зберігають дані або не мають відповідних колонок бази даних","array":"Стандартний формат масиву в API відповіді","date":"Дата, наприклад: 2018-09-19","datetime":"Дата і час у форматі ISO; наприклад: 2018-09-19T14:00:43.381Z","datetime_created":"Системне поле для відстеження дати, коли елемент було створено, використовуваний редакціями","datetime_updated":"Система поле відслідковування дати, елемент був оновлений, використовуваний редакціями","decimal":"Число, яке включає десятковий","file":"Зовнішній ключ до directus_files.id","group":"Групи гуртуються візуально,діти зберігають групу в directus_fields.group","integer":"Ціле число","json":"Стандартний формат JSON в API відповіді","lang":"Характерно для інтерфейсного перекладу, тут зберігається мовний ключ","m2o":"Багато в одному відношення","managed":"Управління","o2m":"Багато в одному відношення","sort":"Системне поле, що використовується при переупорядкуванні елементів перетягування","status":"Системне поле, що використовується для публікації робочих процесів","string":"Будь-який текст, числа, пробіли або символи; обмежується кількістю символів","time":"Час, наприклад: 14:09:22","translation":"Характерно для інтерфейсного перекладу, тут зберігається мовний ключ","owner":"Системне поле для стеження користувачем, який створив предмет, використовується редакціями","user_updated":"Системне поле для відстеження користувача, який оновив елемент, використовується при версіонуванні","uuid":"Універсально унікальний ідентифікатор"},"file":"Файл","file_library":"Бібліотека файлів","file_type_not_accepted":"{filename} не можливо завантажити. Це невірний тип файлу для цього поля.","file_upload":"Завантажити файл(и)","file_download":"Download","forgot_password":"Забули пароль","greater_than":"Більше ніж","greater_than_equal":"Більше ніж або дорівнює","help_and_docs":"Довідка та документи","hidden":"Приховані","hidden_browse":"Приховано в огляді","hidden_detail":"Приховано на деталі","host":"Хост","icon":"Іконка","in_list":"Жоден з цих","info":"Інформація","initial_schema":"Choose an Initial Schema","initial_schema_copy":"Виберіть із існуючої архітектури баз даних або почніть новий. Ви завжди можете продовжити та налаштувати це пізніше.","install":"Встановити","install_copy":"Цей проект ще не налаштований. Якщо ви адміністратор, ви можете налаштувати його зараз, натиснувши на кнопку нижче.","install_busy_copy":"Дякую. Ще хвилинку, ми створюємо базу даних, імпортуємо схему конфігурації та додаємо новий файл конфігурації для цього API.","install_all_set_copy":"The project has successfully been created. You can now sign in to the App with the admin credentials you entered.","install_all_set_super_admin_password":"Збережіть згенерований пароль адміністратора. Ви не побачите його знову!","php_extensions":"Розширення PHP","missing_value":"Не вистарчає {value}","write_access":"Доступ на запис","value_not_writeable":"Не можна писати в {value}","intelligent_defaults":"Розширені параметри дозволяють налаштувати спосіб зберігання даних у базі даних та налаштувати додаткові параметри додатків.","interface":"Інтерфейс | Інтерфейси","interface_count":"Немає інтерфейсів | Один інтерфейс | {count} Інтерфейси","interface_has_no_options":"Цей інтерфейс не має жодних параметрів","interface_settings":"Кожен інтерфейс може бути ідеально адаптованим до ваших потреб. Нижче наведені доступні варіанти цього інтерфейсу, але тільки деякі є обов\'язковими.","is_empty":"Порожньо","is_not_null":"Не NULL","is_null":"Дорівнює NULL","item_count":"Немає елементів | Один елемент | {count} елементів","item_count_filter":"Немає результатів | Один результат | {count} результатів","item_deleted":"Елемент видалено","item_saved":"Елемент збережено | {count} Елементи збережені","junction_collection":"Збірна колекція","keep_editing":"Продовжити редагування","latency":"Затримка","learn_more":"Дізнатися більше","leave_comment":"Залишити коментар...","length":"Довжина","length_disabled_placeholder":"Довжина визначається дататипом","less_than":"Менше ніж","less_than_equal":"Менше ніж або дорівнює","limited":"Обмежено","loading":"Завантаження...","load_more":"Завантажити більше","loading_more":"Завантаження інших елементів","login":"Вхід","m2m":"Багато до багатьох","m2o":"Багато до одного","manage":"Управління","manage_started":"Started Managing Collection","manage_stopped":"Stopped Managing Collection","max_one_primary_key":"Ви можете мати лише одне основне поле первинного ключа на колекцію","max_size":"Максимальний розмір: {size}","mixed":"Змішаний","modified_by":"Змінено","modified_on":"Час зміни","more_options":"Більше опцій","months":{"january":"Січень","february":"Лютий","march":"Березень","april":"Квітень","may":"Травень","june":"Червень","july":"Липень","august":"Серпень","september":"Вересень","october":"Жовтень","november":"Листопад","december":"Грудень"},"my_activity":"Активність","my_profile":"Мій профіль: {name}","name":"Ім’я","name_bookmark":"Що б ви хотіли зробити з цією закладкою?","navigate_changes":"Ви впевнені, що хочете залишити цю сторінку? Якщо ви покинете цю сторінку, внесені зміни будуть втрачені.","new":"Новий","new_field":"Нове поле","new_file":"Новий файл","new_item":"Новий елемент","next":"Наступний","no_collections":"Немає налаштувань колекції","no_collections_body":"Схоже, ще немає налаштувань колекцій","no_fields":"Немає налаштування полів","no_fields_body":"Здається, у цій колекції ще немає налаштувань полів","no_files":"Немає файлів","no_files_body":"Схоже, ще не завантажено жодного файлу","no_interface_error":"У полі {field} не має налаштувань інтерфейсу","no_items_selected":"Жоден елемент не вибрано","no_related_entries":"Не має пов’язаних записів","no_results":"Нічого не знайдено","no_results_body":"Поточні фільтри не відповідають жодним предметам колекції","none":"Нічого","not_authenticated":"Не автентифіковано","not_between":"Не між","not_contains":"Не містить","not_empty":"Не є пустим (Automatic Translation)","not_equal_to":"Не дорівнює","not_in_list":"Жоден з цих","note":"Замітка","note_hidden":"[Докладніше] (https://docs.directus.io/guides/collections.html#hidden)","note_icon":"Піктограма, показана на бічній панелі навігації додатку","note_managed":"[Докладніше] (https://docs.directus.io/guides/collections.html#managing-collections)","note_note":"Внутрішній опис...","note_single":"[Докладніше] (https://docs.directus.io/guides/collections.html#single)","notifications":"Сповіщення","no_public_projects":"This API doesn\'t have any public projects. Please contact your administrator.","numeric":"Цифровий","o2m":"Один до багатьох","ok":"OK","one_moment":"Один момент...","open_on_gh":"Переглянути на GitHub","operator":"Оператор","optional":"Необов\'язковий","options":"Параметри","other":"Інше","otp":"Одноразовий пароль","page_not_found":"Сторінку не знайдено","page_not_found_body":"Здається, сторінка яку ви шукаєте, не існує.","password":"Пароль","password_reset_sending":"Надсилання листа...","password_reset_sent":"If a valid user with this email address exists in Directus, we\'ve sent you a secure link to reset your password.","password_reset_successful":"Пароль успішно скинуто.","permission_states":{"always":"Завжди","create":"Створити","full":"Все","mine":"Тільки моє","none":"Нічого","on_create":"При створенні","on_update":"При оновленні","read":"Тільки читання","role":"Тільки роль","update":"Оновити"},"permissions":"Права","permissions_admin":"Адміністратори за замовчуванням мають доступ до всіх керованих даних у системі.","permissions_no_collections":"Цей проект ще не має колекцій.","popular":"Популярні","port":"Порт","powered_by_directus":"На платформі Directus","preview_and_revert":"Попередній перегляд та відміна","primary_key":"Первинний ключ","project":"Проект","project_info":"Інформація про проект","project_info_copy":"Нижче наведено декілька питань щодо вашого проекту, включаючи облікові дані першого адміністратора.","project_key":"Ключ проекту","project_name":"Назва проекту","project_not_configured":"Проект не налаштовано","read":"Прочитайте","readable_fields":"Легкі для читання поля","readable_fields_copy":"Оберіть поля, які користувач може редагувати","readonly":"Тільки читання","regex":"RegEx","related_collection":"Пов’язано з колекцією","related_entries":"Має пов’язані записи","relational":"Реляційний","relationship":"Відносини","relationship_not_setup":"Зв’язок не правильно налаштовано.","remove":"Видалити","remove_related":"Видалити вибрані елементи","report_issue":"Повідомлення про проблему","request_feature":"Функція запиту","required":"Обов\'язкове","reset":"Скинути","reset_password":"Скинути пароль","reset_preferences":"Скинути всі налаштування лістингу","reset_to_default":"Відновити налаштування за умовчанням","revert":"Повернути","revert_copy":"Ви хочете повернути цей елемент до того, як він був {date}?","role_count":"Немає результатів | Один результат | {count} результатів","role_settings":"Налаштування ролі","roles":"Ролі користувача","save":"Зберегти","save_and_add":"Зберегти та додати нове","save_and_stay":"Зберегти і Залишитись","save_as_bookmark":"Зберегти як закладку","save_as_copy":"Зберегти копію","scan_in_authenticator":"Проскануйте код за допомогою програми автентифікації","schema":"Схема","search":"Пошук","search_for_item":"Шукати пункт...","search_interface":"Пошук інтерфейсу...","select_existing":"Вибрати існуючі","select_field":"Виберіть поле","select_fields":"Обрати поля","select_from_device":"Обрати пристрій","select_interface":"Виберіть інтерфейс","select_interface_below":"Виберіть інтерфейс нижче","select_statuses":"Виберіть Статуси","select_statuses_copy":"Виберіть статуси, якими користувач може користуватися","server_details":"Деталі сервера","server_error":"Помилка сервера","server_error_copy":"Щось не так із сервером або базою даних цього проекту.","server_trouble":"Проблеми з сервром","server_trouble_copy":"Спробуйте знову або зверніться до вашого системнимого адміністратора по допомогу.","settings":"Налаштування","settings_collections_fields":"Коллекції і поля","settings_extensions":"Розширення","settings_global":"Глобальні налаштування","settings_permissions":"Ролі і Дозволи","settings_project":"Налаштування проекту","settings_saved":"Налаштування збережено","settings_webhooks":"Вебхуки","setup_2fa":"Налаштування 2FA","show_directus_collections":"Показати системні колеції Directus","sign_in":"Вхід","sign_out":"Вихід","sign_out_confirm":"Ви справді бажаєте вийти?","sign_out_confirm_edits":"Ви впевнені, що бажаєте вийти? Всі незбережені зміни будуть втрачені.","signing_in":"Входимо","single":"Одиночний","something_went_wrong":"Щось пішло не так.","something_went_wrong_body":"Неможливо обробити запит. Спробуйте повторити після оновлення сторінки.","sort":"Сортування","sort_by":"Сортувати за","sort_direction":"Напрямок сортування","spacing":"Відступ","status":"Статус","statuses":"Статуси","submit":"Підтвердити","text":"Текст","translation":"Translation","translated_field_name":"Translated field name...","not_translated_in_language":"Не перекладено на {language}","this_item_is_not_available":"This item is not available.","this_collection":"Ця колекція","to":"До","turn_all_on":"Ввімкнути все","turn_all_off":"Вимкнути все","undo_changes":"Відмінити зміни","unique":"Унікальний","unsaved_changes":"Unsaved Changes","unsaved_changes_copy":"Ви впевнені, що хочете залишити цю сторінку?","update":"Оновити","update_confirm":"Ви впевнені, що бажаєте оновити {count} елементів?","update_field":"Оновити поле","upload_exceeds_max_size":"{filename} не може бути вивантажений. Конфігурація вашого сервера не дозволяє вивантажувати файли такого розміру.","user_directory":"Директорія користувачів","user_edit_warning":"{first_name} {last_name} також редагуе цей елемент. Будь-ласка, узгодьте зміни, щоб не втрати ваші дані.","validation":"Валідація","value":"Значення","values":"Значення","version":"Версія","version_and_updates":"Версія та оновлення","view_type":"Переглянути як...","visible_all_users":"Видимі для всіх користувачів","webhook_count":"Немає Вебхуків | Один Вебхук | {count} вебхуків","weeks":{"monday":"Понеділок","tuesday":"Вівторок","wednesday":"Середа","thursday":"Четвер","friday":"П\'ятниця","saturday":"Субота","sunday":"Неділя"},"welcome":"Вітаємо","welcome_to_directus":"Welcome to Directus","welcome_to_directus_copy":"Please make sure you have your database information handy to set up your first project.","why":"Чому?","wrapping_up":"Wrapping Up","wrong_super_admin_password":"Невірний пароль супер адміністратора.","writable_fields":"Поля, що можуть редагуватися","writable_fields_copy":"Оберіть поля, які може редагувати користувач","yes":"Так"}')}}]);
//# sourceMappingURL=chunk-2d213de2-legacy.2ff92e6a.js.map