onload = _ => {
    if (!navigator.platform.toLowerCase().startsWith('win')) {
        document.getElementsByTagName('a')[0].href = '';
        document.querySelector('[download]').classList.add('nw');
    }
}