// 페이지가 로드될 때 음악 상태 설정
window.addEventListener('load', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');

    // localStorage에서 음악 상태를 가져옴
    if (localStorage.getItem('musicEnabled') === 'false') {
        backgroundMusic.pause(); // 음악 일시 정지
        document.getElementById('musicToggle').checked = false; // 토글 상태 업데이트
    } else {
        backgroundMusic.play(); // 음악 재생
    }
});

// 하트 버튼 클릭 이벤트
const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');
const heartIcon = document.getElementById('heartIcon');

toggleButton.addEventListener('click', () => {
    // 하트 아이콘 변경 및 애니메이션 효과
    if (heartIcon.src.includes('heart-solid.svg')) {
        heartIcon.src = 'heart-pulse-solid.svg'; // 클릭 시 하트 아이콘 변경
        heartIcon.style.transform = 'scale(1.2)'; // 클릭 시 하트 크기 증가
        setTimeout(() => {
            heartIcon.style.transform = 'scale(1)'; // 원래 크기로 돌아오기
        }, 300); // 300ms 후 원래 크기로 돌아옴
    } else {
        heartIcon.src = 'heart-solid.svg'; // 다시 원래 하트 아이콘으로 변경
    }

    // 메뉴 토글
    menu.classList.toggle('active'); // 메뉴 활성화/비활성화
});

// 음악 토글 기능
const musicToggle = document.getElementById('musicToggle');
musicToggle.addEventListener('change', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (musicToggle.checked) {
        backgroundMusic.play(); // 음악 재생
        localStorage.setItem('musicEnabled', 'true'); // 상태 저장
    } else {
        backgroundMusic.pause(); // 음악 일시 정지
        localStorage.setItem('musicEnabled', 'false'); // 상태 저장
    }
});




const typingText = document.getElementById('typingText');
const text = typingText.innerHTML.replace(/\\n/g, '\n'); // 원래 텍스트 가져오기, \n을 실제 줄바꿈으로 변환
typingText.innerHTML = ''; // 초기화
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index); // 하나의 문자 추가

        // 줄바꿈 처리
        if (text.charAt(index) === '\n') {
            typingText.innerHTML += '<br>'; // 줄바꿈 시 <br> 추가
        }

        index++;
        setTimeout(type, 100); // 100ms 후 다음 문자 타이핑
    }
}

// 페이지 로드 시 타이핑 시작
window.addEventListener('load', type);
