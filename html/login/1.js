<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn">新歌速递</button>
    <ul id="ul">

    </ul>
    <script>
        const btn = document.getElementById('btn')
        btn.addEventListener('click',()=>{
            fetch('http://u.ronki.moe:3000/top/song?type=96')
            .then(data=>data.json())
            .then(res=>{
                console.log(res);
            })
            
        })
    </script>
</body>
</html>