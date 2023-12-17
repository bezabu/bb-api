const API_KEY = "su9SnquxNrg0Wf7os7_YjPR8bRk";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
        //console.log(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    let modalTitle = document.getElementById("resultsModalTitle");
    modalTitle.innerText = data.status_code;
    let modalContent = document.getElementById("results-content");
    modalContent.innerText = `Your key is valid until ${data.expiry}`;
    resultsModal.show();
}