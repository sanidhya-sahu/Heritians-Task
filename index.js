const gendata = document.getElementsByClassName('gendata')
const detaildata = document.getElementsByClassName('detaildata')
const genforcont = document.getElementById('genforcont')
// const detailsform = document.getElementById('detailsform')
const arrow = document.getElementById('arrow')
const arrowD = document.getElementById('arrowD')

const detailsformdata = `
    <div class="line detaildata" style="height: 1px; margin-bottom: 5px;"></div>
    <label for="accountnumber" class="label font detaildata">Account Number</label>
    <input onkeypress="nextdetail()" type="text" placeholder="Enter Account Number"
    name="accountnumber" class="input font detaildata">
    <div class="grid1">
    <div class="labinpgrp">
        <label for="ispb" class="label font detaildata" id="detailslabel">ISPB</label>
        <input onkeypress="nextdetail()" type="text" placeholder="Enter ISPB" name="ispb"
            class="input font detaildata">
    </div>
    <div class="labinpgrp">
        <label for="compecode" class="label font detaildata">CompeCode</label>
        <input onkeypress="nextdetail()" type="text" placeholder="Enter CompeCode"
            name="compecode" class="input font detaildata">
    </div>
    </div>
    <div class="line detaildata" style="height: 1px; margin-bottom: 5px;"></div>
    <label for="issuer" class="label font detaildata">Issuer</label>
    <input onkeypress="nextdetail()" type="text" placeholder="Issuer" name="issuer"
    class="input font detaildata">
    <div class="grid1">
    <div class="labinpgrp">
        <label for="accounttype" class="label font detaildata" id="detailslabel">Account
            Type</label>
        <input onkeypress="nextdetail()" type="text" placeholder="Enter Account Type"
            name="accounttype" class="input font detaildata">
    </div>
    <div class="labinpgrp">
        <label for="covenant" class="label font detaildata">Covenant</label>
        <input onkeypress="nextdetail()" type="text" placeholder="Enter Covenant"
            name="covenant" class="input font detaildata">
    </div>
    </div>
`
window.addEventListener("load", () => {
    opengenform()
})
function checkgenstat() {
    if (document.getElementById('genlabel').style.display=="flex") {
        closegenform()
    }
    else {
        opengenform()
    }
}
function checkdetailstat() {
    if (document.getElementById('detailslabel').style.display=="flex") {
        closedetailform()
    }
    else {
        opendetailform()
    }
}
function closegenform() {
    arrow.style.rotate = "0deg"
    for (let index = 0; index < gendata.length; index++) {
        const element = gendata[index];
        element.style.display = "none"
    }
}
function opengenform() {
    arrow.style.rotate = "90deg"
    for (let index = 0; index < gendata.length; index++) {
        const element = gendata[index];
        element.style.display = "flex"
    }
}
function closedetailform() {
    arrowD.style.rotate = "0deg"
    for (let index = 0; index < detaildata.length; index++) {
        const element = detaildata[index];
        element.style.display = "none"
    }
}
function opendetailform() {
    arrowD.style.rotate = "90deg"
    for (let index = 0; index < detaildata.length; index++) {
        const element = detaildata[index];
        element.style.display = "flex"
    }
}
function nextgen() {
    opendetailform()
    var inpcheck = []
    var inputs = genform.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value != "") {
            inpcheck.push(true)
        }
        else {
            inpcheck.push(false)
        }
    }
    if (inpcheck.includes(false)) {
        document.getElementById('genhead').style.color = '#ff6f6f'
        closegenform()
    }
    else{
        document.getElementById('genhead').style.color = '#188f83'
        closegenform()
    }
}
function nextdetail() {
    opendetailform()
    var inpcheck = []
    var inputs = detailsform.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value != "") {
            inpcheck.push(true)
        }
        else {
            inpcheck.push(false)
        }
    }
    if (inpcheck.includes(false)) {
        document.getElementById('detailhead').style.color = '#ff6f6f'
        closegenform()
    }
    else{
        document.getElementById('detailhead').style.color = '#188f83'
        closegenform()
    }
}
function add(){
    document.getElementById('detailsform').innerHTML+=detailsformdata
}
function refresh(){
    location.reload();
}
function submit(){
    location.replace(window.location.href+"submit.html")
}
