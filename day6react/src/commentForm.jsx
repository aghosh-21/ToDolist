import { useState } from "react";
import { useFormik } from 'formik';

// Destructure props here! by {}
export default function CommentForm({addnewComment}) {
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

  let handleSubmit = (e) => {
    e.preventDefault();
    if (formData.rating >= 1 && formData.rating <= 5) {
      
      addnewComment(formData); // newly add see this

      console.log(formData);
      setFromData({
        username: "",
        remarks: "",
        rating: 5,
      });
    } else {
      alert("rating must be in between 1to 5");
      return;
    }
  };

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
          min={1}
          max={5}
        />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
