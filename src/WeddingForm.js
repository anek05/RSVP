import React from "react";
import axios from "axios";

class WeddingForm extends React.Component {
  /********************** RSVP **********************/
  handleSubmit(e) {
    e.preventDefault();
    var form = document.querySelector("form");

    var nameInput = document.getElementById("name").value;
    var mailInput = document.getElementById("email").value;
    var imagefile = document.querySelector("#file");
    var imageid = document.getElementById("file");
    console.log("test");
    console.log(imageid);
    var formData = new FormData();
    formData.append("name", nameInput);
    formData.append("email", mailInput);
    formData.append("file", imagefile.files[0]);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    var data = new URLSearchParams(new FormData(form)).toString();
    // console.log(data);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbyrYR1w0XNi2k2LPLMJOH94CUIqbZdzrsFCxehu_glRzm0pSoLuL1qlmF3N_3f5N4rCqQ/exec",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
        console.log(response);
      });
  }

  render() {
    return (
      <form
        id="rsvp-form"
        class="form-group"
        action=""
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <div class="">
          <div class="">
            <i class="fa fa-envelope"></i>
            <input
              type="email"
              name="email"
              id="email"
              class=""
              placeholder="Your email"
              required
            />
          </div>
          <div class="">
            <i class="fa fa-user"></i>
            <input
              name="name"
              id="name"
              class=""
              placeholder="Your name"
              required
            />
          </div>
          <div class="">
            <i class="fa fa-user"></i>
            <input
              type="file"
              id="file"
              accept="image/png, image/jpeg"
              name="thefile"
              class=""
              placeholder="Bild"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" id="alert-wrapper"></div>
        </div>
        <button class="btn btn-primary" type="submit">
          Skicka
        </button>
      </form>
    );
  }
}

export default WeddingForm;
