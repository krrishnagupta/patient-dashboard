const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const patientsList = document.getElementById("patientsList");

async function fetchPatients() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Authorization": "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const patients = await response.json();
    renderPatients(patients);

  } catch (error) {
    console.error("API ERROR:", error);
    patientsList.innerHTML =
      "<li style='color:red;'>Failed to load patients</li>";
  }
}

function renderPatients(patients) {
  patientsList.innerHTML = "";

  patients.forEach((patient, index) => {
    const li = document.createElement("li");
    li.className = `patient-item ${index === 3 ? "active" : ""}`;

    li.innerHTML = `
      <img
        src="${patient.profile_picture}"
        alt="${patient.name}"
        class="patient-avatar"
      />
      <div class="patient-info">
        <div class="patient-name">${patient.name}</div>
        <div class="patient-meta">
          ${patient.gender}, ${patient.age}
        </div>
      </div>
      <img src="assets/icons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="more_info">
    `;

    patientsList.appendChild(li);
  });
}

fetchPatients();

