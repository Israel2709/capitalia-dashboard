import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const mock = [
    {
      _id: "1",
      guest: {
        name: "John",
        lastname: "Doe",
      },
      checkIn: "2023-09-15",
      checkOut: "2023-09-20",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "2",
      guest: {
        name: "Jane",
        lastname: "Smith",
      },
      checkIn: "2023-09-18",
      checkOut: "2023-09-25",
      paymentStatus: "Not Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "3",
      guest: {
        name: "Robert",
        lastname: "Johnson",
      },
      checkIn: "2023-09-20",
      checkOut: "2023-09-22",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "4",
      guest: {
        name: "Maria",
        lastname: "Garcia",
      },
      checkIn: "2023-09-22",
      checkOut: "2023-09-25",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "5",
      guest: {
        name: "William",
        lastname: "Brown",
      },
      checkIn: "2023-09-25",
      checkOut: "2023-09-30",
      paymentStatus: "Not Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "6",
      guest: {
        name: "Olivia",
        lastname: "Smith",
      },
      checkIn: "2023-10-01",
      checkOut: "2023-10-05",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "7",
      guest: {
        name: "James",
        lastname: "Johnson",
      },
      checkIn: "2023-10-05",
      checkOut: "2023-10-10",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "8",
      guest: {
        name: "Sophia",
        lastname: "Brown",
      },
      checkIn: "2023-10-10",
      checkOut: "2023-10-15",
      paymentStatus: "Not Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "9",
      guest: {
        name: "Michael",
        lastname: "Wilson",
      },
      checkIn: "2023-10-15",
      checkOut: "2023-10-20",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "10",
      guest: {
        name: "Emma",
        lastname: "Garcia",
      },
      checkIn: "2023-10-20",
      checkOut: "2023-10-25",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "11",
      guest: {
        name: "Liam",
        lastname: "Davis",
      },
      checkIn: "2023-10-25",
      checkOut: "2023-10-30",
      paymentStatus: "Not Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "12",
      guest: {
        name: "Ava",
        lastname: "Smith",
      },
      checkIn: "2023-10-30",
      checkOut: "2023-11-05",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "13",
      guest: {
        name: "Noah",
        lastname: "Wilson",
      },
      checkIn: "2023-11-05",
      checkOut: "2023-11-10",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "14",
      guest: {
        name: "Olivia",
        lastname: "Davis",
      },
      checkIn: "2023-11-10",
      checkOut: "2023-11-15",
      paymentStatus: "Not Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "15",
      guest: {
        name: "Elijah",
        lastname: "Brown",
      },
      checkIn: "2023-11-15",
      checkOut: "2023-11-20",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "16",
      guest: {
        name: "Mia",
        lastname: "Garcia",
      },
      checkIn: "2023-11-20",
      checkOut: "2023-11-25",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "17",
      guest: {
        name: "Sebastian",
        lastname: "Smith",
      },
      checkIn: "2023-11-25",
      checkOut: "2023-11-30",
      paymentStatus: "Not Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "18",
      guest: {
        name: "Ava",
        lastname: "Davis",
      },
      checkIn: "2023-11-30",
      checkOut: "2023-12-05",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "19",
      guest: {
        name: "Lucas",
        lastname: "Smith",
      },
      checkIn: "2023-12-05",
      checkOut: "2023-12-10",
      paymentStatus: "Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
    {
      _id: "20",
      guest: {
        name: "Emma",
        lastname: "Johnson",
      },
      checkIn: "2023-12-10",
      checkOut: "2023-12-15",
      paymentStatus: "Not Paid",
      documentUrl:
        "https://na2.docusign.net/Signing/?ti=0be04b3cca3e48ce806b07617925a193",
    },
  ];

  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState(mock);

  const handleFilterChange = (event) => {
    const inputValue = event.target.value;
    setFilterValue(inputValue);

    // Filtra los datos en tiempo real mientras se escribe
    const filteredReservations = mock.filter(
      (item) =>
        item._id.includes(inputValue) ||
        `${item.guest.name} ${item.guest.lastname}`
          .toLowerCase()
          .includes(inputValue.toLowerCase())
    );

    // Actualiza el estado de los datos filtrados
    setFilteredData(filteredReservations);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 mb-3">
        <div className="container">
          {/* Imagen centrada */}
          <img
            src="https://le-de.cdn-website.com/3a25b95da9394e64971711b203c4f2af/dms3rep/multi/opt/wefdrtg-280w.png"
            alt="Imagen Centrada"
            className="mx-auto d-block"
          />
        </div>
      </nav>
      <div className="container">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="#">Reservations</a>
              </li>
              {/*<li className="list-group-item">
                <a href="#">Guests</a>
  </li>*/}
            </ul>
          </div>

          {/* Columna 2 */}
          <div className="col-9">
            <h1>Reservations list</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="filterValue" className="form-label">
                  Filter by Reservation ID or Guest Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="filterValue"
                  value={filterValue}
                  onChange={handleFilterChange}
                />
              </div>
            </form>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Guest</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Payment Status</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{`${item.guest.name} ${item.guest.lastname}`}</td>
                    <td>{item.checkIn}</td>
                    <td>{item.checkOut}</td>
                    <td>{item.paymentStatus}</td>
                    <td>
                      <a
                        href={item.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See document
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
