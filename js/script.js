// Scrolling on click
function scrollingTbl(x, y) {
    document.getElementById("platinum_package_body").scrollBy(x, y);
    document.getElementById("gold_package_body").scrollBy(x, y);
    document.getElementById("silver_package_body").scrollBy(x, y);
    document.getElementById("bronze_package_body").scrollBy(x, y);
}

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
