//btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

//HTML要素がクリックされた時にイベント処理を実行する
addBtn.addEventListener('click', () => {
    //2秒の待時間を設定し、非同期処理を実行する
    setTimeout(() => {
        //textのコメント更新する
        text.textContent = `ボタンをクリックしました`;
    }, 2000);
});