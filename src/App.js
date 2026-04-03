import React, { useState } from 'react';

export default function App() {
  // 1. Initial State for Comments
  const [comments, setComments] = useState([
    { id: 1, author: 'jack', text: '这是一条评论回复', date: '2023-11-11', likes: 100 },
    { id: 2, author: 'tom', text: 'This is another comment', date: '2023-11-15', likes: 120 },
    { id: 3, author: 'lucy', text: 'I love this!', date: '2023-11-10', likes: 80 }
  ]);

  // 2. Initial State for Active Tab ('latest' or 'hottest')
  const [activeTab, setActiveTab] = useState('latest');

  // --- YOUR PRACTICE AREA START ---

  // TODO: Function 1 - Sorting
  // Create a variable (e.g., sortedComments) that sorts the `comments` array 
  // based on the `activeTab` state. 
  const sortedComments = comments.slice().sort((a, b) => {
    if (activeTab === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return b.likes - a.likes;
    }
  }); // Replace this with your sorting logic

  // TODO: Function 2 - Delete
  // Create a function that takes an `id` and filters it out of the `comments` state
  const handleDelete = (id) => {
    // Your delete logic here using setComments
    const updatedComments = comments.filter(comment => comment.id != id);
    setComments(updatedComments);
  };

  // TODO: Function 3 - Highlight (Tab Switching)
  // Create a function to handle clicking the tabs and updating the `activeTab` state
  const handleTabClick = (tabName) => {
    // Your logic to update the tab state
    setActiveTab(tabName);
  };

  // --- YOUR PRACTICE AREA END ---

  return (
    <>
      {/* Injecting the CSS directly so you don't need a separate file */}
      <style>{cssStyles}</style>

      <div className="comment-app">
        {/* Header & Tabs */}
        <div className="header">
          <span className="title">评论 {comments.length}</span>
          <div className="tabs">
            {/* TODO: Function 3 (Highlighting) - Apply 'active' class conditionally based on activeTab */}
            <span
              className={`tab-item ${activeTab === 'latest'? 'active': ''}`}
              onClick={() => handleTabClick('latest')}
            >
              最新
            </span>
            <span className="divider">|</span>
            <span
              className={`tab-item ${activeTab === 'hottest'? 'active': ''}`}
              onClick={() => handleTabClick('hottest')}
            >
              最热
            </span>
          </div>
        </div>

        {/* Input Area (Static for now) */}
        <div className="input-area">
          <div className="avatar placeholder-avatar">🐵</div>
          <input type="text" placeholder="发一条友善的评论" className="comment-input" />
          <button className="submit-btn">发布</button>
        </div>

        {/* Comment List */}
        <div className="comment-list">

          {/* TODO: Function 4 - Mapping */}
          {/* Iterate over your `sortedComments` here and render the HTML block below for each item */}
          {sortedComments.map(item => (
            <div className="comment-item">
              <div className="avatar placeholder-avatar">👤</div>
              <div className="comment-content">
                <div className="author">jack {item.author}</div>
                <div className="text">这是一条评论回复 {item.text}</div>
                <div className="footer">
                  <span>{item.date}</span>
                  <span>点赞数:{item.likes}</span>

                  {/* Delete Button */}
                  <span
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    删除
                  </span>
                </div>
              </div>
            </div>
          ))}
          

        </div>
      </div>
    </>
  );
}

// Minimal CSS to make it look like your screenshot
const cssStyles = `
  .comment-app { max-width: 800px; margin: 40px auto; font-family: sans-serif; color: #333; }
  .header { display: flex; align-items: center; margin-bottom: 20px; }
  .title { font-size: 18px; font-weight: bold; margin-right: 20px; }
  .tabs { font-size: 14px; color: #999; }
  .tab-item { cursor: pointer; }
  .tab-item.active { color: #000; font-weight: bold; }
  .divider { margin: 0 10px; }
  .input-area { display: flex; align-items: center; margin-bottom: 30px; background-color: #f8f9fa; padding: 15px; border-radius: 8px; }
  .placeholder-avatar { font-size: 24px; background: #eee; border-radius: 50%; padding: 5px; margin-right: 15px; }
  .comment-input { flex-grow: 1; padding: 10px; border: none; background-color: #f1f3f5; border-radius: 4px; outline: none; }
  .submit-btn { margin-left: 15px; padding: 10px 20px; background-color: #73c9e5; color: white; border: none; border-radius: 4px; cursor: pointer; }
  .comment-item { display: flex; padding: 15px 0; border-bottom: 1px solid #eee; }
  .comment-content { flex-grow: 1; }
  .author { font-size: 14px; color: #666; margin-bottom: 5px; }
  .text { font-size: 16px; margin-bottom: 10px; }
  .footer { font-size: 12px; color: #999; display: flex; gap: 20px; }
  .delete-btn { cursor: pointer; }
  .delete-btn:hover { color: #ff4d4f; }
`;