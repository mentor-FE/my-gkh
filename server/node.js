import React, { useState, useEffect } from 'react';
// get the client
const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'mygkh'
// });

// connection.execute(
//   'SELECT flats.* FROM flats JOIN homes ON flats.home_id = homes.id WHERE homes.value = ?',
//   ['ТСН "КИРПИЧНАЯ 17"'],
//   function(err, results, fields) {
//     console.log(results); // results содержит строки, возвращенные сервером
//     console.log(fields); // fields содержит дополнительные метаданные о результатах, если они доступны
//   }
// ); 

function HomeFlats({ homeValue = 'ТСН "КИРПИЧНАЯ 17"' }) {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'my-gkh'
      });

      const [rows] = await connection.execute(
        'SELECT flats.* FROM flats JOIN homes ON flats.home_id = homes.id WHERE homes.value = ?',
        [homeValue]
      );

      setFlats(rows);

      // Закрыть соединение после завершения
      connection.end();
    }

    fetchData();
  }, [homeValue]);

  return (
    <div>
      <h2>Помещения для дома: {homeValue}</h2>
      <ul>
        {flats.map(flat => (
          <li key={flat.id}>{flat.valueFlat}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomeFlats;