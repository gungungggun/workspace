<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="/css/style.css" rel="stylesheet"/>
</head>
<body>
    <?php include(VIEW_ROOT . 'commons/header.php'); ?>

    <?php if ($errorMessage != ''): ?>
    <p class="test"><?php echo $errorMessage; ?></p>
    <?php endif; ?>
    <p>お名前、メールアドレスを入力してください</p>
    <form action="/" method="POST">
        <label>お名前</label>
        <input type="text" name="name" value="<?php echo $name; ?>">
        <label>メールアドレス</label>
        <input type="text" name="email" value="<?php echo $email; ?>">
        <button type="submit">登録</button>
    </form>
</body>
</html>
