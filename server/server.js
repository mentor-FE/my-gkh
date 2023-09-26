const mysql = require('mysql2/promise');
const fs = require('fs').promises;

async function getEnterprises(connection) {
    const [data] = await connection.execute('SELECT * FROM enterprises');
    return data;
}

async function getHomes(connection) {
    const [data] = await connection.execute('SELECT * FROM homes');
    return data;
}

async function getFlats(connection) {
    const [data] = await connection.execute('SELECT * FROM flats');
    return data;
}

async function fetchData() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mygkhdb'
    });

    const enterprisesData = await getEnterprises(connection);
    const homesData = await getHomes(connection);
    const flatsData = await getFlats(connection);
    
    await connection.end();

    for (let enterprise of enterprisesData) {
        enterprise.homes = homesData.filter(home => home.enterprise_id === enterprise.id);
        
        for (let home of enterprise.homes) {
            home.flats = flatsData.filter(flat => flat.home_id === home.id);
        }
    }

    return enterprisesData;
}

async function main() {
    const data = await fetchData();
    await fs.writeFile('../gkh-next/public/data.json', JSON.stringify(data, null, 2));
    console.log('Данные успешно сохранены в файл data.json');
}

main().catch(console.error);
