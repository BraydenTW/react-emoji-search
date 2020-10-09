function getEmojiData(){
  fetch('https://emoji-api.com/emojis?access_key=442b158ec38f1ba82c2c60742b12b7f8c456ef1c').then(res => res.json()).then(data => (return data))
}
