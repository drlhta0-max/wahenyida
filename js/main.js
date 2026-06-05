/**
 * 北京华恒鑫达科技发展有限公司 - 主脚本
 */
document.addEventListener('DOMContentLoaded', function() {

    // ============ 从 SITE_CONFIG 自动填充页面内容 ============
    function cfg(path) {
        return path.split('.').reduce(function(o, k) { return o ? o[k] : ''; }, SITE_CONFIG);
    }

    // 所有带 data-cfg 属性的元素自动填充文本
    document.querySelectorAll('[data-cfg]').forEach(function(el) {
        var val = cfg(el.getAttribute('data-cfg'));
        if (val !== undefined && val !== '') {
            if (Array.isArray(val)) {
                el.innerHTML = val.join('<br>');
            } else {
                el.textContent = val;
            }
        }
    });

    // 所有带 data-cfg-html 属性的元素自动填充 HTML
    document.querySelectorAll('[data-cfg-html]').forEach(function(el) {
        var val = cfg(el.getAttribute('data-cfg-html'));
        if (typeof val === 'string') {
            el.innerHTML = val;
        }
    });

    // 首页 - 关于我们简介段落
    var introPara = document.getElementById('cfg-intro-full');
    if (introPara && cfg('introFull')) {
        introPara.innerHTML = cfg('introFull').map(function(p) { return '<p>' + p + '</p>'; }).join('');
    }

    // 首页 - 统计数字
    var statsContainer = document.getElementById('cfg-stats');
    if (statsContainer && cfg('stats')) {
        cfg('stats').forEach(function(s) {
            var div = document.createElement('div');
            div.className = 'stat-item';
            div.innerHTML = '<div class="number">' + s.number + '</div><div class="label">' + s.label + '</div>';
            statsContainer.appendChild(div);
        });
    }

    // 关于我们 - 核心价值
    var valuesContainer = document.getElementById('cfg-values');
    if (valuesContainer && cfg('values')) {
        cfg('values').forEach(function(v) {
            var div = document.createElement('div');
            div.className = 'value-card';
            div.innerHTML = '<div class="value-icon">' + v.icon + '</div><h4>' + v.title + '</h4><p>' + v.desc + '</p>';
            valuesContainer.appendChild(div);
        });
    }

    // 关于我们 - 公司信息表格
    var infoTable = document.getElementById('cfg-company-table');
    if (infoTable && cfg('company')) {
        var c = cfg('company');
        var rows = [
            ['公司全称', c.fullName],
            ['英文名称', c.enName],
            ['成立时间', c.founded],
            ['注册资本', c.capital],
            ['法定代表人', c.legalPerson],
            ['注册地址', c.regAddress],
            ['办公地址', cfg('contact').address]
        ];
        rows.forEach(function(r) {
            var tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid #eee';
            tr.innerHTML = '<td style="padding:14px 20px; color:var(--primary); font-weight:600; width:180px;">' + r[0] + '</td>' +
                '<td style="padding:14px 20px;">' + r[1] + '</td>';
            infoTable.appendChild(tr);
        });
    }

    // 联系我们 - 地图链接
    var mapLink = document.getElementById('mapLink');
    if (mapLink && cfg('mapUrl')) {
        mapLink.href = cfg('mapUrl');
    }

    // 联系我们 - 联系方式卡片
    var contactCard = document.getElementById('cfg-contact-card');
    if (contactCard && cfg('contact')) {
        var ct = cfg('contact');
        var items = [
            { icon: '📍', title: '公司地址', text: ct.address + '<br>邮编：' + ct.zip },
            { icon: '📞', title: '联系电话', text: ct.phone + '<br>' + ct.mobile },
            { icon: '📠', title: '传真', text: ct.fax },
            { icon: '📧', title: '电子邮箱', text: ct.email + '<br>' + ct.email2 },
            { icon: '👤', title: '联系人', text: ct.contactPerson },
            { icon: '🕐', title: '工作时间', text: ct.workHours }
        ];
        items.forEach(function(item) {
            var div = document.createElement('div');
            div.className = 'contact-item';
            div.innerHTML = '<div class="ci-icon">' + item.icon + '</div>' +
                '<div><h5>' + item.title + '</h5><p>' + item.text + '</p></div>';
            contactCard.appendChild(div);
        });
    }

    // 所有页面的浏览器标题
    document.title = cfg('company').fullName + (document.title.indexOf('首页') > -1 ? ' - ' + cfg('company').slogan : '');

    // ============ 移动端导航 ============
    var navToggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            var spans = navToggle.querySelectorAll('span');
            if (nav.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
                nav.classList.remove('open');
                var spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ============ 锚点平滑滚动 ============
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============ 返回顶部按钮 ============
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            scrollTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
        });
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============ 页脚年份 ============
    var yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ============ 导航高亮 ============
    var currentPath = window.location.pathname;
    document.querySelectorAll('.nav a').forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && currentPath.indexOf(href.replace(/^\//, '')) > -1) {
            link.classList.add('active');
        }
    });

    // ============ 联系表单 ============
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // 从 data/config.js 读取函数计算地址，没有则只弹提示
        var FORM_API = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.api && SITE_CONFIG.api.formUrl) || '';

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var btn = contactForm.querySelector('button[type="submit"]');
            var originalText = btn.textContent;
            btn.textContent = '提交中...';
            btn.disabled = true;

            // 收集表单数据
            var data = {
                name: (contactForm.querySelector('[name="name"]') || {}).value || '',
                phone: (contactForm.querySelector('[name="phone"]') || {}).value || '',
                email: (contactForm.querySelector('[name="email"]') || {}).value || '',
                company: (contactForm.querySelector('[name="company"]') || {}).value || '',
                type: (contactForm.querySelector('[name="type"]') || {}).value || '',
                message: (contactForm.querySelector('[name="message"]') || {}).value || ''
            };

            if (!FORM_API) {
                // 未配置API时，弹窗提示（本地可用）
                setTimeout(function() {
                    alert('您的留言已提交成功！我们会尽快与您联系。\n\nYour message has been submitted. We will contact you soon.');
                    contactForm.reset();
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 500);
                return;
            }

            // 发送到阿里云函数计算
            var xhr = new XMLHttpRequest();
            xhr.open('POST', FORM_API, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                btn.textContent = originalText;
                btn.disabled = false;
                try {
                    var result = JSON.parse(xhr.responseText);
                    alert(result.message || (result.success ? '提交成功！' : '提交失败，请稍后重试。'));
                    if (result.success) contactForm.reset();
                } catch (e) {
                    alert('提交失败，请稍后重试或直接电话联系我们。');
                }
            };
            xhr.onerror = function() {
                btn.textContent = originalText;
                btn.disabled = false;
                alert('网络错误，请稍后重试或直接电话联系我们。');
            };
            xhr.send(JSON.stringify(data));
        });
    }

    // ============ 产品侧边栏 ============
    var sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            sidebarLinks.forEach(function(l) { l.classList.remove('active'); });
            this.classList.add('active');
        });
    });

});
