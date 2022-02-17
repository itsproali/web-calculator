document.getElementById('buttons').addEventListener('click', function (even) {
    const myInput = even.target.innerText;
    const previousItem = document.getElementById('preview');
    previousItem.innerText = Number(previousItem.innerText) + Number(myInput);
    console.log(previousItem.innerText);
});
document.getElementById('equal').addEventListener('click', function () {
    document.getElementById('preview').value = '';
})