import SongActions from './SongActions';

const SongsColumns = [
  {
    title: 'Бүтээлийн дугаар',
    dataIndex: 'song_code',
    key: 'song_code',
  },
  {
    title: 'Бүтээлийн нэр',
    dataIndex: 'origin_name',
    key: 'origin_name',
  },
  {
    title: 'Уран бүтээлч',
    key: 'writers',
    render: (item) => {
      let composer_fname = item?.composer?.user?.first_name;
      let composer_lname = item?.composer?.user?.last_name;
      let author_fname = item?.author?.user?.first_name;
      let author_lname = item?.author?.user?.last_name;
      let names = '';
      //composer
      if (composer_fname && composer_fname != null) {
        composer_fname = composer_fname.substring(0, 1).toUpperCase();
      }
      if (composer_lname && composer_lname != null) {
        composer_lname =
          composer_lname.substring(0, 1).toUpperCase() +
          composer_lname.substring(1, composer_lname.length);
      }
      //author
      if (author_fname && author_fname != null) {
        author_fname = author_fname.substring(0, 1).toUpperCase();
      }
      if (author_lname && author_lname != null) {
        author_lname =
          author_lname.substring(0, 1).toUpperCase() +
          author_lname.substring(1, author_lname.length);
      }
      if (composer_fname != null || composer_lname != null)
        names += `${composer_fname}.${composer_lname}`;
      if (author_fname != null || author_lname != null)
        if (composer_fname != null)
          names += `, ${author_fname}.${author_lname}`;
        else names += `${author_fname}.${author_lname}`;
      return names;
    },
  },
  {
    title: 'Туурвисан огноо',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: '',
    key: 'actions',
    render: (item) => <SongActions item={item} />,
  },
];

export default SongsColumns;
