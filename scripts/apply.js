const navigatePage = (ref) => {
  localStorage.setItem("job_ref", ref);
  window.location.href = "apply.html";
};
