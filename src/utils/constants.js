export const strings = {
  most_popular: 'Most popular',
  public: 'Public',
  adult: 'Adult',
  account: 'Account',
  duration: 'Duration',
  genre: 'Genre',
  language: 'Language',
  synopsis: 'Synopsis',
  read_more: 'Read more',
  main_cast: 'Main cast',
  main_technical_team: 'Main technical team',
};

export const getFilterGenreName = (arr, id) => {
  const genreName = arr?.filter(genre => id?.includes(genre.id));
  return genreName?.map(genre => genre.name);
};

export const covertedRuntime = value => {
  return value % 60 === 0
    ? `${value / 60}h`
    : `${Math.floor(value / 60)}h ${value % 60}m`;
};

export const arrangement = (arr, item, index) => {
  return index === arr.length - 1 ? item : item + ' / ';
};

export const truncateName = (name, value) => {
  if (name.length > value) {
    return name.slice(0, value) + '...';
  } else {
    return name;
  }
};
