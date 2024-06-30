let site_name = document.getElementById('site-name');
let site_url = document.getElementById('site-url');
let ovarlaymn = document.querySelector(".box");
let closebtn = document.querySelector(".close-icon");

let sites = []

if (localStorage.getItem('allsites') != null) {
    sites = JSON.parse(localStorage.getItem('allsites'))
    display()
}

function add() {
    if (validationName()==true & validationUrl()==true) {
        let site = {
            name: site_name.value,
            url: site_url.value
        }
        sites.push(site)
        console.log(sites);

        localStorage.setItem('allsites', JSON.stringify(sites))
        display()
        clear()
    }

    else {
        ovarlaymn.classList.add("appear");
    }
}
function display() {
    let box = ''
    for (let i = 0; i < sites.length; i++) {
        box += `
       <tr class="">
       <td class="fw-bold text-muted">${i + 1}</td>
       <td class="fw-bold text-muted"> ${sites[i].name}</td>
       <td>
           <button class="btn btn-success"  onclick="visititem(${i})"><i class="fa-regular fa-eye "></i> Visit</button>
       </td>
       <td>

       <button class="btn btn-danger" onclick="deleteitem(${i})"><i class="fa-solid fa-trash"></i> Delete</button>

       </td>

   </tr> 
        `
    }
    document.getElementById('demo').innerHTML = box
}
function clear() {
    site_name.value = ''
    site_url.value = ''
}
function deleteitem(index) {
    sites.splice(index, 1)
    display()
    localStorage.setItem('allsites', JSON.stringify(sites))

}
function visititem(index) {
    window.open(sites[index].url);
}

/* Validation */
function validationName() {
    var text = site_name.value
    var regex = /^[A-Z][a-z]{3,9}$/;
    if (regex.test(text) == true) {
        site_name.classList.add('is-valid')
        site_name.classList.remove('is-invalid')
        return true
    }
    else {
        site_name.classList.add('is-invalid')
        site_name.classList.remove('is-valid')
        return false

    }
}
function validationUrl() {
    var text = site_url.value
    var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
    if (regex.test(text) == true) {
        site_url.classList.add('is-valid')
        site_url.classList.remove('is-invalid')
        return true
    }
    else {
        site_url.classList.add('is-invalid')
        site_url.classList.remove('is-valid')
        return false

    }
}

function checking() {
    ovarlaymn.classList.remove("appear")
    ovarlaymn.classList.add("clear");
}


closebtn.addEventListener("click",checking)
document.addEventListener('keydown' , function(e){
    if(e.key == 'Escape'){
        checking()
    }
} )

