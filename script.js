
const track   = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const slides  = document.querySelectorAll('.slide');

let index = 0;
let autoSlide;

function updateSlider() {
    if (!track) return;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach(slide => slide.classList.remove('active'));
    if (slides[index]) slides[index].classList.add('active');
}

function startAutoSlide() {
    autoSlide = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlider();
    }, 3500);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        index = (index + 1) % slides.length;
        updateSlider();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
        startAutoSlide();
    });

    updateSlider();
    startAutoSlide();
}

/* ================= 2. اختيار العناصر ================= */
function selectDiamond(el) {
    const all = document.querySelectorAll(
        '#diamond-grid .group, #offer-grid .group'
    );
    all.forEach(i => {
        i.classList.remove(
            'ui-checked',
            'bg-bg-selected',
            'outline-2',
            'outline-primary-red'
        );
        i.setAttribute('aria-checked', 'false');
    });

    el.classList.add(
        'ui-checked',
        'bg-bg-selected',
        'outline-2',
        'outline-primary-red'
    );
    el.setAttribute('aria-checked', 'true');
}

/* ================= 3. تبويب شراء / استرداد ================= */
const tabs = document.querySelectorAll('#main-tabs [role="tab"]');
const buyContent = document.getElementById('buy-content');
const redeemContent = document.getElementById('redeem-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.classList.remove(
                'tab-active',
                'ui-selected',
                'bg-bg-selected',
                'text-text-selection',
                'outline-2',
                'outline-primary-red'
            );
        });

        tab.setAttribute('aria-selected', 'true');
        tab.classList.add(
            'tab-active',
            'ui-selected',
            'bg-bg-selected',
            'text-text-selection',
            'outline-2',
            'outline-primary-red'
        );

        if (tab.textContent.trim() === 'شراء') {
            if (buyContent) buyContent.style.display = 'block';
            if (redeemContent) redeemContent.style.display = 'none';
        } else {
            if (buyContent) buyContent.style.display = 'none';
            if (redeemContent) redeemContent.style.display = 'block';
        }
    });
});

