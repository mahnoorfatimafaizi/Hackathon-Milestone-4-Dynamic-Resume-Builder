// Grabbing form and resume elements from the DOM
const form = document.getElementById("resume-form") as HTMLFormElement;
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

// Grabbing elements where we will display the resume
const resumeName = document.getElementById("resume-name")!;
const resumeContact = document.getElementById("resume-contact")!;
const resumeEducationContent = document.getElementById(
  "resume-education-content"
)!;
const resumeWorkContent = document.getElementById("resume-work-content")!;
const resumeSkillsList = document.getElementById("resume-skills-list")!;

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page refresh

  // Update resume with form values
  resumeName.textContent = nameInput.value;
  resumeContact.textContent = `Email: ${emailInput.value} | Phone: ${phoneInput.value}`;
  resumeEducationContent.textContent = educationInput.value;
  resumeWorkContent.textContent = workExperienceInput.value;

  // Update skills section, splitting skills by commas and adding each as a list item
  resumeSkillsList.innerHTML = ""; // Clear existing skills
  const skillsArray = skillsInput.value.split(",").map((skill) => skill.trim()); // Split by comma and trim
  skillsArray.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    resumeSkillsList.appendChild(li);
  });

  // Clear the form after submission
  form.reset();
});
