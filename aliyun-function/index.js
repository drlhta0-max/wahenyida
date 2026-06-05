/**
 * 阿里云函数计算 - 网站留言表单处理
 *
 * 部署方式：
 * 1. 阿里云控制台 → 函数计算 → 创建函数 → HTTP 函数 → Node.js 16+
 * 2. 把本文件代码粘贴进去
 * 3. 配置环境变量：
 *    SMTP_HOST      = smtpdm.aliyuncs.com  (阿里云邮件推送)
 *    SMTP_PORT      = 465
 *    SMTP_USER      = 你的发信地址
 *    SMTP_PASS      = 你的SMTP密码
 *    NOTIFY_EMAIL   = 接收通知的邮箱 (如 sales@wahenyida.com)
 * 4. 部署后会得到一个 HTTP 触发器地址
 * 5. 把 contact.html 里的表单 action 改成这个地址
 */

const nodemailer = require('nodemailer');

// 防垃圾：只允许 POST
exports.handler = async (req, resp, context) => {
    // CORS 允许跨域
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    resp.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // OPTIONS 预检请求直接返回
    if (req.method === 'OPTIONS') {
        resp.statusCode = 200;
        resp.send('');
        return;
    }

    // 只接受 POST
    if (req.method !== 'POST') {
        resp.statusCode = 405;
        resp.setHeader('Content-Type', 'application/json');
        resp.send(JSON.stringify({ success: false, message: '只支持 POST 请求' }));
        return;
    }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        const { name, phone, email, company, type, message } = body;

        // 简单校验
        if (!name || !phone || !message) {
            resp.statusCode = 400;
            resp.setHeader('Content-Type', 'application/json');
            resp.send(JSON.stringify({ success: false, message: '请填写必填项：姓名、电话、留言内容' }));
            return;
        }

        // 构造邮件内容
        const mailContent = `
新留言通知
====================
姓名：${name}
电话：${phone}
邮箱：${email || '未填写'}
公司：${company || '未填写'}
类型：${type || '未选择'}
时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}

留言内容：
${message}
        `;

        // 使用阿里云邮件推送发送
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtpdm.aliyuncs.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.NOTIFY_EMAIL,
            subject: `[网站留言] 来自 ${name} (${phone})`,
            text: mailContent
        });

        // 返回成功
        resp.statusCode = 200;
        resp.setHeader('Content-Type', 'application/json; charset=utf-8');
        resp.send(JSON.stringify({ success: true, message: '留言提交成功，我们会尽快与您联系！' }));

    } catch (err) {
        console.error('表单处理失败:', err);
        resp.statusCode = 500;
        resp.setHeader('Content-Type', 'application/json; charset=utf-8');
        resp.send(JSON.stringify({ success: false, message: '提交失败，请稍后重试或直接联系我们。' }));
    }
};
