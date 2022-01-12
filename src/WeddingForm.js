import React from "react";
import axios from "axios";

class WeddingForm extends React.Component {
  handleFileSelect(evt) {
    var reader = new FileReader();
    var file = document.querySelector("input[name='file']").files[0];
    console.log(typeof file);
    var fileName = file.name;
    // reader.onerror = this.errorHandler;
    reader.onload = function (e) {
      var html =
        '<input type="" id="data" value="' +
        e.target.result.replace(/^.*,/, "") +
        '" >';
      html +=
        '<input type="" id="mimetype" value="' +
        e.target.result.match(/^.*(?=;)/)[0] +
        '" >';
      html += '<input type="" id="filename" value="' + fileName + '" >';
      console.log("test");
      document.getElementById("filedata").innerHTML = html;
    };
    reader.readAsDataURL(file);
  }

  /********************** RSVP **********************/
  handleSubmit(e) {
    e.preventDefault();
    // var form = document.querySelector("form");
    // var data = new URLSearchParams(new FormData(form)).toString();

    var nameInput = document.getElementById("name").value;
    var mailInput = document.getElementById("email").value;
    // var imagefile = document.querySelector("#file");
    console.log("test");
    var formData = new FormData();
    formData.append("name", nameInput);
    formData.append("email", mailInput);
    // formData.append("file", imagefile.files[0]);

    var data = document.querySelector("div[id='data']");
    console.log(data);
    var fileData = document.getElementById("data").value;
    var mimetype = document.getElementById("mimetype").value;
    var filename = document.getElementById("filename").value;

    formData.append("data", fileData);
    formData.append("mimetype", mimetype);
    formData.append("filename", filename);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbwNoVkECUG46i4xXe5JRde8-YXS_ftqiCHFuvGGhGdOqrSFhdWFqN76Are-WZE6R7Bs0w/exec",
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
              name="file"
              class=""
              placeholder="Bild"
              required
              onChange={this.handleFileSelect}
            />
          </div>
        </div>
        <div id="filedata"></div>
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
