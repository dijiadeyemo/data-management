export const up = function up(pgm: any) {
    pgm.createTable("data", {
        id: "id",
        city: { type: "varchar(200)", notNull: true },
        start_date: { type: "date", notNull: true },
        end_date: { type: "date", notNull: true },
        color: { type: "varchar(7)", notNull: true },
        price: { type: "numeric(12,2)", notNull: true },
        status: { type: "varchar(1000)", notNull: true },
    });
};

export const down = function down(pgm: any) {
    pgm.dropTable("data");
};