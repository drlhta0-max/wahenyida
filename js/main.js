/**
 * 四川科技 - 主脚本
 */
document.addEventListener('DOMContentLoaded', function() {

    // 移动端导航
    var navToggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('open');
        });
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
                nav.classList.remove('open');
            }
        });
    }

    // 下拉菜单 - 桌面hover，移动端click切换
    var dropdowns = document.querySelectorAll('.nav .dropdown > a');
    dropdowns.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                var parent = this.parentElement;
                var wasOpen = parent.classList.contains('open');
                document.querySelectorAll('.nav .dropdown.open').forEach(function(d) {
                    d.classList.remove('open');
                });
                if (!wasOpen) parent.classList.add('open');
            }
        });
    });

    // 点击页面其他地方关闭所有dropdown
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav .dropdown')) {
            document.querySelectorAll('.nav .dropdown.open').forEach(function(d) {
                d.classList.remove('open');
            });
        }
    });

    // 点击下拉菜单项后关闭
    document.querySelectorAll('.nav .dropdown-menu a').forEach(function(item) {
        item.addEventListener('click', function() {
            this.closest('.dropdown').classList.remove('open');
            if (window.innerWidth <= 768) nav.classList.remove('open');
        });
    });

    // 返回顶部
    var btn = document.getElementById('scrollTopBtn');
    if (btn) {
        window.addEventListener('scroll', function() {
            btn.style.display = window.scrollY > 400 ? 'block' : 'none';
        });
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
