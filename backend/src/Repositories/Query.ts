const Query = {
    DATA_LIST: `select id, city, start_date as "startDate",
    end_date as "endDate", color, price, status  from data`,
    DATA_DELETE: "delete from data where id = $1",
    DATA_GET_BY_ID: "select * from data where id = $1",
    DATA_INSERT: `insert into data (id, city, start_date, end_date, price, status, color)
     values($1, $2, $3, $4, $5, $6, $7) returning *`,
    DATA_UPDATE: `update data set city = $1, start_date = $2, end_date=$3, price=$4, status=$5,
    color=$6 where id= $7`,
};

export default Query;