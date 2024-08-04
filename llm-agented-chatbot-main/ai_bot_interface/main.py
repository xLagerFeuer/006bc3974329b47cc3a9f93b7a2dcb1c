from gpt4free import G4FLLM
from langchain.llms.base import LLM
from g4f import Provider, models
import mysql.connector
from mysql.connector import Error
import time

def ProcessTextDB(text, id=1):
    llm: LLM = G4FLLM(
        model=models.gpt_35_turbo,
        provider=Provider.Yqcloud,
    )

    print(f"Processing text: {text}")
    MSG = f"""
        Answer as an analyst would answer. Always answer in Russian Language. My message for you: {text}. If you need, you can write HTML code with tailwind for difficult view or bootstrap for usual basics css styles, this code will be rendered for me. Do not use Markdown, LATeX, use only html and text. Always answer using HTML code. you will communicate with the employees of the construction company and you should be a useful assistant.
    """

    if text == "message_loyality":
        MSG = f"""
            Answer as an analyst would answer. Always answer in Russian Language. Придумай маркетинговую стратегию по привлечению разнорабочих на стройки. Базовая информация о приложении: Вы также можете узнать актуальную информацию о компаниях, сможете подобрать и забронировать вакансии. При ответе используй HTML таблицу..
        """

    if text == "Расчитай ":

        PROMPT = "Answer as an analyst would answer. Always answer in Russian Language. If you need, you can write HTML code with tailwind for difficult view or bootstrap for usual basics css styles, this code will be rendered for me. Do not use Markdown, LATeX, use only html and text. Always answer using HTML code."

        listOfReq = [
            f"{PROMPT} Создай таблицу HTML которая будет содержать 20 идей для маркетинговой программы и включать: номер, название, предпологаемая степень конверсии",
            f'{PROMPT} Создай список HTML из возможных кризисов для маркетинговой программы в России, Сочи. Под каждым пунктом списка добавь кнопку с белым текстом и черным фоном с данписью: Добавить в базу. У этой кнопки должен быть аргумент wire:click="$set("text", "ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ ИЗ СПИСКА НАД КНОПКОЙ")"',
            f'{PROMPT} Создай график показывающий динамику востребованности строительной работы в Сочи, Россия используя примитивы div и style. ',
        ]

        connection = mysql.connector.connect(host="localhost",
                                             database='laravel',
                                             user='sail',
                                             password='password')
        if connection.is_connected():
            for req in listOfReq:
                cursor = connection.cursor()
                insert_query = ("INSERT INTO message_jobs (message_id, request) "
                                "VALUES (%s, %s)")
                cursor.execute(insert_query, (id, req))
                connection.commit()


        table_res = llm("Answer as an analyst would answer. Always answer in Russian Language. If you need, you can write HTML code with tailwind for difficult view or bootstrap for usual basics css styles, this code will be rendered for me. Do not use Markdown, LATeX, use only html and text. Always answer using HTML code. Создай таблицу HTML которая будет содержать 20 идей для программы лояльности и включать: номер, название, предпологаемая степень конверсии")
        status = llm('Answer as an analyst would answer. Always answer in Russian Language. If you need, you can write HTML code with tailwind for difficult view or bootstrap for usual basics css styles, this code will be rendered for me. Do not use Markdown, LATeX, use only html and text. Always answer using HTML code. Создай список HTML из возможных кризисов для программы лояльности клиентам турристического приложения в России, Сочи. Под каждым пунктом списка добавь кнопку с белым текстом и черным фоном с данписью: Добавить в базу. У этой кнопки должен быть аргумент wire:click="$set("text", "ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ ИЗ СПИСКА НАД КНОПКОЙ")"')

        # res = llm(MSG)
        table_res = table_res.replace("```html", "").replace("```", "")
        status = status.replace("```html", "").replace("```", "")
        res = f"""
            <div class="flex space-x-4 w-full">
            <div class="w-2/3 p-4 rounded-2xl bg-gray-200 hover:bg-gray-300 text-black ring-1 ring-gray-500">
                {table_res}
            </div>
            <div class="w-full p-4 rounded-2xl bg-gray-200 hover:bg-gray-300 text-black ring-1 ring-gray-500">
                {status}
            </div>
            </div>
        """
        print(res)
        return res


    example = """
    Источники:
    1. www.teamengine.io
    2. www.rustygeorge.com
    3. social-gravity.com
    4. constructionexec.com

    ```html
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Маркетинговая стратегия для найма разнорабочих в строительную компанию</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100 text-gray-800">
        <div class="container mx-auto p-6">
            <h1 class="text-3xl font-bold mb-4">Маркетинговая стратегия для найма разнорабочих в строительную компанию</h1>
            <p class="mb-4">Для привлечения разнорабочих в строительную компанию необходим комплексный подход, включающий использование различных маркетинговых каналов и стратегий. Ниже приведены основные шаги для создания эффективной маркетинговой кампании.</p>
        <h2 class="text-2xl font-semibold mb-2">1. Многоканальный подход</h2>
        <p class="mb-4">Публикация вакансий на карьерных сайтах - это лишь часть стратегии. Необходимо также использовать социальные сети для продвижения вакансий, чтобы достичь более широкой аудитории, включая тех, кто может не активно искать работу, но открыт к предложениям. Создайте привлекательные объявления с изображениями и видео реальных сотрудников на рабочем месте.</p>
        <p class="mb-4"><strong>Пример:</strong> Используйте Instagram и Facebook для размещения фото и видео с текущих проектов и команд, подчёркивая преимущества работы в вашей компании, такие как гордость за выполненную работу и командный дух.</p>

        <h2 class="text-2xl font-semibold mb-2">2. Упрощение и ускорение процесса найма</h2>
        <p class="mb-4">В текущих условиях рынка важно сократить время принятия решений по найму. Если это невозможно, обеспечьте постоянную коммуникацию с кандидатами, чтобы они чувствовали себя ценными и заинтересованными.</p>

        <h2 class="text-2xl font-semibold mb-2">3. Привлекательные условия труда</h2>
        <p class="mb-4">Молодое поколение работников ценит возможность карьерного роста, внедрение новых технологий и гибкость рабочего времени. Разработайте брендовые сообщения, которые отражают эти приоритеты, и продвигайте их через все маркетинговые каналы.</p>
        <p class="mb-4"><strong>Пример:</strong> Организуйте мероприятия для сотрудников, чтобы отметить их достижения, и продемонстрируйте это в социальных сетях для привлечения новых работников.</p>

        <h2 class="text-2xl font-semibold mb-2">4. Сильный бренд и онлайн-присутствие</h2>
        <p class="mb-4">Создайте профессиональный веб-сайт и профили в социальных сетях, которые отражают ценности вашей компании и привлекают потенциальных сотрудников. Важно, чтобы информация о компании, её миссии и преимуществах была представлена наглядно и убедительно.</p>
        <p class="mb-4"><strong>Пример:</strong> Инвестируйте в качественные элементы брендинга, такие как логотип, визуально привлекательный веб-сайт и высококачественные маркетинговые материалы.</p>

        <h2 class="text-2xl font-semibold mb-2">5. Внутренняя культура и признание сотрудников</h2>
        <p class="mb-4">Регулярное признание достижений сотрудников, включая временных работников, поможет улучшить их вовлеченность и удержание. Проводите мероприятия, на которых отмечаете успехи команды, и делитесь этими моментами в интернете.</p>
        <p class="mb-4"><strong>Пример:</strong> Вручайте сотрудникам подарочные карты с логотипом компании за соблюдение норм безопасности и выдающиеся достижения.</p>

        <h2 class="text-2xl font-semibold mb-2">6. Постоянная оценка и оптимизация маркетинговых усилий</h2>
        <p class="mb-4">Регулярно анализируйте эффективность маркетинговых кампаний с помощью инструментов аналитики, таких как Google Analytics, чтобы выявить, что работает, а что требует улучшений. Корректируйте стратегии на основе полученных данных.</p>

        <h2 class="text-2xl font-semibold mb-2">Таблица показателей</h2>
        <table class="min-w-full bg-white border border-gray-200">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">Показатель</th>
                    <th class="py-2 px-4 border-b">Описание</th>
                    <th class="py-2 px-4 border-b">Цветовая индикация</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-green-100">
                    <td class="py-2 px-4 border-b">Время найма</td>
                    <td class="py-2 px-4 border-b">Оптимальное время от публикации вакансии до найма</td>
                    <td class="py-2 px-4 border-b">Зеленый</td>
                </tr>
                <tr class="bg-yellow-100">
                    <td class="py-2 px-4 border-b">Удовлетворенность сотрудников</td>
                    <td class="py-2 px-4 border-b">Процент сотрудников, удовлетворенных условиями труда</td>
                    <td class="py-2 px-4 border-b">Желтый</td>
                </tr>
                <tr class="bg-red-100">
                    <td class="py-2 px-4 border-b">Текучесть кадров</td>
                    <td class="py-2 px-4 border-b">Процент сотрудников, покинувших компанию</td>
                    <td class="py-2 px-4 border-b">Красный</td>
                </tr>
            </tbody>
        </table>

        <p class="mt-4">Эти шаги помогут создать эффективную маркетинговую стратегию для привлечения и удержания разнорабочих в строительной компании, обеспечивая долгосрочный успех и стабильное развитие бизнеса.</p>
    </div>
    </body>
    </html>
    ```
        """

    MSG = f"{MSG}. Example: {example}"

    res = llm(MSG)
    return res



