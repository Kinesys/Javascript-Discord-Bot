//Javascript 플레이어가 보낸 메세지 확인하기
const Discord = require('discord.js'); //discord.js를 불러옴
const client = new Discord.Client(); //새로운 디스코드 클라이언트 생성

client.on('message', message => {
    console.log(message.content);
});
client.login('토큰값 입력');  //토큰값에 봇의 토큰값 입력
