$(document).ready(function(){
    console.log("working")

    $("form").submit(function(e){
        e.preventDefault()
        var $this = $(this)
        if ($this.children('input[type="submit"]').val() === "Add user"){
            var fields = {
                "firstName": $('#first-name').val(),
                "lastName": $('#last-name').val(),
                "description": $('#description').val()
            }
            var $ele = $('<div></div>')
            $ele.html("<h2>"+ fields.firstName + " " + fields.lastName + "</h2><p>"+ fields.description + "</p>")
            $(".cards").append($ele)
            $this.children('input:first-child, input:nth-child(2), textarea').val(null)
            $('div.cards :last-child').children('p').hide()
        }else{
            $.ajax({
                url: 'https://api.github.com/users/' + $('#user-name').val(),
                method: "GET",
                success: function(response){
                    console.log(response)
                    var $ele = $('<div></div>');
                    $ele.html("<h2>" + response.name + "</h2><h3>"+ response.location +"</h3><img src='"+ response.avatar_url +"'>");
                    $(".cards").append($ele)
                    $('div.cards').children(':last-child').children('h3, img').hide()
                }
            })
            $(this).children('input:first-child').val(null)
        }
    })

    $("div.cards").on("click", "h2", function(){
        $(this).siblings().toggle("slow")
    })
})
