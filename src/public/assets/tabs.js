function tabs(props = {}) {
    if (typeof props !== 'object') {
        throw new Error('props must be an object');
    }

    const defaultProps = {
        btn: '.js-tab-btn',
        content: '.js-tab-content',
        btnText: '.js-text'
    }

    let activeTabIndex = null;
    let originalTitles = [];

    const { btn, content, btnText } = { ...defaultProps, ...props };
    const [buttonsElem, contentsElem] = [btn, content].map(selector => document.querySelectorAll(selector));

    const activeTab = (btnElement, contentElement, i) => {

        // Check if the same tab is clicked again
        if (i === activeTabIndex) {
            // Restore the original title
            btn.innerHTML = originalTitles[i];
        } else {
            // Change the title
            btn.innerHTML = 'New Title';
        }

        buttonsElem.forEach(btn => btn.classList.remove('active'));
        contentsElem.forEach(content => content.classList.add('hidden'));

        btnElement.classList.add('active');
        contentElement.classList.remove('hidden');

        let titles = btnElement.querySelectorAll(btnText);
        let copyTitle = [...titles];
        copyTitle[0].textContent = 'Наши';
        copyTitle[1].textContent = 'услуги';
    }

    buttonsElem.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            activeTab(btn, contentsElem[i + 1], i);
            activeTabIndex = i;
        })
    })
}

tabs();
