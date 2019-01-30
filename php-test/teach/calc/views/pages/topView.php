<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="/css/style.css" rel="stylesheet"/>
    <style>
        .display{
            width: 230px;
            height: 100px;
            background: #f0f0f0;
            padding:5px;
        }
        .display .shiki{
            text-align:right;
            height:70px;
        }
        .display .answer{
            text-align:right;
            height:30px;
            font-size:24px;
        }
        .set{
            display:flex;
        }
        .set button{
            outline: none;
            width: 60px;
            height: 60px;
            background: #111;
            color: white;
            font-size: 20px;
        }
        .set button.ope{
            background: #999;
        }
        .set button.clear{
            background: #b00;
        }
    </style>
</head>
<body>
    <div class="display">
    <div class="shiki"><?php echo $shiki; ?></div>
    <div class="answer"><?php echo $answer; ?></div>
    </div>
    <form action="/" method="POST">
        <div class="set">
            <button type="submit" name="btn" value="7">7</button>
            <button type="submit" name="btn" value="8">8</button>
            <button type="submit" name="btn" value="9">9</button>
            <button type="submit" name="btn" value="/" class="ope">/</button>
        </div>
        <div class="set">
            <button type="submit" name="btn" value="4">4</button>
            <button type="submit" name="btn" value="5">5</button>
            <button type="submit" name="btn" value="6">6</button>
            <button type="submit" name="btn" value="*" class="ope">*</button>
        </div>
        <div class="set">
            <button type="submit" name="btn" value="1">1</button>
            <button type="submit" name="btn" value="2">2</button>
            <button type="submit" name="btn" value="3">3</button>
            <button type="submit" name="btn" value="-" class="ope">-</button>
        </div>
        <div class="set">
            <button type="submit" name="btn" value="C" class="clear">C</button>
            <button type="submit" name="btn" value="0">0</button>
            <button type="submit" name="btn" value="=">=</button>
            <button type="submit" name="btn" value="+" class="ope">+</button>
        </div>
    </form>
</body>
</html>
