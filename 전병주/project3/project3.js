document.getElementById("enterjoin").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
});

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("clickjoin").addEventListener("click", function () {
    const errorDiv = document.getElementById("error");
    errorDiv.innerHTML = "";
    errorDiv.style.visibility = "hidden";

    const id = document.getElementById("id").value.trim();
    const pw = document.getElementById("pw").value.trim();
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const birth = document.getElementById("birth").value.trim();
    const phoneNumber = document.getElementById("phonenumber").value.trim();

    let errors = [];

    if (!id || id.length < 3) {
      errors.push("아이디는 3글자 이상이어야 합니다.");
    }
    if (!pw || pw.length < 6) {
      errors.push("비밀번호는 6글자 이상이어야 합니다.");
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.push("이메일 형식이 올바르지 않습니다.");
    }
    if (!birth || !/^\d{4}-\d{2}-\d{2}$/.test(birth)) {
      errors.push("생년월일은 YYYY-MM-DD 형식이어야 합니다.");
    }
    if (!phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
      errors.push("전화번호는 -없이 숫자 11자여야 합니다.");
    }
    if (!id || !pw || !email || !name || !birth || !phoneNumber) {
      errors.push("모든 입력항목은 공백일 수 없습니다.");
    }

    if (errors.length > 0) {
      errorDiv.innerHTML = errors.join("<br>");
      errorDiv.style.visibility = "visible";
    } else {
      window.location.href = "success.html";
    }
  });
});
