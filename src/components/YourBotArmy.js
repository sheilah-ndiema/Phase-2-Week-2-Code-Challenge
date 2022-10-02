import React from "react";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  //your bot army code here...

  const mapBots = bots.map(bot =>
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={removeBot}
      deleteBot={deleteBot}
    />)


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
