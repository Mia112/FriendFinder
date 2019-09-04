
   
    $(document).ready(function () {
        $('.modal').modal();

        $("#submit").on("click", function (event) {
            event.preventDefault();
            //form validation for empty spaces
            function validateForm() {
                var valid = true;
                $(".validate").each(function () {
                    if ($(this).val() === '') {
                        valid = false;
                    }
                });

                return valid;
            }
            if (validateForm() == true) {

                // Create a new friend object
                var newFriend = {
                    name: $("#name").val().trim(),
                    photo: $("#photo").val().trim(),
                    scores: [
                        $("#q1").val(),
                        $("#q2").val(),
                        $("#q3").val(),
                        $("#q4").val(),
                        $("#q5").val(),
                        $("#q6").val(),
                        $("#q7").val(),
                        $("#q8").val(),
                        $("#q9").val(),
                        $("#q10").val()
                    ]
                };
               
                // AJAX post the data to the friends API.
    
                $.post("/api/friends", newFriend, function (data) {
                    // Grab the best matched from the AJAX response.
                    $("#matchName").text(data.name);
                    $("#matchImg").attr("src", data.photo);
                    
                });

                // Show the modal with the best match
                $("#modal1").modal("open");
                //clear form submission
                $("#name").val("");
                $("#photo").val("");
                $("#q1").val("");
                $("#q2").val("");
                $("#q3").val("");
                $("#q4").val("");
                $("#q5").val("");
                $("#q6").val("");
                $("#q7").val("");
                $("#q8").val("");
                $("#q9").val("");
                $("#q10").val("");
            } else {
                alert("Please fill out ALL of the fields before submitting you profile.")
            }


        });

    });

