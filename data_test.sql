/*
    Suppliers
*/

INSERT INTO `calves_db`.`suppliers`
(
`name`
)
VALUES
(
"Supplier - 1"
),
(
"Supplier - 2"
),
(
"Supplier - 3"
),
(
"Supplier - 4"
),
(
"Supplier - 5"
),
(
"Supplier - 6"
),
(
"Supplier - 7"
),
(
"Supplier - 8"
),
(
"Supplier - 9"
),
(
"Supplier - 10"
),
;



INSERT INTO `calves_db`.`calves`
(
`name`,
`color`,
`marmoleo`,
`weight`,
`price`,
`supplier_id`,
`description`)
VALUES
(
"Calve type I - test 1",
3,
1,
16,
5000,
1,
"Color blanco"
),
(
"Calve type I - test 2",
4,
2,
18,
4000,
2,
"Color cáfe"
),
(
"Calve type I - test 3",
5,
1,
22,
8000,
3,
"Color crema"
),
(
"Calve type I - test 4",
3,
1,
24,
9000,
4,
"Color blanco"
),
(
"Calve type I - test 5",
5,
1,
16,
7500,
5,
"Color negro"
),
(
"Calve type II - test 1",
1,
3,
10,
5000,
6,
"Color blanco"
),
(
"Calve type II - test 2",
2,
4,
12,
4000,
7,
"Color cáfe"
),
(
"Calve type II - test 3",
6,
5,
14,
8000,
8,
"Color crema"
),
(
"Calve type II - test 4",
7,
3,
24,
9000,
9,
"Color blanco"
),
(
"Calve type II - test 5",
1,
4,
28,
7500,
10,
"Color negro"
);



/*
    Diets
*/

INSERT INTO `calves_db`.`diets`
(
`breakfast`,
`eat`,
`dinner`
)
VALUES
(
"desayuno I",
"Comida I",
"Cena I"
),
(
"desayuno II",
"Comida II",
"Cena II"
),
(
"desayuno III",
"Comida III",
"Cena III"
),
(
"desayuno IV",
"Comida IV",
"Cena IV"
),
(
"desayuno V",
"Comida V",
"Cena V"
);


/*
    Sensor_data
*/

INSERT INTO `calves_db`.`sensor_data`
(
`temperature`,
`respiratory_frequency`,
`heart_rate`,
`blood_frequency`,
`calves_id`,
`description`)
VALUES
(
39.6,
85,
22,
11,
6,
"No come"),
(
39.7,
81,
21,
11,
6,
"No toma mucha agua"),
(
39.7,
87,
25,
13,
6,
"No sale a caminar");