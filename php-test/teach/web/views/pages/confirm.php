<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <p>確認画面</p>
    <p>名前：<?php echo $name; ?></p>
    <p>メールアドレス：<?php echo $email; ?></p>
    <p>よろしいですか？</p>
    <form action="/" method="POST">
        <input type="hidden" name="name" value="<?php echo $name;?>">
        <input type="hidden" name="email" value="<?php echo $email;?>">
        <button type="submit" name="btn" value="complete">完了</button>
    </form>
</body>
</html>
