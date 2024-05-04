//btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

//HTML要素がクリックされた時にイベント処理を実行する
addBtn.addEventListener('click', () => {
    //textのコメント更新する
    text.textContent = `ボタンをクリックしました`;
});