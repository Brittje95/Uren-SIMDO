import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import bootstrapPlugin from "@fullcalendar/bootstrap";
import nlLocale from "@fullcalendar/core/locales/nl";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"; // needs additional webpack config!

import NewRegistrationForm from "./NewRegistrationForm";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

export default function Calendar() {
  let dummyEvents = [
    { title: "Demo event 1", date: "2022-06-13" },
    { title: "Demo event 2", date: "2022-06-14T08:45" },
    { title: "Demo event 3", date: new Date().getTime() },
  ];

  const [events, useEvents] = useState(dummyEvents);

  const handleDateClick = (info: { dateStr: any }) => {
    // bind with an arrow function
    alert("Clicked on: " + info.dateStr);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8} lg={10}>
          <FullCalendar
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              listPlugin,
              timeGridPlugin,
              bootstrapPlugin,
            ]}
            themeSystem="bootstrap"
            initialView="timeGridWeek"
            nowIndicator={true}
            headerToolbar={{
              start: "prev,next today",
              center: "title",
              end: "listWeek,timeGridWeek,dayGridMonth",
            }}
            weekends={true}
            locales={[nlLocale]}
            titleFormat={{
              month: "long",
              year: "numeric",
              day: "numeric",
              meridiem: "short",
            }}
            events={events}
            eventTimeFormat={
              // like '14:30:00'
              {
                hour: "2-digit",
                minute: "2-digit",
                meridiem: "short",
              }
            }
            dateClick={handleDateClick}
          />
        </Col>
        <Col xs={0} md={4} lg={2}>
          <NewRegistrationForm
            onSubmit={(eventInfo: { title: string; date: string }) => {
              console.log("lala");
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useEvents([...events, eventInfo]);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
