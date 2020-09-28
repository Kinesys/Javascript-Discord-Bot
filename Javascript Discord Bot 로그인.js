//Javascript Discord Bot 로그인
const Discord = require('discord.js'); //discord.js 불러오기
const client = new Discord.Client(); // 신규 디스코드 클라이언틀 생성

// 클라이언트가 준비되었다면 아래 코드 실행

client.once('ready', () => {
    console.log("사용자의 디스코드 봇이 준비됨");
});

client.login('토큰값'); //토큰값에 디스코드 봇의 토큰값 넣기

