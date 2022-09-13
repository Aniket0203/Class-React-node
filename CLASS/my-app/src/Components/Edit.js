import React, from "react";

function Edit() {
  return (
    <div>
      <h1>edit</h1>
      <input
        type="text"
        name="username"
        onChange={myfunc1}
        value={username}
        className="form-control"
        placeholder="name"
      />{" "}
      <br />
      <input
        type="text"
        name="usermobile"
        onChange={myfunc1}
        value={username}
        className="form-control"
        placeholder="name"
      />{" "}
      <br />
      <input
        type="text"
        name="useremail"
        onChange={myfunc1}
        value={username}
        className="form-control"
        placeholder="name"
      />{" "}
      <br />
      <input
        type="text"
        name="userpassword"
        onChange={myfunc1}
        value={username}
        className="form-control"
        placeholder="name"
      />{" "}
      <br />
    </div>
  );
}

export default Edit;
