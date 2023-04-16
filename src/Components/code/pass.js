const characters = (level) => {
  const character = "!#$%&/(=?)¡¿'-_[+}:{";
  for (let i = 0; i < level; i++) {
    return character.charAt(Math.floor(Math.random() * character.length));
  }
  console.log(character);
};
