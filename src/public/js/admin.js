const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const alert = document.querySelector(".aallll");
const back_alert = document.querySelector(".back-alert");
const company_render = document.querySelector(".c_y");
let companyData2 = [];

// * ADMIN PAGE: ...
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const companyData = {
    company_name: e.target.company_name.value,
    company_img: e.target.company_img.value,
  };
  (async () => {
    const rawResponse = await fetch("/admin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyData: companyData }),
    });
    const content = await rawResponse.json();
    const alert = document.querySelector(".aallll");
    alert.innerHTML = `<p>${content.msg}</p>`;

    alert.classList.add("done-alert");
    back_alert.classList.add("blak-back");

    setTimeout(() => {
      e.target.company_name.value = "";
      e.target.company_img.value = "";
      back_alert.classList.remove("blak-back");
      alert.classList.remove("done-alert");
    }, 1700);
  })();

  (async () => {
    const response = await fetch("http://localhost:9000/admin/companies");
    const data = await response.json();
    console.log(data);
    company_render.innerHTML = `
      <option value="" selected disabled>choose one...</option>
      ${data.map(
        (e) => ` <option value="${e.company_id}">${e.company_name}</option> `
      )}
      `;
  })();
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const complexData = {
    complex_name: e.target.complex_name.value,
    company_id: e.target.company_id.value,
  };
  (async () => {
    const rawResponse = await fetch("/admin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ complexData: complexData }),
    });
    const content = await rawResponse.json();
    const alert = document.querySelector(".aallll");
    alert.innerHTML = `<p>${content.msg}</p>`;

    alert.classList.add("done-alert");
    back_alert.classList.add("blak-back");

    setTimeout(() => {
      e.target.complex_name.value = "";
      back_alert.classList.remove("blak-back");
      alert.classList.remove("done-alert");
    }, 1700);
  })();

  (async () => {
    const response = await fetch("http://localhost:9000/admin/complex");
    const data = await response.json();
    console.log(data);
    // company_render.innerHTML = `
    //   <option value="" selected disabled>choose one...</option>
    //   ${data.map(
    //     (e) => ` <option value="${e.company_id}">${e.company_name}</option> `
    //   )}
    //   `;
  })();
});
