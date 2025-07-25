import IntlMessages from '@crema/utility/IntlMessages';
import {Link} from 'react-router-dom';

export const lettersmn = [
  {label: 'А', value: 'А'},
  {label: 'Б', value: 'Б'},
  {label: 'В', value: 'В'},
  {label: 'Г', value: 'Г'},
  {label: 'Д', value: 'Д'},
  {label: 'Е', value: 'Е'},
  {label: 'Ё', value: 'Ё'},
  {label: 'Ж', value: 'Ж'},
  {label: 'З', value: 'З'},
  {label: 'И', value: 'И'},
  {label: 'Й', value: 'Й'},
  {label: 'К', value: 'К'},
  {label: 'Л', value: 'Л'},
  {label: 'М', value: 'М'},
  {label: 'Н', value: 'Н'},
  {label: 'О', value: 'О'},
  {label: 'Ө', value: 'Ө'},
  {label: 'П', value: 'П'},
  {label: 'Р', value: 'Р'},
  {label: 'С', value: 'С'},
  {label: 'Т', value: 'Т'},
  {label: 'У', value: 'У'},
  {label: 'Ү', value: 'Ү'},
  {label: 'Ф', value: 'Ф'},
  {label: 'Х', value: 'Х'},
  {label: 'Ц', value: 'Ц'},
  {label: 'Ч', value: 'Ч'},
  {label: 'Ш', value: 'Ш'},
  {label: 'Щ', value: 'Щ'},
  {label: 'Ъ', value: 'Ъ'},
  {label: 'Ы', value: 'Ы'},
  {label: 'Ь', value: 'Ь'},
  {label: 'Э', value: 'Э'},
  {label: 'Ю', value: 'Ю'},
  {label: 'Я', value: 'Я'},
];

export const banks = [
  {label: 'Хаан Банк', value: 'khaan'},
  {label: 'Хас Банк', value: 'xac'},
  {label: 'Голомт Банк', value: 'golomt'},
  {label: 'Худалдаа Хөгжлийн Банк', value: 'tdb'},
  {label: 'Төрийн Банк', value: 'tur'},
  {label: 'Капитрон Банк', value: 'capitron'},
  {label: 'Ариг Банк', value: 'arig'},
  {label: 'Богд Банк', value: 'bogd'},
  {label: 'М Банк', value: 'm'},
];

export const citizens = [
  {label: 'Аав', value: 1},
  {label: 'Ээж', value: 2},
  {label: 'Эхнэр', value: 3},
  {label: 'Нөхөр', value: 4},
  {label: 'Ах', value: 5},
  {label: 'Эгч', value: 6},
  {label: 'Дүү', value: 7},
  {label: 'Охин', value: 8},
  {label: 'Хүү', value: 9},
  {label: 'Ач', value: 10},
  {label: 'Зээ', value: 11},
  {label: 'Найз', value: 12},
  {label: 'Бусад', value: 13},
];

export const releaseTypes = [
  {label: 'Дууны шүлэг/Songwriter', value: 'songwriter'},
  {label: 'Поп/Pop', value: 'pop'},
  {label: 'R&B/Hip Hop', value: 'hiphop'},
  {label: 'Реп/Rap', value: 'rap'},
  {label: 'Регги/Reggae', value: 'reggae'},
  {label: 'Рок/Rock', value: 'rock'},
  {label: 'Блюз/Blues', value: 'blues'},
  {label: 'Жазз/Jazz', value: 'jazz'},
  {label: 'Зохиолын дуу/Folk', value: 'folk'},
  {label: 'Хүүхдийн дуу/Children’s song', value: 'children-song'},
  {label: 'Дуурь/Opera', value: 'opera'},
  {label: 'Симфони, Найрал хөгжим/Symphonic, Choral', value: 'symphonic'},
  {label: 'Бүжиг, Электроник/Dance,Electronic', value: 'dance'},
  {label: 'Киноны хөгжим/Film', value: 'film'},
  {label: 'Сонат/Sonat', value: 'sonat'},
  {label: 'Театрын хөгжим, Кабаре /Musical Theater,Cabaret', value: 'musical'},
  {label: 'Коунтри/Country', value: 'country'},
];

export const menus = [
  {
    key: 1,
    label: (
      <Link to={'/about'}>
        <IntlMessages id='home.navbar.about' />
      </Link>
    ),
    children: [
      {
        key: 11,
        label: <Link to={'/about/managment'}>Удирдлагын баг</Link>,
      },
      {
        key: 11,
        label: <Link to={'/about/relation'}>Гадаад харилцаа</Link>,
      },
      {
        key: 12,
        label: <Link to={'/about/history'}>Түүхэн замнал</Link>,
      },
    ],
  },
  {
    key: 2,
    label: (
      <Link to={'/artists'}>
        <IntlMessages id='home.navbar.artists' />
      </Link>
    ),
  },
  {
    key: 3,
    label: (
      <Link to={'/music-users'}>
        <IntlMessages id='home.navbar.music-users' />
      </Link>
    ),
  },
  {
    key: 4,
    label: (
      <Link to={'/repertory'}>
        <IntlMessages id='home.navbar.repertory' />
      </Link>
    ),
  },
];
// {
//   key: 4,
//   label: (
//     <Link to={'/news'}>
//       <IntlMessages id='home.navbar.news' />
//     </Link>
//   ),
// },
// {
//   key: 5,
//   label: (
//     <Link to={'/contact'}>
//       <IntlMessages id='home.navbar.contact' />
//     </Link>
//   ),
// },
export const footerMenus = [
  {
    key: 1,
    label: (
      <Link to={'/about'}>
        <IntlMessages id='home.navbar.about' />
      </Link>
    ),
    children: [
      {
        key: 11,
        label: (
          <Link to={'/about/managment'}>
            <IntlMessages id='common.footer.management' />
          </Link>
        ),
      },
      {
        key: 11,
        label: (
          <Link to={'/about/relation'}>
            <IntlMessages id='common.footer.relation' />
          </Link>
        ),
      },
      {
        key: 12,
        label: (
          <Link to={'/about/history'}>
            <IntlMessages id='common.footer.history' />
          </Link>
        ),
      },
    ],
  },
  {
    key: 2,
    label: <IntlMessages id='common.footer.users' />,
    children: [
      {
        key: 2.1,
        label: (
          <Link to={'/artists'}>
            <IntlMessages id='home.navbar.artists' />
          </Link>
        ),
      },
      {
        key: 2.2,
        label: (
          <Link to={'/music-users'}>
            <IntlMessages id='home.navbar.music-users' />
          </Link>
        ),
      },
    ],
  },
  {
    key: 4,
    label: (
      <Link to={'/news'}>
        <IntlMessages id='home.navbar.news' />
      </Link>
    ),
  },
  {
    key: 5,
    label: (
      <Link to={'/contact'}>
        <IntlMessages id='home.navbar.contact' />
      </Link>
    ),
    children: [
      {
        key: 5.1,
        label: (
          <a>
            <IntlMessages id='common.footer.phone' />: (+976) 9505 4846
          </a>
        ),
      },
      {
        key: 5.2,
        label: (
          <a>
            <IntlMessages id='common.footer.email' />: info@moscap.mn
          </a>
        ),
      },
      // {
      //   key: 5.3,
      //   label: (
      //     <a>
      //       <IntlMessages id='common.footer.address' />: Улаанбаатар хот,
      //       Хан-Уул дүүрэг, Академи хотхон-2, 31-1
      //     </a>
      //   ),
      // },
    ],
  },
];

export const prefixPhone = [
  {label: '+976', value: '+976'},
  {label: '+1', value: '+1'},
];
