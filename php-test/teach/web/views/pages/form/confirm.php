<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <p>確認画面</p>
    <p>名前：<?php echo $name; ?></p>
    <p>よろしいですか？</p>
    <form action="/" method="POST">
        <input type="hidden" name="name" value="<?php echo $name;?>">
        <button type="submit" name="btn" value="complete">完了</button>
    </form>
</body>
</html>
