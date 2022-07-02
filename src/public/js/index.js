// * Varibales: ...
const company = document.querySelector(".c_y");
const complex = document.querySelector(".c_x");
const room = document.querySelector(".r_m");
const mortgage = document.querySelector(".m_e");
const innerBody = document.querySelector(".body_uy");

// * Created new variables for data
let ddd = [];
let bank_info = [];
let kkk = (asd) => {
  ddd = asd;
};

// * Disablde all selections for write step by step
complex.disabled = true;
room.disabled = true;
mortgage.disabled = true;

let body = ``;
company.addEventListener("change", () => {
  // * Check Company Select value
  if (company.value) {
    mortgage.disabled = true;
    room.disabled = true;
    complex.disabled = false;

    // * Get data in company select value
    const data = company.value.split("|");

    // * Create new Html code
    body = `
    <div class="mainy d-flex flex-column justify-content-center align-content-center">
      <img src="${data[1]}" width="150" height="180" class="ms-3"/>
      <p class="h4 text-light">${data[2]}</p>
      <div class="companyInfo"></div>
    </div><div class="bank d-flex flex-column justify-content-center align-content-center"></div> `;

    // * Get from Backend check id when we posted
    (async () => {
      const rawResponse = await fetch("/home", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyId: data[0] }),
      });
      const content = await rawResponse.json();

      // * Create new options in complex selection
      complex.innerHTML = `
      <option value="0" selected disabled>choose one...</option>
      ${content.map(
        (e) =>
          ` <option value="${e.complex_id}|${e.complex_name}">${e.complex_name}</option> `
      )}
      `;
    })();
    // * When agan choose its not terrible ( cleaned all options after company selection inners )
    room.innerHTML = `<option value="0" selected disabled>choose one...</option>`;
    mortgage.innerHTML = `<option value="0" selected disabled>choose one...</option>`;
    innerBody.innerHTML = body;

    // * Clear inner bank div if we change
    const bank = document.querySelector(".bank");
    if (bank) bank.innerHTML = "";
  } else {
    complex.disabled = true;
    room.disabled = true;
    mortgage.disabled = true;
    innerBody.innerHTML = null;
  }
});

// * listen to complex selection
complex.addEventListener("change", () => {
  // * Check value of coplex:
  if (complex.value && complex.value != []) {
    const companyInfo = document.querySelector(".companyInfo");
    const data = complex.value.split("|");
    room.disabled = false;
    companyInfo.innerHTML = ` <p class="text-capitalize fw-bold text-center">${data[1]}</p> <div class="roomse"> </div> `;
    (async () => {
      const rawResponse = await fetch("/home", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ complexId: data[0] }),
      });
      const content = await rawResponse.json();
      kkk(content);
      room.innerHTML = `
      <option value="0" selected disabled>choose one...</option>
      ${content.map(
        (e) => ` <option value="${e.room_count}">${e.room_count}</option> `
      )}
      `;
      console.log(content);
    })();
    const bank = document.querySelector(".bank");
    if (bank) bank.innerHTML = "";
    mortgage.innerHTML = `<option value="0" selected disabled>choose one...</option>`;
  } else {
    room.disabled = true;
    mortgage.disabled = true;
  }
});

room.addEventListener("change", () => {
  const roomse = document.querySelector(".roomse");
  console.log(ddd, room.value);
  ddd.forEach((e) => {
    console.log(e);
    if (e.room_count == room.value) {
      const bank = document.querySelector(".bank");
      if (bank) bank.innerHTML = "";
      mortgage.disabled = false;
      roomse.innerHTML = `<p> ${e.room_location}</p> <p>Rooms: ${
        e.room_count
      }</p> <p>Sum: ${e.totally}</p> <p class="per_month none">${
        e.totally
      }</p> <p class="persent none">17%: ${e.totally - e.totally * 0.17}</p>`;

      (async () => {
        const rawResponse = await fetch("/home", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ findBank: e.totally }),
        });
        const content = await rawResponse.json();
        bank_info = content;
        mortgage.innerHTML = `
          <option value="0" selected disabled>choose one...</option>
          ${content[0].how_long.map(
            (e) => ` <option value="${e}">${e}</option>`
          )}
          `;
        console.log(content);
      })();
    }
  });
});

mortgage.addEventListener("change", () => {
  const bank_box = document.querySelector(".bank");
  const per_month = document.querySelector(".per_month");
  const persent = document.querySelector(".persent");
  bank_info.forEach((e) => {
    if (mortgage.value) {
      complex.innerHTML = `<option value="" selected disabled>choose one...</option>`;
      room.innerHTML = `<option value="" selected disabled>choose one...</option>`;
      complex.disabled = true;
      room.disabled = true;
      mortgage.disabled = true;

      bank_box.innerHTML = ` <img src="${e.bank_img}" width="150" height="180" class="ms-3"/>
      <p class="h4 text-light">${e.bank_name}</p> <p>Budget Bank: ${e.bank_budget}</p><p>Duration: ${mortgage.value} nomth</p><p>Percent: 17% </p>`;
      per_month.innerHTML =
        "Per Month: " + (per_month.innerHTML / mortgage.value).toFixed(2);
      per_month.classList.remove("none");
      persent.classList.remove("none");
      mortgage.innerHTML = `<option value="" selected disabled>choose one...</option>`;
    }
  });
});
