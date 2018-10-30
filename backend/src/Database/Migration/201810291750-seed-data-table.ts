import data from "./data.json";

export const up = function up(pgm: any) {
    const insertSql = `insert into data (id, city, start_date, end_date, price, status, color)
    values($1, $2, $3, $4, $5, $6, $7)`;
    data.forEach((row) => {
        pgm.db.query(insertSql, [
            row.id,
            row.city,
            row.start_date,
            row.end_date,
            row.price,
            row.status,
            row.color,
        ]);
    });

};

export const down = function down(pgm: any) {
    pgm.db.query("delete from data");
};