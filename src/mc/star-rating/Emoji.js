import React from "react";

const Emoji = ({ rating }) => {
  const EmojiIcons = [
    {
      emoji: "😢",
      rating: 1,
    },
    {
      emoji: "😞",
      rating: 2,
    },
    {
      emoji: "😐",
      rating: 3,
    },
    {
      emoji: "😀",
      rating: 4,
    },
    {
      emoji: "😎",
      rating: 5,
    },
  ];

  // filter the data matching the rating value and return the respective emoji icon. Ideally it returns only 1 emoji
  const emoji = EmojiIcons.filter((item) => item.rating === rating).map(
    (subitem) => {
      return subitem.emoji;
    }
  );

  return (
    <>
      <div className="emojiBox">
        <h1>{emoji}</h1>
      </div>
    </>
  );
};

export default Emoji;
