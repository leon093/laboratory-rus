function tabs(props = {}) {
    if (typeof props !== "object") {
        throw new Error("props must be an object");
    }

    const defaultProps = {
        btn: ".js-tab-btn",
        content: ".js-tab-content",
        btnText: ".js-text",
    };

    const { btn, content, btnText } = { ...defaultProps, ...props };
    const [buttonsElem, contentsElem, btnsTextElem] = [btn, content, btnText].map((selector) => document.querySelectorAll(selector));

    let activeTabIndex = null;
    let titleWords = Array.from(btnsTextElem, elem => elem.textContent);
    let titles = titleWords.reduce((acc, val, i) => {
        i % 2 === 0 ? acc.push([val]) : acc[acc.length - 1].push(val)
        return acc;
    }, []);

    const activeTab = (btnElement, contentElement, i) => {
        buttonsElem.forEach((btn) => btn.classList.remove("active"));
        contentsElem.forEach((content) => content.classList.add("hidden"));
        btnsTextElem.forEach((elem, i) => elem.textContent = titleWords[i]);

        btnElement.classList.add("active");
        contentElement.classList.remove("hidden");
        let titleTextElems = btnElement.querySelectorAll(btnText);
        let titleTextServices = ['Наши', 'услуги'];

        if (titleTextElems.length >= 2) {
            titleTextElems.forEach((elem, i) => elem.textContent = titleTextServices[i])
        } else {
            titleTextElems[0].textContent = titleTextServices.join(' ');
        }

        if (i === activeTabIndex) {
            clickCount++

            if (clickCount === 2) {
                contentElement.classList.remove("hidden");
                clickCount = 0
            } else {
                titleTextElems.forEach((elem, elemIndex) => elem.textContent = titles[i][elemIndex])
                contentsElem.forEach((content) => content.classList.add("hidden"));
                contentsElem[0].classList.remove('hidden');
            }
        } else {
            clickCount = 0
        }
    };

    buttonsElem.forEach((btn, i) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            activeTab(btn, contentsElem[i + 1], i);
            activeTabIndex = i;
        });
    });
 }

 tabs();
