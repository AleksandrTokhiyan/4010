$(document).on('click', '.package-item', function () {
    let show = $(this).data('show');
    let c = $(this);

    $(show).removeClass("hide").siblings().addClass("hide");
    $(c).removeClass("hide").addClass("active-package").siblings().removeClass("active-package");

});

// Upload Image(changing)
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imageUpload").change(function () {
    readURL(this);
});


/*  Media Menu toggle  */

let menuToggler = document.getElementById('menuToggler');
let menuTogglerLabel = document.getElementById('menuTogglerLabel');

menuToggler.addEventListener('change', function () {
    if (menuToggler.checked) {
        menuTogglerLabel.setAttribute('aria-pressed', 'true');
    } else {
        menuTogglerLabel.setAttribute('aria-pressed', 'false');
    }
});


/***************************************************************************************/


$(document).on('click', '.card-item', function () {
    let c = $(this);
    $(c).addClass("active-card").siblings().removeClass("active-card");
});

$(document).on("click", ".change-pass-btn", function () {
    $(this).hide();
    $(".pass-group").removeClass("hide-form-group");
});


/* Settings Switch Buttons */

$(document).on('click', '.setting-btn-item', function () {
    let show = $(this).data('show');
    let c = $(this);

    $(show).removeClass("hide").siblings().addClass("hide");
    $(c).removeClass("hide").addClass("active-setting").siblings().removeClass("active-setting");

});



/* Structure , Insurance (Switch) */

$(document).on('click', '.switch-button-case', function () {
    let show = $(this).data('show');
    let c = $(this);

    $(show).removeClass("hide").siblings().addClass("hide");
    $(c).removeClass("hide").addClass("active-case").siblings().removeClass("active-case");

});


$(document).on('click', '.card-item', function () {
    let c = $(this);
    $(c).addClass("active-card").siblings().removeClass("active-card");
});

$(document).on('click', '.type_of_case-option', function () {
    let show = $(this).data('show');
    $(show).removeClass("hide").siblings().addClass("hide");
});

$(document).ready(function () {
    $('.val_answer').on("click", function () {
        let inputValue = $(this).attr("value");
        let targetBox = $("." + inputValue);
        $(this).closest(".question-item").find(".val_answer-body").not(targetBox).hide();
        $(targetBox).show();
    });
});