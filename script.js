// script.js

const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active'); // 햄버거 버튼에 active 클래스 추가/제거
    menu.classList.toggle('active'); // 메뉴 표시/숨김
});
