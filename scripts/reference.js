const loadRef = () => {
  refInput = document.getElementById("jobreference");
  refValue = localStorage.getItem("job_ref");
  if (refValue) refInput.value = refValue;
};

window.onload = () => loadRef();
