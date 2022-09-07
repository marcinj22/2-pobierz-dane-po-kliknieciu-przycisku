let btnGetData = document.getElementById('get-data');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {

            let pUserID = document.createElement('p');
            let pID = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pUserID.innerText = `User ID: ${data.userId}`;
            pID.innerText = `Post ID: ${data.id}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body ID: ${data.body}`;

            document.body.appendChild(pUserID);
            document.body.appendChild(pID);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

        })

        .catch(error => { 
            console.error(error);
        })
};

btnGetData.addEventListener('click', getData);