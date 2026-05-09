import { useState } from "react";

export default function CommentForm() {
  let [formData, setFromData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleFormChange = (e) => {
    setFromData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  let handleSubmit=(e)=>{
    console.log(formData);
    e.preventDefault();
  }

  return (
    <div>
      <h4>Give Comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleFormChange}
        />
        <br />
        <br />
        <label htmlFor="remarks"> Remark</label>
        <textarea
          placeholder="add remarks"
          name="remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleFormChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="rating"
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleFormChange}
        />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
