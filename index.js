$(document).ready(function () {
  $("#file-input").change(function () {
    let file = $(this)[0].files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      $("#image-preview").attr("src", e.target.result);
      $("#image-preview-container").show();
    };
  });
  $("#delete-image-button").click(function () {
    $("#image-preview").attr("src", "#");
    $("#image-preview-container").hide();
    $("#file-input").val("");
  });
  $("#generate-code-button").click(function () {
    let code = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 20; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    $("#code-input").val(code);
  });

  $("#generate-password-button").click(function () {
    let length = 8;
    let charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?-=[];,./";
    let password = "";

    while (password.length < length) {
      let char = charset.charAt(Math.floor(Math.random() * charset.length));
      if (/[A-Z]/.test(char)) {
        hasUppercase = true;
      } else if (/[0-9]/.test(char)) {
        hasNumber = true;
      } else if (/[^A-Za-z0-9]/.test(char)) {
        hasSymbol = true;
      }
      password += char;
    }
    $("#password-input").val(password);
  });
  $("#position-select").change(function () {
    if ($(this).val() == "driver") {
      alert("Ви обрали посаду Водія.");
    }
  });

  //   let pages = $(".page");
  //   let btn = $(".btn");
  //   let currentPageIndex = 0;
  //   showPage(currentPageIndex);

  //   $(".next-button").click(function () {
  //     if (currentPageIndex < pages.length - 1) {
  //       currentPageIndex++;
  //       showPage(currentPageIndex);
  //     }
  //   });

  //   $(".prev-button").click(function () {
  //     if (currentPageIndex > 0) {
  //       currentPageIndex--;
  //       showPage(currentPageIndex);
  //     }
  //   });

  //   $(function showPage(index) {
  //     pages.removeClass("active");
  //     $(pages[index]).addClass("active");
  //     btn.removeClass("active");
  //     $(btn[index]).addClass("active");
  //   });

  $("#create-user-button").click(function () {
    let username = $("#login-input").val();
    let password = $("#password-input").val();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    $("#popup-username").text(username);
    $("#popup-password").text(password);
    $("#popup").show();
  });

  $("#copy-button").click(function () {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (username && password) {
      let text = "Логін: " + username + "\nПароль: " + password;
      navigator.clipboard.writeText(text);
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      $("#popup").hide();
      alert("Логін та пароль скопійовані в буфер обміну.");
    } else {
      alert("Логін та пароль не знайдені в localstorage.");
    }
  });
  $("#hide-button").hide();
});

$(document).ready(function () {
  $("#my-button").click(function () {
    $("#block1").addClass("hidden");
    $("#block2").removeClass("hidden");
  });
});
