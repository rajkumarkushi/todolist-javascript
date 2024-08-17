const lists = document.getElementById('list-container');
const input = document.getElementById('input-box');
const searchBox = document.getElementById('search-box');

function addTask() {
    if (input.value === '') {
        alert('Please write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        lists.appendChild(li);
        console.log(lists);
        
        let span = document.createElement('span');
        span.classList.add('close');
        li.appendChild(span);
        
        input.value = ''; // Clear input field after adding task
    }
    saveData();
}

lists.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', lists.innerHTML);
}

function showTask() {
    lists.innerHTML = localStorage.getItem('data') || '';
}

function searchTasks() {
    const filter = searchBox.value.toLowerCase();
    const li = lists.getElementsByTagName('li');
    
    for (let i = 0; i < li.length; i++) {
        const task = li[i].textContent || li[i].innerText;
        if (task.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

showTask();