const EMPTY_HEART = '🤍';
const FULL_HEART = '💖';

const CAT1 = 'https://cataas.com/cat/60b73094e04e18001194a309/says/react';
const CAT2 = 'https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn';
const CAT3 = 'https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript';

const HAMSTER1 = 'https://en.meming.world/images/en/5/5f/Scared_Hamster.jpg';
const HAMSTER2 =
  'https://i.pinimg.com/736x/f6/6a/f5/f66af5e07fed4fb306f5a6cc3c4ddf16.jpg';
const HAMSTER3 = 'https://media.bunjang.co.kr/images/crop/635932315_w320.jpg';
const HAMSTER4 =
  'https://www.meme-arsenal.com/memes/a92519f443f6875df1ca4b77c081f14a.jpg';

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = 'https://cataas.com';
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};
