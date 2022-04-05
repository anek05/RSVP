import React from "react";
import axios from "axios";
import "./WeddingForm.css";

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
    var spinner = document.getElementById("spinner");
    var skicka = document.getElementById("skicka");
    skicka.hidden = true;
    spinner.hidden = false;

    var formData = new FormData();

    var nameInput = document.getElementById("name").value;
    var mailInput = document.getElementById("email").value;
    var allergierInput = document.getElementById("allergier").value;
    formData.append("namn", nameInput);
    formData.append("email", mailInput);
    formData.append("allergier/kost", allergierInput);

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
    formData.append("kommer", "ja");
    axios
      .post(
        "https://script.google.com/macros/s/AKfycbzor2X6JTr8wPg00D1tWEIy0h0rb0J0P3OMNJRGFXJu8qL3AbRGImAZTsizVr2_TKIuPQ/exec",
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
          spinner.hidden = true;
          skicka.hidden = false;
        }
      });
  }

  showAndHideForm(answer) {
    console.log("klick klick");
    console.log(answer);
    if (answer === "ja") {
      // document.getElementById("kommer-du").hidden = true;
      document.getElementById("not-coming-form").hidden = true;
      document.getElementById("rsvp-form").hidden = false;
      document.getElementById("rsvp-form").scrollIntoView();
    } else if (answer === "nej") {
      // document.getElementById("kommer-du").hidden = true;
      document.getElementById("not-coming-form").hidden = false;
      document.getElementById("rsvp-form").hidden = true;
      document.getElementById("rsvp-form").scrollIntoView();
    }
  }

  handleNo(e) {
    e.preventDefault();
    console.log(":(");

    var formData = new FormData();
    formData.append("namn", document.getElementById("not-coming-name").value);
    formData.append("kommer", "nej");

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbzor2X6JTr8wPg00D1tWEIy0h0rb0J0P3OMNJRGFXJu8qL3AbRGImAZTsizVr2_TKIuPQ/exec",
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
          document.getElementById("not-coming-form").reset();
          document.getElementById("not-coming-spinner").hidden = true;
          document.getElementById("not-coming-skicka").hidden = false;
        }
      });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div id="kommer-du" className="text-center mt-5">
          <button
            className="btn btn-secondary col-3 col-md-3 mx-3"
            value="ja"
            onClick={() => this.showAndHideForm("ja")}
          >
            Jag kommer
          </button>
          <button
            className="btn btn-secondary col-5 col-md-3 mx-3"
            value="nej"
            onClick={() => this.showAndHideForm("nej")}
          >
            Jag kan dessvärre inte närvara
          </button>
        </div>

        <form
          id="not-coming-form"
          method="POST"
          onSubmit={this.handleNo}
          hidden
        >
          <label for="not-coming-name" className="d-block">
            Namn
          </label>
          <input
            name="not-coming-name"
            id="not-coming-name"
            placeholder="Namn"
            className="form-control w-25"
            required
          />
          <button
            id="not-coming-skicka"
            class="btn send-button text-light my-3"
            type="submit"
          >
            Skicka
          </button>
          <div
            id="not-coming-spinner"
            className="spinner-border"
            role="status"
            hidden
          ></div>
        </form>

        <form
          id="rsvp-form"
          className="form-group"
          action=""
          method="POST"
          onSubmit={this.handleSubmit}
          hidden
        >
          <div class="mt-5">
            <div className="row">
              <div className="col">
                <label for="name" className="d-block">
                  Namn
                </label>
                <input
                  name="name"
                  id="name"
                  placeholder="Namn"
                  className="form-control w-75"
                  required
                />
              </div>
              <div className="col">
                <label for="email">Mailadress</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="d-block form-control w-75"
                  placeholder="Mailadress"
                  required
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <label for="allergier" className="d-block">
                  Allergier eller kost
                </label>
                <input
                  name="allergier"
                  id="allergier"
                  placeholder="Allergier"
                  className="form-control w-75"
                />
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

            <div class="row mt-2">
              <label for="fraga" className="d-block">
                Passa på att ställa en fråga till brudparet?
              </label>
              <div>
                <input
                  name="fraga"
                  id="fraga"
                  className="col form-control w-50"
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
                placeholder="Bild"
                required
                onChange={this.handleFileSelect}
              />
            </div>
            <div hidden id="filedata"></div>
            <p id="laddar"></p>
            <div
              id="spinner"
              className="spinner-border"
              role="status"
              hidden
            ></div>
          </div>
          <button id="skicka" class="btn send-button text-light" type="submit">
            Skicka
          </button>
        </form>
      </div>
    );
  }
}

export default WeddingForm;
