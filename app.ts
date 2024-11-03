const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const educationInput = document.getElementById(
  "education"
) as HTMLTextAreaElement;
const workExperienceInput = document.getElementById(
  "work-experience"
) as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;

const resumeName = document.getElementById("resume-name") as HTMLElement;
const resumeContact = document.getElementById("resume-contact") as HTMLElement;
const resumeEducation = document.getElementById(
  "resume-education-content"
) as HTMLElement;
const resumeWorkExperience = document.getElementById(
  "resume-work-content"
) as HTMLElement;
const resumeSkillsList = document.getElementById(
  "resume-skills-list"
) as HTMLElement;

const editResumeButton = document.getElementById(
  "edit-resume-button"
) as HTMLButtonElement;

function updateResume() {
  resumeName.innerText = nameInput.value || "Your Name";
  resumeContact.innerText = `Email: ${
    emailInput.value || "your.email@example.com"
  } | Phone: ${phoneInput.value || "(123) 456-7890"}`;

  resumeEducation.innerText =
    educationInput.value || "Your education details will appear here.";

  resumeWorkExperience.innerText =
    workExperienceInput.value || "Your work experience will appear here.";

  resumeSkillsList.innerHTML = "";
  const skillsArray = skillsInput.value.split(",").map((skill) => skill.trim());
  if (skillsArray.length > 0 && skillsArray[0] !== "") {
    skillsArray.forEach((skill) => {
      const skillItem = document.createElement("li");
      skillItem.innerText = skill;
      resumeSkillsList.appendChild(skillItem);
    });
  } else {
    const placeholderItem = document.createElement("li");
    placeholderItem.innerText = "Skills will be listed here.";
    resumeSkillsList.appendChild(placeholderItem);
  }
}

let isEditable = false;
function toggleEditResume() {
  isEditable = !isEditable;

  resumeName.contentEditable = isEditable.toString();
  resumeContact.contentEditable = isEditable.toString();
  resumeEducation.contentEditable = isEditable.toString();
  resumeWorkExperience.contentEditable = isEditable.toString();
  resumeSkillsList.contentEditable = isEditable.toString();

  editResumeButton.textContent = isEditable ? "Save Changes" : "Edit Resume";

  if (!isEditable) {
  }
}

editResumeButton.addEventListener("click", toggleEditResume);

[
  nameInput,
  emailInput,
  phoneInput,
  educationInput,
  workExperienceInput,
  skillsInput,
].forEach((input) => {
  input.addEventListener("input", updateResume);
});

const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
resumeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateResume();
});
