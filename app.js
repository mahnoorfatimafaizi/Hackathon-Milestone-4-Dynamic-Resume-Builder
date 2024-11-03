var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var workExperienceInput = document.getElementById("work-experience");
var skillsInput = document.getElementById("skills");

var resumeName = document.getElementById("resume-name");
var resumeContact = document.getElementById("resume-contact");
var resumeEducation = document.getElementById("resume-education-content");
var resumeWorkExperience = document.getElementById("resume-work-content");
var resumeSkillsList = document.getElementById("resume-skills-list");

var editResumeButton = document.getElementById("edit-resume-button");

function updateResume() {
  resumeName.innerText = nameInput.value || "Your Name";
  resumeContact.innerText = "Email: "
    .concat(emailInput.value || "your.email@example.com", " | Phone: ")
    .concat(phoneInput.value || "(123) 456-7890");

  resumeEducation.innerText =
    educationInput.value || "Your education details will appear here.";

  resumeWorkExperience.innerText =
    workExperienceInput.value || "Your work experience will appear here.";

  resumeSkillsList.innerHTML = "";
  var skillsArray = skillsInput.value.split(",").map(function (skill) {
    return skill.trim();
  });
  if (skillsArray.length > 0 && skillsArray[0] !== "") {
    skillsArray.forEach(function (skill) {
      var skillItem = document.createElement("li");
      skillItem.innerText = skill;
      resumeSkillsList.appendChild(skillItem);
    });
  } else {
    var placeholderItem = document.createElement("li");
    placeholderItem.innerText = "Skills will be listed here.";
    resumeSkillsList.appendChild(placeholderItem);
  }
}

var isEditable = false;
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
].forEach(function (input) {
  input.addEventListener("input", updateResume);
});

var resumeForm = document.getElementById("resume-form");
resumeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  updateResume();
});
