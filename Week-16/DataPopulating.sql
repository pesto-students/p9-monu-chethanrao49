-- Insert into CITIES
INSERT INTO CITIES (CITY, STATE) VALUES 
('Pune', 'Maharashtra'),
('Mumbai', 'Maharashtra'),
('Bangalore', 'Karnataka');

-- Insert into WAREHOUSES
INSERT INTO WAREHOUSES (WID, WNAME, LOCATION, CITY, EXTRA_CONTEXT) VALUES 
(1, 'Warehouse1', 'Kothrud', 'Pune', '{}'),
(2, 'Warehouse2', 'Bandra', 'Mumbai', '{}'),
(3, 'Warehouse3', 'Indiranagar', 'Bangalore', '{}');

-- Insert into STORES
INSERT INTO STORES (SID, STORE_NAME, LOCATION_CITY, WID) VALUES 
(1, 'Store1', 'Aundh', 1),
(2, 'Store2', 'Koregaon Park', 1),
(3, 'Store3', 'Juhu', 2),
(4, 'Store4', 'Colaba', 2),
(5, 'Store5', 'Koramangala', 3),
(6, 'Store6', 'Whitefield', 3);

-- Insert into CUSTOMER
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY) VALUES 
(1, 'Mr. Patil', 'Baner Road, Pune', 'Pune'),
(2, 'Ms. Sharma', 'Linking Road, Mumbai', 'Mumbai'),
(3, 'Mr. Reddy', 'MG Road, Bangalore', 'Bangalore');

-- Insert into ORDERS
INSERT INTO ORDERS (ONO, ODATE, CNO) VALUES 
(1, '2023-05-30', 1),
(2, '2023-05-30', 2),
(3, '2023-05-30', 3);

-- Insert into ITEMS
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST) VALUES 
(1, 'Item1', 10.00, 100.00),
(2, 'Item2', 20.00, 200.00),
(3, 'Item3', 30.00, 300.00),
(4, 'Item4', 40.00, 400.00),
(5, 'Item5', 50.00, 500.00);

-- Insert into ORDERS_ITEMS
INSERT INTO ORDERS_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY) VALUES 
(1, 1, 2),
(1, 2, 1),
(2, 3, 1),
(2, 4, 3),
(3, 5, 2),
(3, 1, 1);

-- Insert into STORES_ITEMS
INSERT INTO STORES_ITEMS (SID, ITEMNO, QUANTITY) VALUES 
(1, 1, 100),
(1, 2, 200),
(2, 3, 300),
(2, 4, 400),
(3, 5, 500),
(3, 1, 600),
(4, 2, 700),
(4, 3, 800),
(5, 4, 900),
(5, 5, 1000),
(6, 1, 1100),
(6, 2, 1200);