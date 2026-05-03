import { useState } from "react";
import { STARTING_STATS } from "../../../../shared/gameConfig.js";
import { fetchEvent } from "../../services/eventApi.js";

export function Game() {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleTravel() {
    setIsLoading(true);
    setError("");

    try {
      const nextEvent = await fetchEvent();
      setEvent(nextEvent);
    } catch (err) {
      setEvent(null);
      setError("The trail has gone quiet. Make sure the server is running and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="game-shell">
      <section className="game-panel">
        <header className="game-header">
          <p className="eyebrow">AI Oregon Trail</p>
          <h1>Lead your party west.</h1>
          <p className="intro">
            Each day on the trail brings a new decision. Start with your supplies, then travel into the unknown.
          </p>
        </header>

        <section className="stats-grid" aria-label="Starting party stats">
          <div>
            <span>Health</span>
            <strong>{STARTING_STATS.health}</strong>
          </div>
          <div>
            <span>Food</span>
            <strong>{STARTING_STATS.food}</strong>
          </div>
          <div>
            <span>Morale</span>
            <strong>{STARTING_STATS.morale}</strong>
          </div>
        </section>

        <button className="travel-button" onClick={handleTravel} disabled={isLoading}>
          {isLoading ? "Traveling..." : "Travel"}
        </button>

        {error && <p className="status error">{error}</p>}

        {event && (
          <section className="event-card" aria-live="polite">
            <h2>{event.title}</h2>
            <p>{event.description}</p>

            <div className="choices">
              {event.choices.map((choice) => (
                <article className="choice" key={choice.text}>
                  <h3>{choice.text}</h3>
                  <dl>
                    {Object.entries(choice.effects).map(([stat, value]) => (
                      <div key={stat}>
                        <dt>{stat}</dt>
                        <dd>{value > 0 ? `+${value}` : value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
