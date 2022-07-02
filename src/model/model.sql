CREATE EXTENSION
IF NOT EXISTS "uuid-ossp";

-- * Create Company Table: ...
CREATE TABLE company
(
    company_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    company_name TEXT NOT NULL,
    company_img TEXT
);

-- * Create Complex Table: ...
CREATE TABLE complex
(
    complex_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    complex_name TEXT NOT NULL,
    company_id uuid NOT NULL,
    FOREIGN KEY(company_id) REFERENCES company(company_id)
    ON DELETE CASCADE
);

-- * Create Rooms Table: ...
CREATE TABLE rooms
(
    room_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    room_location TEXT NOT NULL,
    room_count INT NOT NULL,
    room_kv_metr NUMERIC NOT NULL,
    room_1kv_price NUMERIC NOT NULL,
    complex_id uuid NOT NULL,
    FOREIGN KEY(complex_id) REFERENCES complex(complex_id)
    ON DELETE CASCADE
);

-- * Create Banks Table: ...
CREATE TABLE banks
(
    bank_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    bank_name TEXT NOT NULL,
    bank_img TEXT NOT NULL,
    bank_budget NUMERIC NOT NULL,
    how_long INT
    [] NOT NULL
);

    -- * COMPANY
    INSERT INTO company
        (company_name, company_img)
    VALUES
        ('Murad Buildings', 'https://www.mbc.uz/includes/images/new_layout/logo.svg'),
        ('Parkwood Building', 'https://novastroy.uz/assets/svg/logo.svg'),
        ('Vek Building', 'https://vekbuilding.uz/img/logo.png'),
        ('East-West Enginering', 'https://eastwest-eng.com/img/logo.svg');


    -- * COMPLEX
    INSERT INTO 
    complex
        (complex_name, company_id)
    VALUES
        ('Kislarod', 'f7dbc2c4-5430-4e32-8592-43a2cdac7612'),
        ('Nestone', 'f7dbc2c4-5430-4e32-8592-43a2cdac7612'),
        ('Nova Stroy', '98a9665c-018b-4063-9712-7f6c5fdd7a76'),
        ('Qorasuv Plaza', '68c31ad6-820b-4985-88e5-9a88ce8e6cd7'),
        ('Parkent Avenue', '68c31ad6-820b-4985-88e5-9a88ce8e6cd7'),
        ('Manhettan', '995710aa-c0b9-4735-8ff8-c9859f03d23e');

    -- * ROOMS: ...
    -- * KISLAROD
    INSERT INTO rooms
        (
        room_location,
        room_count,
        room_kv_metr,
        room_1kv_price,
        complex_id
        )
    VALUES
        ('Yakkasaroy, Rakat Boshi mahallasi, 1-dom, 1-etaj', 5, 205.2, 5000000000, '06fc5933-14a1-4aa5-9de2-ea00e4b8cc4e'),
        ('Yakkasaroy, Rakat Boshi mahallasi, 2-dom, 1-etaj', 3, 81.44, 5000000000, '06fc5933-14a1-4aa5-9de2-ea00e4b8cc4e'),
        ('Yakkasaroy, Rakat Boshi mahallasi, 3-dom, 1-etaj', 4, 146.28, 5000000000, '06fc5933-14a1-4aa5-9de2-ea00e4b8cc4e');

    -- * NESTONE
    INSERT INTO rooms
        (
        room_location,
        room_count,
        room_kv_metr,
        room_1kv_price,
        complex_id
        )
    VALUES
        ('Shayxontoxur, Islom karimov kochasi, 1-dom, 1-etaj', 6, 310.42, 4500000000, '6bcfc815-a1e3-45e0-bbd1-91c9a2fff450'),
        ('Shayxontoxur, Islom karimov kochasi, 2-dom, 1-etaj', 3, 104.23, 4700000000, '6bcfc815-a1e3-45e0-bbd1-91c9a2fff450'),
        ('Shayxontoxur, Islom karimov kochasi, 3-dom, 1-etaj', 4, 146.28, 4600000000, '6bcfc815-a1e3-45e0-bbd1-91c9a2fff450');

    -- * NOVASTROY
    INSERT INTO rooms
        (
        room_location,
        room_count,
        room_kv_metr,
        room_1kv_price,
        complex_id
        )
    VALUES
        ('Mirobod, Miranshaha-5, 1-dom, 1-etaj', 5, 210.42, 4000000000, '8d665704-f359-4703-9045-d61c87d32648'),
        ('Mirobod, Miranshaha-5, 2-dom, 1-etaj', 2, 84.23, 4000000000, '8d665704-f359-4703-9045-d61c87d32648'),
        ('Mirobod, Miranshaha-5, 3-dom, 1-etaj', 3, 116.28, 4000000000, '8d665704-f359-4703-9045-d61c87d32648');


    -- * QORASUV PLAZA
    INSERT INTO rooms
        (
        room_location,
        room_count,
        room_kv_metr,
        room_1kv_price,
        complex_id
        )
    VALUES
        ('Mirzo Ulugbek, Qorasuv-6, 1-dom, 1-etaj', 5, 220.42, 4200000000, '76b4e6f1-ddef-497f-86eb-3afa44097971'),
        ('Mirzo Ulugbek, Qorasuv-6, 2-dom, 1-etaj', 2, 90.23, 4100000000, '76b4e6f1-ddef-497f-86eb-3afa44097971'),
        ('Mirzo Ulugbek, Qorasuv-6, 3-dom, 1-etaj', 3, 136.28, 4000000000, '76b4e6f1-ddef-497f-86eb-3afa44097971');


    -- * PARKEN AVENUE
    INSERT INTO rooms
        (
        room_location,
        room_count,
        room_kv_metr,
        room_1kv_price,
        complex_id
        )
    VALUES
        ('Mirzo Ulugbek, Parkent, 1-dom, 1-etaj', 6, 340.82, 4600000000, 'de862916-7538-41f2-a4ba-ce45d69bbe4f'),
        ('Mirzo Ulugbek, Parkent, 2-dom, 1-etaj', 5, 274.23, 4500000000, 'de862916-7538-41f2-a4ba-ce45d69bbe4f'),
        ('Mirzo Ulugbek, Parkent, 3-dom, 1-etaj', 3, 196.28, 4400000000, 'de862916-7538-41f2-a4ba-ce45d69bbe4f');

    -- * MANHETTAN
    INSERT INTO rooms
        (
        room_location,
        room_count,
        room_kv_metr,
        room_1kv_price,
        complex_id
        )
    VALUES
        ('Mirzo Ulugbek, Asaka, 1-dom, 1-etaj', 6, 330.92, 4100000000, 'f28f8c68-3087-45bb-ae92-b783e08b9b9f'),
        ('Mirzo Ulugbek, Asaka, 2-dom, 1-etaj', 5, 274.23, 4000000000, 'f28f8c68-3087-45bb-ae92-b783e08b9b9f'),
        ('Mirzo Ulugbek, Asaka, 3-dom, 1-etaj', 3, 196.28, 3900000000, 'f28f8c68-3087-45bb-ae92-b783e08b9b9f');


    INSERT INTO banks
        ( bank_name,
        bank_img,
        bank_budget,
        how_long )
    VALUES
        ( 'Asia Alliance Bank', 'https://aab.uz/bitrix/templates/main/images/logo.png', 90000000000, ARRAY
    [ 12, 36 ] ),
    ( 'Infin Bank', 'https://www.infinbank.com/upload/icons/full-logo.svg', 80000000000, ARRAY[ 12, 36 ] ),
    ( 'KDB Bank', 'https://kdb.uz/img/navbar/KDB-logo.svg', 85000000000, ARRAY[ 12, 36 ] );


    (SELECT *
    FROM banks b
    WHERE b.bank_budget > 82000000000)
    ORDER BY b.bank_budget DESC
    OFFSET 1; 