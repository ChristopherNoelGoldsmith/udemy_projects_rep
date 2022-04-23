const item = document.querySelectorAll('#timeline li');

const inViewport = el => {
    const rect = el.getBoundingClientRect();
    console.log(rect);
}
inViewport(item);