const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const form4 = document.querySelector("#form4");
const form5 = document.querySelector("#form5");
const form6 = document.querySelector("#form6");
const alert = document.querySelector(".aallll");
const back_alert = document.querySelector(".back-alert");
const company_render = document.querySelector(".c_y");
const complex_render = document.querySelector(".r_m");
const rooms_render = document.querySelector(".ro_m");
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
      e.target.company_id.value = "";
      back_alert.classList.remove("blak-back");
      alert.classList.remove("done-alert");
    }, 1700);
  })();

  (async () => {
    const response = await fetch("http://localhost:9000/admin/complex");
    const data = await response.json();
    console.log(data);
    complex_render.innerHTML = `
      <option value="" selected disabled>choose one...</option>
      ${data.map(
        (e) => ` <option value="${e.complex_id}">${e.complex_name}</option> `
      )}
      `;
  })();
});
form3.addEventListener("submit", (e) => {
  e.preventDefault();
  const roomData = {
    room_kv_metr: e.target.room_kv_metr.value,
    room_1kv_price: e.target.room_1kv_price.value,
    room_location: e.target.room_location.value,
    room_count: e.target.room_count.value,
    complex_id: e.target.complex_id.value,
  };
  (async () => {
    const rawResponse = await fetch("/admin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomData: roomData }),
    });
    const content = await rawResponse.json();
    const alert = document.querySelector(".aallll");
    alert.innerHTML = `<p>${content.msg}</p>`;

    (async () => {
      const response = await fetch("http://localhost:9000/admin/rooms");
      const data = await response.json();
      console.log(data);
      rooms_render.innerHTML = `
        <option value="" selected disabled>choose one...</option>
        ${data.map(
          (e) => ` <option value="${e.room_id}">${e.room_location}</option> `
        )}
        `;
    })();

    alert.classList.add("done-alert");
    back_alert.classList.add("blak-back");

    setTimeout(() => {
      e.target.room_kv_metr.value = "";
      e.target.room_1kv_price.value = "";
      e.target.room_location.value = "";
      e.target.room_count.value = "";
      e.target.complex_id.value = "";
      back_alert.classList.remove("blak-back");
      alert.classList.remove("done-alert");
    }, 1700);
  })();
});
form4.addEventListener("submit", (e) => {
  e.preventDefault();

  (async () => {
    const rawResponse = await fetch(`/admin`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ company_id: e.target.company_id.value }),
    });
    const content = await rawResponse.json();
  })();
  alert.innerHTML = `<p>Deleted ????</p>`;
  alert.classList.add("done-alert");
  back_alert.classList.add("blak-back");
  setTimeout(() => {
    back_alert.classList.remove("blak-back");
    alert.classList.remove("done-alert");
  }, 1700);
  setTimeout(() => {
    window.location.reload();
  }, 2000);
});
form5.addEventListener("submit", (e) => {
  e.preventDefault();

  (async () => {
    const rawResponse = await fetch(`/admin`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ complex_id: e.target.complex_id.value }),
    });
    const content = await rawResponse.json();
  })();

  alert.innerHTML = `<p>Deleted ????</p>`;
  alert.classList.add("done-alert");
  back_alert.classList.add("blak-back");
  setTimeout(() => {
    back_alert.classList.remove("blak-back");
    alert.classList.remove("done-alert");
  }, 1700);
  setTimeout(() => {
    window.location.reload();
  }, 2000);
});
form6.addEventListener("submit", (e) => {
  e.preventDefault();

  (async () => {
    const rawResponse = await fetch(`/admin`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ room_id: e.target.room_id.value }),
    });
    const content = await rawResponse.json();
  })();

  alert.innerHTML = `<p>Deleted ????</p>`;
  alert.classList.add("done-alert");
  back_alert.classList.add("blak-back");
  setTimeout(() => {
    back_alert.classList.remove("blak-back");
    alert.classList.remove("done-alert");
  }, 1700);
  setTimeout(() => {
    window.location.reload();
  }, 2000);
});
