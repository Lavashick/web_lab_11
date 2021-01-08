$(document).ready(function() {





    $("#btn-f").hide()

    $("p:first").click(function() {
        $(this).hide()
    })

    $(".card-image").dblclick(function() {
        $(this).hide()
    })

    $("p").hover(function() {
            $(this).css("color", "green")
        },
        function() {
            $(this).css("color", "black")
        }
    )

    $("h1").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray")
        },
        mouseleave: function() {
            $(this).css("background-color", "white")
        },
        click: function() {
            $(this).css("background-color", "yellow")
        }
    })

    $("h2").click(function() {
        $(this).addClass("header-card")
        $(".header-card").hide()
    })

    $(".main-footer").find("p:first").css("color", "red")

    let text = $(".description").find("p").text()
    let newText = "NEW NEW NEW NEW NEW" + text
    $(".description").find("p").text(newText).css("color", "grey")

    $(".cards").append("<p>Append text</p>")
    $(".cards").prepend("<p>Prepend text</p>")

    $(".cards").after("<p>HI HI HI</p>")
    $(".cards").before("<p>HI HI HI</p>")

    $(".cards-item:first").mouseenter(function() {
        $(this).remove()
    })







})