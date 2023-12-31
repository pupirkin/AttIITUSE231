import React from "react";
import "./schedule.css";
import "../mainpage/mainpage.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Schedule() {
  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 className="head">Schedule</h1>
          <section className="dashboard">
            <div className="wrapper__dashboard">
              <div className="first-row">
                <div className="day-of-the-week">Monday</div>
              </div>
              <div className="disciplines">
                <div className="discipline">
                  <div className="time">08:00 - 08:50</div>
                  <div className="name">
                    Software Development Management and Reengineering, 'Lab' (Atymtayeva L.), Main, 702
                  </div>
                  <div className="status status__present"></div>
                </div>
                <div className="discipline">
                  <div className="time">09:00 - 09:50</div>
                  <div className="name">
                    History and philosophy of science, 'L' (Kydyrbekuly D.), Main, 901
                  </div>
                  <div className="status status__absent"></div>
                </div>
                <div className="discipline">
                  <div className="time">08:00 - 08:50</div>
                  <div className="name">
                    Software Development Management and Reengineering, 'Lab' (Atymtayeva L.), Main, 702
                  </div>
                  <div className="status status__present"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
