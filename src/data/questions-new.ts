import type { Topic } from "../utils/types";

export const topics: Topic[] = [
  {
    title: "JavaScript",
    questions: [
      { price: 100, question: "Что такое переменная в JavaScript и как её объявить?", answer: "Именованное хранилище данных, объявляется через var, let или const." },
      { price: 100, question: "Какие примитивные типы данных существуют в JavaScript?", answer: "string, number, boolean, null, undefined, symbol, bigint." },
      { price: 100, question: "Что такое оператор typeof и как его использовать?", answer: "Оператор для определения типа значения, например typeof 5 вернёт 'number'." },
      { price: 100, question: "Что вернёт typeof null?", answer: "object (историческая особенность JavaScript)." },
      { price: 100, question: "Что делает 'use strict' в JavaScript?", answer: "Включает строгий режим, который предотвращает некоторые ошибки и запрещает неявные глобальные переменные." },
      { price: 200, question: "Чем отличается let от var?", answer: "let имеет блочную область видимости, var — функциональную." },
      { price: 200, question: "Чем отличается const от let?", answer: "const создаёт константу, значение нельзя переназначить; let позволяет менять значение." },
      { price: 200, question: "Что такое массив и как проверить, что значение — массив?", answer: "Упорядоченная коллекция элементов; проверка через Array.isArray(value)." },
      { price: 200, question: "Что делает метод forEach в массиве?", answer: "Перебирает все элементы массива и выполняет функцию для каждого элемента." },
      { price: 200, question: "Что делает метод filter в массиве?", answer: "Создаёт новый массив с элементами, которые прошли проверку в функции." },
      { price: 300, question: "Что такое замыкание (closure) в JavaScript?", answer: "Функция, которая запоминает своё лексическое окружение." },
      { price: 300, question: "Что делает метод map в массиве?", answer: "Создаёт новый массив, применяя функцию к каждому элементу исходного массива." },
      { price: 300, question: "Что такое деструктуризация объектов и массивов?", answer: "Синтаксис для извлечения значений из объектов или массивов в отдельные переменные." },
      { price: 300, question: "Что такое стрелочные функции и их отличие от обычных?", answer: "Короткий синтаксис функции, не имеющей собственного this." },
      { price: 300, question: "Что такое шаблонные строки и как использовать?", answer: "Строки с интерполяцией через `${}` для вставки выражений." },
      { price: 400, question: "Что такое hoisting в JavaScript?", answer: "Поднятие объявлений переменных и функций в начало области видимости." },
      { price: 400, question: "Что делает метод reduce в массиве?", answer: "Сводит массив к одному значению, применяя аккумуляторную функцию. последовательно применяет функцию-колбэк к элементам массива " +
              "и накапливает результат в одном значении. Используется для суммирования, объединения, преобразования массивов в объекты и ид" },
      { price: 400, question: "Что такое JSON и для чего используется?", answer: "Формат обмена данными, основанный на синтаксисе JS-объектов." },
      { price: 400, question: "Что такое event loop и как он работает?", answer: "Механизм обработки асинхронных операций, событий и очередей в JS." },
      { price: 400, question: "Что такое call stack и как он связан с выполнением функций?", answer: "это стек вызовов функций в JavaScript. Он работает по принципу LIFO: " +
              "последняя вызванная функция выполняется первой. Когда функция вызывается, она добавляется в стек; когда завершается — удаляется. " +
              "Асинхронные операции сами в стеке не выполняются: они ставят колбэки в очередь, и event loop добавляет их в стек только после его освобождения." },
      { price: 500, question: "Что такое прототипное наследование?", answer: "Механизм, при котором объекты наследуют свойства и методы через __proto__ или Object.create." },
      { price: 500, question: "Что такое промис и его состояния?", answer: "Объект для асинхронных операций со статусами pending, fulfilled, rejected." },
      { price: 500, question: "Что такое async/await и как использовать?", answer: "Синтаксис для работы с промисами как с синхронным кодом." },
      { price: 500, question: "Что такое генераторы (function*) и yield?", answer: "Функции, выполнение которых можно приостанавливать через yield и возобновлять." },
      { price: 500, question: "Что такое WeakMap и WeakSet и зачем нужны?", answer: "Коллекции, хранящие объекты без предотвращения их удаления сборщиком мусора." }
    ]
  },

  {
    title: "TypeScript",
    questions: [
      { price: 100, question: "Что такое TypeScript и зачем он нужен?", answer: "Надстройка над JS с типизацией для раннего обнаружения ошибок." },
      { price: 100, question: "Как объявить переменную типа string?", answer: "let name: string;" },
      { price: 100, question: "Какие базовые типы есть в TypeScript?", answer: "string, number, boolean, null, undefined, symbol, bigint, any, unknown, void, never." },
      { price: 100, question: "Что такое any и когда его использовать?", answer: "Любой тип, отключает проверку; использовать редко." },
      { price: 100, question: "Что такое unknown и чем отличается от any?", answer: "Безопасный аналог any, требует проверки типа перед использованием." },
      { price: 200, question: "Что такое tuple и как его объявить?", answer: "Массив фиксированной длины с разными типами: let t: [string, number];" },
      { price: 200, question: "Что такое enum и как его использовать?", answer: "Перечисление именованных констант." },
      { price: 200, question: "Чем interface отличается от type?", answer: "interface предназначен в первую очередь для описания структуры объектов и классов. Поддерживает наследование (extends) и декларативное объединение.\n" +
              "type > универсален: с его помощью можно описывать не только объекты, но и объединения, пересечения, кортежи, примитивы и другие конструкции." },
      { price: 200, question: "Что такое union-тип?", answer: "Переменная может иметь один из нескольких типов." },
      { price: 200, question: "Что такое intersection-тип?", answer: "Комбинирует несколько типов в один." },
      { price: 300, question: "Что такое generics и зачем их используют?", answer: "Параметры типов для универсальных функций и классов." },
      { price: 300, question: "Что такое keyof и как его применять?", answer: "Оператор для получения ключей объекта как типов." },
      { price: 300, question: "Что такое mapped types?", answer: "Преобразование свойств типа: { [K in keyof T]: ... }" },
      { price: 300, question: "Что такое conditional types?", answer: "Типы вида T extends U ? X : Y." },
      { price: 300, question: "Что такое type assertion (as) и зачем использовать?", answer: "Приведение типа значения к другому типу." },
      { price: 400, question: "Что такое Partial и Readonly типы?", answer: "Утилитарные типы для изменения свойств объекта: Partial делает опциональными, Readonly — только для чтения." },
      { price: 400, question: "Что такое type narrowing?", answer: "Сужение типов через проверки (typeof, instanceof, проверку на null и т.п.)." },
      { price: 400, question: "Что такое never и где используется?", answer: "Тип для значений, которые никогда не происходят (ошибка или бесконечный цикл)."},
      { price: 400, question: "Что такое void и где используется?", answer: "Тип функции, не возвращающей значение."},
      { price: 400, question: "Что такое декларации ambient-модулей?", answer: "Файлы .d.ts с типами для внешних библиотек."},
      { price: 500, question: "Что такое infer в условных типах?", answer: "Ключевое слово для вывода типов внутри условных типов." },
      { price: 500, question: "Что такое utility types и примеры их использования?", answer: "Partial, Pick, Omit, Readonly, Record — позволяют менять и комбинировать свойства типов." },
      { price: 500, question: "Что такое template literal types?", answer: "Типы, формируемые через шаблонные строки, например type T = `${string}-${number}`;" },
      { price: 500, question: "Что такое declaration merging?", answer: "Объединение нескольких деклараций с одним именем, например интерфейсов." },
      { price: 500, question: "Как работает type guards?", answer: "Функции или проверки, которые сужают тип переменной." }
    ]
  },

  {
    title: "React",
    questions: [
      { price: 100, question: "Что такое компонент в React?", answer: "Функция или класс, возвращающий JSX." },
      { price: 100, question: "Что такое JSX?", answer: "Синтаксис для описания UI в виде HTML-подобного кода." },
      { price: 100, question: "Что такое props?", answer: "Входные параметры компонента." },
      { price: 100, question: "Что такое state?", answer: "Состояние компонента, влияющее на рендер." },
      { price: 100, question: "Что делает ReactDOM.render?", answer: "Метод рендеринга компонента в DOM." },
      { price: 200, question: "Что делает useState и как его использовать?", answer: "Хук для хранения и обновления состояния функционального компонента." },
      { price: 200, question: "Что делает useEffect и когда вызывается?", answer: "Хук для побочных эффектов, вызывается после рендера компонента." },
      { price: 200, question: "Что такое controlled component?", answer: "Компонент, управляющий значениями через state и props." },
      { price: 200, question: "Что такое uncontrolled component?", answer: "Компонент, который хранит состояние в DOM, а не в state. React управляет состоянием (через useState, value, onChange). → React — источник истины. Если uncontrolled, то данные хранятся в самом DOM-элементе → DOM — источник истины." },
      { price: 200, question: "Что такое key в списках и зачем нужен?", answer: "Уникальный идентификатор для оптимизации рендера списков." },
      { price: 300, question: "Что такое lifting state up?", answer: "Поднятие состояния на уровень выше для совместного использования между компонентами." },
      { price: 300, question: "Что такое React.memo?", answer: "HOC для мемоизации функциональных компонентов, предотвращает лишний рендер." },
      { price: 300, question: "Что делает useCallback?", answer: "Мемоизация функций между рендерами." },
      { price: 300, question: "Что делает useMemo?", answer: "Мемоизация вычислений между рендерами." },
      { price: 300, question: "Что делает useRef и где применяют?", answer: "useRef — это хук React, который возвращает объект с полем .current. Его используют для хранения изменяемых значений между рендерами или для доступа к DOM-элементам. Изменение .current не вызывает повторного рендера. " },
      { price: 400, question: "Что такое context API и как его использовать?", answer: "Механизм передачи данных через дерево компонентов без пропсов." },
      { price: 400, question: "Что такое virtual DOM и зачем нужен?", answer: "Копия DOM в памяти для эффективного обновления UI." },
      { price: 400, question: "Что такое reconciliation?", answer: "Алгоритм React для сравнения virtual DOM и реального DOM." },
      { price: 400, question: "Что такое Suspense и lazy-loading?", answer: "Механизм для асинхронной загрузки компонентов." },
      { price: 400, question: "Что такое server-side rendering (SSR)?", answer: "Рендеринг React на сервере перед отправкой клиенту." },
      { price: 500, question: "Что такое HOC и для чего используется?", answer: "Функция, принимающая компонент и возвращающая новый с расширенными возможностями." },
      { price: 500, question: "Что такое render props?", answer: "Техника передачи функции для рендера внутри компонента." },
      { price: 500, question: "Что такое React Fiber?", answer: "Архитектура React для асинхронного и приоритетного рендера." },
      { price: 500, question: "Что такое portals?", answer: "Механизм рендеринга дочерних компонентов вне DOM-дерева родителя." },
      { price: 500, question: "Что такое error boundaries?", answer: "Компоненты, ловящие ошибки в дереве компонентов и предотвращающие крах приложения." }
    ]
  },

  {
    title: "Redux",
    questions: [
      { price: 100, question: "Что такое Redux?", answer: "Библиотека для управления состоянием приложения." },
      { price: 100, question: "Что такое action и его структура?", answer: "Объект с обязательным type, описывающий изменение состояния." },
      { price: 100, question: "Что такое reducer?", answer: "чистая функция в Redux, которая принимает текущее состояние и action и возвращает новое состояние. " +
              "Она определяет, как изменяется Store при разных действиях. Не изменяет существующее состояние напрямую, всегда создаёт новое." },
      { price: 100, question: "Что такое store?", answer: "Центральное хранилище состояния приложения." },
      { price: 100, question: "Что делает dispatch?", answer: "Отправляет action в store для изменения состояния." },
      { price: 200, question: "Что такое middleware?", answer: "Функция, расширяющая dispatch и позволяющая выполнять побочные эффекты." },
      { price: 200, question: "Что делает combineReducers?", answer: "Объединяет несколько редьюсеров в один." },
      { price: 200, question: "Что делает subscribe в Redux?", answer: "Позволяет подписаться на изменения состояния store." },
      { price: 200, question: "Что такое selector?", answer: "Функция для выборки данных из состояния store." },
      { price: 200, question: "Что такое pure function и почему редьюсер должен быть таким?", answer: "Функция без побочных эффектов; редьюсер должен возвращать новое состояние без мутаций." },
      { price: 300, question: "Что такое immutability и зачем оно нужно в Redux?", answer: "Неприменяемость объектов; обеспечивает предсказуемость и детектирование изменений." },
      { price: 300, question: "Что такое DevTools для Redux?", answer: "Инструменты разработчика для отладки состояния приложения." },
      { price: 300, question: "Что делает bindActionCreators?", answer: "Оборачивает action creators в dispatch для удобства вызова." },
      { price: 300, question: "Что такое thunk?", answer: "Middleware для работы с асинхронным кодом." },
      { price: 300, question: "Что такое saga?", answer: "Middleware для управления побочными эффектами через генераторы." },
      { price: 400, question: "Что такое normalize state?", answer: "Приведение состояния к плоской структуре для удобства работы." },
      { price: 400, question: "Что такое reselect и зачем использовать?", answer: "Библиотека для мемоизированных селекторов." },
      { price: 400, question: "Что такое optimistic update?", answer: "Предварительное обновление UI до ответа сервера." },
      { price: 400, question: "В чём отличие Redux от Context API?", answer: "Redux масштабируемее, предоставляет DevTools и middleware, Context API проще для маленьких приложений." },
      { price: 400, question: "Что такое Flux и как он связан с Redux?", answer: "Архитектурный паттерн с однонаправленным потоком данных, на котором основан Redux." },
      { price: 500, question: "Какие альтернативы Redux существуют?", answer: "MobX, Zustand, Recoil, Jotai." },
      { price: 500, question: "Что такое middleware listener?", answer: "Позволяет реагировать на события store при изменении состояния." },
      { price: 500, question: "Что такое optimistic concurrency в Redux?", answer: "Обновление состояния с учётом возможных конфликтов с сервером." },
      { price: 500, question: "Что такое batch update?", answer: "Объединение нескольких изменений состояния в одно обновление." },
      { price: 500, question: "Что такое hydration в Redux?", answer: "Загрузка состояния на клиенте из серверного рендера." }
    ]
  },

  {
    title: "RTK",
    questions: [
      { price: 100, question: "Что такое Redux Toolkit (RTK)?", answer: "Официальный набор инструментов для упрощения работы с Redux." },
      { price: 100, question: "Что делает configureStore?", answer: "Создаёт store с правильной конфигурацией middleware и devtools." },
      { price: 100, question: "Что такое createSlice?", answer: "Функция для создания редьюсера и action creators в одном месте." },
      { price: 100, question: "Что такое createAsyncThunk?", answer: "Функция для создания асинхронных действий с автоматической обработкой pending/fulfilled/rejected." },
      { price: 100, question: "Что делает getDefaultMiddleware?", answer: "Возвращает набор middleware по умолчанию для RTK." },
      { price: 200, question: "Что такое RTK Query?", answer: "Инструмент для работы с серверными данными в Redux." },
      { price: 200, question: "Что такое endpoint в RTK Query?", answer: "Определяет метод запроса к серверу и его тип (query/mutation)."},
      { price: 200, question: "Что такое mutation в RTK Query?", answer: "Запрос на изменение данных на сервере."},
      { price: 200, question: "Что такое query в RTK Query?", answer: "Запрос на получение данных с сервера."},
      { price: 200, question: "Что делает providesTags и invalidatesTags?", answer: "Помогает управлять кешированием и обновлением данных."},
      { price: 300, question: "Что такое cache invalidation?", answer: "Механизм обновления кеша после мутаций."},
      { price: 300, question: "Что такое polling в RTK Query?", answer: "Автоматическое обновление данных через интервалы."},
      { price: 300, question: "Что такое lazy query?", answer: "Запрос, который выполняется вручную по вызову функции. Когда использовать: Поиск (например, только после клика на кнопку «Search»)\n" +
              "Ленивая подгрузка данных при определённом действии пользователя. Избежание ненужных запросов на старте"},
      { price: 300, question: "Что делает middleware listener в RTK?", answer: "Позволяет реагировать на события в store."},
      { price: 300, question: "Что такое matchers в RTK?", answer: "Позволяет обрабатывать несколько action по условию."},
      { price: 400, question: "Чем RTK отличается от классического Redux?", answer: "Упрощает конфигурацию, уменьшает шаблонный код, поддерживает Immer."},
      { price: 400, question: "Что такое optimistic update в RTK Query?", answer: "Предварительное обновление состояния до ответа сервера."},
      { price: 400, question: "Что такое transformResponse?", answer: "Позволяет изменять данные ответа перед сохранением в store."},
      { price: 400, question: "Что такое keepUnusedDataFor?", answer: "Настройка времени хранения неиспользуемых данных в кеше."},
      { price: 400, question: "Что такое refetchOnMount?", answer: "Настройка повторного запроса данных при монтировании компонента."},
      { price: 500, question: "Что такое optimistic concurrency в RTK?", answer: "Обновление состояния с учётом возможных конфликтов с сервером."},
      { price: 500, question: "Что такое invalidationTags и как они помогают?", answer: "Позволяют автоматически обновлять кеш после мутаций."},
      { price: 500, question: "Что такое createEntityAdapter?", answer: "Утилита для управления коллекциями сущностей в store."},
      { price: 500, question: "Что такое prefetch в RTK Query?", answer: "Заранее загружает данные до их фактического использования."},
      { price: 500, question: "Что такое enhancedReducers?", answer: "Редьюсеры с дополнительной логикой, например undo/redo."}
    ]
  }
];
