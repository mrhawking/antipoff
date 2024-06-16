export const generatePrevUrl = (url: string) => {
  if (!url) return;
  //разделяем путь
  const urlArray = url.split('/');
  //удаляем первый и последний элементы
  urlArray.pop();
  urlArray.shift();
  //формируем новый URL
  const newUrl = `/${urlArray.join('/')}`;
  return newUrl;
};