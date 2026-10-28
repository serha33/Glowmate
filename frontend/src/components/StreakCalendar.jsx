import { useState } from "react";
import "./StreakCalendar.css";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const completedDates = ["2026-10-24", "2026-10-25", "2026-10-26"];

function StreakCalendar() {
  const [displayedMonth, setDisplayedMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const year = displayedMonth.getFullYear();
  const month = displayedMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  // Convert Sunday-first indexing to Monday-first indexing.
  const startingDay = (firstDay + 6) % 7;

  // Get the total number of days in the selected month.
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const monthName = displayedMonth.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  function changeMonth(offset) {
    setDisplayedMonth(new Date(year, month + offset, 1));
  }

  function formatDate(day) {
    const monthString = String(month + 1).padStart(2, "0");
    const dayString = String(day).padStart(2, "0");

    return `${year}-${monthString}-${dayString}`;
  }

  return (
    <section className="streak-calendar">
      <div className="calendar-header">
        <button
          className="calendar-nav"
          onClick={() => changeMonth(-1)}
          aria-label="Previous month"
        >
          &#8249;
        </button>

        <h2>{monthName}</h2>

        <button
          className="calendar-nav"
          onClick={() => changeMonth(1)}
          aria-label="Next month"
        >
          &#8250;
        </button>

        <div className="calendar-legend">
          <span className="legend-dot"></span>
          <span>Completed</span>
        </div>
      </div>

      <div className="calendar-grid">
        {weekdays.map((day) => (
          <div className="weekday" key={day}>
            {day}
          </div>
        ))}

        {Array.from({ length: startingDay }, (_, index) => (
          <div className="calendar-empty" key={`empty-${index}`} />
        ))}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const dateString = formatDate(day);

          const isCompleted = completedDates.includes(dateString);

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const isFuture =
            new Date(year, month, day) >
            new Date(today.getFullYear(), today.getMonth(), today.getDate());

          const classNames = [
            "calendar-date",
            isCompleted ? "completed" : "",
            isToday ? "today" : "",
            isFuture ? "future" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div className="calendar-date-cell" key={dateString}>
              <span
                className={classNames}
                title={isCompleted ? "You completed a habit on this day" : ""}
              >
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StreakCalendar;
