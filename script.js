const fileInput = document.querySelector('input'),
filbtn = document.querySelector('button');

filbtn.addEventListener('click', e => {
    e.preventDefault();
    filbtn.innerText= "dowloading file.....";
    fetchFile(fileInput.value)
})

function fetchFile(ulr){
    fetch(ulr).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file)

        let aTag = document.createElement("a")
        aTag.href = tempUrl;
        aTag.download = ulr.replace(/^.*[\\\/]/, '');

        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        filbtn.innerText = "dowload file"
    }).catch(() => {
         filbtn.innerText = "dowload file"
        alert("maaf gagal")
    })
}

