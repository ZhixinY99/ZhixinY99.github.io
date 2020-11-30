
document.getElementById("date1").onclick = function() {
    let sample1 = document.getElementsByClassName("sample_img1");
    for (let i = 0; i < sample1.length; i++) {
        sample1[i].style.display = "block";
}
}

document.getElementById("date2").onclick = function() {
    let sample2 = document.getElementsByClassName("sample_img2");
    for (let i = 0; i < sample2.length; i++) {
        sample2[i].style.display = "block";
}
}
