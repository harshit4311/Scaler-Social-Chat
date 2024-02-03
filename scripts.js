const message = document.getElementById("message");
const characterCount = document.querySelector(".character-count");
const postButton = document.getElementById("post");
const tweetList = document.getElementById("tweet-list");

message.addEventListener("input", () => {
  const messageLength = message.value.length;
  const remainingCharacters = 140 - messageLength;
  characterCount.textContent = `${messageLength}/140`;

  if (remainingCharacters < 0) {
    postButton.disabled = true;
    characterCount.style.color = "red";
  } 
  else {
    postButton.disabled = false;
    characterCount.style.color = "#777";
  }
});

postButton.addEventListener("click", () => {
  const messageText = message.value;
  console.log(`Posted message: ${messageText}`);

  // Add your code here to send the message to a server or store it locally.

  // Create a new tweet element
  const newTweet = document.createElement("div");
  newTweet.className = "tweet";
  newTweet.textContent = messageText;

  // Create a delete button for the tweet
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newTweet.remove();
  });

  // Append the delete button to the tweet
  newTweet.appendChild(deleteButton);

  // Add the new tweet to the top of the tweet list
  tweetList.insertBefore(newTweet, tweetList.firstChild);

  // Clear the message input field
  message.value = "";
});