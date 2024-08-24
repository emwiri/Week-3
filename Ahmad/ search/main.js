const r = document.getElementById('result')
const f = document.getElementById('filter')
f.addEventListener('input', (varedshode) => filterData(varedshode.target.value))

async function add_new_user(user, element) {    
    element.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="usr">
        <h4>خانم ${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
`   
}

async function get_user_list() {
    const res = await fetch('https://randomuser.me/api/?nat=ir&results=15&gender=female')
    const { results } = await res.json()
    r.innerHTML = ''
    results.forEach(user => {
        const EL_li = document.createElement('li')
        add_new_user(user, EL_li)
        users.push(EL_li)
        r.appendChild(EL_li)
    })
}

function filterData(searchTerm) {
    users.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

const users = []
get_user_list()