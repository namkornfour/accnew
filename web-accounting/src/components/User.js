import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);

  const getData = async() => {
    await axios.get(process.env.REACT_APP_API_URL + "/api/user")
      .then(res =>	{							
				setUsers(res.data)
				console.log(res.data);
			})
      .catch((err) => console.log(err));
  };

	const data = Array.from(users);

	const list = data.map((value) => 
		<li key={value.id}>
			{value.id}
			{value.hostname}
			{value.workdate}
		</li>
	);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
			<ul>{list}</ul>
    </div>
  );
}

export default User;