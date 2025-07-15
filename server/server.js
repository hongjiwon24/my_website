const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const https = require('https');
const fs = require('fs');

const app = express();

// ✅ CORS 설정
const corsOptions = {
  origin: 'https://localhost:5173', // HTTPS 주소로 바꿈
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// ✅ nodemailer 설정
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'wldnjsthsu1@gmail.com',
    pass: 'mlafhftfibvfkpxu',
  },
});

// ✅ 인증번호 저장
const authCodes = {};

app.post('/api/send-code', async (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  authCodes[email] = code;

  try {
    await transporter.sendMail({
      from: '"인증 시스템" <wldnjsthsu1@gmail.com>',
      to: email,
      subject: '인증번호',
      text: `인증번호는 ${code} 입니다.`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('메일 전송 실패:', err);
    res.status(500).json({ success: false });
  }
});

app.post('/api/verify-code', (req, res) => {
  const { email, code } = req.body;
  if (authCodes[email] === code) {
    delete authCodes[email];
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: '인증번호 불일치' });
  }
});

app.post('/api/send-mail', async (req, res) => {
  const { name, company, email, subject, message } = req.body;
  console.log('📩 인증 메일 요청 도착!', email); 

  const mailOptions = {
    from: '"웹사이트 문의" <wldnjsthsu1@gmail.com>',
    to: 'wldnjsthsu1@gmail.com',
    subject: `[개인 포트폴리오 웹사이트 문의 메일입니다] ${subject}`,
    html: `
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>소속:</strong> ${company}</p>
      <p><strong>답장 받을 이메일:</strong> ${email}</p>
      <p><strong>내용:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error('메일 전송 실패:', err);
    res.status(500).json({ success: false });
  }
});

// ✅ HTTPS 서버 실행
const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

https.createServer(options, app).listen(5000, () => {
  console.log('✅ HTTPS 서버 실행 중: https://localhost:5000');
});
