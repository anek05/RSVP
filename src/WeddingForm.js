import React from "react";
import axios from "axios";

class WeddingForm extends React.Component {
  state = {
    value: "ja",
  };

  handleAlkohol = (e) => {
    this.setState({ value: e.target.value });
    console.log(this.state);
  };

  handleFileSelect(evt) {
    var reader = new FileReader();
    var file = document.querySelector("input[name='file']").files[0];
    console.log(typeof file);
    var fileName = file.name;
    // reader.onerror = this.errorHandler;
    document.getElementById("laddar").innerText = "Laddar..";
    document.getElementById("skicka").disabled = true;
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
      document.getElementById("laddar").innerText = "";
      document.getElementById("skicka").disabled = false;
    };
    reader.readAsDataURL(file);
  }

  /********************** RSVP **********************/
  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();

    var nameInput = document.getElementById("name").value;
    var mailInput = document.getElementById("email").value;
    var allergierInput = document.getElementById("allergier").value;
    formData.append("name", nameInput);
    formData.append("email", mailInput);
    formData.append("allergier", allergierInput);

    var alkoholJa = document.getElementById("alkohol-ja");
    var alkoholNej = document.getElementById("alkohol-nej");
    if (alkoholJa.checked) {
      formData.append("alkohol", alkoholJa.value);
    } else if (alkoholNej.checked) {
      formData.append("alkohol", alkoholNej.value);
    }

    var fragaInput = document.getElementById("fraga").value;
    formData.append("fråga", fragaInput);

    var fileData = document.getElementById("data").value;
    var mimetype = document.getElementById("mimetype").value;
    var filename = document.getElementById("filename").value;
    formData.append("data", fileData);
    formData.append("mimetype", mimetype);
    formData.append("filename", filename);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

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
        console.log(response.status);
        if (response.status === 200) {
          document.getElementById("rsvp-form").reset();
        }
      });
  }

  render() {
    const { value } = this.state;
    return (
      <form
        id="rsvp-form"
        class="form-group"
        action=""
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <div class="mt-5">
          <div className="row">
            <div class="col">
              <label for="name" className="d-block">
                Namn
              </label>
              <input
                name="name"
                id="name"
                class=""
                placeholder="Namn"
                required
              />
            </div>
            <div class="col">
              <label for="email">Mailadress</label>
              <input
                type="email"
                name="email"
                id="email"
                className="d-block"
                placeholder="Mailadress"
                required
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <label for="allergier" className="d-block">
                Allergier
              </label>
              <input name="allergier" id="allergier" placeholder="Allergier" />
            </div>
            <div className="col">
              <p className="mb-0">
                Önskar du alkholhaltiga drycker till maten?
              </p>
              <div>
                <input
                  type="radio"
                  id="alkohol-ja"
                  name="alkohol-ja"
                  value="ja"
                  checked={value === "ja"}
                  onChange={this.handleAlkohol}
                />
                <label for="alkohol-ja">Ja</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="alkohol-nej"
                  name="alkohol-nej"
                  value="nej"
                  checked={value === "nej"}
                  onChange={this.handleAlkohol}
                />
                <label for="alkohol-nej">Nej</label>
              </div>
            </div>
          </div>

          <div class="row">
            <label for="fraga" className="d-block">
              Passa på att ställa en fråga till brudparet?
            </label>
            <div>
              <input
                name="fraga"
                id="fraga"
                className="col-6"
                placeholder="Meningen med livet"
              />
            </div>
          </div>

          <div class="row mt-4">
            <label for="file">Skicka med en enkel bild på dig själv</label>
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
          <div id="filedata"></div>
          <p id="laddar"></p>
          <div class="row">
            <div class="col-md-12" id="alert-wrapper"></div>
          </div>
        </div>
        <button id="skicka" class="btn btn-primary" type="submit">
          Skicka
        </button>
      </form>
    );
  }
}

export default WeddingForm;
