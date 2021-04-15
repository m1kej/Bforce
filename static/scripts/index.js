onload = _ => {
    if (!navigator.platform.toLowerCase().startsWith('win')) {
        document.getElementsByTagName('a')[0].href = '';
        let d = document.querySelector('[download]')
        d.outerHTML = `<span class="nw">${d.innerHTML}</span>`
    }
}