def chatName(text):
    MSG = f"""
        Write short name for chat where message is: {text}
    """
    llm: LLM = G4FLLM(
        model=models.gpt_35_turbo,
        # provider=Provider.Aichat,
    )
    res = llm(MSG)
    res = res.replace("```html", "").replace("```", "")
    print(res)
    return res

def getDBData():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(host='localhost',
                                             database='laravel',
                                             user='sail',
                                             password='password')
        if connection.is_connected():
            cursor = connection.cursor()
            print("Connected to MySQL database")  # Добавлено для логирования

            # Select the first item with is_processed=False and is_sended=False
            query = ("SELECT id, chat_id, text FROM messages "
                     "WHERE is_done = False AND is_send_to_processing = False "
                     "LIMIT 1")
            cursor.execute(query)

            # Fetch one record
            record = cursor.fetchone()
            print(f"Fetched record: {record}")

            if record:
                id, chat_id, text = record

                update_query = ("UPDATE messages SET is_send_to_processing = True "
                                "WHERE text = %s")
                cursor.execute(update_query, (text,))
                connection.commit()

                answer = ProcessTextDB(text, id)

                update_query = ("UPDATE messages SET is_done = True "
                                "WHERE text = %s")
                cursor.execute(update_query, (text,))
                connection.commit()

                insert_query = ("INSERT INTO messages (chat_id, text, actor, is_done, is_send_to_processing) "
                                "VALUES (%s, %s, 'ai', True, True)")
                cursor.execute(insert_query, (chat_id, answer))
                connection.commit()

            else:
                print("No items to process.")

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

def main():

    while(True):
        getDBData()
        time.sleep(5)


if __name__ == "__main__":
    main()
