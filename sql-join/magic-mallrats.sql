select"firstName", "lastName"
-- select "customers"."customerId" as "customerid", "rentalId", "firstName", "lastName", "inventoryId", "filmId", "title"
from "payments"
join "customers" using ("customerId")
join "rentals" using ("rentalId")
join "inventory" using ("inventoryId")
-- join "films" using ("filmId")
where "filmId" = '547'
limit 10
