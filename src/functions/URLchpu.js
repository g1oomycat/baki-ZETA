export const transliterateToLatin = (text) => {
  var transliterationDict = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  // Применяем транслитерацию и кодируем символы для ЧПУ ссылок
  var result = text.toLowerCase().replace(/[а-яё]/g, function (match) {
    return transliterationDict[match] || match;
  });
  result = result.replace(/\W+/g, "-");
  result = encodeURIComponent(result);
  return result;
};
