const email = document.getElementById('user')
const mima = document.getElementById('secret')
const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    if(email.value =='' || mima.value == ''){
        alert('请输入')
    }
    else{
        fetch(`http://192.168.31.45:3000/login?username=${email.value}&password=${mima.value}`)
        .then(data =>data.json())
        .then(res => {
            if(res.code==0){
                alert(res.message)
            }
            else alert(res.massage)
        })
    }

    let a = document.createElement('div')
    a.innerHTML = ``
})