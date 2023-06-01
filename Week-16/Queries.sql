-- Find the item that has minimum weight:
SELECT ITEMNO, DESCRIPTION, WEIGHT, COST
FROM ITEMS
WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);


-- Find the different warehouses in “Pune”:
SELECT WID, WNAME, LOCATION, CITY, EXTRA_CONTEXT
FROM WAREHOUSES
WHERE CITY = 'Pune';



-- Find the details of items ordered by a customer “Mr. Patil”:
SELECT ITEMS.ITEMNO, ITEMS.DESCRIPTION, ITEMS.WEIGHT, ITEMS.COST
FROM ITEMS
JOIN ORDERS_ITEMS ON ITEMS.ITEMNO = ORDERS_ITEMS.ITEMNO
JOIN ORDERS ON ORDERS_ITEMS.ONO = ORDERS.ONO
JOIN CUSTOMER ON ORDERS.CNO = CUSTOMER.CNO
WHERE CUSTOMER.CNAME = 'Mr. Patil';



-- Find a Warehouse which has maximum stores:
SELECT WID
FROM STORES
GROUP BY WID
ORDER BY COUNT(SID) DESC
LIMIT 1;



-- Find an item which is ordered for a minimum number of times:
SELECT ITEMNO
FROM ORDERS_ITEMS
GROUP BY ITEMNO
ORDER BY SUM(ORDERED_QUANTITY) ASC
LIMIT 1;


-- Find the detailed orders given by each customer:
SELECT CUSTOMER.CNAME, ORDERS.ONO, ORDERS.ODATE, ITEMS.ITEMNO, ORDERS_ITEMS.ORDERED_QUANTITY
FROM CUSTOMER
JOIN ORDERS ON CUSTOMER.CNO = ORDERS.CNO
JOIN ORDERS_ITEMS ON ORDERS.ONO = ORDERS_ITEMS.ONO
JOIN ITEMS ON ORDERS_ITEMS.ITEMNO = ITEMS.ITEMNO
ORDER BY CUSTOMER.CNAME, ORDERS.ONO;
