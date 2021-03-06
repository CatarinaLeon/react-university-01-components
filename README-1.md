## Создание компонентов (без стилизации)

### Задача №1

Разбить
[макет](<https://www.figma.com/file/mfsNEI7Nv5i5fkdseWbFn7/Lesson-(Copy)?node-id=8701%3A11194>)
на компоненты

**Например**

```jsx
<Sidebar>
<Menu>
<MenuItem>
<Main>
<Paper>
<Card>
<TutorsList>
<Tutor>
<CitiesList>
<City>
<DepartmentsList>
<Department>
```

### Задача №2

Создать файл menu.js где будет массив для отрисовки менюшки

```jsx
export const menuConfig = [
  {
    name: 'Университет',
  },

  {
    name: 'Факультеты',
  },
];
```

Отрисовать меню в сайдбаре исполюзуя `menuConfig` и показать работу с `props` и
`key`

![Меню](../images/sidebar.png)

### Задача №3

Создать компонент ` <Paper>` - компонент с белым фоном и отступами который
использует `props.children` и рендерит любую разметку которую ему передадут

![Paper](../images/paper.png)

### Задача №4

Отрисовать компонент карточки и описания используя ` <Paper>` и показать как
импрортировать изображения в компонент

Карточка

![Card](../images/Card.png)

Описание

![description](../images/description.png)

### Задача №5

Отрисовать колекции преподавателей, городов, факультетов используя этот json

```json
{
  "name": "MIT",
  "description": "Опыт, концентрат знаний и возможность избежать большинство ошибок при приеме на работу. Мы знаем, что хотят большинство локальных и иностранных компаний и можем вам это дать. А еще мы постоянно совершенствуем наши курсы программирования, добавляя туда что-то новое. Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы убедиться в эффективности нашей методики обучения. Да, мы начнем с азов и самой простой информации. Знаем, что большинство людей приходят к нам с нулевыми знаниями. ",
  "tutors": [
    {
      "firstName": "Мария",
      "lastName": "Руденко",
      "patronymic": "Александровна",
      "phone": "+38(097) 448 73 11",
      "email": "rudenko.mail@gmail.com",
      "city": "Полтава",
      "options": "Создание групп"
    },
    {
      "firstName": "Елена",
      "lastName": "Иванова",
      "patronymic": "Александровна",
      "phone": "+38(093) 443 43 51",
      "email": "ivanova.mail@gmail.com",
      "city": "Берлин",
      "options": "Создание групп, редактировани профилей преподавателей"
    }
  ],
  "cities": ["Киев", "Лондон", "Берлин"],
  "department": [
    { "name": "Факультет информатики и выычислительной техники" },
    { "name": "Факультет искуственого интелекта" },
    { "name": "Факультет аналитики" }
  ]
}
```

![collection](../images/collection.png)

### Задача №6

Создать универсальный компонент кнопки у которого будет 3 пропса `text`, `icon`
и `onClick`(в будущем)

![button](../images/button.png)

### Задача №7

Сделать описание проgсов внутри всех компонентов используя `propTypes`
