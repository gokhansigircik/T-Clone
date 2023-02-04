const tweetInput = document.getElementById("tweet-input");
const addTweetButton = document.getElementById("add-tweet-button");
const tweetList = document.getElementById("tweet-list");

addTweetButton.addEventListener("click", function() {
  const tweet = tweetInput.value;
  if (tweet) {
    const tweetElement = document.createElement("li");
    tweetElement.classList.add("tweet")};
    tweetElement.innerHTML = `
      <div class="tweet-text">${tweet}</div>
      <button class="delete-tweet-button">Delete</button>
    `});
    tweetList.appendChild();