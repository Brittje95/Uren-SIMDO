import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"; // needs additional webpack config!
//import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

export default function NewRegistrationForm(props: any) {
  const [date, setDate] = useState("");
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");
  const [breakTime, setBreak] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form>
      <div className="mb-4 mb-md-5">
        <h6 className="text-gray">Nieuwe registratie</h6>
      </div>
      <div className="form-group d-flex align-items-center justify-content-between">
        <label htmlFor="date" className="mr-3">
          Datum:
        </label>
        <input
          id="date"
          type="date"
          name="date"
          className="form-control w-75 form-item"
          onChange={(ev) => setDate(ev.target.value ?? "")}
        />
      </div>

      <div className="form-group d-flex align-items-center justify-content-between">
        <label htmlFor="vanaf" className="mr-3">
          Vanaf:
        </label>
        <input
          id="vanaf"
          type="time"
          className="form-control w-75 form-item"
          onChange={(ev) => setStart(ev.target.value ?? "")}
        />
      </div>

      <div className="form-group d-flex align-items-center justify-content-between">
        <label htmlFor="tot" className="mr-3">
          Tot:
        </label>
        <input
          id="tot"
          type="time"
          className="form-control w-75 form-item"
          onChange={(ev) => setEnd(ev.target.value ?? "")}
        />
      </div>

      <div className="form-group d-flex align-items-center justify-content-between">
        <label htmlFor="pauze" className="mr-3">
          Pauzeduur:
        </label>
        <input
          id="pauze"
          type="time"
          className="form-control w-75 form-item"
          onChange={(ev) => setBreak(ev.target.value ?? "")}
        />
      </div>

      <div className="form-group d-flex align-items-center justify-content-between">
        <label htmlFor="klanten" className="mr-3">
          Klant:
        </label>
        <select
          id="klanten"
          name="klanten"
          defaultValue="select"
          className="form-item"
        >
          <option value="select" disabled>
            Selecteer
          </option>
          <option value="nextempire">Next Empire</option>
          <option value="simdo">SIMDO</option>
          <option value="triple">Triple</option>
        </select>
      </div>

      <div className="form-group d-flex align-items-center justify-content-between">
        <label htmlFor="klanten" className="mr-3">
          Project:
        </label>
        <select
          id="klanten"
          name="klanten"
          defaultValue="select"
          className="form-item"
        >
          <option value="select" disabled>
            Selecteer
          </option>
          <option value="vle">VLE </option>
          <option value="rararadio">RARARADIO </option>
        </select>
      </div>

      <div className="form-group d-flex align-items-center justify-content-between">
        <label htmlFor="klanten" className="mr-3">
          Ticket:
        </label>
        <select
          id="klanten"
          name="klanten"
          defaultValue="select"
          className="form-item"
        >
          <option value="select" disabled>
            Selecteer
          </option>
          <option value="VLE-593">VLE-593 Test implementatie</option>
          <option value="VLE-592">VLE-592 VLE optimalisatatie</option>
          <option value="VLE-591">
            VLE-591 VLE backend nestjs fastify migratie
          </option>
        </select>
      </div>

      {/* <div className="form-group d-flex align-items-center justify-content-between">
          <label htmlFor="default" className="mr-3">
            Default:
          </label>
          <input id="default" type="text" className="form-control w-75" />
        </div>

        <div className="form-group d-flex align-items-center justify-content-between">
          <label htmlFor="disabled" className="mr-3">
            Disabled:
          </label>
          <input
            id="disabled"
            type="text"
            className="form-control w-75"
            disabled
          />
        </div>
        <div className="form-group has-success d-flex align-items-center justify-content-between">
          <label htmlFor="success" className="mr-3">
            Success:
          </label>
          <input
            id="success"
            type="text"
            className="form-control is-valid w-75"
          />
        </div>
        <div className="form-group has-danger d-flex align-items-center justify-content-between">
          <label htmlFor="error" className="mr-3">
            Error:
          </label>
          <input
            id="error"
            type="text"
            className="form-control is-invalid w-75"
          />
        </div> */}

      <div className="form-group d-flex align-items-center justify-content-between">
        <label htmlFor="declarabel" className="mr-3">
          Declarabel:
        </label>
        <div className="form-group d-flex justify-content-end mb-4">
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input form-item"
                type="checkbox"
              ></input>
              <span className="form-check-x"></span>
              <span className="form-check-sign"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="form-group d-flex justify-content-between mb-2">
        <label htmlFor="textarea" className="mr-3">
          Notities:
        </label>
        <textarea
          id="textarea"
          className="form-control w-75 form-item"
          cols={30}
          rows={10}
          onChange={(ev) => setNotes(ev.target.value ?? "")}
        ></textarea>
      </div>
      <div className="form-group d-flex justify-content-end mb-4">
        {/* <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox"></input>
              <span className="form-check-x"></span>
              <span className="form-check-sign"></span>Ik ga akkoord met de
              voorwaarden
            </label>
          </div> */}
      </div>
      <div className="d-flex justify-content-end">
        <div className="d-flex">
          <button
            className="btn btn-sm mr-3 btn-primary border-dark"
            type="button"
            onClick={(event) => {
              const startDate = new Date(date);
              startDate.setHours(Number(startTime.split(":")[0]));
              startDate.setMinutes(Number(startTime.split(":")[1]));

              const endDate = new Date(date);
              endDate.setHours(Number(endTime.split(":")[0]));
              endDate.setMinutes(Number(endTime.split(":")[1]));

              props.onSubmit({
                title: "Pauze: " + breakTime + "\n Notities: " + notes,
                start: startDate,
                end: endDate,
              });
              console.log(event);
            }}
          >
            <span className="btn-text">Toevoegen</span>
          </button>
          {/* <button className="btn btn-sm btn-primary" type="button">
              <span className="btn-text">Cancel</span>
            </button> */}
        </div>
      </div>
    </form>
  );
}
