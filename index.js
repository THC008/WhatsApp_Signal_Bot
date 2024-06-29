const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { exec } = require('child_process');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR code received, scan please.');
});

client.on('ready', () => {
    console.log('WhatsApp Web client is ready!');
});

client.on('message', message => {
    console.log(message.body);  // 处理接收到的消息
    // 例如，将消息发送到Signal
    const signalMessage = message.body;
    const recipientSignalNumber = "+4915202319828"; // 替换为您的朋友的Signal号码
    // 使用Python脚本发送消息
    exec(`python3 send_signal.py ${recipientSignalNumber} "${signalMessage}"`);
});

client.initialize();
