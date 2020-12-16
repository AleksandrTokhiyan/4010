let _targettedModal,
    _triggers = document.querySelectorAll('[data-modal-trigger]'),
    _dismiss = document.querySelectorAll('[data-modal-dismiss]'),
    modalActiveClass = "is-modal-active";

function showModal(el) {
    _targettedModal = document.querySelector('[data-modal-name="' + el + '"]');
    _targettedModal.classList.add(modalActiveClass);
}

function hideModal(event) {
    if (event === undefined || event.target.hasAttribute('data-modal-dismiss')) {
        _targettedModal.classList.remove(modalActiveClass);
    }
}

function bindEvents(el, callback) {
    for (i = 0; i < el.length; i++) {
        (function (i) {
            el[i].addEventListener('click', function (event) {
                callback(this, event);
            });
        })(i);
    }
}

function triggerModal() {
    bindEvents(_triggers, function (that) {
        showModal(that.dataset.modalTrigger);
    });
}

function dismissModal() {
    bindEvents(_dismiss, function (that) {
        hideModal(event);
    });
}

function initModal() {
    triggerModal();
    dismissModal();
}

initModal();


$(document).ready(function () {
    $("button").on("click", function (event) {
        event.preventDefault();
    });
    $(".sign-up_btn").on("click", function () {
        $("#login_content").removeClass("is-modal-active");
    });
    $(".login_btn").on("click", function () {
        $("#sign-up_content").removeClass("is-modal-active");
    });
    $(".forgotPass_btn").on("click", function () {
        console.log("ff");
        $("#login_content").removeClass("is-modal-active");
    });
    $($("#forgotPass_content .sign-up_btn")).on("click", function () {
        $("#forgotPass_content").removeClass("is-modal-active")
    });
    $(".resetPass_btn").on("click", function () {
        $("#forgotPass_content").removeClass("is-modal-active")

    })
});